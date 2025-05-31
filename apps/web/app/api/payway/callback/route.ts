import { NextRequest } from "next/server";
import { z } from "zod";
import { Redis } from "@upstash/redis";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

// Configure for Edge runtime
export const runtime = "edge";

// Configure Upstash Redis for rate limiting
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
});

// Webhook payload validation schema
const PayWayWebhookSchema = z.object({
  transactionId: z.string(),
  merchantId: z.string(),
  amount: z.number(),
  currency: z.string(),
  status: z.enum(["PENDING", "APPROVED", "FAILED", "REJECTED"]),
  approvalCode: z.string().optional(),
  paymentMethod: z.string().optional(),
  timeCreated: z.string(),
  timeCompleted: z.string().optional(),
  customFields: z.record(z.string()).optional(),
  signature: z.string(),
});

// TypeScript type for webhook payload
export type PayWayWebhookPayload = z.infer<typeof PayWayWebhookSchema>;

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 60; // 1 request per second on average

/**
 * Verify HMAC signature from PayWay
 */
function verifySignature(
  payload: any,
  signature: string,
  secret: string
): Promise<boolean> {
  // Remove signature from the payload for verification
  const { signature: _, ...dataToVerify } = payload;

  // Sort keys alphabetically for consistent hashing
  return (async () => {
    const orderedData = Object.keys(dataToVerify)
      .sort()
      .reduce((obj: any, key: string) => {
        obj[key] = dataToVerify[key];
        return obj;
      }, {});

    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const messageData = encoder.encode(JSON.stringify(orderedData));

    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    const signatureBuffer = await crypto.subtle.sign('HMAC', key, messageData);
    const expectedSignature = Array.from(new Uint8Array(signatureBuffer))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    return signature === expectedSignature;
  })();
}

/**
 * Handle rate limiting
 */
async function checkRateLimit(ip: string): Promise<boolean> {
  const key = `payway_webhook_ratelimit:${ip}`;

  try {
    // Use Redis to track request rates
    const requestCount = await redis.incr(key);

    // Set expiry on first request
    if (requestCount === 1) {
      await redis.expire(key, RATE_LIMIT_WINDOW);
    }

    return requestCount <= MAX_REQUESTS_PER_WINDOW;
  } catch (error) {
    // If Redis fails, default to allowing the request but log the error
    console.error("Rate limiting error:", error);
    return true;
  }
}

/**
 * POST handler for PayWay webhook
 */
export async function POST(request: NextRequest) {  // Extract IP from headers in Edge runtime
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0]?.trim() || "unknown" :
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown";

  // Check rate limit
  const isRateLimitOk = await checkRateLimit(ip);
  if (!isRateLimitOk) {
    return new Response(JSON.stringify({ error: "Too many requests" }), {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": RATE_LIMIT_WINDOW.toString(),
      },
    });
  }

  try {
    // Parse and validate the request body
    const rawBody = await request.json();
    const { signature, ...payload } = PayWayWebhookSchema.parse(rawBody);

    // Get the webhook secret
    const webhookSecret = process.env.PAYWAY_WEBHOOK_SECRET;
    if (!webhookSecret) {
      console.error("PayWay webhook secret is not configured");
      return new Response(
        JSON.stringify({
          error: "Server misconfiguration",
        }),
        { status: 500 }
      );
    }    // Verify the signature
    const isValidSignature = await verifySignature(rawBody, signature, webhookSecret);
    if (!isValidSignature) {
      console.error("Invalid PayWay webhook signature");
      return new Response(
        JSON.stringify({
          error: "Invalid signature",
        }),
        { status: 401 }
      );
    }

    // Initialize Convex client
    const convex = new ConvexHttpClient(
      process.env.NEXT_PUBLIC_CONVEX_URL || ""
    );    // Call Convex action to update payment status
    await convex.action(api.payments.handlePayWayWebhook, {
      payload,
      signature,
    });

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("PayWay webhook error:", error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          error: "Invalid webhook payload",
          details: error.errors,
        }),
        { status: 400 }
      );
    }

    // Handle other errors
    return new Response(
      JSON.stringify({
        error: "Server error",
      }),
      { status: 500 }
    );
  }
}
