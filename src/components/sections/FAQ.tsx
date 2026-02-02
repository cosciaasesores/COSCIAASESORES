"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
    const questions = [
        {
            q: "¿Cómo cotizo mi seguro?",
            a: "Es muy simple, podés hacer clic en el botón de WhatsApp para comunicarte directamente con nosotros o completar el formulario de contacto. Te estaremos respondiendo a la brevedad con la respuesta a tu consulta."
        },
        {
            q: "¿Qué necesito para contratar el seguro?",
            a: "Depende de cada caso, para Automotores y Motovehículos vamos a necesitar Frente de cédula verde y el año del vehículo o el título del mismo. Sumado a fotos, DNI frente y dorso de la persona que va a ser la titular de la póliza, una dirección de mail y la forma de pago elegida. En los demás riesgos va a depender de cada caso puntual, por ejemplo en seguros de hogar o comercio con decirnos la dirección del riesgo y lo que necesitás que cubramos es suficiente. ¡Vamos a podemos gestionar el plan a tu medida!"
        },
        {
            q: "¿Cuál es la vigencia del seguro?",
            a: "El contrato de seguro dura un año salvo que por la naturaleza del riesgo se calcule un tiempo distinto. Lo que si puede variar es la refacturación de la póliza, que puede ser Mensual, Trimestral, Cuatrimestral, Semestral y/o Anual dependiendo de cada caso."
        },
        {
            q: "¿Cuándo comienza la cobertura?",
            a: "La cobertura siempre comienza a las 12 horas del día que se inicia la vigencia y termina a las 12 horas del último día que figura en el plazo establecido."
        },
        {
            q: "¿Cuáles son las formas de pago?",
            a: "Las formas de pago aceptadas son: Efectivo por Rapipago o Pagofácil, Débito mediante CBU, Tarjetas de crédito, Home Banking y Plataformas digitales (por ejemplo Mercado Pago)."
        },
        {
            q: "¿Cuándo puedo solicitar la baja de mi seguro?",
            a: "En cualquier momento se puede solicitar la rescisión del contrato sin expresar causa alguna. En caso que corresponda se deberá abonar proporcionalmente la prima devengada por el tiempo transcurrido."
        },
        {
            q: "¿Qué hago si tengo un accidente o siniestro?",
            a: "Comunicate con nosotros mediante nuestro botón de siniestros, allí podrás cargar todos los datos necesarios para que podamos ingresar el mismo o directamente por WhatsApp. En caso que falte alguna documentación nos contactamos. También en el apartado de siniestro encontrarás preguntas frecuentes para saber todos los datos necesarios para la gestión."
        },
        {
            q: "¿En qué me beneficia contratar mi seguro mediante un productor asesor de seguros?",
            a: "No solo contratás una póliza, sino asesoramiento profesional y acompañamiento permanente. Estamos capacitados para entender tus necesidades y aconsejarte en cada etapa, para que la gestión de tu seguro no sea solo un trámite, sino una experiencia clara y simple. Analizamos cada situación y adaptamos la cobertura para que obtengas la mejor relación entre cobertura y costo."
        },
        {
            q: "¿Cuentan con atención presencial?",
            a: "Sí, estamos ubicados en la Calle Año 1852 N.º 8, El Palomar."
        },
        {
            q: "¿Cuáles son los horarios de atención?",
            a: "De Lunes a Viernes de 09:00 a 17:00 para atención presencial con cita previa, luego podés seguir en contacto con nosotros de manera online para urgencias. ¡Siempre que estemos disponibles vamos a responderte!"
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-slate-50 relative font-sans">
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] hidden md:block" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">
                        Preguntas <span className="text-brand-blue">Frecuentes</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {questions.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden shadow-xs hover:shadow-md
                                ${openIndex === index
                                    ? "bg-white border-brand-blue/30"
                                    : "bg-white border-slate-100 hover:bg-slate-50"
                                }`
                            }
                        >
                            <div className="p-6 flex items-center justify-between gap-4">
                                <h3 className={`text-lg font-bold transition-colors ${openIndex === index ? "text-brand-blue" : "text-brand-navy"}`}>
                                    {item.q}
                                </h3>
                                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? "bg-brand-blue text-white" : "bg-slate-100 text-brand-slate"}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </div>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-brand-slate leading-relaxed border-t border-slate-100 pt-4">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
