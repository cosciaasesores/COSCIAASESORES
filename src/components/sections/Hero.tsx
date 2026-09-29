"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Award } from "lucide-react";
import Image from "next/image";
import { GOOGLE_REVIEWS_COUNT, QUOTER_URL, WHATSAPP_QUOTE_TEXT, whatsappUrl } from "@/lib/site";
import { TrackedLink } from "@/components/ui/TrackedLink";

const DEFAULT_HERO_IMAGE = "https://images.unsplash.com/photo-1511895426328-dc8714191300";

export function Hero({ heroImage }: { heroImage?: string }) {
    const imageSrc = heroImage ?? DEFAULT_HERO_IMAGE;

    return (
        <section id="inicio" className="relative lg:min-h-screen flex items-center bg-brand-navy pt-32 pb-16 lg:py-20 overflow-hidden font-sans dark-section">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <div className="absolute top-0 right-0 w-200 h-200 bg-brand-cyan/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-50" />
                <div className="absolute bottom-0 left-0 w-150 h-150 bg-brand-blue/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-30" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2 text-left space-y-8 lg:pr-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-none tracking-tight"
                        >
                            Tu Futuro <br />
                            <span className="text-brand-cyan">
                                Asegurado.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-xl md:text-2xl text-brand-silver/80 leading-relaxed max-w-xl font-normal"
                        >
                            Contamos con el respaldo que tanto vos como tu familia y empresa necesitan para vivir con total libertad!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4 pt-2"
                        >
                            <TrackedLink
                                href={QUOTER_URL}
                                channel="quoter"
                                location="hero"
                                className="px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-lg transition-all hover:bg-white hover:text-brand-blue hover:scale-105 shadow-2xl shadow-brand-blue/20 flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                <span className="relative z-10">Cotizar online</span>
                                <ArrowRight className="w-5 h-5 relative z-10" />
                                {/* Shimmer Effect - ONLY ON DESKTOP */}
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent hidden md:block btn-shimmer" />
                            </TrackedLink>
                            <TrackedLink
                                href={whatsappUrl(WHATSAPP_QUOTE_TEXT)}
                                channel="whatsapp"
                                location="hero"
                                className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-full font-bold text-lg transition-all hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Cotizar por WhatsApp
                            </TrackedLink>
                        </motion.div>

                        {/* Trust bar */}
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-brand-silver/80"
                        >
                            <li>
                                <a href="#resenas" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <span className="text-[#FBBC04] tracking-tight" aria-hidden="true">★★★★★</span>
                                    <span><strong className="text-white font-semibold">{GOOGLE_REVIEWS_COUNT}</strong> reseñas en Google</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-brand-cyan" />
                                +25 años de trayectoria
                            </li>
                            <li className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                                Matriculados en la SSN
                            </li>
                        </motion.ul>
                    </div>

                    {/* Right Side: Image (below CTAs on mobile) */}
                    <div className="w-full lg:w-1/2 relative lg:h-125 flex items-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            className="relative w-full aspect-4/3 lg:aspect-auto lg:h-full z-10 lg:-ml-24"
                        >
                            <div className="w-full h-full relative hero-rounded border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                                <Image
                                    src={imageSrc}
                                    alt="Coscia Asesores - Productores de Seguros"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover hero-rounded"
                                    priority
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent" />
                            </div>
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute inset-x-8 -bottom-12 h-24 bg-brand-cyan/20 blur-[80px] -z-10 rounded-full hidden lg:block" />
                    </div>

                </div>
            </div>
        </section>
    );
}
