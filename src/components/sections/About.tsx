"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface OwnerPhotos {
    gustavo?: string;
    nahuel?: string;
}

export function About({ ownerPhotos = {} }: { ownerPhotos?: OwnerPhotos }) {
    const owners = [
        {
            name: "Gustavo Juan Coscia",
            role: "Fundador · PAS Matrícula 52.032",
            initials: "GC",
            photo: ownerPhotos.gustavo,
            bio: [
                "Con más de 25 años en el mercado asegurador, acompaña a personas, familias, comercios y empresas en la protección de sus bienes y actividades.",
                "Su trayectoria y conocimiento del sector son la base sobre la que se construyó Coscia Asesores.",
            ],
        },
        {
            name: "Nahuel Ignacio Coscia Fernández",
            role: "PAS Matrícula 93.900 · Abogado especializado en accidentes de tránsito",
            initials: "NC",
            photo: ownerPhotos.nahuel,
            bio: [
                "Hace más de 10 años forma parte de Coscia Asesores, aportando una mirada comercial, técnica y jurídica al asesoramiento de cada cliente.",
                "Su experiencia suma un acompañamiento más integral, especialmente ante siniestros.",
            ],
        },
    ];

    return (
        <section id="nosotros" className="py-16 md:py-24 bg-slate-100/60 relative overflow-hidden font-sans scroll-mt-24">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-brand-navy">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-widest text-xs mb-6"
                    >
                        <span className="w-8 h-px bg-brand-blue/50" />
                        Quiénes Somos
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight"
                    >
                        Las personas detrás de <br className="hidden md:block" />
                        <span className="text-brand-blue">Coscia Asesores.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-body text-lg leading-relaxed"
                    >
                        En Coscia Asesores combinamos experiencia, cercanía y asesoramiento profesional para acompañar a cada cliente en la elección y gestión de sus seguros.
                    </motion.p>
                </div>

                {/* Owners: photo alternates left/right from md */}
                <div className="mt-12 md:mt-16 space-y-6 md:space-y-8">
                    {owners.map((member, index) => {
                        const photoRight = index % 2 === 1;
                        return (
                            <motion.div
                                key={member.initials}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col items-center gap-6 md:gap-10 text-center md:text-left ${photoRight ? "md:flex-row-reverse" : "md:flex-row"}`}
                            >
                                <div className="w-40 h-40 shrink-0 rounded-full p-1 bg-linear-to-br from-brand-blue to-brand-cyan shadow-lg">
                                    {member.photo ? (
                                        <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                                            <Image
                                                src={member.photo}
                                                alt={member.name}
                                                fill
                                                sizes="160px"
                                                className="object-cover object-[center_25%]"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full rounded-full flex items-center justify-center text-4xl font-bold text-white">
                                            {member.initials}
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-brand-navy mb-1">{member.name}</h3>
                                    <div className="text-brand-blue text-sm font-bold uppercase tracking-wider mb-4">{member.role}</div>
                                    <div className="text-brand-body leading-relaxed space-y-3">
                                        {member.bio.map((line) => (
                                            <p key={line}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Shared closing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-6 md:mt-8 p-8 md:p-10 rounded-3xl bg-brand-navy text-white relative overflow-hidden border border-white/10 text-center md:text-left"
                >
                    <h3 className="text-xl font-bold mb-2">Una misma forma de trabajar</h3>
                    <p className="text-brand-silver/80 leading-relaxed">
                        Más allá de las distintas trayectorias, compartimos una misma manera de entender el servicio: asesoramiento claro, atención personalizada y acompañamiento antes, durante y después de contratar un seguro.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
