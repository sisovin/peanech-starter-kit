"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "kh";

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.dashboard": "Dashboard",
        "nav.language": "Language",
        "nav.theme": "Theme",

        // Home page
        "home.title": "Welcome to Copa Starter Kit",
        "home.subtitle": "A fully-featured authentication system using Clerk with Next.js 15. Sign in to access your personalized dashboard.",
        "home.getStarted": "Get Started",
        "home.learnMore": "Learn More",

        // Features
        "feature.auth.title": "Authentication",
        "feature.auth.description": "Complete authentication system with social logins, email verification, and more.",
        "feature.routes.title": "Protected Routes",
        "feature.routes.description": "Middleware-based route protection and redirection for unauthenticated users.",
        "feature.profiles.title": "User Profiles",
        "feature.profiles.description": "Customizable user profiles with avatar uploads and account management.",

        // Theme
        "theme.light": "Light",
        "theme.dark": "Dark",
        "theme.system": "System",

        // Languages
        "language.english": "English",
        "language.khmer": "ភាសាខ្មែរ",
    },
    kh: {
        // Navigation
        "nav.home": "ទំព័រដើម",
        "nav.dashboard": "ផ្ទាំងគ្រប់គ្រង",
        "nav.language": "ភាសា",
        "nav.theme": "ធីម",

        // Home page
        "home.title": "សូមស្វាគមន៍មកកាន់ Copa Starter Kit",
        "home.subtitle": "ប្រព័ន្ធផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវពេញលេញដោយប្រើ Clerk ជាមួយ Next.js 15។ ចូលដើម្បីចូលប្រើផ្ទាំងគ្រប់គ្រងផ្ទាល់ខ្លួនរបស់អ្នក។",
        "home.getStarted": "ចាប់ផ្តើម",
        "home.learnMore": "ស្វែងយល់បន្ថែម",

        // Features
        "feature.auth.title": "ការផ្ទៀងផ្ទាត់",
        "feature.auth.description": "ប្រព័ន្ធផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវពេញលេញជាមួយការចូលសង្គម ការផ្ទៀងផ្ទាត់អ៊ីមែល និងច្រើនទៀត។",
        "feature.routes.title": "ផ្លូវការពារ",
        "feature.routes.description": "ការពារផ្លូវដោយផ្អែកលើ middleware និងការបញ្ជូនបន្តសម្រាប់អ្នកប្រើមិនបានផ្ទៀងផ្ទាត់។",
        "feature.profiles.title": "ប្រវត្តិរូបអ្នកប្រើ",
        "feature.profiles.description": "ប្រវត្តិរូបអ្នកប្រើដែលអាចកែប្រែបានជាមួយការផ្ទុករូបតំណាង និងការគ្រប់គ្រងគណនី។",

        // Theme
        "theme.light": "ភ្លឺ",
        "theme.dark": "ងងឹត",
        "theme.system": "ប្រព័ន្ធ",

        // Languages
        "language.english": "English",
        "language.khmer": "ភាសាខ្មែរ",
    },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    // Load language from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem("copa-language") as Language;
        if (savedLanguage && (savedLanguage === "en" || savedLanguage === "kh")) {
            setLanguageState(savedLanguage);
        }
    }, []);

    // Save language to localStorage when it changes
    const setLanguage = (newLanguage: Language) => {
        setLanguageState(newLanguage);
        localStorage.setItem("copa-language", newLanguage);
    };

    // Translation function
    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations.en] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
