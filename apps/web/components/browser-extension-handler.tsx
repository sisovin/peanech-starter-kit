"use client";

import { useEffect } from 'react';

/**
 * Component to handle browser extension interference with hydration.
 * Some browser extensions (like Grammarly) add attributes to the DOM
 * after React hydration, which can cause hydration mismatches.
 */
export function BrowserExtensionHandler() {
    useEffect(() => {
        // Clean up any attributes that browser extensions might have added
        // that could cause hydration mismatches
        const cleanupAttributes = () => {
            const body = document.body;
            const attributesToRemove = [
                'data-new-gr-c-s-check-loaded',
                'data-gr-ext-installed',
                'data-new-gr-c-s-loaded',
                'spellcheck'
            ];

            attributesToRemove.forEach(attr => {
                if (body.hasAttribute(attr)) {
                    body.removeAttribute(attr);
                }
            });
        };

        // Run cleanup after initial render
        cleanupAttributes();

        // Set up a mutation observer to clean up any new attributes
        // that might be added by browser extensions
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.target === document.body) {
                    cleanupAttributes();
                }
            });
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['data-new-gr-c-s-check-loaded', 'data-gr-ext-installed', 'data-new-gr-c-s-loaded']
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return null; // This component doesn't render anything
}
