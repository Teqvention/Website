import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    badge?: string;
    title: string;
    description?: string;
    className?: string;
    badgeVariant?: "blue" | "amber" | "rose" | "emerald" | "default";
}

export function SectionHeader({
    badge,
    title,
    description,
    className,
    badgeVariant = "blue",
}: SectionHeaderProps) {
    return (
        <div className={cn("flex flex-col text-center items-center mb-16", className)}>
            {badge && (
                <Badge variant={badgeVariant} className="mb-4">
                    {badge}
                </Badge>
            )}
            <h2 className="md:text-4xl sm:text-3xl text-2xl font-semibold text-slate-900 tracking-tight mt-2">
                {title}
            </h2>
            {description && (
                <p className="text-base sm:text-lg text-slate-500 max-w-2xl mt-4">{description}</p>
            )}
        </div>
    );
}
