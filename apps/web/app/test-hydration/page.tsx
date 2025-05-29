"use client";

import { useState, useEffect } from 'react';
import { ClientOnly } from '@/components/client-only';

export default function HydrationTestPage() {
    const [mounted, setMounted] = useState(false);
    const [randomValue, setRandomValue] = useState(0);

    useEffect(() => {
        setMounted(true);
        setRandomValue(Math.random());
    }, []);

    return (
        <div className="container mx-auto p-6 space-y-6">
            <h1 className="text-3xl font-bold">Hydration Test Page</h1>

            <div className="space-y-4">
                <div className="p-4 border rounded">
                    <h2 className="text-xl font-semibold mb-2">Test 1: Basic Hydration</h2>
                    <p>This should render consistently: {mounted ? 'Client' : 'Server'}</p>
                </div>

                <div className="p-4 border rounded">
                    <h2 className="text-xl font-semibold mb-2">Test 2: Random Values (Potential Issue)</h2>
                    <ClientOnly fallback={<p>Loading random value...</p>}>
                        <p>Random value (client-only): {randomValue}</p>
                    </ClientOnly>
                </div>

                <div className="p-4 border rounded">
                    <h2 className="text-xl font-semibold mb-2">Test 3: Date/Time (Potential Issue)</h2>
                    <ClientOnly fallback={<p>Loading timestamp...</p>}>
                        <p>Current time (client-only): {new Date().toISOString()}</p>
                    </ClientOnly>
                </div>

                <div className="p-4 border rounded">
                    <h2 className="text-xl font-semibold mb-2">Test 4: LocalStorage Access</h2>
                    <ClientOnly fallback={<p>Loading storage info...</p>}>
                        <LocalStorageTest />
                    </ClientOnly>
                </div>

                <div className="p-4 border rounded">
                    <h2 className="text-xl font-semibold mb-2">Test 5: Browser Extension Detection</h2>
                    <ClientOnly fallback={<p>Loading extension info...</p>}>
                        <ExtensionTest />
                    </ClientOnly>
                </div>
            </div>
        </div>
    );
}

function LocalStorageTest() {
    const [storageValue, setStorageValue] = useState('');

    useEffect(() => {
        const value = localStorage.getItem('hydration-test') || 'No value';
        setStorageValue(value);
    }, []);

    return (
        <div>
            <p>LocalStorage value: {storageValue}</p>
            <button
                onClick={() => {
                    const newValue = `Test-${Date.now()}`;
                    localStorage.setItem('hydration-test', newValue);
                    setStorageValue(newValue);
                }}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Update Value
            </button>
        </div>
    );
}

function ExtensionTest() {
    const [hasGrammarly, setHasGrammarly] = useState(false);
    const [bodyAttributes, setBodyAttributes] = useState<string[]>([]);

    useEffect(() => {
        // Check for Grammarly
        const hasGrammarlyAttr = document.body.hasAttribute('data-gr-ext-installed');
        setHasGrammarly(hasGrammarlyAttr);

        // Get all body attributes
        const attrs = Array.from(document.body.attributes).map(attr =>
            `${attr.name}="${attr.value}"`
        );
        setBodyAttributes(attrs);
    }, []);

    return (
        <div className="space-y-2">
            <p>Grammarly detected: {hasGrammarly ? 'Yes' : 'No'}</p>
            <details>
                <summary className="cursor-pointer text-sm text-gray-600">
                    Body attributes ({bodyAttributes.length})
                </summary>
                <ul className="mt-2 text-sm font-mono">
                    {bodyAttributes.map((attr, index) => (
                        <li key={index} className="text-xs">{attr}</li>
                    ))}
                </ul>
            </details>
        </div>
    );
}
