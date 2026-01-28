import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Coscia Asesores - Protección Inteligente';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 40,
                    color: 'white',
                    background: '#020617', // brand-navy (approx)
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Decorative background blur */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-200px',
                        left: '-200px',
                        width: '800px',
                        height: '800px',
                        background: 'rgba(56, 189, 248, 0.2)', // light blue
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        bottom: '-200px',
                        right: '-200px',
                        width: '800px',
                        height: '800px',
                        background: 'rgba(59, 130, 246, 0.2)', // deep blue
                        filter: 'blur(100px)',
                        borderRadius: '50%',
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    {/* Logo Text Emulation */}
                    <div style={{ fontSize: 80, fontWeight: 'bold', color: 'white', marginBottom: 20 }}>
                        Coscia Asesores
                    </div>

                    <div style={{ fontSize: 32, color: '#94a3b8', textAlign: 'center', maxWidth: '800px' }}>
                        Protección Inteligente para tu Futuro
                    </div>

                    <div style={{ marginTop: 40, padding: '10px 30px', background: '#3b82f6', borderRadius: 20, color: 'white', fontSize: 24 }}>
                        Cotizá Online
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
