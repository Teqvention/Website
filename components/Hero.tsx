import { Bot, Workflow, Zap, RefreshCw, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <main className="overflow-hidden lg:pt-24 pt-16 relative">
            <Container className="text-center">
                <section className="text-center w-full mt-8 md:mt-24 mb-16 flex flex-col items-center">
                    <div className="inline-flex gap-2 transition-transform hover:scale-105 cursor-default bg-white border-gray-200 border rounded-full mb-6 md:mb-8 pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-4 w-4 fill-amber-400 text-amber-400"
                                />
                            ))}
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                            {t('rating_text')}
                        </span>
                    </div>

                    {/* Main Headline with Floating Icons */}
                    <div className="relative mx-auto max-w-4xl">
                        {/* Floating Icon Left Top */}
                        <div className="absolute -left-4 top-0 hidden animate-bounce md:flex lg:-left-12 lg:top-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-lg shadow-gray-200/50">
                                <Bot className="h-6 w-6 text-slate-700" />
                            </div>
                        </div>

                        {/* Floating Icon Left Bottom */}
                        <div className="absolute -bottom-8 left-12 hidden md:flex lg:left-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 shadow-lg shadow-blue-500/10">
                                <Workflow className="h-5 w-5 text-blue-600" />
                            </div>
                        </div>

                        {/* Floating Icon Right Top */}
                        <div className="absolute -right-4 top-8 hidden md:flex lg:-right-12 lg:top-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-100 bg-gradient-to-br from-purple-50 to-white shadow-lg shadow-purple-500/10">
                                <Zap className="h-6 w-6 fill-purple-500 text-purple-500" />
                            </div>
                        </div>

                        {/* Floating Icon Right Bottom */}
                        <div className="absolute -bottom-4 right-12 hidden md:flex lg:right-0">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-100 bg-white shadow-lg shadow-gray-200/50">
                                <RefreshCw className="h-5 w-5 text-slate-500" />
                            </div>
                        </div>

                        <h1 className="md:text-7xl lg:text-7xl justify-center text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
                            {t('headline_start')}
                            <span className="block bg-clip-text text-transparent bg-blue-600">
                                {t('headline_end')}
                            </span>
                        </h1>
                    </div>

                    <p className="leading-relaxed md:text-xl text-lg text-slate-500 max-w-2xl mt-4 md:mt-8 mr-auto ml-auto">
                        {t('subheadline')}
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 text-base font-medium text-slate-700 mt-6 md:mt-8 gap-x-4 gap-y-4 items-center justify-center">
                        <div className="flex gap-x-2 gap-y-2 items-center">
                            {/* Server in Deutschland Flag */}
                            <img src="/svg/flag-de.svg" alt="Germany Flag" className="w-[20px] h-[20px]" />
                            <span>{t('badge_server')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* EU Flag */}
                            <img src="/svg/flag-eu.svg" alt="EU Flag" className="w-[20px] h-[20px]" />
                            <span>{t('badge_gdpr')}</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 md:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg" className="w-full sm:w-auto text-lg h-auto py-4 px-8">
                            <Link href="#" className="group">
                                {t('cta_button')}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    {/* Social Proof Logos */}
                    <div className="mt-20 w-full">
                        <p className="mb-8 text-center text-sm font-medium text-slate-400">
                            {t('trusted_by')}
                        </p>
                        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                            <div className="flex w-max animate-ticker items-center py-4 opacity-60 grayscale transition-all hover:grayscale-0">
                                <div className="flex items-center gap-20 pr-20">
                                    {/* Vercel */}
                                    <div className="flex items-center gap-2 font-bold text-slate-800 text-xl">
                                        <img src="/svg/vercel.svg" alt="Vercel" className="h-6 w-6" />
                                        Vercel
                                    </div>
                                    {/* Stripe */}
                                    <div className="flex items-center gap-2 font-semibold text-slate-800 text-xl tracking-tight">
                                        <div className="h-5 w-5 bg-current [mask-image:url(/svg/stripe.svg)] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]" />
                                        stripe
                                    </div>
                                    {/* Linear */}
                                    <div className="flex items-center gap-1 font-semibold text-slate-800 text-xl">
                                        <Workflow className="h-6 w-6" />
                                        Linear
                                    </div>
                                    {/* Acme */}
                                    <div className="flex items-center gap-1 font-bold text-slate-800 text-xl italic">
                                        Acme
                                        <span className="font-light">Corp</span>
                                    </div>
                                    {/* NordProtect */}
                                    <div className="flex items-center gap-1 font-bold text-slate-800 text-xl">
                                        <img src="/svg/nordprotect.svg" alt="NordProtect" className="h-5 w-5" />
                                        NordProtect
                                    </div>
                                </div>
                                {/* Duplicate for infinite scroll effect */}
                                <div className="flex items-center gap-20 pr-20">
                                    <div className="flex items-center gap-2 font-bold text-slate-800 text-xl">
                                        <img src="/svg/vercel.svg" alt="Vercel" className="h-6 w-6" />
                                        Vercel
                                    </div>
                                    <div className="flex items-center gap-2 font-semibold text-slate-800 text-xl tracking-tight">
                                        <div className="h-5 w-5 bg-current [mask-image:url(/svg/stripe.svg)] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]" />
                                        stripe
                                    </div>
                                    <div className="flex items-center gap-1 font-semibold text-slate-800 text-xl">
                                        <Workflow className="h-6 w-6" />
                                        Linear
                                    </div>
                                    <div className="flex items-center gap-1 font-bold text-slate-800 text-xl italic">
                                        Acme
                                        <span className="font-light">Corp</span>
                                    </div>
                                    <div className="flex items-center gap-1 font-bold text-slate-800 text-xl">
                                        <img src="/svg/nordprotect.svg" alt="NordProtect" className="h-5 w-5" />
                                        NordProtect
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
}
