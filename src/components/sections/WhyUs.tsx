"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessagesSquare, Scale, HeartHandshake, Users } from "lucide-react";

export function WhyUs() {
    const reasons = [
        {
            icon: MessagesSquare,
            title: "Hablás directamente con tu asesor",
            desc: "Te ayudamos a entender qué estás contratando y cuáles son los alcances de tu cobertura.",
        },
        {
            icon: Scale,
            title: "Comparamos distintas compañías",
            desc: "Evaluamos alternativas teniendo en cuenta las coberturas, las condiciones de contratación y el precio.",
        },
        {
            icon: HeartHandshake,
            title: "Te acompañamos ante un siniestro",
            desc: "Te orientamos sobre la documentación necesaria y te ayudamos con el seguimiento de la gestión ante tu compañía.",
        },
        {
            icon: Users,
            title: "Más de 25 años de trayectoria",
            desc: "Experiencia y atención personalizada para particulares, profesionales y empresas.",
        },
    ];

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const animateX = isMobile ? { initial: { opacity: 1, x: 0 }, whileInView: { opacity: 1, x: 0 } } : { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 } };
    const animateY = (delay = 0) => isMobile ? {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay: 0 }
    } : {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay }
    };

    return (
        <section id="por-que-elegirnos" className="py-16 md:py-24 bg-white relative scroll-mt-24">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-3xl mb-10 md:mb-14">
                    <motion.div
                        {...animateX}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-xs mb-6"
                    >
                        <span className="w-8 h-px bg-brand-blue" />
                        Por qué elegirnos
                    </motion.div>

                    <motion.h2
                        {...animateY(0.1)}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold text-brand-navy leading-tight pb-1"
                    >
                        Asesoramiento y acompañamiento <span className="text-brand-blue">personalizado.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            {...animateY(index * 0.1 + 0.2)}
                            viewport={{ once: true }}
                            className="group p-6 md:p-7 rounded-3xl bg-slate-50 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:bg-white"
                        >
                            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                <reason.icon className="w-6 h-6 text-brand-blue" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold text-brand-navy leading-snug mb-3">{reason.title}</h3>
                            <p className="text-brand-body text-[15px] leading-relaxed">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
