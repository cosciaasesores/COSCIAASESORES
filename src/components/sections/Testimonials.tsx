"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { reviews, type Review } from "@/data/reviews";
import { GOOGLE_REVIEWS_COUNT, GOOGLE_REVIEWS_URL } from "@/lib/site";
import { Marquee } from "@/components/ui/Marquee";

const AVATAR_COLORS = ["bg-blue-600", "bg-emerald-600", "bg-amber-600", "bg-rose-600", "bg-violet-600", "bg-cyan-700"];

export function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        </svg>
    );
}

export function Stars({ count = 5, className = "w-4 h-4" }: { count?: number; className?: string }) {
    return (
        <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className={className} aria-hidden="true">
                    <path
                        fill={i < count ? "#FBBC04" : "#E2E8F0"}
                        d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.9l-5.25 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z"
                    />
                </svg>
            ))}
        </div>
    );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
    const textRef = useRef<HTMLParagraphElement>(null);
    const [expanded, setExpanded] = useState(false);
    const [clamped, setClamped] = useState(false);

    useEffect(() => {
        const el = textRef.current;
        if (el && !expanded) setClamped(el.scrollHeight > el.clientHeight + 1);
    }, [expanded]);

    return (
        <article className="w-[82vw] max-w-sm md:w-95 h-full p-6 md:p-7 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
                <div
                    className={`w-10 h-10 rounded-full ${AVATAR_COLORS[index % AVATAR_COLORS.length]} text-white font-bold flex items-center justify-center shrink-0`}
                    aria-hidden="true"
                >
                    {review.name.trim().charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                    <div className="font-bold text-brand-navy truncate">{review.name}</div>
                    <Stars count={review.stars} />
                </div>
                <GoogleIcon className="w-5 h-5 shrink-0" />
            </div>

            <p
                ref={textRef}
                className={`text-brand-body leading-relaxed whitespace-pre-line ${expanded ? "" : "line-clamp-6"}`}
            >
                {review.text}
            </p>

            {(clamped || expanded) && (
                <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    className="mt-3 self-start text-sm font-semibold text-brand-blue hover:underline"
                >
                    {expanded ? "Leer menos" : "Leer más"}
                </button>
            )}
        </article>
    );
}

export function Testimonials() {
    const cards = reviews.map((review, i) => <ReviewCard key={review.name} review={review} index={i} />);

    return (
        <section id="resenas" className="py-16 md:py-24 bg-slate-100/60 font-sans scroll-mt-24">
            <div className="container mx-auto px-6 mb-10 md:mb-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-5">
                        Confianza <span className="text-brand-blue">Confirmada</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
                        <div className="flex items-center gap-2">
                            <GoogleIcon className="w-6 h-6" />
                            <Stars className="w-5 h-5" />
                            <span className="font-semibold text-brand-navy">{GOOGLE_REVIEWS_COUNT} reseñas en Google</span>
                        </div>
                        <a
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-300 bg-white text-sm font-semibold text-brand-navy hover:border-brand-blue hover:text-brand-blue transition-colors"
                        >
                            Ver todas en Google
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <Marquee items={cards} duration={70} ariaLabel="Reseñas de clientes en Google" className="py-2" />
        </section>
    );
}
