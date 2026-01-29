"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
    const questions = [
        {
            q: "¿Cómo cotizo mi seguro?",
            a: "Es muy simple. Podés hacer clic en el botón de WhatsApp para hablar directamente con un asesor, o completar el formulario de contacto. Te responderemos en menos de 2 horas con opciones a tu medida."
        },
        {
            q: "¿Qué hago si tengo un accidente o siniestro?",
            a: "Comunicate inmediatamente con nuestro número de urgencias 24hs o por WhatsApp. Nosotros nos encargamos de guiarte en la denuncia y el reclamo administrativo. No estás solo."
        },
        {
            q: "¿Trabajan con todas las compañías?",
            a: "Trabajamos con una selección de las aseguradoras más sólidas del mercado (Allianz, Sancor, Mercantil, entre otras) para garantizarte solvencia y respuesta de pago real."
        },
        {
            q: "¿Puedo asegurar mi empresa o flota?",
            a: "Sí, somos especialistas en riesgos corporativos y ART. Analizamos tu actividad y diseñamos un plan de prevención y cobertura integral para tu negocio."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-brand-royal/30 relative">
            {/* Desktop Glow - HIDDEN ON MOBILE */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] hidden md:block" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                        Preguntas <span className="text-brand-blue">Frecuentes</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
                                ${openIndex === index
                                    ? "bg-white/10 border-brand-blue/50"
                                    : "bg-white/5 border-white/10 hover:bg-white/8"
                                }`
                            }
                        >
                            <div className="p-6 flex items-center justify-between gap-4">
                                <h3 className={`text-lg font-bold transition-colors ${openIndex === index ? "text-white" : "text-brand-silver"}`}>
                                    {item.q}
                                </h3>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? "bg-brand-blue text-white" : "bg-white/10 text-brand-slate"}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </div>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-brand-slate leading-relaxed border-t border-white/5 pt-4">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
