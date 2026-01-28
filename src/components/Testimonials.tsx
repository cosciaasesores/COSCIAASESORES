"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Roberto Méndez",
            role: "Dueño de Pyme",
            content: "La rapidez con la que resolvieron el siniestro de mi flota fue increíble. En 48hs tenía todo liquidado. Unos genios.",
            stars: 5
        },
        {
            name: "Ana Laura Gutiérrez",
            role: "Seguro de Hogar",
            content: "Excelente atención. Me asesoraron para no pagar de más y tener la cobertura justa que necesitaba mi casa.",
            stars: 5
        },
        {
            name: "Carlos Echeverría",
            role: "Gerente Comercial",
            content: "Coscia Asesores nos brinda la tranquilidad que nuestra empresa necesita. Profesionales, éticos y siempre presentes.",
            stars: 5
        }
    ];

    return (
        <section className="py-24 bg-brand-navy relative overflow-hidden">
            {/* Desktop Background Glow - HIDDEN ON MOBILE */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Confianza <span className="text-brand-cyan">Confirmada</span>
                    </h2>
                    <p className="text-brand-slate text-lg max-w-2xl mx-auto">
                        No lo decimos nosotros, lo dicen quienes ya protegen su futuro con Coscia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 rounded-3xl border border-white/10 bg-white/5 md:bg-white/5 md:backdrop-blur-md relative group hover:border-brand-blue/30 transition-colors"
                        >
                            <Quote className="w-10 h-10 text-brand-blue/20 absolute top-6 right-6" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.stars)].map((_, si) => (
                                    <Star key={si} className="w-5 h-5 fill-brand-cyan text-brand-cyan" />
                                ))}
                            </div>

                            <p className="text-brand-silver/90 mb-8 leading-relaxed italic font-normal">
                                "{t.content}"
                            </p>

                            <div className="mt-auto">
                                <div className="font-bold text-white text-lg">{t.name}</div>
                                <div className="text-brand-slate text-sm font-medium uppercase tracking-wider">{t.role}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}
