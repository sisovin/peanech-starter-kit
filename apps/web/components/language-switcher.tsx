"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/language-provider";
import { Languages } from "lucide-react";

interface LanguageSwitcherProps {
    className?: string;
}

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
    const { language, setLanguage, t } = useLanguage();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className={`relative h-9 w-9 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
                    aria-label={`${t("nav.language")}, current: ${language === "en" ? "English" : "ភាសាខ្មែរ"}`}
                >
                    <Languages className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Switch language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" aria-label="Language options">
                <DropdownMenuItem
                    onClick={() => setLanguage("en")}
                    aria-current={language === "en" ? "true" : "false"}
                    className="flex items-center"
                >
                    <span className="mr-2 text-lg">🇺🇸</span>
                    <span>{t("language.english")}</span>
                    {language === "en" && <span className="ml-auto">✓</span>}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setLanguage("kh")}
                    aria-current={language === "kh" ? "true" : "false"}
                    className="flex items-center"
                >
                    <span className="mr-2 text-lg">🇰🇭</span>
                    <span>{t("language.khmer")}</span>
                    {language === "kh" && <span className="ml-auto">✓</span>}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
