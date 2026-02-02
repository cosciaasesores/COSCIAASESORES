"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export function Team() {
    const owners = [
        {
            name: "Gustavo Juan Coscia",
            role: "PAS Matricula 52.032",
            bio: "Socio Fundador con más de 30 años de trayectoria garantizando el profesionalismo y la ética en cada asesoramiento.",
            initials: "GC"
        },
        {
            name: "Dr. Nahuel Ignacio Coscia Fernandez",
            role: "PAS Matricula 93.900",
            bio: "Director Ejecutivo comprometido con la excelencia administrativa y la satisfacción de nuestros asegurados.",
            initials: "NC"
        }
    ];

    return (
        <section className="py-24 bg-white border-t border-slate-100 font-sans">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6"
                    >
                        Quienes <span className="text-brand-blue">Somos</span>
                    </motion.h2>
                    <p className="text-brand-slate text-lg max-w-2xl mx-auto">
                        Un equipo que combina experiencia y visión de futuro para cuidar lo que más valorás.
                    </p>
                </div>

                {/* Owners Grid - Center 2 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    {owners.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-28 h-28 rounded-full bg-linear-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {member.initials}
                            </div>

                            <h3 className="text-2xl font-bold text-brand-navy mb-1">{member.name}</h3>
                            <div className="text-brand-blue text-sm font-bold uppercase tracking-wider mb-4">{member.role}</div>

                            <p className="text-brand-slate leading-relaxed mb-6 italic">
                                &quot;{member.bio}&quot;
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Commercial Team Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-brand-navy text-white relative overflow-hidden group border border-white/10"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                            <Users className="w-10 h-10 text-brand-cyan" />
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="text-xl font-bold mb-2">Nuestro Equipo Comercial y Administrativo</h4>
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
