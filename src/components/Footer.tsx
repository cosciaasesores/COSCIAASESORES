"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Shield } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-brand-navy text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6 text-2xl font-display font-bold text-white tracking-wide">
                            <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/logo-coscia.png"
                                    alt="Coscia Asesores Logo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            Coscia Asesores
                        </div>
                        <p className="text-brand-slate text-lg leading-relaxed max-w-sm font-normal">
                            Protección inteligente para un futuro seguro.
                            Expertos en análisis de riesgos y soluciones patrimoniales.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-display font-bold text-xl mb-6 text-white">Servicios</h4>
                        <ul className="space-y-4">
                            <li><a href="#servicios" className="text-brand-silver hover:text-brand-blue transition-colors">Seguros Patrimoniales</a></li>
                            <li><a href="#servicios" className="text-brand-silver hover:text-brand-blue transition-colors">Vida y Retiro</a></li>
                            <li><a href="#socios" className="text-brand-silver hover:text-brand-blue transition-colors">ART Empresas</a></li>
                            <li><a href="#contacto" className="text-brand-silver hover:text-brand-blue transition-colors">Caución</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-xl mb-6 text-white">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="text-brand-silver">Año 1852 Nº 8, El Palomar</li>
                            <li className="text-brand-silver font-normal">Buenos Aires, Argentina</li>
                            <li><a href="mailto:cosciaasesores@gmail.com" className="text-white hover:text-brand-blue font-bold transition-colors">cosciaasesores@gmail.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-brand-slate text-sm">
                        © {new Date().getFullYear()} Coscia Asesores. Todos los derechos reservados.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="text-brand-slate hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-brand-slate hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-brand-slate hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
