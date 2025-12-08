import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'de'],

    // Used when no locale matches
    defaultLocale: 'en',

    // Domain-based routing configuration
    domains: [
        {
            domain: 'teqvention.com',
            defaultLocale: 'en',
            locales: ['en']
        },
        {
            domain: 'teqvention.de',
            defaultLocale: 'de',
            locales: ['de']
        },
        {
            domain: 'www.teqvention.com',
            defaultLocale: 'en',
            locales: ['en']
        },
        {
            domain: 'www.teqvention.de',
            defaultLocale: 'de',
            locales: ['de']
        }
    ],

    localePrefix: 'never'
});

export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing);
