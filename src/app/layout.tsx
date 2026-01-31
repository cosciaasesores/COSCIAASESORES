import type { Metadata } from "next";
import "@fontsource/outfit";
import "@fontsource/inter";
import "./globals.css";
import { StructuredData } from "@/components/layout/StructuredData";
import { ClientLayout } from "@/components/layout/ClientLayout";


export const metadata: Metadata = {
  metadataBase: new URL('https://cosciaseguros.vercel.app'),
  title: "Coscia Asesores | Seguros en El Palomar y CABA - Cotización Gratis",
  description: "✅ Asesoría en Seguros en El Palomar y CABA ⚡ Cotizá gratis tu seguro de auto, hogar, vida y ART. Trabajamos con +20 aseguradoras líderes. ¡Atención personalizada 24/7!",
  keywords: ["seguros el palomar", "asesor de seguros", "seguro automotor", "seguro de vida", "ART", "seguros Buenos Aires", "cotización gratis", "broker seguros"],
  authors: [{ name: "Coscia Asesores" }],
  creator: "Coscia Asesores",
  publisher: "Coscia Asesores",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo-coscia.png",
    shortcut: "/logo-coscia.png",
    apple: "/logo-coscia.png",
  },
  openGraph: {
    title: "Coscia Asesores | Seguros en El Palomar - Cotización Gratis",
    description: "Cotizá gratis tu seguro de auto, hogar, vida y ART. +20 aseguradoras líderes. Atención personalizada 24/7 en El Palomar y CABA.",
    url: "https://cosciaseguros.vercel.app",
    siteName: "Coscia Asesores",
    images: [
      {
        url: "/logoCoscia.png",
        width: 800,
        height: 600,
        alt: "Coscia Asesores Banner",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  alternates: {
    canonical: "https://cosciaseguros.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased text-brand-navy bg-brand-silver">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
