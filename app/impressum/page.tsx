import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImpressumPage() {
    return (
        <main className="py-24">
            <Container>
                <div className="max-w-2xl mx-auto space-y-8 text-slate-600">
                    <Button asChild variant="ghost" className="pl-0 hover:bg-transparent hover:text-blue-600">
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Zurück zur Startseite
                        </Link>
                    </Button>

                    <h1 className="text-3xl font-bold text-slate-900">Impressum</h1>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-slate-900">Angaben gemäß § 5 TMG</h2>
                        <p>
                            Teqvention<br />
                            Gesellschaft bürgerlichen Rechts (GbR)
                        </p>
                        <p>
                            <strong>Vertreten durch die Gesellschafter:</strong><br />
                            Robin Sieger<br />
                            Jerome Bastien
                        </p>
                        <p>
                            <strong>Anschrift:</strong><br />
                            Bergerstraße 34<br />
                            60316 Frankfurt am Main<br />
                            Deutschland
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-slate-900">Kontakt</h2>
                        <p>
                            Telefon: +49 1525 8440122<br />
                            E-Mail: kontakt@teqvention.de
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-slate-900">Umsatzsteuer</h2>
                        <p>
                            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-slate-900">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                        <p>
                            Robin Sieger<br />
                            Bergerstraße 34<br />
                            60316 Frankfurt am Main<br />
                            Deutschland
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold text-slate-900">Plattform der EU-Kommission zur Online-Streitbeilegung</h2>
                        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            https://ec.europa.eu/consumers/odr
                        </a>
                    </section>
                </div>
            </Container>
        </main>
    );
}
