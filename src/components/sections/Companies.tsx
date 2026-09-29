import type { CSSProperties } from "react";
import Image from "next/image";
import { insurers, type Insurer } from "@/data/insurers";
import { Marquee } from "@/components/ui/Marquee";

// Todos los logos ocupan la misma superficie (px² en desktop): los anchos quedan más bajos
// y los cuadrados más altos, así se perciben del mismo tamaño. En mobile se usa el 80%.
const LOGO_AREA = 6800;
const MAX_HEIGHT = 64;
const MAX_WIDTH = 180;
const MOBILE_FACTOR = 0.8;

function logoBox({ width, height }: Insurer, scale = 1) {
    const ratio = width / height;
    let h = Math.sqrt(LOGO_AREA / ratio);
    let w = h * ratio;
    if (h > MAX_HEIGHT) {
        h = MAX_HEIGHT;
        w = h * ratio;
    }
    if (w > MAX_WIDTH) {
        w = MAX_WIDTH;
        h = w / ratio;
    }
    // El ajuste fino va después de los topes para que también afecte a los logos que los tocan.
    return { w: w * scale, h: h * scale };
}

export function Companies() {
    const logos = insurers.map((insurer) => {
        const mobile = logoBox(insurer, (insurer.scale ?? 1) * MOBILE_FACTOR);
        const desktop = logoBox(insurer, insurer.desktopScale ?? insurer.scale ?? 1);
        const px = (n: number) => `${Math.round(n)}px`;
        return (
            <div key={insurer.logo} className="flex h-full items-center">
                <div
                    className="relative w-(--mw) h-(--mh) md:w-(--w) md:h-(--h)"
                    style={{ "--mw": px(mobile.w), "--mh": px(mobile.h), "--w": px(desktop.w), "--h": px(desktop.h) } as CSSProperties}
                >
                    <Image
                        src={insurer.logo}
                        alt={insurer.name}
                        fill
                        sizes={px(desktop.w)}
                        className="object-contain"
                    />
                </div>
            </div>
        );
    });

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
