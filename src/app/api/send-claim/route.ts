import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Fallback to a dummy key during build if process.env.RESEND_API_KEY is missing
const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

interface ImageAttachment {
    filename: string;
    content: string;
    type: string;
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, company, otherCompany, claimType, date, time, location, description, images } = body;

        const companyDisplay = company === 'otro' ? `OTRA (${otherCompany})` : company.toUpperCase();

        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: process.env.CONTACT_RECEIVER_EMAIL || 'cosciaasesores@gmail.com',
            subject: `🚨 NUEVO SINIESTRO: ${name} - ${companyDisplay}`,
            replyTo: email,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
                    <div style="background-color: #dc2626; color: white; padding: 20px; text-align: center;">
                        <h1 style="margin: 0; font-size: 24px;">Reporte de Siniestro</h1>
                    </div>
                    <div style="padding: 30px; color: #333;">
                        <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px;">Datos del Asegurado</h2>
                        <p><strong>Nombre:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Teléfono:</strong> ${phone}</p>
                        <p><strong>Compañía:</strong> ${companyDisplay}</p>

                        <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 30px;">Detalles del Hecho</h2>
                        <p><strong>Tipo:</strong> ${claimType.toUpperCase()}</p>
                        <p><strong>Fecha:</strong> ${date}</p>
                        <p><strong>Hora:</strong> ${time}</p>
                        <p><strong>Lugar:</strong> ${location}</p>
                        
                        <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 30px;">Descripción</h2>
                        <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${description}</p>
                        
                        <p style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; pt: 10px;">
                            Este mensaje fue enviado desde el formulario de siniestros de Coscia Asesores.
                        </p>
                    </div>
                </div>
            `,
            attachments: images?.map((img: ImageAttachment) => ({
                filename: img.filename,
                content: Buffer.from(img.content, 'base64'),
            }))
        });


        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (error) {
        console.error('Error in send-claim:', error);
        return NextResponse.json(
            { error: 'Error al procesar el reporte' },
            { status: 500 }
        );
    }
}
