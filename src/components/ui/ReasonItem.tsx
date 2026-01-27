import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReasonItemProps {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export function ReasonItem({ icon: Icon, title, desc }: ReasonItemProps) {
    return (
        <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
            <div className="shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
                <Icon className="w-6 h-6 text-brand-blue" />
            </div>
            <div>
                <h4 className="font-bold text-xl mb-1">{title}</h4>
                <p className="text-brand-slate text-sm">{desc}</p>
            </div>
        </div>
    );
}
