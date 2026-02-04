import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const companiesDir = path.join(process.cwd(), 'public', 'companies');
        const files = fs.readdirSync(companiesDir);

        // Exact mapping requested by the user
        const nameMapping: Record<string, string> = {
            'ALLIANZ.png': 'ALLIANZ',
            'BARBUSS.png': 'BARBUSS',
            'experta-seguros-logo.png': 'EXPERTA',
            'federacionpatronal-compania-de-seguros.png': 'FEDERACION PATRONAL',
            'Fed-Patronal-2024.png': 'FEDERACION PATRONAL ART',
            'galicia-seguros.png': 'GALICIA SEGUROS',
            'La-Segunda-Seguros.png': 'LA SEGUNDA SEGUROS',
            'MERCANTIL ANDINA.png': 'MERCANTIL ANDINA',
            'METROPOL.png': 'METROPOL',
            'MERIDIONAL.png': 'MERIDIONAL SEGUROS',
            'noble_logo_negro.png': 'NOBLE SEGUROS',
            'PREMIAR.png': 'PREMIAR',
            'Logo-Prevencion-ART.png': 'PREVENCION ART',
            'logo-provincia.png': 'PROVINCIA SEGUROS',
            'prov art.png': 'PROVINCIA ART',
            'SANCOR SEGUROS.png': 'SANCOR SEGUROS',
        };

        // Filter and map logos
        const logos = files
            .filter(file => nameMapping[file])
            .map(file => ({
                name: nameMapping[file],
                logo: `/companies/${file}`
            }));

        return NextResponse.json(logos);
    } catch (error) {
        console.error('Error reading companies directory:', error);
        return NextResponse.json({ error: 'Failed to load logos' }, { status: 500 });
    }
}
