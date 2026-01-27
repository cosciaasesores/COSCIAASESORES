"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
/* eslint-disable @next/next/no-img-element */

const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Socios", href: "#socios" },
    { name: "Contacto", href: "#contacto" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed z-50 transition-all duration-500 ease-out",
                isScrolled
                    ? "top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[80%] lg:w-[60%] rounded-full glass-nav py-3 px-8 border border-white/10 shadow-2xl"
                    : "top-0 left-0 right-0 w-full bg-transparent py-8 px-6"
            )}
        >
            <div className={cn(
                "mx-auto flex justify-between items-center transition-all",
                isScrolled ? "w-full" : "container"
            )}>
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className={cn(
                        "transition-all flex items-center justify-center",
                        "rounded-full bg-white/10 overflow-hidden",
                        isScrolled ? "w-10 h-10" : "w-14 h-14"
                    )}>
                        <img
                            src="/logoCoscia.png"
                            alt="Coscia Asesores Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className={cn(
                        "font-black tracking-tighter text-white uppercase flex flex-col leading-none transition-all",
                        isScrolled ? "text-lg" : "text-2xl"
                    )}>
                        Coscia <span className="text-brand-cyan text-[10px] tracking-[0.3em] font-medium mt-0.5">Asesores</span>
                    </span>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-bold text-brand-silver hover:text-white transition-colors uppercase tracking-widest relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                    <a
                        href="#contacto"
                        className={cn(
                            "bg-brand-blue hover:bg-brand-cyan text-white rounded-full font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-blue/20",
                            isScrolled ? "px-6 py-2 text-xs" : "px-8 py-3 text-sm"
                        )}
                    >
                        Cotizar
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="lg:hidden absolute top-[calc(100%+16px)] left-0 right-0 bg-brand-navy/95 backdrop-blur-3xl p-6 border border-white/10 rounded-3xl shadow-2xl mx-auto w-full max-w-sm"
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
                                href="#contacto"
                                onClick={() => setMobileMenuOpen(false)}
                                className="bg-brand-blue text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest mt-4 shadow-xl block"
                            >
                                Cotizar Ahora
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
