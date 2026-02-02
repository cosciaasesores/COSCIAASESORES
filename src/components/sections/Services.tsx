"use client";

import { Car, Home, Ship, UserCheck, Briefcase, Bike, HardHat, Store, Gavel, FileCheck } from "lucide-react";
import { ServiceCard } from "../ui/ServiceCard";
import { ResilientContainer } from "../ui/ResilientContainer";

const services = [
    {
        title: "Automotor",
        description: "Coberturas desde Responsabilidad Civil hasta Todo Riesgo con las mejores compañías del mercado.",
        icon: Car,
        color: "bg-blue-500/10",
        textColor: "text-blue-500",
        image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Motovehículos",
        description: "Coberturas desde Responsabilidad Civil hasta terceros completos, cubriendo grúa también.",
        icon: Bike,
        color: "bg-cyan-500/10",
        textColor: "text-cyan-500",
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Hogar",
        description: "Cubrimos Incendio, Responsabilidad Civil, Daños por agua, Todo riesgo electrodomésticos, Cristales, objetos específicos, Robo contenido.",
        icon: Home,
        color: "bg-emerald-500/10",
        textColor: "text-emerald-500",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Embarcaciones de Placer",
        description: "Coberturas desde Responsabilidad Civil y Daño total hasta Todo riesgo con navegación marítima en Brasil y Uruguay.",
        icon: Ship,
        color: "bg-blue-600/10",
        textColor: "text-blue-600",
        image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Accidentes Personales",
        description: "Coberturas 24hs ante accidentes por muerte o invalidez total y/o parcial con asistencia médica farmacéutica.",
        icon: UserCheck,
        color: "bg-amber-500/10",
        textColor: "text-amber-500",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "ART",
        description: "Protección para tus empleados con el respaldo de las mejores aseguradoras del mercado, al mejor precio.",
        icon: HardHat,
        color: "bg-orange-500/10",
        textColor: "text-orange-500",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Comercio",
        description: "Protegemos cualquier tipo de comercio ante incendio, robo de objetos, todo riesgo equipos de trabajo, cristales y mas coberturas dependiendo de cada caso.",
        icon: Store,
        color: "bg-indigo-500/10",
        textColor: "text-indigo-500",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Asistencia Legal",
        description: "Brindamos asistencia ante reclamos de terceros en compañías colegas por accidentes de tránsito, para que no lo tengas que hacer vos!",
        icon: Gavel,
        color: "bg-slate-500/10",
        textColor: "text-slate-500",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Cauciones",
        description: "Garantías para alquileres comerciales y particulares, ejecución de contrato, mantenimiento de oferta y demás. Todo para garantizar el cumplimiento de la obligación demandada.",
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestras Coberturas</h2>
                    <p className="text-brand-slate text-lg">
                        Ofrecemos una amplia gama de coberturas diseñadas para adaptarse a cada necesidad específica, brindando la protección que buscas en cada momento.
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
