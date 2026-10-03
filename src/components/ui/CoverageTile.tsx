"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, type LucideIcon } from "lucide-react";

interface CoverageTileProps {
    slug: string;
    title: string;
    icon: LucideIcon;
    index: number;
}

export function CoverageTile({ slug, title, icon: Icon, index }: CoverageTileProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="h-full"
        >
            <Link
                href={`/coberturas/${slug}`}
                className="group h-full flex flex-col items-center justify-center gap-4 p-6 md:p-8 bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-white shadow-md border border-slate-100 transition-colors group-hover:bg-brand-blue group-hover:border-brand-blue">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-brand-navy leading-tight">
                    {title}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-blue">
                    Ver más
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </Link>
        </motion.div>
    );
}
