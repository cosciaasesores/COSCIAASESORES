"use client";

import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";
import { ContactForm } from "./ui/ContactForm";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <section id="contacto" className="py-32 bg-brand-navy relative">
            {/* Background Mesh */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 lg:gap-32 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-2/5"
                    >
                        <div className="inline-flex items-center gap-2 text-brand-cyan font-bold uppercase tracking-widest text-xs mb-8">
                            <span className="w-8 h-px bg-brand-cyan" />
                            Contacto Directo
                        </div>

                        <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tight leading-snug text-white pb-1">
                            Hablemos de tu <br />
                            <span className="text-brand-blue">Tranquilidad.</span>
                        </h2>

                        <p className="text-brand-silver/80 text-xl mb-12 max-w-sm leading-relaxed font-light">
                            Sin compromisos. Analizamos tu situación actual y te proponemos la mejor estrategia.
                        </p>

                        <div className="space-y-12 border-l-2 border-white/10 pl-8">
                            <div className="group">
                                <div className="text-xs font-bold uppercase tracking-widest text-brand-slate mb-4">WhatsApp Directo</div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-brand-blue/20 to-brand-cyan/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]">
                                        <Phone className="w-6 h-6 text-brand-cyan" />
                                    </div>
                                    <div className="text-2xl font-bold text-white hover:text-brand-blue transition-colors">11 5827 6780</div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="text-xs font-bold uppercase tracking-widest text-brand-slate mb-4">Correo Electrónico</div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-brand-blue/20 to-brand-cyan/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]">
                                        <Mail className="w-6 h-6 text-brand-cyan" />
                                    </div>
                                    <div className="text-2xl font-bold text-white hover:text-brand-blue transition-colors break-all">
                                        cosciaasesores@gmail.com
                                    </div>
                                </div>
                            </div>

                            <div className="group">
                                <div className="text-xs font-bold uppercase tracking-widest text-brand-slate mb-4">Oficina Central</div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-brand-blue/20 to-brand-cyan/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]">
                                        <MapPin className="w-6 h-6 text-brand-cyan" />
                                    </div>
                                    <div className="text-xl font-bold text-white leading-tight">
                                        Año 1852 Nº 8 - El Palomar<br />
                                        <span className="font-normal text-brand-slate text-base">Buenos Aires, Argentina</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <div className="text-xs font-bold uppercase tracking-widest text-brand-slate mb-6">Síguenos en Redes</div>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-transparent transition-all group">
                                        <Instagram className="w-5 h-5 text-white" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-transparent transition-all group">
                                        <Facebook className="w-5 h-5 text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-3/5 w-full bg-white/5 backdrop-blur-md p-12 lg:p-16 rounded-3xl border border-white/10"
                    >
                        <ContactForm />
                    </motion.div>

                </div>
            </div>

            {/* WhatsApp Floating Button Premium */}
            <a
                href="https://wa.me/5491158276780"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-10 right-10 w-20 h-20 bg-[#25D366] text-white rounded-4xl flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all z-50 group border border-white/20"
            >
                <MessageCircle className="w-10 h-10" />
                <span className="absolute right-[calc(100%+20px)] glass bg-brand-navy/90 text-white px-6 py-3 rounded-2xl text-sm font-bold uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap -translate-x-4 group-hover:translate-x-0 border border-white/10">
                    Chatear ahora
                </span>
            </a>
        </section>
    );
}
