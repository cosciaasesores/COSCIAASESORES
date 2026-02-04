import { StructuredData } from "@/components/layout/StructuredData";

export const metadata = {
    title: "Reportar Siniestro | Coscia Asesores de Seguros",
    description: "Cotiza gratis tus seguros. +10 compañías líderes. Atención personalizada 24/7",
};

export default function SiniestrosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
