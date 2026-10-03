"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

// Header de páginas secundarias (siniestros, coberturas): logo + "Volver al inicio", barra fija a todo el ancho.
export function SubpageHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 w-full bg-brand-navy py-3 px-6 transition-shadow duration-300 ${isScrolled ? "shadow-2xl border-b border-white/10" : ""
                    }`}
            >
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                            <Image
                                src="/logo-oficial.png"
                                alt="Coscia Asesores Logo"
                                fill
                                sizes="40px"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <span className="font-black tracking-tighter text-white uppercase flex flex-col leading-none text-lg">
                            Coscia Asesores <span className="text-brand-cyan text-[10px] tracking-widest font-medium mt-0.5">Productores de Seguros</span>
                        </span>
                    </Link>

                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-brand-silver hover:text-white transition-colors font-bold text-sm"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="hidden sm:inline">Volver al inicio</span>
                    </Link>
                </div>
            </header>

            {/* Spacer for fixed header */}
            <div className="h-16" />
        </>
    );
}
