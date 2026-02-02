import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const companiesDir = path.join(process.cwd(), 'public', 'companies');
        const files = fs.readdirSync(companiesDir);

        // Filter for image files and map to their public paths
        const logos = files
            .filter(file => /\.(png|jpe?g|svg|webp)$/i.test(file))
            .map(file => ({
                name: file.replace(/(_logo)?\.[^.]+$/, '').replace(/[_-]/g, ' '),
                logo: `/companies/${file}`
            }));

        return NextResponse.json(logos);
    } catch (error) {
        console.error('Error reading companies directory:', error);
        return NextResponse.json({ error: 'Failed to load logos' }, { status: 500 });
    }
}
