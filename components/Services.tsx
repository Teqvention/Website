import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from "@/lib/data";
import { useTranslations } from "next-intl";

export function Services() {
    const t = useTranslations('Services');

    return (
        <section className="w-full mt-32" id="services">
            <Container>
                <SectionHeader
                    badge={t('badge')}
                    title={t('title')}
                    description={t('description')}
                />

                <div className="grid gap-8 md:grid-cols-2 text-left mt-16 pb-12">
                    {services.map((service) => (
                        <Card key={service.id} className={`group transition-all ${service.ringColor} hover:shadow-md ${service.shadowColor} sm:p-10 p-8`}>
                            <CardContent className="p-0">
                                <div className={`inline-flex shadow-blue-500/20 text-white ${service.bgColor} w-14 h-14 rounded-2xl mb-8 shadow-lg items-center justify-center`}>
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <CardTitle className="mb-3">
                                    {t(`items.${service.id}.title`)}
                                </CardTitle>
                                <CardDescription className="text-base leading-relaxed">
                                    {t(`items.${service.id}.description`)}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
