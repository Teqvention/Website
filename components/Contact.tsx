"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { useTranslations } from "next-intl";

export function Contact() {
    const t = useTranslations('Contact');

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "theme": "light", "cssVarsPerTheme": { "light": { "cal-brand": "#155dfc" }, "dark": { "cal-brand": "#4F4CFF" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <section className="w-full mt-32 mb-20" id="contact">
            <Container>
                <SectionHeader
                    badge={t('badge')}
                    title={t('title')}
                    description={t('description')}
                    className="mb-16"
                />
                <Cal
                    namespace="15min"
                    calLink="teqvention/15min"
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    config={{ "layout": "month_view", "theme": "light" }}
                />
            </Container>
        </section>
    );
};
