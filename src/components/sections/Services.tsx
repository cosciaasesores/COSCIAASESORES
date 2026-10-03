"use client";

import { coverages } from "@/data/coverages";
import { CoverageTile } from "../ui/CoverageTile";

export function Services() {
    return (
        <section id="servicios" className="py-16 md:py-24 bg-slate-100/60 scroll-mt-24">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestras Coberturas</h2>
                    <p className="text-brand-body text-lg">
                        Ofrecemos una amplia gama de coberturas diseñadas para adaptarse a cada necesidad específica. Elegí la que te interesa y conocé todos los detalles.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
                    {coverages.map((coverage, index) => (
                        <CoverageTile
                            key={coverage.slug}
                            slug={coverage.slug}
                            title={coverage.title}
                            icon={coverage.icon}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
