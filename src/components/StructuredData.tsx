"use client";

export function StructuredData() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "InsuranceAgency",
        "name": "Coscia Asesores de Seguros",
        "description": "Asesoramiento experto en seguros patrimoniales, de vida, automotor, hogar y ART en El Palomar y Buenos Aires",
        "url": "https://cosciaseguros.com.ar",
        "telephone": "+54-11-XXXX-XXXX",
        "email": "contacto@cosciaseguros.com.ar",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "El Palomar",
            "addressLocality": "Morón",
            "addressRegion": "Buenos Aires",
            "postalCode": "1684",
            "addressCountry": "AR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -34.609722,
            "longitude": -58.594722
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "El Palomar"
            },
            {
                "@type": "City",
                "name": "Buenos Aires"
            },
            {
                "@type": "City",
                "name": "Hurlingham"
            },
            {
                "@type": "City",
                "name": "Morón"
            }
        ],
        "priceRange": "$$",
        "openingHours": "Mo-Fr 09:00-18:00",
        "sameAs": [
            "https://www.facebook.com/cosciaseguros",
            "https://www.instagram.com/cosciaseguros"
        ]
    };

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "Service",
                "name": "Seguro de Auto",
                "description": "Cobertura completa para tu vehículo con las mejores aseguradoras",
                "provider": {
                    "@type": "InsuranceAgency",
                    "name": "Coscia Asesores"
                }
            },
            {
                "@type": "Service",
                "name": "Seguro de Hogar",
                "description": "Protección integral para tu casa y pertenencias",
                "provider": {
                    "@type": "InsuranceAgency",
                    "name": "Coscia Asesores"
                }
            },
            {
                "@type": "Service",
                "name": "Seguro de Vida",
                "description": "Resguardo financiero para tu familia",
                "provider": {
                    "@type": "InsuranceAgency",
                    "name": "Coscia Asesores"
                }
            },
            {
                "@type": "Service",
                "name": "ART",
                "description": "Seguros de riesgos del trabajo para empresas",
                "provider": {
                    "@type": "InsuranceAgency",
                    "name": "Coscia Asesores"
                }
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Es gratis el asesoramiento?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, nuestro asesoramiento es completamente gratuito. No cobramos por cotizaciones ni consultas. Trabajamos con comisiones de las aseguradoras, por lo que el precio es el mismo que si contrataras directo."
                }
            },
            {
                "@type": "Question",
                "name": "¿Cuánto tarda la cotización?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "En menos de 2 minutos recibís tu cotización. Comparamos automáticamente entre más de 20 aseguradoras para encontrar la mejor opción para vos."
                }
            },
            {
                "@type": "Question",
                "name": "¿Puedo cambiar de aseguradora en cualquier momento?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, podés cambiar cuando quieras. Te ayudamos con todo el proceso de cambio sin costos adicionales."
                }
            },
            {
                "@type": "Question",
                "name": "¿Qué pasa si tengo un siniestro?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Te acompañamos en todo el proceso. Podés reportar el siniestro directamente en nuestra web 24/7 y un asesor se comunica inmediatamente para guiarte en cada paso."
                }
            },
            {
                "@type": "Question",
                "name": "¿Con qué aseguradoras trabajan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Trabajamos con más de 20 aseguradoras líderes del mercado argentino, incluyendo Federación Patronal, Sancor, La Caja, Allianz, Zurich, Mapfre, y muchas más."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
