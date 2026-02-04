"use client";

import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    textColor: string;
    index: number;
    image?: string;
    value?: string;
}

export function ServiceCard({
    title,
    description,
    icon: Icon,
    color,
    textColor,
    index,
    image,
}: ServiceCardProps) {
    // Map title to form value if not provided
    const getServiceValue = () => {
        const t = title.toLowerCase();
        if (t.includes("automotor")) return "automotor";
        if (t.includes("motovehiculo") || t.includes("motovehículo")) return "motovehiculo";
        if (t.includes("hogar")) return "hogar";
        if (t.includes("vida")) return "vida";
        if (t.includes("accidentes")) return "accidentes";
        if (t.includes("art")) return "art";
        if (t.includes("comercio")) return "comercios";
        if (t.includes("embarcaciones")) return "embarcaciones";
        if (t.includes("cauciones")) return "cauciones";
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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ transform: 'translateZ(0)' }}
            className="group relative h-full bg-white rounded-3xl hover:-translate-y-2 transition-all duration-300 flex flex-col shadow-md hover:shadow-2xl border border-slate-200 overflow-hidden"
        >
            {/* Top Section: Image */}
            <div className="relative h-48 w-full overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                ) : (
                    <div className="w-full h-full bg-brand-navy/10 flex items-center justify-center text-slate-300">
                        No image available
                    </div>
                )}
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="relative p-8 pt-10 flex flex-col flex-1">
                {/* Floating Icon */}
                <div className={cn(
                    "absolute -top-8 left-8 w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-xl border border-slate-50 transition-colors group-hover:bg-brand-blue group-hover:border-brand-blue z-10",
                )}>
                    <Icon className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors" />
                </div>

                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-brand-navy leading-tight">
                        {title}
                    </h3>

                    <p className="text-brand-slate leading-relaxed font-normal">
                        {description}
                    </p>
                </div>

                <div
                    onClick={handleConsultClick}
                    className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between group/link cursor-pointer"
                >
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-blue group-hover:translate-x-1 transition-transform">
                        Consultar
                    </span>
                    <ChevronRight className="w-5 h-5 text-brand-blue group-hover/link:translate-x-1 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
}
