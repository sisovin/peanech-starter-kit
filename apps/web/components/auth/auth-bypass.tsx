"use client";

import React from 'react';

/**
 * This component acts as a wrapper for Clerk authentication, 
 * allowing us to bypass authentication during development if needed.
 */
export function AuthBypass({ children }: { children: React.ReactNode }) {
    // Check if we should skip auth (used during development/build)
    const skipAuth = typeof window !== 'undefined' &&
        process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true';

    // Always render children, but in a production environment,
    // they will be wrapped by Clerk auth
    return <>{children}</>;
}
