"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Roberto Méndez",
            role: "Dueño de Pyme",
            content: "La rapidez con la que resolvieron el siniestro de mi flota fue increíble. En 48hs tenía todo liquidado. Unos genios.",
            stars: 5
        },
        {
            name: "Ana Laura Gutiérrez",
            role: "Seguro de Hogar",
            content: "Excelente atención. Me asesoraron para no pagar de más y tener la cobertura justa que necesitaba mi casa.",
            stars: 5
        },
        {
            name: "Carlos Echeverría",
            role: "Gerente Comercial",
            content: "Coscia Asesores nos brinda la tranquilidad que nuestra empresa necesita. Profesionales, éticos y siempre presentes.",
            stars: 5
        },
        {
            name: "Lucía Fernández",
            role: "Profesional Independiente",
            content: "Contraté el seguro de retiro y la atención fue súper personalizada. Me explicaron cada detalle con mucha paciencia.",
            stars: 5
        },
        {
            name: "Martín Rodríguez",
            role: "Seguro Automotor",
            content: "Tuve un choque leve y por WhatsApp me guiaron en el momento. La app para cargar fotos es muy cómoda.",
            stars: 5
        },
        {
            name: "Elena Vázquez",
            role: "Comercio Minorista",
            content: "Aseguré mi local con ellos y me salvaron tras una inundación. La respuesta fue inmediata y humana.",
            stars: 5
        },
        {
            name: "Jorge Schmidt",
            role: "Consorcio Edificio",
            content: "Llevamos años con Marcelo y su equipo. La solvencia de las compañías que recomiendan es su mayor diferencial.",
            stars: 5
        },
        {
            name: "Sofía Martínez",
            role: "Seguro de Vida",
            content: "Buscaba protección para mis hijos y encontré un equipo que realmente se preocupa por las personas.",
            stars: 5
        },
        {
            name: "Daniela Rossi",
            role: "Accidentes Personales",
            content: "Como monotributista, necesitaba algo ágil para entrar a las obras. Me enviaron el certificado en minutos.",
            stars: 5
        },
        {
            name: "Ricardo Gómez",
            role: "Seguro de Moto",
            content: "El mejor precio que conseguí para mi moto y con una cobertura de granizo que otros no me daban.",
            stars: 5
        }
    ];

    // Double the array for seamless loop
    const doubledTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 mb-16">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">
                        Confianza <span className="text-brand-blue">Confirmada</span>
                    </h2>
                    <p className="text-brand-slate text-lg max-w-2xl mx-auto">
                        No lo decimos nosotros, lo dicen quienes ya protegen su futuro con Coscia.
                    </p>
                </div>
            </div>

            {/* Scrolling Track */}
            <div className="flex overflow-hidden relative group">
                {/* Fade overlays */}
                <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex gap-8 px-4 hover:[animation-play-state:paused]"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 80, // Velocidad extremadamente lenta
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {doubledTestimonials.map((t, i) => (
                        <div
                            key={i}
                            className="w-[350px] md:w-[450px] shrink-0 p-8 rounded-3xl border border-slate-100 bg-slate-50 transition-all duration-300 hover:bg-white hover:shadow-xl relative flex flex-col"
                        >
                            <Quote className="w-10 h-10 text-brand-blue/10 absolute top-6 right-6" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.stars)].map((_, si) => (
                                    <Star key={si} className="w-5 h-5 fill-brand-blue text-brand-blue" />
                                ))}
                            </div>

                            <p className="text-brand-slate mb-8 leading-relaxed italic font-normal text-lg">
                                "{t.content}"
                            </p>

                            <div className="mt-auto">
                                <div className="font-bold text-brand-navy text-xl">{t.name}</div>
                                <div className="text-brand-blue text-sm font-medium uppercase tracking-wider">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
