import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
    return (
        <section className="w-full mt-32 mb-20 pr-6 pl-6">
            <div className="flex flex-col items-center text-center">
                <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4 pt-1.5 pr-4 pb-1.5 pl-4">
                    FAQ
                </span>
                <h2 className="md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mt-2">
                    Haben Sie noch Fragen?
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-500">
                    Everything you need to know about our AI automation services.
                </p>
            </div>

            <div className="mx-auto mt-16 max-w-3xl space-y-4">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="bg-white border text-left border-slate-200 rounded-2xl px-6 data-[state=open]:border-blue-200 hover:border-blue-200 transition-colors">
                        <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:no-underline hover:text-slate-700">
                            How quickly can we get started?
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-slate-600 leading-relaxed">
                            We typically launch your first AI agent within 48-72 hours after the
                            initial onboarding call. Our team handles the entire setup,
                            training, and integration process so you can focus on results.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="bg-white border text-left border-slate-200 rounded-2xl px-6 data-[state=open]:border-blue-200 hover:border-blue-200 transition-colors">
                        <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:no-underline hover:text-slate-700">
                            Do you offer custom integrations?
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-slate-600 leading-relaxed">
                            Yes, Teqvention integrates with most major CRM, ERP, and support
                            platforms including Salesforce, HubSpot, Zendesk, and custom APIs.
                            We ensure seamless data flow across your stack.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="bg-white border text-left border-slate-200 rounded-2xl px-6 data-[state=open]:border-blue-200 hover:border-blue-200 transition-colors">
                        <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:no-underline hover:text-slate-700">
                            Is my data secure?
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-slate-600 leading-relaxed">
                            Absolutely. We are SOC2 compliant and use enterprise-grade
                            encryption for all data processing. Your customer data is isolated
                            and never used to train public models without your permission.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="bg-white border text-left border-slate-200 rounded-2xl px-6 data-[state=open]:border-blue-200 hover:border-blue-200 transition-colors">
                        <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:no-underline hover:text-slate-700">
                            Do you provide ongoing maintenance?
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-slate-600 leading-relaxed">
                            Yes, all our plans include ongoing maintenance, monitoring, and
                            regular updates. We continuously refine the AI models based on
                            performance data to ensure optimal results.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
