"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function About() {
    const images = [
        "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1200&auto=format&fit=crop", // Familia
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop", // Auto
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"  // Hogar/Seguridad
    ];

    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false); // Added for checkMobile

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Carousel auto-play only on desktop
        let timer: NodeJS.Timeout;
        if (window.innerWidth >= 768) {
            timer = setInterval(() => {
                setIndex((prev: number) => (prev + 1) % images.length);
            }, 5000);
        }
        return () => {
            if (timer) clearInterval(timer);
            window.removeEventListener('resize', checkMobile);
        };
    }, [images.length]);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden font-sans">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/3 skew-x-12 hidden md:block pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-brand-navy">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-brand-blue/80 font-bold uppercase tracking-widest text-xs mb-6"
                        >
                            <span className="w-8 h-px bg-brand-blue/50" />
                            Nuestra Esencia
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight"
                        >
                            Más que seguros, <br />
                            <span className="text-brand-blue">Aliados Estratégicos.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 text-lg leading-relaxed space-y-6"
                        >
                            <p>
                                En <strong>Coscia Seguros</strong>, entendemos que detrás de cada póliza hay un proyecto de vida, una empresa familiar o el sueño de una casa propia. No vendemos &quot;papeles&quot;, vendemos la certeza de que, pase lo que pase, vas a poder seguir adelante.
                            </p>
                            <p>
                                Con una trayectoria basada en la <strong>ética innegociable</strong>, combinamos la calidez del asesoramiento tradicional con la agilidad de la tecnología moderna para estar siempre un paso adelante de tus necesidades.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-8 mt-12 border-t border-slate-200 pt-8">
                            <div>
                                <div className="text-4xl font-bold mb-2">+15</div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Años de Trayectoria</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">+2000</div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Clientes Activos</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full relative hidden lg:block">
                        {/* Dynamic Image Carousel */}
                        <div className="aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden bg-brand-navy shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] relative group border border-white/10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={images[index]}
                                        alt="Vida y protección"
                                        fill
                                        className="object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-4xl max-w-sm text-center shadow-2xl z-20"
                                >
                                    <div className="text-white font-bold text-2xl mb-2">Visión 360°</div>
                                    <p className="text-white/80 text-base">
                                        Analizamos todos los riesgos, incluso los que no se ven, para que vivas con total libertad.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Carousel Indicators */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`w-3 h-3 rounded-full transition-all duration-500 ${i === index ? "bg-white w-8" : "bg-white/40"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
