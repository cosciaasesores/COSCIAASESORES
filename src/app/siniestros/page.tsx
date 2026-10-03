import { ClaimsReport } from "@/components/sections/ClaimsReport";
import { SubpageHeader } from "@/components/layout/SubpageHeader";

export default function SiniestrosPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubpageHeader />

            <ClaimsReport />

            {/* Footer */}
            <footer className="bg-brand-navy text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-brand-silver">
                        © {new Date().getFullYear()} Coscia Asesores de Seguros. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </main>
    );
}
