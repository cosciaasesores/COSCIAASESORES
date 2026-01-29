"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Companies() {
    const companies = [
        // Top 15 según ranking de Argentina
        { name: "Federación Patronal", logo: "/companies/federacion_patronal_logo.png" },
        { name: "Sancor Seguros", logo: "/companies/sancor_seguros_logo.png" },
        { name: "La Caja", logo: "/companies/la_caja_logo.png" },
        { name: "San Cristóbal", logo: "/companies/san_cristobal_logo.png" },
        { name: "La Segunda", logo: "/companies/la_segunda_logo.png" },
        { name: "Provincia Seguros", logo: "/companies/provincia_seguros_logo.png" },
        { name: "Mercantil Andina", logo: "/companies/mercantil_andina_logo.png" },
        { name: "Rivadavia Seguros", logo: "/companies/seguros_rivadavia_logo.png" },
        { name: "Allianz", logo: "/companies/allianz_logo.png" },
        { name: "Zurich", logo: "/companies/zurich_logo.png" },
        { name: "Mapfre", logo: "/companies/mapfre_logo.png" },
        { name: "Río Uruguay", logo: "/companies/rio_uruguay_logo.png" },
        { name: "Swiss Medical", logo: "/companies/swiss_medical_logo.png" },
        { name: "Galicia Seguros", logo: "/companies/galicia_seguros_logo.png" },
        { name: "Chubb Seguros", logo: "/companies/chubb_logo.png" },

        // Otras importantes
        { name: "Berkley", logo: "/companies/berkley_logo.png" },
        { name: "Orbis", logo: "/companies/orbis_logo.png" },
        { name: "HSBC Seguros", logo: "/companies/hsbc_seguros_logo.png" },
        { name: "Liberty Seguros", logo: "/companies/liberty_seguros_logo.png" },
        { name: "BBVA Seguros", logo: "/companies/bbva_seguros_logo.png" },
    ];
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const animateProps = (delay = 0) => isMobile ? {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: 0 }
    } : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay }
    };

    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden">
            {/* Desktop Glow - HIDDEN ON MOBILE */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] hidden md:block" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        {...animateProps(0)}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
                    >
                        Trabajamos con las Mejores Aseguradoras
                    </motion.h2>
                    <motion.p
                        {...animateProps(0.1)}
                        className="text-brand-silver/80 text-lg md:text-xl max-w-3xl mx-auto mb-6"
                    >
                        No trabajamos para una aseguradora. <span className="text-brand-cyan font-bold">Trabajamos para vos.</span>
                        <br className="hidden md:block" />
                        Comparamos +20 compañías para encontrar la mejor cobertura al mejor precio.
                    </motion.p>
                    <motion.div
                        {...animateProps(0.2)}
                        className="flex items-center justify-center gap-8 text-brand-cyan font-bold text-sm"
                    >
                        <span>✓ +500 Pólizas Activas</span>
                        <span className="hidden sm:inline">✓ +15 Años de Experiencia</span>
                        <span>✓ Atención 24/7</span>
                    </motion.div>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            {...animateProps(index * 0.05)}
                            className="group bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 md:backdrop-blur-sm md:hover:border-brand-cyan/30 md:transition-all md:duration-300 flex items-center justify-center aspect-square"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={200}
                                    height={200}
                                    className="object-contain w-full h-full opacity-100 md:opacity-70 md:group-hover:opacity-100 md:transition-opacity md:duration-300 md:grayscale md:group-hover:grayscale-0"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
