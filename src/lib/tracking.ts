import { ADS_CONVERSION_LABELS, ADS_ID } from "./site";

export type LeadChannel = keyof typeof ADS_CONVERSION_LABELS;

type TrackFn = (...args: unknown[]) => void;

function getFn(name: "gtag" | "fbq"): TrackFn | null {
    if (typeof window === "undefined") return null;
    const fn = (window as unknown as Record<string, unknown>)[name];
    return typeof fn === "function" ? (fn as TrackFn) : null;
}

// Registra un clic hacia WhatsApp o el cotizador. Nunca debe romper la navegación.
export function trackLead(channel: LeadChannel, location: string) {
    try {
        const gtag = getFn("gtag");
        if (gtag) {
            gtag("event", "generate_lead", { method: channel, location });
            const label = ADS_CONVERSION_LABELS[channel];
            if (label) {
                gtag("event", "conversion", { send_to: `${ADS_ID}/${label}` });
            }
        }
        getFn("fbq")?.("track", "Contact", { content_name: channel });
    } catch {
        // El tracking es opcional.
    }
}
