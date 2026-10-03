"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { QUOTER_URL } from "@/lib/site";
import { TrackedLink } from "@/components/ui/TrackedLink";

const navLinks = [
    // Mismo orden que las secciones de la home (src/app/page.tsx).
    { name: "Inicio", href: "#inicio" },
    { name: "Compañías", href: "#socios" },
    { name: "Coberturas", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Reseñas", href: "#resenas" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const lastScrollTime = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const now = Date.now();
            if (now - lastScrollTime.current < 100) return;
            lastScrollTime.current = now;
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed z-50 transition-all duration-500 ease-out",
                isScrolled
                    ? "top-3 sm:top-6 left-1/2 -translate-x-1/2 w-[96%] md:w-[90%] xl:w-[88%] 2xl:w-[75%] rounded-full bg-brand-navy/90 backdrop-blur-md py-2.5 sm:py-3 px-4 sm:px-8 border border-white/10 shadow-2xl"
                    : "top-0 left-0 right-0 w-full bg-transparent py-5 sm:py-8 px-4 sm:px-6"
            )}
        >
            <div className={cn(
                "mx-auto flex justify-between items-center gap-3 transition-all",
                isScrolled ? "w-full" : "container"
            )}>
                <a href="#inicio" aria-label="Ir al inicio" className="flex items-center gap-2 sm:gap-3 group min-w-0">
                    <div className={cn(
                        "relative transition-all flex items-center justify-center shrink-0",
                        "rounded-full bg-white/10 overflow-hidden",
                        isScrolled ? "w-8 h-8" : "w-11 h-11 sm:w-14 sm:h-14"
                    )}>
                        <Image
                            src="/logo-oficial.png"
                            alt="Coscia Asesores Logo"
                            fill
                            sizes="56px"
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className={cn(
                        "font-black tracking-tighter text-white uppercase flex flex-col leading-none transition-all",
                        isScrolled ? "text-sm sm:text-base" : "text-lg sm:text-2xl"
                    )}>
                        Coscia Asesores <span className="text-brand-cyan text-[8px] tracking-widest font-medium mt-0.5">Productores de Seguros</span>
                    </span>
                </a>

                {/* Desktop Links (el logo ya lleva al inicio) */}
                <div className={cn("hidden xl:flex items-center", isScrolled ? "gap-4" : "gap-6 2xl:gap-8")}>
                    <div className={cn("flex items-center", isScrolled ? "gap-4 2xl:gap-5" : "gap-5 2xl:gap-6")}>
                        {navLinks.filter((link) => link.href !== "#inicio").map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-bold text-brand-silver hover:text-brand-cyan transition-colors uppercase tracking-wider 2xl:tracking-widest relative group whitespace-nowrap"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                    <a
                        href="/siniestros"
                        className={cn(
                            "rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center whitespace-nowrap",
                            isScrolled
                                ? "bg-red-600 hover:bg-red-700 text-white px-5 py-2 text-sm shadow-red-600/20"
                                : "bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm shadow-red-600/30"
                        )}
                    >
                        Siniestro
                    </a>
                    <TrackedLink
                        href={QUOTER_URL}
                        channel="quoter"
                        location="navbar"
                        className={cn(
                            "rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/20 flex items-center justify-center whitespace-nowrap",
                            isScrolled
                                ? "bg-brand-blue text-white px-6 py-2 text-sm"
                                : "bg-brand-blue text-white px-7 py-3 text-sm hover:bg-white hover:text-brand-blue"
                        )}
                    >
                        Cotizar online
                    </TrackedLink>
                </div>

                {/* Mobile Actions */}
                <div className="flex xl:hidden items-center gap-2 shrink-0">
                    <a
                        href="/siniestros"
                        className="bg-red-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-red-600/20 active:scale-95 transition-transform"
                    >
                        Siniestro
                    </a>
                    <button
                        className="text-white w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="xl:hidden absolute top-[calc(100%+16px)] left-0 right-0 bg-brand-navy/95 backdrop-blur-3xl p-6 border border-white/10 rounded-3xl shadow-2xl mx-auto w-full max-w-sm max-h-[85vh] overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-white hover:text-brand-cyan transition-colors tracking-tighter"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/siniestros"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-bold text-base mt-4 shadow-xl block transition-colors"
                            >
                                Reportar Siniestro
                            </a>
                            <TrackedLink
                                href={QUOTER_URL}
                                channel="quoter"
                                location="navbar"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-brand-blue text-white py-4 rounded-2xl font-bold text-base shadow-xl block"
                            >
                                Cotizar online
                            </TrackedLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
