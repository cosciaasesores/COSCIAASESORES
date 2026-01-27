"use client";

import { cn } from "@/lib/utils";

const partners = [
    { name: "Allianz", logo: "🛡️ Allianz" },
    { name: "Sancor", logo: "🔷 Sancor Seguros" },
    { name: "Mercantil", logo: "🏦 Mercantil Andina" },
    { name: "Zurich", logo: "⚡ Zurich" },
    { name: "Federacion", logo: "🇦🇷 Federación Patronal" },
    { name: "Chubb", logo: "🔒 Chubb" },
];

export function PartnersMarquee() {
    return (
        <div className="w-full overflow-hidden bg-brand-navy/50 py-6 border-y border-white/5 backdrop-blur-sm">
            <div className="flex animate-marquee gap-16 min-w-full">
                {/* First Loop */}
                {partners.map((partner, index) => (
                    <div key={index} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
                        <span className="text-xl md:text-2xl font-display font-bold text-white whitespace-nowrap">
                            {partner.logo}
                        </span>
                    </div>
                ))}
                {/* Second Loop for seamless scroll */}
                {partners.map((partner, index) => (
                    <div key={`clone-${index}`} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
                        <span className="text-xl md:text-2xl font-display font-bold text-white whitespace-nowrap">
                            {partner.logo}
                        </span>
                    </div>
                ))}
                {/* Third Loop for safety on wide screens */}
                {partners.map((partner, index) => (
                    <div key={`clone-2-${index}`} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
                        <span className="text-xl md:text-2xl font-display font-bold text-white whitespace-nowrap">
                            {partner.logo}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
