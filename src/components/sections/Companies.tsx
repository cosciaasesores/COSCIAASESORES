import Image from "next/image";
import { insurers } from "@/data/insurers";
import { Marquee } from "@/components/ui/Marquee";

export function Companies() {
    const logos = insurers.map((insurer) => (
        <div key={insurer.logo} className="relative w-28 h-10 md:w-36 md:h-12">
            <Image
                src={insurer.logo}
                alt={insurer.name}
                fill
                sizes="144px"
                className="object-contain"
                style={insurer.scale ? { transform: `scale(${insurer.scale})` } : undefined}
            />
        </div>
    ));

    return (
        <section id="socios" className="py-12 md:py-16 bg-white border-y border-slate-100 font-sans scroll-mt-24">
            <div className="container mx-auto px-6 text-center mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-navy mb-3">
                    Trabajamos con las mejores aseguradoras
                </h2>
                <p className="text-brand-body md:text-lg">
                    No trabajamos para una aseguradora. <span className="text-brand-blue font-semibold">Trabajamos para vos.</span>
                </p>
            </div>

            <Marquee
                items={logos}
                duration={45}
                gapClass="gap-10 pr-10 md:gap-16 md:pr-16"
                className="py-4"
                ariaLabel="Aseguradoras con las que trabajamos"
            />
        </section>
    );
}
