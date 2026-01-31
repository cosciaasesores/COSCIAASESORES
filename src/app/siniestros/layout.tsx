import { StructuredData } from "@/components/layout/StructuredData";

export const metadata = {
    title: "Reportar Siniestro | Coscia Asesores de Seguros",
    description: "Reportá tu siniestro de forma rápida y segura. Completá el formulario con los detalles y fotos del incidente para que un asesor se comunique a la brevedad.",
};

export default function SiniestrosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
