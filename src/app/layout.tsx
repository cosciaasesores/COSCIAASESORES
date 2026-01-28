import type { Metadata } from "next";
import "@fontsource/outfit";
import "@fontsource/inter";
import "./globals.css";
import { Navbar } from "@/components/Navbar";


export const metadata: Metadata = {
  metadataBase: new URL('https://cosciaseguros.vercel.app'),
  title: "Coscia Asesores | Protección Inteligente",
  description: "Asesoramiento experto en seguros patrimoniales y de vida. Protegemos tu futuro con las mejores compañías del mercado.",
  keywords: ["seguros", "asesor de seguros", "seguro automotor", "seguro de vida", "ART", "Buenos Aires", "El Palomar"],
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
    title: "Coscia Asesores | Protección Inteligente",
    description: "Asesoramiento experto en seguros patrimoniales y de vida.",
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
      <body className="font-sans antialiased text-brand-navy bg-brand-silver">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
