"use client";

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "./ui/ContactForm";

export function Contact() {
    return (
        <section id="contacto" className="py-section bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="lg:w-1/3">
                        <h2 className="text-4xl font-bold mb-6">Hablemos</h2>
                        <p className="text-brand-slate mb-10">
                            ¿Tenés dudas sobre tu póliza o necesitás una cotización a medida?
                            Estamos para asesorarte.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-brand-blue" />
                                </div>
                                <div>
                                    <div className="font-bold">Teléfono</div>
                                    <div className="text-brand-slate">+54 (11) 1234-5678</div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-brand-blue" />
                                </div>
                                <div>
                                    <div className="font-bold">Email</div>
                                    <div className="text-brand-slate">info@cosciaseguros.com.ar</div>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-brand-blue" />
                                </div>
                                <div>
                                    <div className="font-bold">Oficina</div>
                                    <div className="text-brand-slate">Buenos Aires, Argentina</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3">
                        <ContactForm />
                    </div>

                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/541112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group"
            >
                <MessageCircle className="w-8 h-8" />
                <span className="absolute right-full mr-4 bg-white text-brand-navy px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    ¿Dudas? Chateá con nosotros
                </span>
            </a>
        </section>
    );
}
