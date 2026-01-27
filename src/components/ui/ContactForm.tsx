"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactForm() {
    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-blue/5"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-bold mb-2">Nombre Completo</label>
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    />
                </div>
            </div>
            <div className="mb-6">
                <label className="block text-sm font-bold mb-2">Servicio de Interés</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all appearance-none bg-white">
                    <option>Seleccionar opción</option>
                    <option>Seguro Automotor</option>
                    <option>Seguro de Hogar</option>
                    <option>Seguro de Vida</option>
                    <option>Otros</option>
                </select>
            </div>
            <div className="mb-8">
                <label className="block text-sm font-bold mb-2">Mensaje</label>
                <textarea
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                ></textarea>
            </div>
            <button
                className="w-full py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-navy/90 transition-all flex items-center justify-center gap-2"
            >
                Enviar Mensaje <Send className="w-5 h-5" />
            </button>
        </motion.form>
    );
}
