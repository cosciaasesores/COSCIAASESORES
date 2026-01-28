"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="conoce-coscia" className="py-24 bg-brand-navy relative overflow-hidden">
            {/* Desktop Background Elements - HIDDEN ON MOBILE */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 skew-x-12 hidden md:block pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] hidden md:block pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 text-brand-cyan font-bold uppercase tracking-widest text-xs mb-6"
                        >
                            <span className="w-8 h-px bg-brand-cyan" />
                            Nuestra Esencia
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight"
                        >
                            Más que seguros, <br />
                            <span className="text-brand-blue">Aliados Estratégicos.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-brand-slate text-lg leading-relaxed space-y-6"
                        >
                            <p>
                                En <strong>Coscia Seguros</strong>, entendemos que detrás de cada póliza hay un proyecto de vida, una empresa familiar o el sueño de una casa propia. No vendemos "papeles", vendemos la certeza de que, pase lo que pase, vas a poder seguir adelante.
                            </p>
                            <p>
                                Con una trayectoria basada en la <strong>ética innegociable</strong>, combinamos la calidez del asesoramiento tradicional con la agilidad de la tecnología moderna para estar siempre un paso adelante de tus necesidades.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-8 mt-12 border-t border-white/10 pt-8">
                            <div>
                                <div className="text-4xl font-bold text-white mb-2">+15</div>
                                <div className="text-sm text-brand-slate uppercase tracking-wider">Años de Trayectoria</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-2">+2000</div>
                                <div className="text-sm text-brand-slate uppercase tracking-wider">Clientes Activos</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        {/* Abstract Visual Representation instead of generic stock photo */}
                        <div className="aspect-square rounded-3xl overflow-hidden bg-linear-to-br from-brand-blue/20 to-brand-navy border border-white/10 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                                alt="Visión 360"
                                fill
                                className="object-cover opacity-40 mix-blend-overlay hover:scale-105 transition-transform duration-700"
                            />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl max-w-xs text-center">
                                    <div className="text-white font-bold text-xl mb-2">Visión 360°</div>
                                    <p className="text-brand-slate text-sm">
                                        Analizamos todos los riesgos, incluso los que no se ven.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
