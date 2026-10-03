import { MetadataRoute } from 'next'
import { coverages } from '@/data/coverages'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.cosciaasesores.com'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...coverages.map((coverage) => ({
            url: `${baseUrl}/coberturas/${coverage.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
        {
            url: `${baseUrl}/siniestros`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
