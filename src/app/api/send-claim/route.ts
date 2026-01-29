import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializar Resend con API key desde variables de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            phone,
            policyNumber,
            claimType,
            date,
            time,
            location,
            description,
            images
        } = body;

        // Validación básica
        if (!name || !email || !phone || !claimType || !date || !location || !description) {
            return NextResponse.json(
                { error: 'Faltan campos obligatorios' },
                { status: 400 }
            );
        }

        // Mapeo de tipos de siniestro
        const claimTypeNames: Record<string, string> = {
            auto: 'Seguro de Auto',
            hogar: 'Seguro de Hogar',
            vida: 'Seguro de Vida',
            accidentes: 'Accidentes Personales',
            empresas: 'Empresas / ART',
            otro: 'Otro'
        };

        // Preparar attachments si hay imágenes
        const attachments = images?.map((img: any, index: number) => ({
            filename: `foto_${index + 1}_${img.filename}`,
            content: img.content
        })) || [];

        // Formatear fecha legible
        const formattedDate = new Date(date).toLocaleDateString('es-AR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Crear contenido del email en HTML
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Nuevo Reporte de Siniestro</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">⚠️ Nuevo Reporte de Siniestro</h1>
                </div>
                
                <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                    <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <h2 style="color: #dc2626; margin-top: 0; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
                            📋 Datos del Asegurado
                        </h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; width: 40%;">Nombre:</td>
                                <td style="padding: 8px 0;">${name}</td>
                            </tr>
                            <tr style="background: #f9f9f9;">
                                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                                <td style="padding: 8px 0;">${email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold;">Teléfono:</td>
                                <td style="padding: 8px 0;">${phone}</td>
                            </tr>
                            ${policyNumber ? `
                            <tr style="background: #f9f9f9;">
                                <td style="padding: 8px 0; font-weight: bold;">Póliza:</td>
                                <td style="padding: 8px 0;">${policyNumber}</td>
                            </tr>
                            ` : ''}
                        </table>
                    </div>

                    <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <h2 style="color: #dc2626; margin-top: 0; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
                            🚨 Detalles del Siniestro
                        </h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold; width: 40%;">Tipo:</td>
                                <td style="padding: 8px 0;">${claimTypeNames[claimType] || claimType}</td>
                            </tr>
                            <tr style="background: #f9f9f9;">
                                <td style="padding: 8px 0; font-weight: bold;">Fecha:</td>
                                <td style="padding: 8px 0;">${formattedDate}</td>
                            </tr>
                            ${time ? `
                            <tr>
                                <td style="padding: 8px 0; font-weight: bold;">Hora:</td>
                                <td style="padding: 8px 0;">${time}</td>
                            </tr>
                            ` : ''}
                            <tr style="background: #f9f9f9;">
                                <td style="padding: 8px 0; font-weight: bold;">Lugar:</td>
                                <td style="padding: 8px 0;">${location}</td>
                            </tr>
                        </table>
                        
                        <div style="margin-top: 15px; padding: 15px; background: #fef2f2; border-left: 4px solid #dc2626; border-radius: 4px;">
                            <h3 style="margin: 0 0 10px 0; color: #dc2626; font-size: 16px;">Descripción:</h3>
                            <p style="margin: 0; white-space: pre-wrap;">${description}</p>
                        </div>
                    </div>

                    ${images && images.length > 0 ? `
                    <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <h2 style="color: #dc2626; margin-top: 0; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
                            📷 Documentación Adjunta
                        </h2>
                        <p style="margin: 0;">Se adjuntaron <strong>${images.length} foto(s)</strong> con este reporte.</p>
                    </div>
                    ` : ''}

                    <div style="margin-top: 30px; padding: 20px; background: #fef9c3; border-left: 4px solid #eab308; border-radius: 4px;">
                        <p style="margin: 0; font-size: 14px;">
                            <strong>⏰ Acción requerida:</strong> Contactar al asegurado lo antes posible para dar seguimiento a este siniestro.
                        </p>
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px; color: #666; font-size: 12px;">
                    <p>Este email fue enviado automáticamente desde el formulario de reportes de Coscia Asesores.</p>
                    <p style="margin: 5px 0;">
                        © ${new Date().getFullYear()} Coscia Asesores - Todos los derechos reservados
                    </p>
                </div>
            </body>
            </html>
        `;

        // Enviar email con Resend
        const data = await resend.emails.send({
            from: process.env.CLAIMS_EMAIL_FROM || 'Reportes <onboarding@resend.dev>',
            to: process.env.CLAIMS_EMAIL_TO || 'siniestros@cosciaseguros.com.ar',
            subject: `🚨 NUEVO SINIESTRO - ${claimTypeNames[claimType]} - ${name}`,
            html: htmlContent,
            attachments: attachments,
            // Email de respuesta al cliente
            replyTo: email
        });

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('Error sending claim email:', error);
        return NextResponse.json(
            { error: 'Error al enviar el reporte' },
            { status: 500 }
        );
    }
}
