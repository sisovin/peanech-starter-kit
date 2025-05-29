"use client";

import React from 'react';

interface HydrationErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

interface HydrationErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export class HydrationErrorBoundary extends React.Component<
    HydrationErrorBoundaryProps,
    HydrationErrorBoundaryState
> {
    constructor(props: HydrationErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): HydrationErrorBoundaryState {
        // Check if this is a hydration error
        const isHydrationError =
            error.message.includes('Hydration failed') ||
            error.message.includes("server rendered HTML didn't match") ||
            error.message.includes('hydration') ||
            error.message.includes('Warning: Text content did not match') ||
            error.message.includes('Warning: Expected server HTML');

        if (isHydrationError) {
            console.warn('Hydration error caught by boundary:', error);
            return { hasError: true, error };
        }

        // Re-throw non-hydration errors
        throw error;
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.warn('Hydration error details:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // For hydration errors, we'll try to render the children anyway
            // since hydration errors often don't prevent the app from working
            return this.props.fallback || this.props.children;
        }

        return this.props.children;
    }
}
