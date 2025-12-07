"use client";

import Link from "next/link";
import { Bot, ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useState } from "react";
import { services } from "@/lib/data";
import { animate } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export function Navbar() {
    const t = useTranslations('Navbar');
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: t('process'), href: "#process" },
        { name: t('testimonials'), href: "#testimonials" },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100; // Offset for sticky header
            animate(window.scrollY, y, {
                type: "spring",
                stiffness: 50,
                damping: 15,
                mass: 1,
                onUpdate: (latest) => window.scrollTo(0, latest)
            });
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/80 backdrop-blur-md">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="flex shadow-blue-500/20 text-white bg-blue-600 w-8 h-8 rounded-lg shadow-md items-center justify-center">
                            <Bot className="h-5 w-5" />
                        </div>
                        <span className="text-xl font-semibold tracking-tight text-slate-900">
                            Teqvention
                        </span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden items-center gap-8 md:flex">
                        {/* Services Dropdown */}
                        <div className="relative group">
                            <Link
                                href="#services"
                                onClick={(e) => handleScroll(e, "#services")}
                                className="flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900 group-hover:text-slate-900"
                            >
                                {t('services')}
                                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                            </Link>

                            {/* Dropdown Overlay */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform translate-y-2 group-hover:translate-y-0 w-[320px]">
                                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                                    {services.map((service) => (
                                        <Link
                                            key={service.title}
                                            href={service.href}
                                            onClick={(e) => handleScroll(e, service.href)}
                                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                                        >
                                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${service.bgColor} text-white shadow-md shadow-blue-500/10`}>
                                                <service.icon className="h-5 w-5" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700 group-hover/item:text-slate-900">
                                                {service.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <LanguageSwitcher />
                        <Button asChild className="rounded-full shadow-md shadow-blue-500/20">
                            <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="group">
                                {t('contact')}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex md:hidden items-center justify-center text-slate-500 hover:text-slate-900"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg py-6 px-6 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-end">
                                <LanguageSwitcher />
                            </div>
                            <Link
                                href="#services"
                                className="text-base font-medium text-slate-500 hover:text-slate-900"
                                onClick={(e) => handleScroll(e, "#services")}
                            >
                                {t('services')}
                            </Link>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-slate-500 hover:text-slate-900"
                                    onClick={(e) => handleScroll(e, link.href)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Button asChild className="w-full rounded-full shadow-md shadow-blue-500/20 justify-center">
                            <Link href="#contact" className="group" onClick={(e) => handleScroll(e, "#contact")}>
                                {t('contact')}
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        </Button>
                    </div>
                )}
            </Container>
        </nav>
    );
}
