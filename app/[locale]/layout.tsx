import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from "next/font/google";
import "../globals.css";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
    title: "Teqvention - AI Automation Agency",
    description: "Automate your business with AI.",
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    // Ensure that the incoming `locale` is valid
    // (already handled by middleware but good for type safety)
    const { locale } = await params;

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.className} antialiased bg-gray-50 text-slate-600 selection:bg-blue-100 selection:text-blue-700 bg-white`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
