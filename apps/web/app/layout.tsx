import { AuthAuditLogProvider } from "@/contexts/auth-audit-provider";
import { NextThemeWrapper, ThemeProvider } from "@/contexts/theme-provider";
import { LanguageProvider } from "@/contexts/language-provider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "@workspace/ui/globals.css";
import { ConvexClientProvider } from "./providers/convex-provider";
import { Toaster } from "@/components/ui/toaster";
import { ClientOnly } from "@/components/client-only";
import { BrowserExtensionHandler } from "@/components/browser-extension-handler";
import { HydrationErrorHandler } from "@/components/hydration-error-handler";
import { HydrationErrorBoundary } from "@/components/hydration-error-boundary";

export const metadata: Metadata = {
  title: "Peanech Starter Kit",
  description: "Next.js application with Clerk authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {/* All client providers go inside body, not around html/body */}
        <HydrationErrorBoundary>
          <ClerkProvider
            appearance={{
              variables: { colorPrimary: "hsl(210, 100%, 56%)" },
              elements: {
                formButtonPrimary: "bg-primary hover:bg-primary/90",
                card: "bg-background border border-border shadow-sm",
                socialButtonsIconButton:
                  "border-border bg-muted hover:bg-muted/80",
                formFieldInput: "bg-input border-input",
              },
            }}
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
            signInUrl="/sign-in"
            signUpUrl="/sign-up"
            afterSignInUrl="/dashboard"
            afterSignUpUrl="/dashboard"
          >            <NextThemeWrapper
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
              <ThemeProvider>
                <LanguageProvider>
                  <ConvexClientProvider>
                    <AuthAuditLogProvider>
                      {children}
                      <ClientOnly>
                        <Toaster />
                        <BrowserExtensionHandler />
                        <HydrationErrorHandler />
                      </ClientOnly>
                    </AuthAuditLogProvider>
                  </ConvexClientProvider>
                </LanguageProvider>
              </ThemeProvider>
            </NextThemeWrapper>
          </ClerkProvider>
        </HydrationErrorBoundary>
      </body>
    </html>
  );
}
