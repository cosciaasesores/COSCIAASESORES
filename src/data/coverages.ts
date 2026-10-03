import { Car, Home, Ship, UserCheck, Bike, HardHat, Store, Gavel, FileCheck, type LucideIcon } from "lucide-react";

// Fuente única de coberturas: grilla de la landing, páginas /coberturas/[slug] y sitemap.
export interface Coverage {
    slug: string;
    title: string;
    icon: LucideIcon;
    image: string;
    summary: string;
    intro: string[];
    includes: string[];
    forWho: string[];
    // Valor del <select> de servicio en ContactForm.
    formValue: string;
    whatsappText: string;
    // Solo Automotor y Motovehículos tienen cotizador online.
    hasQuoter: boolean;
    metaTitle: string;
    metaDescription: string;
}

export const coverages: Coverage[] = [
    {
        slug: "automotor",
        metaTitle: "Seguro de Auto en El Palomar",
        title: "Automotor",
        icon: Car,
        image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1200&auto=format&fit=crop",
        summary: "Coberturas desde Responsabilidad Civil hasta Todo Riesgo con las mejores compañías del mercado.",
        intro: [
            "Te ayudamos a elegir la cobertura justa para tu auto, comparando opciones entre las principales aseguradoras del país para que pagues lo que corresponde por la protección que necesitás.",
            "Y no te dejamos solo después de contratar: si tenés un siniestro, te acompañamos en la denuncia y en todo el trámite con la compañía.",
        ],
        includes: [
            "Responsabilidad Civil obligatoria",
            "Terceros completos: robo, hurto e incendio total y parcial",
            "Terceros completos con daños por granizo y cristales",
            "Todo Riesgo con franquicia",
            "Servicio de grúa y asistencia mecánica",
        ],
        forWho: [
            "Autos particulares, 0 km y usados",
            "Pick-ups y utilitarios",
            "Vehículos de uso comercial",
        ],
        formValue: "automotor",
        whatsappText: "Hola! Quisiera cotizar un seguro para mi auto",
        hasQuoter: true,
        metaDescription: "Seguro de auto en El Palomar: Responsabilidad Civil, Terceros Completos y Todo Riesgo con las mejores aseguradoras. Cotizá online o por WhatsApp.",
    },
    {
        slug: "motovehiculos",
        metaTitle: "Seguro de Moto en El Palomar",
        title: "Motovehículos",
        icon: Bike,
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
        summary: "Coberturas desde Responsabilidad Civil hasta terceros completos, cubriendo grúa también.",
        intro: [
            "Asegurá tu moto con la cobertura que mejor se adapta a cómo la usás, desde la Responsabilidad Civil obligatoria para circular hasta planes con robo e incendio.",
            "Comparamos entre varias compañías para conseguirte el mejor precio, e incluimos servicio de grúa para que no te quedes a pie.",
        ],
        includes: [
            "Responsabilidad Civil obligatoria",
            "Robo e incendio total",
            "Terceros completos",
            "Servicio de grúa",
        ],
        forWho: [
            "Motos, scooters y ciclomotores",
            "Uso particular o para trabajar (delivery, mensajería)",
        ],
        formValue: "motovehiculo",
        whatsappText: "Hola! Quisiera cotizar un seguro para mi moto",
        hasQuoter: true,
        metaDescription: "Seguro de moto en El Palomar: Responsabilidad Civil, robo, incendio y terceros completos con grúa. Cotizá online o por WhatsApp.",
    },
    {
        slug: "hogar",
        metaTitle: "Seguro de Hogar en El Palomar",
        title: "Hogar",
        icon: Home,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
        summary: "Cubrimos Incendio, Responsabilidad Civil, Daños por agua, Todo riesgo electrodomésticos, Cristales, objetos específicos, Robo contenido.",
        intro: [
            "Tu casa y lo que tenés adentro merecen estar protegidos. Armamos un seguro de hogar a medida, eligiendo las coberturas que realmente necesitás.",
            "Sirve tanto si sos propietario como si alquilás, y podés sumar protección para objetos de valor específicos.",
        ],
        includes: [
            "Incendio del edificio y del contenido",
            "Robo del contenido",
            "Daños por agua",
            "Todo riesgo electrodomésticos",
            "Cristales",
            "Objetos específicos (notebooks, celulares, bicicletas y más)",
            "Responsabilidad Civil frente a terceros",
        ],
        forWho: [
            "Propietarios de casas y departamentos",
            "Inquilinos que quieren proteger sus pertenencias",
            "Viviendas permanentes o de fin de semana",
        ],
        formValue: "hogar",
        whatsappText: "Hola! Quisiera cotizar un seguro de hogar",
        hasQuoter: false,
        metaDescription: "Seguro de hogar en El Palomar: incendio, robo, daños por agua, electrodomésticos y cristales. Asesoramiento personalizado.",
    },
    {
        slug: "embarcaciones",
        metaTitle: "Seguro de Embarcaciones de Placer",
        title: "Embarcaciones de Placer",
        icon: Ship,
        image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=1200&auto=format&fit=crop",
        summary: "Coberturas desde Responsabilidad Civil y Daño total hasta Todo riesgo con navegación marítima en Brasil y Uruguay.",
        intro: [
            "Navegá tranquilo con un seguro pensado para tu embarcación, ya sea que la uses en el río o salgas al mar.",
            "Te asesoramos para elegir entre las distintas opciones, incluyendo coberturas con navegación marítima en Brasil y Uruguay.",
        ],
        includes: [
            "Responsabilidad Civil",
            "Daño total",
            "Todo Riesgo",
            "Navegación marítima en Brasil y Uruguay",
        ],
        forWho: [
            "Lanchas, cruceros y veleros",
            "Motos de agua",
            "Embarcaciones de uso recreativo",
        ],
        formValue: "embarcaciones",
        whatsappText: "Hola! Quisiera cotizar un seguro para mi embarcación",
        hasQuoter: false,
        metaDescription: "Seguro para embarcaciones de placer: Responsabilidad Civil, daño total y Todo Riesgo con navegación en Brasil y Uruguay.",
    },
    {
        slug: "accidentes-personales",
        metaTitle: "Seguro de Accidentes Personales",
        title: "Accidentes Personales",
        icon: UserCheck,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
        summary: "Coberturas 24hs ante accidentes por muerte o invalidez total y/o parcial con asistencia médica farmacéutica.",
        intro: [
            "Un seguro que te protege las 24 horas ante cualquier accidente, dentro y fuera del trabajo.",
            "Es ideal para monotributistas, trabajadores independientes o para cumplir con los requisitos de ingreso a obras, empresas o countries.",
        ],
        includes: [
            "Muerte por accidente",
            "Invalidez total y/o parcial permanente",
            "Asistencia médica y farmacéutica",
            "Cobertura las 24 horas",
        ],
        forWho: [
            "Monotributistas y trabajadores independientes",
            "Personal contratado o eventual",
            "Quienes necesitan acreditar un seguro para ingresar a una obra o empresa",
        ],
        formValue: "accidentes",
        whatsappText: "Hola! Quisiera cotizar un seguro de accidentes personales",
        hasQuoter: false,
        metaDescription: "Seguro de accidentes personales 24 hs: muerte, invalidez y asistencia médico-farmacéutica. Ideal para monotributistas.",
    },
    {
        slug: "art",
        metaTitle: "ART para Empresas y Comercios",
        title: "ART",
        icon: HardHat,
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
        summary: "Protección para tus empleados con el respaldo de las mejores aseguradoras del mercado, al mejor precio.",
        intro: [
            "La Aseguradora de Riesgos del Trabajo es obligatoria para todo empleador. Te ayudamos a elegir la ART que mejor se adapta a tu actividad y a conseguir la mejor alícuota.",
            "También te acompañamos en el día a día: altas de personal, certificados de cobertura y gestión de siniestros laborales.",
        ],
        includes: [
            "Cobertura de accidentes de trabajo e in itinere",
            "Enfermedades profesionales",
            "Prestaciones médicas y dinerarias para el trabajador",
            "Certificados de cobertura y cláusulas de no repetición",
        ],
        forWho: [
            "Empresas y comercios con empleados en relación de dependencia",
            "Empleadores que quieren mejorar su alícuota actual",
        ],
        formValue: "art",
        whatsappText: "Hola! Quisiera cotizar una ART",
        hasQuoter: false,
        metaDescription: "ART para empresas y comercios: te ayudamos a elegir la aseguradora de riesgos del trabajo y conseguir la mejor alícuota.",
    },
    {
        slug: "comercio",
        metaTitle: "Seguro Integral de Comercio",
        title: "Comercio",
        icon: Store,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        summary: "Protegemos cualquier tipo de comercio ante incendio, robo de objetos, todo riesgo equipos de trabajo, cristales y mas coberturas dependiendo de cada caso.",
        intro: [
            "Cada comercio es distinto, por eso armamos una cobertura integral según tu rubro, tu local y lo que tenés adentro.",
            "Protegé tu inversión y tu fuente de trabajo frente a los imprevistos más comunes.",
        ],
        includes: [
            "Incendio del edificio y la mercadería",
            "Robo de mercadería, objetos y valores",
            "Todo riesgo equipos de trabajo",
            "Cristales y carteles",
            "Responsabilidad Civil frente a clientes y terceros",
            "Otras coberturas según el rubro",
        ],
        forWho: [
            "Locales comerciales y oficinas",
            "Talleres, depósitos y pymes",
            "Emprendedores que abren su primer local",
        ],
        formValue: "comercios",
        whatsappText: "Hola! Quisiera cotizar un seguro para mi comercio",
        hasQuoter: false,
        metaDescription: "Seguro integral de comercio: incendio, robo, equipos de trabajo, cristales y Responsabilidad Civil según tu rubro.",
    },
    {
        slug: "asistencia-legal",
        metaTitle: "Asistencia Legal por Accidentes de Tránsito",
        title: "Asistencia Legal",
        icon: Gavel,
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
        summary: "Brindamos asistencia ante reclamos de terceros en compañías colegas por accidentes de tránsito, para que no lo tengas que hacer vos!",
        intro: [
            "Si tuviste un accidente de tránsito y el otro conductor es responsable, nosotros nos encargamos de hacer el reclamo ante su compañía de seguros.",
            "Te evitamos los trámites, los tiempos y el desgaste, para que recuperes lo que te corresponde sin tener que hacerlo vos.",
        ],
        includes: [
            "Reclamo a la aseguradora del tercero responsable",
            "Gestión de la documentación y seguimiento del caso",
            "Asesoramiento durante todo el proceso",
        ],
        forWho: [
            "Conductores que sufrieron un choque con un tercero responsable",
            "Asegurados con cobertura de Responsabilidad Civil o Terceros que necesitan reclamar sus daños",
        ],
        formValue: "otro",
        whatsappText: "Hola! Quisiera consultar por asistencia legal por un accidente de tránsito",
        hasQuoter: false,
        metaDescription: "Asistencia legal ante reclamos a terceros por accidentes de tránsito. Nos encargamos del reclamo a la otra compañía.",
    },
    {
        slug: "cauciones",
        metaTitle: "Seguros de Caución y Garantías de Alquiler",
        title: "Cauciones",
        icon: FileCheck,
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
        summary: "Garantías para alquileres comerciales y particulares, ejecución de contrato, mantenimiento de oferta y demás. Todo para garantizar el cumplimiento de la obligación demandada.",
        intro: [
            "Un seguro de caución garantiza el cumplimiento de una obligación frente a un tercero, reemplazando a la garantía propietaria o al depósito en efectivo.",
            "Lo usás para alquilar sin garantía propietaria o para presentarte en licitaciones y contratos, con una gestión rápida y sin vueltas.",
        ],
        includes: [
            "Garantía de alquiler para viviendas y locales comerciales",
            "Ejecución de contrato",
            "Mantenimiento de oferta",
            "Anticipo financiero y otras garantías contractuales",
        ],
        forWho: [
            "Inquilinos que no tienen garantía propietaria",
            "Empresas y proveedores que participan en licitaciones o contratos",
        ],
        formValue: "cauciones",
        whatsappText: "Hola! Quisiera consultar por un seguro de caución",
        hasQuoter: false,
        metaDescription: "Seguros de caución: garantías de alquiler, ejecución de contrato y mantenimiento de oferta. Gestión rápida.",
    },
];

export function getCoverage(slug: string) {
    return coverages.find((c) => c.slug === slug);
}
