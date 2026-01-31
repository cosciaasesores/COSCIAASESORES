"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Shield } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-brand-navy text-white py-8 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <p className="text-brand-slate text-sm">
                    © {new Date().getFullYear()} Coscia Asesores de Seguros. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
