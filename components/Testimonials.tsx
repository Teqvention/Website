import { Star } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";

export function Testimonials() {
    const t = useTranslations('Testimonials');

    const testimonials = [
        {
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
            index: 0
        },
        {
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
            index: 1
        },
        {
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100",
            index: 2
        },
        {
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
            index: 3
        },
    ];

    const testimonials2 = [
        {
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100",
            index: 4
        },
        {
            avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&h=100",
            index: 5
        },
        {
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
            index: 6
        },
        {
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
            index: 7
        },
    ];

    return (
        <section className="text-left w-full mt-24 mb-16" id="testimonials">
            <Container>
                <SectionHeader
                    badge={t('badge')}
                    title={t('title')}
                    description={t('description')}
                    className="mb-16"
                />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/50">
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Row 1 Left to Right */}
                    <div className="relative py-8">
                        <div className="flex gap-6 animate-marquee-ltr w-max">
                            {[...testimonials, ...testimonials].map((testimonial, i) => {
                                const index = testimonial.index;
                                return (
                                    <article
                                        key={i}
                                        className="w-[320px] sm:w-[400px] shrink-0 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt="Avatar"
                                                    width={40}
                                                    height={40}
                                                    className="h-10 w-10 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-900">
                                                        {t(`items.${index}.title`)}
                                                    </p>
                                                    <p className="text-xs text-slate-500">
                                                        {t(`items.${index}.role`)}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                                            {t(`items.${index}.quote`)}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    <div className="border-t border-slate-100"></div>

                    {/* Row 2 Right to Left */}
                    <div className="relative py-8">
                        <div className="flex gap-6 animate-marquee-rtl w-max">
                            {[...testimonials2, ...testimonials2].map((testimonial, i) => {
                                const index = testimonial.index;
                                return (
                                    <article
                                        key={i}
                                        className="w-[320px] sm:w-[400px] shrink-0 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt="Avatar"
                                                    width={40}
                                                    height={40}
                                                    className="h-10 w-10 rounded-full object-cover"
                                                />
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-900">
                                                        {t(`items.${index}.title`)}
                                                    </p>
                                                    <p className="text-xs text-slate-500">
                                                        {t(`items.${index}.role`)}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                                            {t(`items.${index}.quote`)}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
