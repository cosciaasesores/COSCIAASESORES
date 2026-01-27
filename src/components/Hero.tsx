"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-navy pt-20"
        >
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-royal/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-royal/50 border border-brand-blue/20 text-brand-blue text-sm font-semibold mb-8"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Tu tranquilidad, nuestra prioridad</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Protección inteligente <br />
                        para lo que <span className="text-brand-blue">más valoras</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-brand-slate mb-10 max-w-2xl mx-auto"
                    >
                        En Coscia Seguros combinamos experiencia y tecnología para ofrecerte
                        las mejores coberturas del mercado con asesoramiento personalizado.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#servicios"
                            className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105"
                        >
                            Ver Coberturas
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#contacto"
                            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-white/20 rounded-xl font-bold transition-all"
                        >
                            Contactar Asesor
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Hero Stats (Visual only) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-0 right-0 hidden md:block"
            >
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-10">
                        {[
                            { label: "Años de Experiencia", value: "20+" },
                            { label: "Clientes Asegurados", value: "5000+" },
                            { label: "Empresas Aliadas", value: "15+" },
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-brand-slate uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
