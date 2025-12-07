import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Bot } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12">
            <Container>
                <div className="w-full">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        {/* Brand */}
                        <div className="lg:w-1/3 space-y-5">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                                    <Bot className="h-5 w-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold tracking-tight text-slate-900">
                                        Teqvention
                                    </span>
                                    <span className="text-sm text-slate-500">
                                        Prozessdigitalisierung
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 max-w-sm">
                                Wir unterstützen mittelständische Unternehmen bei der strukturierten Digitalisierung ihrer Prozesse – strategisch, technisch und nachhaltig.
                            </p>
                            <div className="flex items-center gap-3 text-slate-500">
                                {/* LinkedIn */}
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-slate-400 hover:text-slate-900 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <div className="w-3.5 h-3.5 bg-current [mask-image:url(/svg/linkedin.svg)] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]" />
                                </a>
                                {/* X (Twitter) */}
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-slate-400 hover:text-slate-900 transition-colors"
                                    aria-label="Twitter (X)"
                                >
                                    <div className="w-3.5 h-3.5 bg-current [mask-image:url(/svg/twitter.svg)] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]" />
                                </a>
                                {/* Youtube */}
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-slate-400 hover:text-slate-900 transition-colors"
                                    aria-label="YouTube"
                                >
                                    <div className="w-4 h-4 bg-current [mask-image:url(/svg/youtube.svg)] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]" />
                                </a>
                                {/* Instagram */}
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:border-slate-400 hover:text-slate-900 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <div className="w-3.5 h-3.5 bg-current [mask-image:url(/svg/instagram.svg)] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat]" />
                                </a>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                            <div className="space-y-3">
                                <h3 className="font-semibold text-slate-900">
                                    Product
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            Integrations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            Changelog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-semibold text-slate-900">
                                    Company
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            Careers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-semibold text-slate-900">
                                    Resources
                                </h3>
                                <ul className="space-y-2 text-slate-600">
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            Documentation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            Community
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="#"
                                            className="hover:text-slate-900 transition-colors"
                                        >
                                            Partners
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    {/* Bottom row */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-400 mt-8">
                        <p>© 2024 Teqvention AI Inc. All rights reserved.</p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/impressum"
                                className="hover:text-slate-700 transition-colors"
                            >
                                Impressum
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
