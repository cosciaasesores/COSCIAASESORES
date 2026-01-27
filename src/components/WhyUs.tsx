"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Users } from "lucide-react";
import { ReasonItem } from "./ui/ReasonItem";

export function WhyUs() {
    const reasons = [
        {
            icon: Award,
            title: "Asesoramiento Certificado",
            desc: "Contamos con años de experiencia asesorando a familias y empresas con los más altos estándares.",
        },
        {
            icon: Zap,
            title: "Respuesta Inmediata",
            desc: "Gestión ágil de siniestros y consultas. No sos un número más, sos nuestra prioridad.",
        },
        {
            icon: Users,
            title: "Atención Personalizada",
            desc: "Entendemos tus riesgos y buscamos la mejor relación costo-beneficio del mercado.",
        },
    ];

    return (
        <section id="nosotros" className="py-section bg-brand-navy text-white overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            ¿Por qué confiar <br />
                            <span className="text-brand-blue">en Coscia Seguros?</span>
                        </h2>
                        <p className="text-brand-slate text-lg mb-10 max-w-xl">
                            Nacimos para brindar tranquilidad. Como productores independientes,
                            trabajamos para vos, seleccionando las mejores propuestas entre
                            las aseguradoras líderes del país.
                        </p>

                        <div className="space-y-6">
                            {reasons.map((item, i) => (
                                <ReasonItem key={i} {...item} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Decorative Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 bg-linear-to-br from-brand-royal to-brand-navy p-1 rounded-3xl border border-white/10 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
                            <div className="text-center p-12">
                                <CheckCircle2 className="w-20 h-20 text-brand-blue mx-auto mb-6" />
                                <div className="text-4xl font-bold mb-2">Seguridad 100%</div>
                                <div className="text-brand-silver">Garantizada por nuestras aseguradoras aliadas</div>
                            </div>
                        </div>
                        {/* Background blobs */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-royal/40 rounded-full blur-[80px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
