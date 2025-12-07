"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const FlagGB = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="20" height="10">
        <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
    </svg>
);

const FlagDE = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="20" height="12">
        <rect width="5" height="3" y="0" x="0" fill="#000" />
        <rect width="5" height="2" y="1" x="0" fill="#D00" />
        <rect width="5" height="1" y="2" x="0" fill="#FFCE00" />
    </svg>
);

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const t = useTranslations("LanguageSwitcher");

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const getAbsoluteUrl = (targetLocale: string) => {
        const domainConfig = routing.domains?.find(d => (d.locales as unknown as string[]).includes(targetLocale));
        if (domainConfig) {
            return `https://${domainConfig.domain}${pathname}`;
        }
        return pathname;
    };

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleDropdown}
                className="rounded-full w-9 h-9"
                aria-label={t("label")}
            >
                <Globe className="h-4 w-4 text-slate-500" />
                <span className="sr-only">{t("label")}</span>
            </Button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <a
                        href={getAbsoluteUrl('en')}
                        onClick={() => setIsOpen(false)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-3 transition-colors ${locale === 'en' ? 'bg-slate-50 font-medium' : 'text-slate-600'
                            }`}
                    >
                        <FlagGB />
                        English
                    </a>
                    <a
                        href={getAbsoluteUrl('de')}
                        onClick={() => setIsOpen(false)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-3 transition-colors ${locale === 'de' ? 'bg-slate-50 font-medium' : 'text-slate-600'
                            }`}
                    >
                        <FlagDE />
                        Deutsch
                    </a>
                </div>
            )}
        </div>
    );
}
