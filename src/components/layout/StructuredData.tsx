import { faqs, faqAnswerText } from "@/data/faq";
import { EMAIL, SOCIAL } from "@/lib/site";

export function StructuredData() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "InsuranceAgency",
        "name": "Coscia Asesores de Seguros",
        "description": "Cotiza gratis tus seguros. +10 compañías líderes. Atención personalizada 24/7",
        "url": "https://www.cosciaasesores.com",
        "telephone": "+54 11 5827-6780",
        "email": EMAIL,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Año 1852 Nº 8",
            "addressLocality": "El Palomar",
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
        "openingHours": "Mo-Fr 09:00-17:00",
        "sameAs": [SOCIAL.facebook, SOCIAL.instagram]
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
                "name": "Asistencia Legal",
                "description": "Asistencia ante reclamos de terceros en compañías colegas por accidentes de tránsito",
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

    // Generado desde la misma fuente que la sección FAQ visible.
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faqAnswerText(item.a)
            }
        }))
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
