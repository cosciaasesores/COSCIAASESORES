"use client";

import { motion } from "framer-motion";

const partners = [
    "ALLIANZ", "SURA", "SAN CRISTÓBAL", "MAPFRE", "RIVADAVIA", "FEDERACIÓN PATRONAL"
];

export function Partners() {
    return (
        <section id="socios" className="py-32 bg-brand-navy border-y border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-cyan mb-4">Trabajamos con las mejores</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Compañías Líderes</h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-all duration-700">
                    {partners.map((partner, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-xl md:text-3xl font-display font-bold tracking-tighter text-white hover:text-brand-blue cursor-default transition-colors"
                        >
                            {partner}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
