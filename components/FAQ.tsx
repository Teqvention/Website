import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export function FAQ() {
    const t = useTranslations('FAQ');
    const keys = ['item1', 'item2', 'item3', 'item4'] as const;

    return (
        <section className="w-full mt-32 mb-20 pr-6 pl-6">
            <div className="flex flex-col items-center text-center">
                <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4 pt-1.5 pr-4 pb-1.5 pl-4">
                    {t('badge')}
                </span>
                <h2 className="md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mt-2">
                    {t('title')}
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-500">
                    {t('description')}
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl space-y-4">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {keys.map((key) => (
                        <AccordionItem key={key} value={key} className="bg-white border text-left border-slate-200 rounded-2xl px-6 data-[state=open]:border-blue-200 hover:border-blue-200 transition-colors">
                            <AccordionTrigger className="text-base sm:text-lg font-semibold text-slate-900 hover:no-underline hover:text-slate-700">
                                {t(`items.${key}.question`)}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                {t(`items.${key}.answer`)}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
