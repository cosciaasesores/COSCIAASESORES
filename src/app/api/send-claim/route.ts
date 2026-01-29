import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Modo Simulación: No se envía email por ahora para evitar errores de build
        console.log('Reporte de siniestro recibido (Simulado):', body.name);

        // Simulamos un pequeño retraso para que el usuario vea el loader
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            message: 'Reporte recibido correctamente (Modo Simulación)'
        }, { status: 200 });

    } catch (error) {
        console.error('Error in mock send-claim:', error);
        return NextResponse.json(
            { error: 'Error al procesar el reporte' },
            { status: 500 }
        );
    }
}
