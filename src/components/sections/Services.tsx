"use client";

import { Car, Home, Heart, UserCheck, Briefcase, Bike, HardHat, Store, Gavel, FileCheck } from "lucide-react";
import { ServiceCard } from "../ui/ServiceCard";
import { ResilientContainer } from "../ui/ResilientContainer";

const services = [
    {
        title: "Seguro Automotor",
        description: "Protección integral para tu vehículo con las mejores coberturas de responsabilidad civil y daños.",
        icon: Car,
        color: "bg-blue-500/10",
        textColor: "text-blue-500",
        image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Seguro Motovehiculo",
        description: "Protección ágil para tu moto. Coberturas a medida para que solo te preocupes por el camino.",
        icon: Bike,
        color: "bg-cyan-500/10",
        textColor: "text-cyan-500",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Seguro Hogar",
        description: "Resguarda tu casa y tus pertenencias ante cualquier imprevisto. Tranquilidad para tu familia.",
        icon: Home,
        color: "bg-emerald-500/10",
        textColor: "text-emerald-500",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Seguro de Vida",
        description: "Asegura el futuro financiero de tus seres queridos con planes flexibles y adaptables.",
        icon: Heart,
        color: "bg-rose-500/10",
        textColor: "text-rose-500",
        image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Accidentes personales",
        description: "Cobertura 24hs frente a accidentes que puedan afectar tu integridad física o capacidad laboral.",
        icon: UserCheck,
        color: "bg-amber-500/10",
        textColor: "text-amber-500",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Seguros para ART",
        description: "Cumplimiento obligatorio y protección para tus empleados con el respaldo de las mejores aseguradoras.",
        icon: HardHat,
        color: "bg-orange-500/10",
        textColor: "text-orange-500",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Seguros para comercios",
        description: "Protegemos tu local, mercadería y herramientas de trabajo ante cualquier eventualidad.",
        icon: Store,
        color: "bg-indigo-500/10",
        textColor: "text-indigo-500",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Seguro de legales",
        description: "Asistencia jurídica y protección ante reclamos legales para blindar tu patrimonio.",
        icon: Gavel,
        color: "bg-slate-500/10",
        textColor: "text-slate-500",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Seguro de cauciones",
        description: "Garantías profesionales para contratos, obras y servicios. La seguridad que tus proyectos necesitan.",
        icon: FileCheck,
        color: "bg-teal-500/10",
        textColor: "text-teal-500",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    },
];

export function Services() {
    return (
        <section id="servicios" className="py-section bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestras Soluciones</h2>
                    <p className="text-brand-slate text-lg">
                        Ofrecemos una amplia gama de coberturas diseñadas para adaptarse
                        a cada necesidad específica, brindando seguridad en cada paso.
                    </p>
                </div>

                <ResilientContainer
                    isLoading={false}
                    isEmpty={services.length === 0}
                    emptyMessage="No hay servicios disponibles en este momento."
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                </ResilientContainer>
            </div>
        </section>
    );
}
