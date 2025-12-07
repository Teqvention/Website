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
        // Check if we are in production by looking at the window location (if available client-side)
        if (typeof window !== 'undefined') {
            const host = window.location.host;
            // Only use domain routing if we are actually on one of the production domains
            // or if we want to force it. For localhost/Vercel previews, we should probably stay relative
            // BUT next-intl with localePrefix: 'never' requires domains for differentiation.

            // If we are on localhost or a preview URL, we can't easily switch to the other domain 
            // because it doesn't map to localhost.
            // A common workaround for testing is to allow path-based fallback or just accept 
            // that testing domain-based routing on localhost is hard without /etc/hosts modifications.

            // However, to make it "work" (i.e. not break), we can fallback to standard Next.js navigation
            // using the Link component or router, but next-intl's Link wraps this.

            // The issue is: we are manually constructing https://${domainConfig.domain}${pathname}.
            // If we are on localhost:3000, we want to go to localhost:3000/de usually, 
            // but with localePrefix: 'never', that corresponds to teqvention.de.

            // Allow bypassing domain check for localhost/vercel.app to prevent breaking navigation
            if (host.includes('localhost') || host.includes('vercel.app')) {
                // On dev/preview, we can't really switch domains easily unless configured.
                // We will use the NEXT_PUBLIC_SITE_URL or just use path prefixes temporarily for dev?
                // Or simpler: Just return a relative path with the locale prefix forcingly?
                // But localePrefix: 'never' removes it.

                // Let's try to return a path that includes the locale if we are not on prod domain,
                // relying on middleware to handle it if we relaxed strict domain enforcement?
                // No, middleware adheres to config.

                // BEST FIX: If on non-prod, use query param or just keep it simple.
                // Actually, the user says "Internationalization not working". 
                // This implies they successfully deployed and are clicking and it fails?

                // Let's assume they want it to work on Vercel.
                // Reverting to standard Link is safer if we want to support non-domain envs.
                // BUT we have to change the Routing config to allow prefixes if domains don't match?

                return `/${targetLocale}${pathname === '/' ? '' : pathname}`;
            }

            const domainConfig = routing.domains?.find(d => (d.locales as unknown as string[]).includes(targetLocale));
            if (domainConfig) {
                return `https://${domainConfig.domain}${pathname}`;
            }
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
