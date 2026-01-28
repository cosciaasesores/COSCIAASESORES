"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export function Team() {
    const team = [
        {
            name: "Marcelo Coscia",
            role: "Director General",
            bio: "Fundador con más de 20 años de experiencia liderando estrategias de protección patrimonial.",
            initials: "MC"
        },
        {
            name: "María Eugenia",
            role: "Gerente Comercial",
            bio: "Especialista en seguros de vida y capitalización. Su foco es la planificación financiera a largo plazo.",
            initials: "ME"
        },
        {
            name: "Equipo de Siniestros",
            role: "Atención 24/7",
            bio: "Un equipo dedicado exclusivamente a resolver tus urgencias cuando más lo necesitás.",
            initials: "ES"
        }
    ];

    return (
        <section className="py-24 bg-brand-navy border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
                    >
                        Quienes Hacen <span className="text-brand-blue">Coscia</span>
                    </motion.h2>
                    <p className="text-brand-slate text-lg max-w-2xl mx-auto">
                        Profesionales apasionados por brindar tranquilidad. No somos un call center, somos personas cuidando personas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center group hover:bg-white/10 transition-colors"
                        >
                            <div className="w-24 h-24 rounded-full bg-linear-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {member.initials}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <div className="text-brand-cyan text-sm font-bold uppercase tracking-wider mb-4">{member.role}</div>

                            <p className="text-brand-slate leading-relaxed mb-6">
                                {member.bio}
                            </p>

                            <div className="flex gap-4 mt-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors text-brand-slate">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors text-brand-slate">
                                    <Mail className="w-5 h-5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
