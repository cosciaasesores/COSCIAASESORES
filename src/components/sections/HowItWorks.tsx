"use client";

import { motion } from "framer-motion";
import { MessageSquareText, FileCheck, Shield } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            icon: MessageSquareText,
            title: "Cotizá",
            desc: "Comentanos qué necesitás proteger. Cotizá online con nuestro cotizador, escribinos por WhatsApp o envianos tu consulta por el formulario y nos contactamos con vos.",
        },
        {
            icon: FileCheck,
            title: "Elegí tu Plan",
            desc: "Buscamos las mejores opciones para tu riesgo, comparando precio y cobertura en las mejores compañías del mercado.",
        },
        {
            icon: Shield,
            title: "Estás Cubierto",
            desc: "Emitimos tu póliza en el acto. Recibís tu póliza de manera digital y ya estás asegurado!",
        },
    ];

    return (
        <section id="proceso" className="py-16 md:py-24 bg-blue-50/60 border-y border-blue-100/60 relative overflow-hidden font-sans">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-bold uppercase tracking-widest text-xs mb-4 block">
                        Simple y Rápido
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy">
                        Tu póliza en <span className="text-brand-blue">3 Pasos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-linear-to-r from-transparent via-brand-blue/20 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="relative mb-8 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-24 h-24 rounded-3xl bg-white border border-slate-100 flex items-center justify-center shadow-sm relative overflow-hidden group-hover:shadow-xl transition-shadow">
                                    <step.icon className="w-10 h-10 text-brand-blue relative z-10" />
                                </div>

                                {/* Step Number Badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center text-sm ring-4 ring-blue-50 z-20">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-brand-navy mb-4">
                                {step.title}
                            </h3>
                            <p className="text-brand-body leading-relaxed max-w-xs">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
