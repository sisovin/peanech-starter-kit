"use client";

import { useEffect } from 'react';

/**
 * Component to handle hydration errors and prevent them from crashing the app.
 * This component catches hydration errors and logs them without breaking the UI.
 */
export function HydrationErrorHandler() {
    useEffect(() => {
        // Handle uncaught errors that might be hydration-related
        const handleError = (event: ErrorEvent) => {
            const error = event.error;

            // Check if this is a hydration error
            if (error?.message?.includes('Hydration failed') ||
                error?.message?.includes("server rendered HTML didn't match")) {
                console.warn('Hydration error caught and handled:', error);

                // Prevent the error from bubbling up and crashing the app
                event.preventDefault();

                // Optional: Report to error tracking service
                // reportHydrationError(error);

                return false;
            }
        };

        // Handle unhandled promise rejections that might be hydration-related
        const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
            const reason = event.reason;

            if (reason?.message?.includes('Hydration failed') ||
                reason?.message?.includes("server rendered HTML didn't match")) {
                console.warn('Hydration promise rejection caught and handled:', reason);

                // Prevent the error from bubbling up
                event.preventDefault();

                return false;
            }
        };

        // Add event listeners
        window.addEventListener('error', handleError);
        window.addEventListener('unhandledrejection', handleUnhandledRejection);

        // Cleanup
        return () => {
            window.removeEventListener('error', handleError);
            window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        };
    }, []);

    return null;
}
