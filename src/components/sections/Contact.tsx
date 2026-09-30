"use client";

import { useState, useEffect } from "react";
import { Mail, MapPin, MessageCircle, Instagram, Facebook, Calculator, ArrowRight } from "lucide-react";
import { ContactForm } from "../ui/ContactForm";
import { TrackedLink } from "../ui/TrackedLink";
import { motion } from "framer-motion";
import {
    ADDRESS,
    EMAIL,
    MAPS_EMBED_URL,
    MAPS_URL,
    QUOTER_URL,
    SOCIAL,
    WHATSAPP_DISPLAY,
    WHATSAPP_QUOTE_TEXT,
    whatsappUrl,
} from "@/lib/site";
import { trackLead } from "@/lib/tracking";

export function Contact() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    return (
        <section id="contacto" className="py-16 md:py-24 bg-brand-navy relative dark-section font-sans scroll-mt-24">
            {/* Background Mesh - HIDDEN ON MOBILE FOR PERFORMANCE */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
                <div className="absolute top-0 right-0 w-150 h-150 bg-brand-cyan/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

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

                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tight leading-snug text-white pb-1">
                            Hablemos de tu <br />
                            <span className="text-brand-blue">Tranquilidad.</span>
                        </h2>

                        <p className="text-brand-silver/80 text-xl mb-12 max-w-sm leading-relaxed font-light">
                            Sin compromisos. Analizamos tu situación actual y te proponemos la mejor estrategia.
                        </p>

                        <div className="space-y-12 border-l-2 border-white/10 pl-8">
                            <div className="group">
                                <div className="text-xs font-bold uppercase tracking-widest text-brand-slate mb-4">WhatsApp Directo</div>
                                <TrackedLink href={whatsappUrl()} channel="whatsapp" location="contact" className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-brand-blue/20 to-brand-cyan/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]">
                                        <MessageCircle className="w-6 h-6 text-brand-cyan" />
                                    </div>
                                    <div className="text-2xl font-bold text-white hover:text-brand-blue transition-colors">{WHATSAPP_DISPLAY}</div>
                                </TrackedLink>
                            </div>

                            <div className="group">
                                <div className="text-xs font-bold uppercase tracking-widest text-brand-slate mb-4">Correo Electrónico</div>
                                <a href={`mailto:${EMAIL}`} className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-brand-blue/20 to-brand-cyan/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]">
                                        <Mail className="w-6 h-6 text-brand-cyan" />
                                    </div>
                                    <div className="text-sm sm:text-xl font-bold text-white hover:text-brand-blue transition-colors break-all">
                                        {EMAIL}
                                    </div>
                                </a>
                            </div>

                            <div className="group">
                                <div className="text-xs font-bold uppercase tracking-widest text-brand-slate mb-4">Oficina Central</div>
                                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-brand-blue/20 to-brand-cyan/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]">
                                        <MapPin className="w-6 h-6 text-brand-cyan" />
                                    </div>
                                    <div className="text-xl font-bold text-white hover:text-brand-blue transition-colors leading-tight">
                                        {ADDRESS}<br />
                                        <span className="font-normal text-brand-slate text-base">Buenos Aires, Argentina</span>
                                    </div>
                                </a>
                                {/* Modern Google Maps Embed */}
                                <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative h-80 w-full">
                                    <iframe
                                        src={MAPS_EMBED_URL}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Ubicación de Coscia Asesores"
                                    ></iframe>
                                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <div className="text-xs font-bold uppercase tracking-widest text-brand-slate mb-6">Seguinos en redes</div>
                                <div className="flex gap-4">
                                    <a
                                        href={SOCIAL.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-transparent transition-all group"
                                    >
                                        <Instagram className="w-5 h-5 text-white" />
                                    </a>
                                    <a
                                        href={SOCIAL.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-transparent transition-all group"
                                    >
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
                        className="lg:w-3/5 w-full bg-white/5 backdrop-blur-md p-6 sm:p-10 lg:p-14 rounded-3xl border border-white/10"
                    >
                        {/* Option 1: Online quoter */}
                        <div className="mb-8 p-6 rounded-2xl bg-linear-to-br from-brand-blue/25 to-brand-cyan/10 border border-brand-blue/40">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center shrink-0">
                                    <Calculator className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-lg mb-1">Cotizá online</h3>
                                    <p className="text-brand-silver/70 text-sm mb-5">Completá los datos en nuestro cotizador y recibí tu cotización.</p>
                                    <TrackedLink
                                        href={QUOTER_URL}
                                        channel="quoter"
                                        location="contact"
                                        className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-blue hover:bg-white hover:text-brand-blue text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-brand-blue/20"
                                    >
                                        Cotizar online
                                        <ArrowRight className="w-5 h-5" />
                                    </TrackedLink>
                                </div>
                            </div>
                        </div>

                        {/* Option 2: WhatsApp */}
                        <div className="mb-10 pb-10 border-b border-white/10">
                            <h3 className="text-white font-bold text-lg mb-2">¿Preferís cotizar por WhatsApp?</h3>
                            <p className="text-brand-silver/70 text-sm mb-5">Respuesta inmediata de un asesor</p>
                            <TrackedLink
                                href={whatsappUrl(WHATSAPP_QUOTE_TEXT)}
                                channel="whatsapp"
                                location="contact"
                                className="inline-flex items-center gap-3 px-7 py-3.5 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Cotizar por WhatsApp
                            </TrackedLink>
                        </div>

                        {/* Option 3: Form */}
                        <h3 className="text-white font-bold text-lg mb-6">O completá el formulario</h3>
                        <ContactForm />
                    </motion.div>

                </div>
            </div>

            {/* WhatsApp Floating Button Premium */}
            <motion.a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chatear por WhatsApp"
                onClick={() => trackLead("whatsapp", "floating")}
                animate={isDesktop ? {
                    boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 20px rgba(59, 130, 246, 0)",
                    ],
                    scale: [1, 1.05, 1],
                } : {}}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-5 right-5 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-brand-blue to-brand-cyan text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(59,130,246,0.5)] z-50 group border border-white/20 overflow-hidden"
            >
                <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10" />
                <span className="absolute right-[calc(100%+20px)] glass bg-brand-navy/90 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap -translate-x-4 group-hover:translate-x-0 border border-white/10">
                    Chatear ahora
                </span>
            </motion.a>
        </section>
    );
}
