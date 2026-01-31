import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Fallback to a dummy key during build if process.env.RESEND_API_KEY is missing
const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, service, message } = body;

        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: process.env.CONTACT_RECEIVER_EMAIL || 'cosciaasesores@gmail.com',
            subject: `📧 CONSULTA WEB: ${name} - ${service.toUpperCase()}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
                    <div style="background-color: #0c4a6e; color: white; padding: 20px; text-align: center;">
                        <h1 style="margin: 0; font-size: 24px;">Nueva Consulta de Servicio</h1>
                    </div>
                    <div style="padding: 30px; color: #333;">
                        <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">Información de Contacto</h2>
                        <p><strong>Nombre:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Teléfono:</strong> ${phone}</p>
                        <p><strong>Servicio de interés:</strong> ${service.toUpperCase()}</p>

                        <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 30px;">Mensaje</h2>
                        <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
                        
                        <p style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; pt: 10px;">
                            Este mensaje fue enviado desde el formulario de contacto de Coscia Asesores.
                        </p>
                    </div>
                </div>
            `
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (error) {
        console.error('Error in send-contact:', error);
        return NextResponse.json(
            { error: 'Error al procesar la consulta' },
            { status: 500 }
        );
    }
}
