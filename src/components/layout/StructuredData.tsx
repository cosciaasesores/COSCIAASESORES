import { coverages } from "@/data/coverages";
import { faqs, faqAnswerText } from "@/data/faq";
import { EMAIL, SOCIAL } from "@/lib/site";

export function StructuredData() {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "InsuranceAgency",
        "name": "Coscia Asesores de Seguros",
        "description": "Cotiza gratis tus seguros. +10 compañías líderes. Atención personalizada 24/7",
        "url": "https://www.cosciaasesores.com",
        "logo": "https://www.cosciaasesores.com/logo-oficial.png",
        "image": "https://www.cosciaasesores.com/logo-oficial.png",
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
        "itemListElement": coverages.map((coverage, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Service",
                "name": coverage.metaTitle,
                "description": coverage.summary,
                "url": `https://www.cosciaasesores.com/coberturas/${coverage.slug}`,
                "provider": {
                    "@type": "InsuranceAgency",
                    "name": "Coscia Asesores"
                }
            }
        }))
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
