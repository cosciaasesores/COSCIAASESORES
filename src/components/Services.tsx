"use client";

import { Car, Home, Heart, UserCheck, Briefcase } from "lucide-react";
import { ServiceCard } from "./ui/ServiceCard";

const services = [
    {
        title: "Seguro Automotor",
        description: "Protección integral para tu vehículo con las mejores coberturas de responsabilidad civil y daños.",
        icon: Car,
        color: "bg-blue-500/10",
        textColor: "text-blue-500",
    },
    {
        title: "Seguro de Hogar",
        description: "Resguarda tu casa y tus pertenencias ante cualquier imprevisto. Tranquilidad para tu familia.",
        icon: Home,
        color: "bg-emerald-500/10",
        textColor: "text-emerald-500",
    },
    {
        title: "Seguro de Vida",
        description: "Asegura el futuro financiero de tus seres queridos con planes flexibles y adaptables.",
        icon: Heart,
        color: "bg-rose-500/10",
        textColor: "text-rose-500",
    },
    {
        title: "Accidentes Personales",
        description: "Cobertura 24hs frente a accidentes que puedan afectar tu integridad física o capacidad laboral.",
        icon: UserCheck,
        color: "bg-amber-500/10",
        textColor: "text-amber-500",
    },
    {
        title: "Seguros para Empresas / ART",
        description: "Protección especializada para tu comercio, industria o empleados. Cumplimiento legal y técnico.",
        icon: Briefcase,
        color: "bg-purple-500/10",
        textColor: "text-purple-500",
    },
];

export function Services() {
    return (
        <section id="servicios" className="py-section bg-white dark:bg-brand-royal/20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestras Soluciones</h2>
                    <p className="text-brand-slate text-lg">
                        Ofrecemos una amplia gama de coberturas diseñadas para adaptarse
                        a cada necesidad específica, brindando seguridad en cada paso.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
