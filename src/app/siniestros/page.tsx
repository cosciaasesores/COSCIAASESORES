"use client";

import { ClaimsReport } from "@/components/sections/ClaimsReport";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function SiniestrosPage() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className="min-h-screen bg-white">
            {/* Simple Header - Matches Navbar pill behavior */}
            <header
                className={`fixed z-50 transition-all duration-500 ease-out ${isScrolled
                    ? "top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[80%] lg:w-[60%] rounded-full bg-brand-navy/95 backdrop-blur-lg py-3 px-8 border border-white/10 shadow-2xl"
                    : "top-0 left-0 right-0 w-full bg-brand-navy py-6 px-6"
                    }`}
            >
                <div className={`mx-auto flex justify-between items-center transition-all ${isScrolled ? "w-full" : "container"
                    }`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className={`relative rounded-full bg-white/10 overflow-hidden transition-all ${isScrolled ? "w-10 h-10" : "w-12 h-12"
                            }`}>
                            <Image
                                src="/logoCoscia.png"
                                alt="Coscia Asesores Logo"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <span className={`font-black tracking-tighter text-white uppercase flex flex-col leading-none transition-all ${isScrolled ? "text-lg" : "text-xl"
                            }`}>
                            Coscia Asesores <span className="text-brand-cyan text-[10px] tracking-widest font-medium mt-0.5">Productores de Seguros</span>
                        </span>
                    </Link>

                    {/* Back Button */}
                    <Link
                        href="/"
                        className={`inline-flex items-center gap-2 text-brand-silver hover:text-white transition-all font-bold ${isScrolled ? "text-xs" : "text-sm"
                            }`}
                    >
                        <ArrowLeft className={`transition-all ${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} />
                        <span className="hidden sm:inline">Volver al inicio</span>
                    </Link>
                </div>
            </header>

            {/* Spacer for fixed header */}
            <div className="h-24" />

            <ClaimsReport />

            {/* Footer */}
            <footer className="bg-brand-navy text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-brand-silver">
                        © {new Date().getFullYear()} Coscia Asesores de Seguros. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </main>
    );
}
