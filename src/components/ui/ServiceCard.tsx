"use client";

import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    textColor: string;
    index: number;
    value?: string; // Add value prop for form mapping
}

export function ServiceCard({
    title,
    description,
    icon: Icon,
    color,
    textColor,
    index,
}: ServiceCardProps) {
    // Map title to form value if not provided
    const getServiceValue = () => {
        if (title.includes("Automotor")) return "auto";
        if (title.includes("Hogar")) return "hogar";
        if (title.includes("Vida")) return "vida";
        if (title.includes("Accidentes")) return "accidentes";
        if (title.includes("Empresas")) return "empresas";
        return "otro";
    };

    const handleConsultClick = () => {
        const value = getServiceValue();
        // Dispatch custom event for immediate form update if on same page
        window.dispatchEvent(new CustomEvent('selectService', { detail: value }));

        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative p-8 h-full card-glass rounded-4xl hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between hover:bg-white/5"
        >
            <div className="mb-6 relative z-10">
                <div className={cn(
                    "w-16 h-16 flex items-center justify-center mb-6 rounded-2xl bg-white/5 shadow-sm border border-white/10 backdrop-blur-md transition-colors group-hover:bg-brand-blue group-hover:border-transparent",
                )}>
                    <Icon className="w-8 h-8 text-white group-hover:text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white leading-relaxed">
                    {title}
                </h3>

                <p className="text-brand-slate leading-relaxed font-normal group-hover:text-brand-silver transition-colors">
                    {description}
                </p>
            </div>

            <div
                onClick={handleConsultClick}
                className="relative z-10 mt-6 pt-6 border-t border-white/10 flex items-center justify-between group/link cursor-pointer"
            >
                <span className="text-sm font-bold uppercase tracking-widest gradient-text-light group-hover:translate-x-1 transition-transform">
                    Consultar
                </span>
                <ChevronRight className="w-5 h-5 text-brand-cyan group-hover/link:translate-x-1 transition-transform" />
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-cyan/5 to-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl pointer-events-none" />
        </motion.div>
    );
}
