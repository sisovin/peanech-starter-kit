"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/language-provider";

interface NavLinksProps {
    isAuthenticated: boolean;
}

export function NavLinks({ isAuthenticated }: NavLinksProps) {
    const { t } = useLanguage();

    return (
        <>
            <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
                {t("nav.home")}
            </Link>

            {isAuthenticated && (
                <Link
                    href="/dashboard"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                    {t("nav.dashboard")}
                </Link>
            )}
        </>
    );
}
