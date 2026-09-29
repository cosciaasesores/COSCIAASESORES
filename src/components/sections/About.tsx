"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Headset, Users } from "lucide-react";

interface OwnerPhotos {
    gustavo?: string;
    nahuel?: string;
}

export function About({ ownerPhotos = {} }: { ownerPhotos?: OwnerPhotos }) {
    const owners = [
        {
            name: "Coscia Gustavo Juan",
            role: "PAS Matrícula 52.032",
            initials: "GC",
            photo: ownerPhotos.gustavo,
        },
        {
            name: "Dr. Coscia Fernandez Nahuel Ignacio",
            role: "PAS Matrícula 93.900",
            initials: "NC",
            photo: ownerPhotos.nahuel,
        },
    ];

    return (
        <section id="nosotros" className="py-16 md:py-24 bg-slate-100/60 relative overflow-hidden font-sans scroll-mt-24">
            <div className="container mx-auto px-6 lg:px-12 relative z-10 text-brand-navy">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    <div className="lg:w-1/2">
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
                            className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight"
                        >
                            Más que seguros, <br />
                            <span className="text-brand-blue">somos tu aliado estratégico.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-brand-body text-lg leading-relaxed space-y-6"
                        >
                            <p>
                                En <strong>Coscia Asesores Productores de Seguros</strong>, entendemos que detrás de cada bien a cubrir hay un proyecto de vida, una empresa familiar o el sueño de una casa propia. No vendemos &quot;papeles&quot;, vendemos la certeza de que, pase lo que pase, vas a poder seguir adelante.
                            </p>
                            <p>
                                Con una trayectoria basada en la <strong>ética innegociable</strong>, buscamos constantemente la satisfacción de nuestros clientes ante cualquier eventualidad. Respaldando cada gestión con transparencia, valores y compromiso.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10 border-t border-slate-200 pt-8 items-center">
                            <div className="text-center flex flex-col items-center">
                                <ShieldCheck className="w-8 h-8 text-brand-blue/60 mb-2" />
                                <div className="text-xs md:text-sm text-slate-600 uppercase tracking-wider font-semibold">Respaldo Total</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold mb-1 text-brand-navy">+25</div>
                                <div className="text-xs md:text-sm text-slate-600 uppercase tracking-wider font-semibold">Años de Trayectoria</div>
                            </div>
                            <div className="text-center flex flex-col items-center">
                                <Headset className="w-8 h-8 text-brand-blue/60 mb-2" />
                                <div className="text-xs md:text-sm text-slate-600 uppercase tracking-wider font-semibold">Asesoría 24/7</div>
                            </div>
                        </div>
                    </div>

                    {/* Owners */}
                    <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {owners.map((member, index) => (
                            <motion.div
                                key={member.initials}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm"
                            >
                                <div className="w-40 h-40 rounded-full p-1 bg-linear-to-br from-brand-blue to-brand-cyan mb-6 shadow-lg">
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

                                <h3 className="text-xl font-bold text-brand-navy mb-1">{member.name}</h3>
                                <div className="text-brand-blue text-sm font-bold uppercase tracking-wider">{member.role}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Commercial Team Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 md:mt-16 p-8 md:p-10 rounded-3xl bg-brand-navy text-white relative overflow-hidden border border-white/10"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                            <Users className="w-8 h-8 text-brand-cyan" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold mb-2">Nuestro Equipo Comercial y Administrativo</h3>
                            <p className="text-brand-silver/80 leading-relaxed">
                                Contamos con un equipo de profesionales especializados en atención al cliente, gestión de siniestros y administración, comprometidos día a día para brindarte el respaldo y la rapidez que merecés.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
