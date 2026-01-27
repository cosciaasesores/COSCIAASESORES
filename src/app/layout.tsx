import type { Metadata } from "next";
import "@fontsource/outfit";
import "@fontsource/inter";
import "@fontsource/syne";
import "./globals.css";
import { Navbar } from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Coscia Asesores | Protección Inteligente",
  description: "Asesoramiento experto en seguros patrimoniales y de vida.",
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
