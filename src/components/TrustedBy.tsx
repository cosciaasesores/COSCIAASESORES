"use client";

import { motion } from "framer-motion";

const companies = [
    { name: "Allianz", logo: "🛡️ Allianz" },
    { name: "Sancor Seguros", logo: "🔷 Sancor" },
    { name: "Mercantil Andina", logo: "🏦 Mercantil" },
    { name: "Zurich", logo: "⚡ Zurich" },
    { name: "Federación Patronal", logo: "🇦🇷 Federación" },
    { name: "Chubb", logo: "🔒 Chubb" },
];

export function TrustedBy() {
    return (
        <section id="socios" className="py-12 bg-white dark:bg-brand-navy border-b border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-slate mb-8">
                    Empresas que confían en nuestra gestión
                </p>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xl md:text-2xl font-display font-bold text-brand-royal dark:text-white flex items-center gap-2"
                        >
                            {company.logo}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
