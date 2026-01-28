import type { Metadata } from "next";
import "@fontsource/outfit";
import "@fontsource/inter";
import "./globals.css";
import { Navbar } from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Coscia Asesores | Protección Inteligente",
  description: "Asesoramiento experto en seguros patrimoniales y de vida. Protegemos tu futuro con las mejores compañías del mercado.",
  icons: {
    icon: "/logo-coscia.png", // Using the public logo as favicon
    shortcut: "/logo-coscia.png",
    apple: "/logo-coscia.png",
  },
  openGraph: {
    title: "Coscia Asesores | Protección Inteligente",
    description: "Asesoramiento experto en seguros patrimoniales y de vida.",
    url: "https://cosciaseguros.vercel.app",
    siteName: "Coscia Asesores",
    locale: "es_AR",
    type: "website",
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
