import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
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
        }
    ],
    localePrefix: 'never'
});

export const config = {
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
