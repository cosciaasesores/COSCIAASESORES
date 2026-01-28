"use client";

import { motion } from "framer-motion";
import { MessageSquareText, FileCheck, Shield } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: MessageSquareText,
            title: "1. Cotizá",
            desc: "Contanos qué necesitás proteger. Hablá con un asesor real por WhatsApp o form.",
        },
        {
            icon: FileCheck,
            title: "2. Elegí tu Plan",
            desc: "Te presentamos las mejores opciones del mercado comparando precio y cobertura.",
        },
        {
            icon: Shield,
            title: "3. Estás Cubierto",
            desc: "Emitimos tu póliza en el acto. Recibís tu certificado digital y ya estás asegurado.",
        },
    ];

    return (
        <section className="py-24 bg-brand-navy border-t border-white/5 relative overflow-hidden">
            {/* Desktop Glow - HIDDEN ON MOBILE */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none hidden md:block" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-cyan font-bold uppercase tracking-widest text-xs mb-4 block">
                        Simple y Rápido
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
                        Tu póliza en <span className="text-brand-blue">3 Pasos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-linear-to-r from-transparent via-brand-blue/30 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-3xl bg-brand-royal border border-white/10 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                                {/* Icon Glow */}
                                <div className="absolute inset-0 bg-brand-blue/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <step.icon className="w-10 h-10 text-brand-cyan relative z-10" />

                                {/* Step Number Badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center text-sm ring-4 ring-brand-navy">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">
                                {step.title}
                            </h3>
                            <p className="text-brand-slate leading-relaxed max-w-xs">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
