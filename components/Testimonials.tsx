import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";

const testimonials = [
    {
        name: "Sarah Jenkins",
        handle: "@sarah_tech",
        avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
        quote:
            "\"Teqvention's AI agents completely transformed our support workflow. Response times dropped by 80% overnight.\"",
    },
    {
        name: "Mark Thompson",
        handle: "@mark_saas",
        avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
        quote:
            "\"The best investment we made this year. The automated outreach campaigns are incredibly personalized and effective.\"",
    },
    {
        name: "Emily Chen",
        handle: "@emily_c",
        avatar:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100",
        quote:
            "\"Incredible DX. Setting up the voice agents took minutes, and the quality is indistinguishable from human support.\"",
    },
    {
        name: "David Ross",
        handle: "@david_r",
        avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100",
        quote:
            "\"Seamless integration with our existing stack. It just works, and the ROI was visible within the first week.\"",
    },
];

const testimonials2 = [
    {
        name: "Lisa Wong",
        handle: "@lisawong",
        avatar:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100",
        quote:
            "\"The content planning feature alone saved us 20 hours a week. It's like having a full-time strategist on the team.\"",
    },
    {
        name: "James Wilson",
        handle: "@jwilson",
        avatar:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&h=100",
        quote:
            "\"Robust, scalable, and secure. We audited the workflows and they are cleaner than what we wrote manually.\"",
    },
    {
        name: "Anna K.",
        handle: "@annak_dev",
        avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
        quote:
            "\"Finally, an AI tool that doesn't feel like a gimmick. It solves real operational bottlenecks for us.\"",
    },
    {
        name: "Tom H.",
        handle: "@tom_h",
        avatar:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
        quote:
            "\"The visibility dashboard is a game changer. We know exactly where we stand and how to improve.\"",
    },
];

export function Testimonials() {
    return (
        <section className="text-left w-full mt-24 mb-16" id="testimonials">
            <Container>
                <SectionHeader
                    badge="Bewertungen"
                    title="Stimmen unserer Kunden"
                    description="Our proven methodology to transform your business with AI."
                    className="mb-16"
                />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-sm ring-1 ring-slate-200/50">
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Row 1 Left to Right */}
                    <div className="relative py-8">
                        <div className="flex gap-6 animate-marquee-ltr w-max">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <article
                                    key={index}
                                    className="w-[320px] sm:w-[400px] shrink-0 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={testimonial.avatar}
                                                alt="Avatar"
                                                className="h-10 w-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-xs text-slate-500">
                                                    {testimonial.handle}
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
                                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                        {testimonial.quote}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-slate-100"></div>

                    {/* Row 2 Right to Left */}
                    <div className="relative py-8">
                        <div className="flex gap-6 animate-marquee-rtl w-max">
                            {[...testimonials2, ...testimonials2].map((testimonial, index) => (
                                <article
                                    key={index}
                                    className="w-[320px] sm:w-[400px] shrink-0 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={testimonial.avatar}
                                                alt="Avatar"
                                                className="h-10 w-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-xs text-slate-500">
                                                    {testimonial.handle}
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
                                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                        {testimonial.quote}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
