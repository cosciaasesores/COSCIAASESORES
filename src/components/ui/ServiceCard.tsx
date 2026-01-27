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
}

export function ServiceCard({
    title,
    description,
    icon: Icon,
    color,
    textColor,
    index,
}: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 rounded-2xl bg-white dark:bg-brand-navy border border-brand-blue/5 hover:border-brand-blue/20 transition-all hover:shadow-xl dark:hover:shadow-brand-blue/5 relative overflow-hidden"
        >
            <div className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                color
            )}>
                <Icon className={cn("w-7 h-7", textColor)} />
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-blue transition-colors">
                {title}
            </h3>
            <p className="text-brand-slate mb-6 line-clamp-3">
                {description}
            </p>
            <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue group-hover:gap-3 transition-all"
            >
                Solicitar Cotización <ChevronRight className="w-4 h-4" />
            </a>
        </motion.div>
    );
}
