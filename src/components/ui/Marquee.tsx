import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    items: ReactNode[];
    // Duración de una vuelta completa, en segundos.
    duration?: number;
    // Separación entre ítems (clase de Tailwind aplicada como gap y padding final).
    gapClass?: string;
    className?: string;
    ariaLabel?: string;
}

/*
 * Marquesina CSS continua en todos los tamaños (ver .marquee en globals.css).
 * Se pausa con hover/foco/toque. Con prefers-reduced-motion queda como scroll manual.
 */
export function Marquee({ items, duration = 40, gapClass = "gap-6 pr-6", className, ariaLabel }: MarqueeProps) {
    const group = (hidden: boolean) => (
        <div
            className={cn("flex shrink-0 items-stretch", gapClass, hidden && "marquee-dup")}
            aria-hidden={hidden || undefined}
        >
            {items.map((item, i) => (
                <div key={i} className="shrink-0" inert={hidden || undefined}>
                    {item}
                </div>
            ))}
        </div>
    );

    return (
        <div
            role="region"
            aria-label={ariaLabel}
            className={cn(
                "marquee overflow-hidden",
                "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                "[mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]",
                "md:[mask-image:linear-gradient(to_right,transparent,black_64px,black_calc(100%-64px),transparent)]",
                className
            )}
        >
            <div
                className="marquee-track flex w-max"
                style={{ ["--marquee-duration" as string]: `${duration}s` }}
            >
                {group(false)}
                {group(true)}
            </div>
        </div>
    );
}
