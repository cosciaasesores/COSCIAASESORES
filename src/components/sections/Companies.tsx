"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Companies() {
    const [companies, setCompanies] = useState<{ name: string; logo: string }[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Fetch dynamic logos from API
        const fetchLogos = async () => {
            try {
                const response = await fetch('/api/companies');
                const data = await response.json();
                if (Array.isArray(data)) {
                    setCompanies(data);
                }
            } catch (error) {
                console.error("Error fetching logos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLogos();
        return () => window.removeEventListener('resize', checkMobile);
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

    if (isLoading) return null;

    return (
        <section id="socios" className="py-24 bg-white relative overflow-hidden font-sans">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        {...animateProps(0)}
                        className="text-4xl md:text-6xl font-display font-bold text-brand-navy mb-8"
                    >
                        Trabajamos con las Mejores Aseguradoras
                    </motion.h2>
                    <motion.div
                        {...animateProps(0.1)}
                        className="text-brand-slate text-lg md:text-2xl max-w-4xl mx-auto"
                    >
                        <p className="leading-relaxed">
                            No trabajamos para una aseguradora. <span className="text-brand-blue font-bold">Trabajamos para vos.</span>
                        </p>
                        <p className="mt-4 text-brand-slate/80">
                            Contamos con {companies.length} compañías de primer nivel para tu seguridad.
                        </p>
                    </motion.div>
                </div>

                {/* Optimized Logo Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.logo}
                            {...animateProps(index * 0.05)}
                            className="bg-white border border-slate-100 rounded-2xl p-4 md:p-8 transition-all duration-300 hover:shadow-xl flex items-center justify-center aspect-video relative overflow-hidden shadow-sm"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    fill
                                    className="object-contain p-2 md:p-4 filter grayscale md:grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
