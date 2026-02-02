"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Shield } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="relative font-sans">
            {/* Simple Footer Section */}
            <div className="bg-brand-navy text-white py-8 border-t border-white/5">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-brand-silver/40 text-xs">
                        © {new Date().getFullYear()} Coscia Asesores de Seguros. Todos los derechos reservados.
                    </p>
                    <p className="text-brand-silver/40 text-xs">
                        Productor Asesor de Seguros inscripto en la SSN.
                    </p>
                </div>
            </div>

            {/* SSN Banner (Legales Mandatory) */}
            <div className="bg-white py-3 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-[10px] md:text-sm text-slate-500 font-sans">

                        <div className="flex flex-col items-center gap-1 min-w-[150px] text-center">
                            <span className="uppercase tracking-widest text-[9px] text-slate-400">Nº de matrícula SSN</span>
                            <span className="text-base font-light text-slate-600">52.032 / 93.900</span>
                        </div>

                        <div className="h-px w-full lg:h-8 lg:w-px bg-slate-100" />

                        <div className="flex flex-col items-center max-w-[250px] text-center">
                            <span className="uppercase tracking-wider text-[9px] text-slate-400 leading-tight">
                                Departamento de Orientación y Asistencia al Asegurado
                            </span>
                        </div>

                        <div className="h-px w-full lg:h-8 lg:w-px bg-slate-100" />

                        <div className="flex flex-col items-center min-w-[120px] text-center">
                            <span className="text-base font-light text-slate-600">0800-666-8400</span>
                        </div>

                        <div className="h-px w-full lg:h-8 lg:w-px bg-slate-100" />

                        <div className="flex flex-col items-center min-w-[150px] text-center">
                            <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-slate-600 hover:text-brand-blue transition-colors">
                                www.argentina.gob.ar/ssn
                            </a>
                        </div>

                        <div className="h-px w-full lg:h-8 lg:w-px bg-slate-100" />

                        <div className="relative w-[240px] h-[40px] opacity-90">
                            <Image
                                src="/SSN_Argentina_logo.png"
                                alt="SSN - Superintendencia de Seguros de la Nación"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
