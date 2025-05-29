"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/contexts/language-provider";

export function NavSwitchers() {
    const { t } = useLanguage();

    return (
        <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
        </div>
    );
}
