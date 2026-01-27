import type { Metadata } from "next";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coscia Seguros | Protección y Confianza",
  description: "Productores de Seguros dedicados a proteger lo que más valoras. Automotores, Hogar, Vida y ART.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased font-outfit">
        {children}
      </body>
    </html>
  );
}
