import { FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export function Process() {
    return (
        <section className="w-full mt-32" id="process">
            <Container>
                <SectionHeader
                    badge="Prozess"
                    title="So einfach gehts!"
                    description="Our proven methodology to transform your business with AI."
                />

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Card 1 */}
                    <Card className="flex flex-col overflow-hidden rounded-[2.5rem] shadow-sm hover:ring-blue-300 hover:shadow-md transition-all">
                        {/* Visual Area */}
                        <div className="flex overflow-hidden bg-gradient-to-b from-slate-50 to-white w-full h-64 pt-8 pr-8 pb-0 pl-8 relative items-center justify-center">
                            <div className="absolute top-6 left-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm z-10">
                                STEP 1
                            </div>
                            {/* Mockup */}
                            <div className="relative w-full h-full mt-8 rounded-t-xl bg-white border border-slate-200 shadow-lg p-4 flex flex-col gap-3 translate-y-2">
                                <div className="flex gap-2 mb-2 gap-x-2 gap-y-2 items-center">
                                    <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                                        <FileText className="h-4 w-4" />
                                    </div>
                                    <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-slate-50 rounded-full"></div>
                                    <div className="h-2 w-5/6 bg-slate-50 rounded-full"></div>
                                    <div className="h-2 w-4/6 bg-slate-50 rounded-full"></div>
                                </div>
                                <div className="mt-auto flex gap-2">
                                    <div className="h-8 w-24 bg-blue-600 rounded-lg shadow-sm"></div>
                                    <div className="h-8 w-24 bg-slate-100 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                        <CardContent className="pt-8">
                            <CardTitle className="mb-3">Analyse</CardTitle>
                            <CardDescription>
                                We analyze your existing workflows to identify high-impact
                                automation opportunities.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="flex flex-col overflow-hidden rounded-[2.5rem] shadow-sm hover:ring-blue-300 hover:shadow-md transition-all">
                        {/* Visual Area */}
                        <div className="relative flex h-64 w-full items-center justify-center bg-gradient-to-b from-slate-50 to-white px-8 pt-8 pb-0 overflow-hidden">
                            <div className="absolute top-6 left-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm z-10">
                                STEP 2
                            </div>
                            {/* Mockup: Grid of small items */}
                            <div className="grid grid-cols-2 gap-4 w-full h-full mt-8 translate-y-2">
                                <div className="bg-white border border-slate-200 shadow-md rounded-xl p-3 flex flex-col gap-2">
                                    <div className="flex justify-between">
                                        <div className="h-2 w-8 bg-slate-200 rounded-full"></div>
                                        <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full"></div>
                                    <div className="h-1.5 w-2/3 bg-slate-100 rounded-full"></div>
                                </div>
                                <div className="bg-white border border-slate-200 shadow-md rounded-xl p-3 flex flex-col gap-2">
                                    <div className="flex justify-between">
                                        <div className="h-2 w-8 bg-slate-200 rounded-full"></div>
                                        <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full"></div>
                                    <div className="h-1.5 w-2/3 bg-slate-100 rounded-full"></div>
                                </div>
                                <div className="bg-white border border-slate-200 shadow-md rounded-xl p-3 flex flex-col gap-2 opacity-80">
                                    <div className="flex justify-between">
                                        <div className="h-2 w-8 bg-slate-200 rounded-full"></div>
                                        <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full"></div>
                                </div>
                                <div className="bg-white border border-slate-200 shadow-md rounded-xl p-3 flex flex-col gap-2 opacity-80">
                                    <div className="flex justify-between">
                                        <div className="h-2 w-8 bg-slate-200 rounded-full"></div>
                                        <div className="h-2 w-2 bg-orange-400 rounded-full"></div>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-100 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <CardContent className="pt-8">
                            <CardTitle className="mb-3">Umsetzung</CardTitle>
                            <CardDescription>
                                Development and deployment of custom AI agents tailored to your
                                specific infrastructure.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card className="flex flex-col overflow-hidden rounded-[2.5rem] shadow-sm hover:ring-blue-300 hover:shadow-md transition-all">
                        {/* Visual Area */}
                        <div className="relative flex h-64 w-full items-center justify-center bg-gradient-to-b from-slate-50 to-white px-8 pt-8 pb-0 overflow-hidden">
                            <div className="absolute top-6 left-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm z-10">
                                STEP 3
                            </div>
                            {/* Mockup: Dashboard */}
                            <div className="relative w-full h-full mt-8 rounded-t-xl bg-white border border-slate-200 shadow-lg p-4 flex flex-col gap-3 translate-y-2">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="h-3 w-20 bg-slate-200 rounded-full"></div>
                                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 h-full">
                                    <div className="bg-slate-50 rounded-lg border border-slate-100 p-2">
                                        <div className="h-1.5 w-8 bg-slate-200 mb-2 rounded-full"></div>
                                        <div className="h-8 w-full bg-blue-500/10 rounded flex items-end pb-1 px-1 gap-1">
                                            <div className="w-1/4 h-1/2 bg-blue-400 rounded-sm"></div>
                                            <div className="w-1/4 h-3/4 bg-blue-400 rounded-sm"></div>
                                            <div className="w-1/4 h-2/3 bg-blue-400 rounded-sm"></div>
                                            <div className="w-1/4 h-full bg-blue-400 rounded-sm"></div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg border border-slate-100 p-2">
                                        <div className="h-1.5 w-8 bg-slate-200 mb-2 rounded-full"></div>
                                        <div className="flex items-center justify-center h-8">
                                            <div className="h-6 w-6 rounded-full border-2 border-green-500 border-t-transparent animate-spin"></div>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 rounded-lg border border-slate-100 col-span-2 p-2 flex items-center gap-2">
                                        <div className="h-6 w-6 rounded bg-slate-200"></div>
                                        <div className="flex-1 space-y-1">
                                            <div className="h-1.5 w-full bg-slate-200 rounded-full"></div>
                                            <div className="h-1.5 w-1/2 bg-slate-200 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CardContent className="pt-8">
                            <CardTitle className="mb-3">Optimierung</CardTitle>
                            <CardDescription>
                                Continuous monitoring and refinement of your AI systems to ensure
                                99.9% reliability.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </section>
    );
}
