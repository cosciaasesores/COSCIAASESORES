"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { PartnersMarquee } from "@/components/ui/PartnersMarquee";

export function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex flex-col justify-center bg-hero-premium pt-20">
            {/* Background Gradients (Crearte Style - Subtle but Deep) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[100px] opacity-40 mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[100px] opacity-30 mix-blend-screen" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center grow flex flex-col justify-center overflow-visible">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-bold text-brand-cyan mb-8 self-center mx-auto"
                >
                    <Star className="w-4 h-4 fill-current" />
                    <span className="tracking-widest uppercase text-xs font-sans">Premium Insurance</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 tracking-tight text-white overflow-visible"
                >
                    <span>Tu Futuro</span>
                    <span className="text-brand-cyan py-4 -mt-2">Asegurado.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-brand-silver/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    Asesoramiento estratégico para proteger lo que construiste.
                    <br className="hidden md:block" />
                    Sin letra chica. Solo claridad absoluta.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="#contacto" className="px-12 py-6 bg-brand-blue hover:bg-white hover:text-brand-blue text-white rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] transition-all hover:scale-105 flex items-center gap-3">
                        Hablar con un Asesor
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a href="#servicios" className="px-12 py-6 bg-transparent hover:bg-white/5 text-white border border-white/20 rounded-full font-bold text-lg transition-all hover:scale-105 backdrop-blur-sm">
                        Nuestras Soluciones
                    </a>
                </motion.div>

            </div>

            {/* Marquee at the bottom */}
            <div className="relative z-10 mt-auto pb-0">
                <PartnersMarquee />
            </div>

        </section>
    );
}
