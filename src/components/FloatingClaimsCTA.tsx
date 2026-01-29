"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function FloatingClaimsCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Mostrar después de 2 segundos de scroll o inmediatamente si ya scrolleó
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            }
        };

        // Mostrar siempre después de 3 segundos
        const timer = setTimeout(() => setIsVisible(true), 3000);

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    className="fixed right-6 bottom-24 md:bottom-6 z-40"
                >
                    <Link
                        href="/siniestros"
                        className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 group"
                    >
                        <AlertCircle className="w-6 h-6 animate-pulse" />
                        <div className="hidden md:block">
                            <div className="font-bold text-sm leading-tight">
                                ¿Tuviste un siniestro?
                            </div>
                            <div className="text-xs text-red-100">
                                Reportalo aquí →
                            </div>
                        </div>
                        <span className="md:hidden font-bold">
                            Siniestro
                        </span>
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
