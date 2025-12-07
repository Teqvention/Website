import { Globe, Trophy, Mail, Phone } from "lucide-react";

export const services = [
    {
        id: "voice_agents",
        title: "AI Voice Agents",
        description: "Intelligent voice assistants ensuring zero wait times. Handle customer queries around the clock with natural language.",
        icon: Globe,
        color: "text-rose-500",
        bgColor: "bg-rose-500",
        shadowColor: "shadow-rose-500/10",
        ringColor: "hover:ring-rose-500",
        href: "#services"
    },
    {
        id: "seo",
        title: "Google Ranking SEO",
        description: "Streamline repetitive tasks with custom AI workflows that integrate seamlessly with your existing tech stack.",
        icon: Trophy,
        color: "text-amber-500",
        bgColor: "bg-amber-500",
        shadowColor: "shadow-amber-500/10",
        ringColor: "hover:ring-amber-500",
        href: "#services"
    },
    {
        id: "outreach",
        title: "Smart Outreach",
        description: "Scale your prospecting with personalized, AI-driven outreach campaigns that engage and convert efficiently.",
        icon: Mail,
        color: "text-blue-500",
        bgColor: "bg-blue-500",
        shadowColor: "shadow-blue-500/10",
        ringColor: "hover:ring-blue-500",
        href: "#services"
    },
    {
        id: "support",
        title: "24/7 Support",
        description: "Instant resolution for customer issues. AI agents that learn from every interaction to continuously improve quality.",
        icon: Phone,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500",
        shadowColor: "shadow-emerald-500/10",
        ringColor: "hover:ring-emerald-500",
        href: "#services"
    }
];
