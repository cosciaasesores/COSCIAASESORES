"use client";

import { motion } from "framer-motion";

const partners = [
    "ALLIANZ", "SURA", "SAN CRISTÓBAL", "MAPFRE", "RIVADAVIA", "FEDERACIÓN PATRONAL"
];

export function Partners() {
    return (
        <section id="socios" className="py-20 bg-white border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-slate mb-4">Trabajamos con las mejores</p>
                    <h2 className="text-2xl font-bold">Compañías Líderes</h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
                    {partners.map((partner, i) => (
                        <span key={i} className="text-xl md:text-2xl font-black tracking-tighter hover:text-brand-blue cursor-default">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
