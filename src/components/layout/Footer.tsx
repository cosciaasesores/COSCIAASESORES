import { Facebook, Instagram, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import Image from "next/image";
import { ADDRESS, BUSINESS_HOURS, EMAIL, MAPS_URL, SOCIAL, WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/site";
import { TrackedLink } from "@/components/ui/TrackedLink";

const footerLinks = [
    { name: "Compañías", href: "/#socios" },
    { name: "Coberturas", href: "/#servicios" },
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Reseñas", href: "/#resenas" },
    { name: "Preguntas frecuentes", href: "/#faq" },
    { name: "Reportar siniestro", href: "/siniestros" },
];

export function Footer() {
    return (
        <footer className="relative font-sans">
            {/* Main Footer */}
            <div className="bg-brand-navy text-white pt-14 pb-10 border-t border-white/5">
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <div className="text-xl font-black tracking-tighter uppercase leading-none mb-3">
                            Coscia Asesores
                            <span className="block text-brand-cyan text-[10px] tracking-widest font-medium mt-1">Productores de Seguros</span>
                        </div>
                        <p className="text-brand-slate text-sm leading-relaxed max-w-xs">
                            Asesoramiento profesional en seguros para familias y empresas, con más de 25 años de trayectoria.
                        </p>
                        <div className="flex gap-3 mt-5">
                            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white mb-4">Contacto</h3>
                        <ul className="space-y-3 text-sm text-brand-slate">
                            <li>
                                <TrackedLink href={whatsappUrl()} channel="whatsapp" location="footer" className="flex items-center gap-2 hover:text-white transition-colors">
                                    <MessageCircle className="w-4 h-4 text-brand-cyan shrink-0" />
                                    {WHATSAPP_DISPLAY}
                                </TrackedLink>
                            </li>
                            <li>
                                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors break-all">
                                    <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                                    {EMAIL}
                                </a>
                            </li>
                            <li>
                                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white transition-colors">
                                    <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                                    {ADDRESS}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white mb-4">Horario de atención</h3>
                        <p className="flex items-start gap-2 text-sm text-brand-slate">
                            <Clock className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                            <span>{BUSINESS_HOURS}<br />Presencial con cita previa. Urgencias online.</span>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold text-white mb-4">Secciones</h3>
                        <ul className="space-y-2 text-sm text-brand-slate">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="container mx-auto px-6 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
                    <p className="text-brand-silver/50 text-xs">
                        © {new Date().getFullYear()} Coscia Asesores de Seguros. Todos los derechos reservados.
                    </p>
                    <p className="text-brand-silver/50 text-xs">
                        Productor Asesor de Seguros inscripto en la SSN.
                    </p>
                </div>
            </div>

            {/* SSN Banner (Legales Mandatory) */}
            <div className="bg-white py-3 border-t border-slate-200">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-[10px] md:text-sm text-slate-500 font-sans">

                        <div className="flex flex-col items-center gap-1 min-w-[150px] text-center">
                            <span className="uppercase tracking-widest text-[9px] text-slate-400">Nº de matrícula SSN</span>
                            <span className="text-base font-light text-slate-600">52.032 / 93.900</span>
                        </div>

                        <div className="h-px w-full lg:h-8 lg:w-px bg-slate-100" />

                        <div className="flex flex-col items-center max-w-[250px] text-center">
                            <span className="uppercase tracking-wider text-[9px] text-slate-400 leading-tight">
                                Departamento de Orientación y Asistencia al Asegurado
                            </span>
                        </div>

                        <div className="h-px w-full lg:h-8 lg:w-px bg-slate-100" />

                        <div className="flex flex-col items-center min-w-[120px] text-center">
                            <span className="text-base font-light text-slate-600">0800-666-8400</span>
                        </div>

                        <div className="h-px w-full lg:h-8 lg:w-px bg-slate-100" />

                        <div className="flex flex-col items-center min-w-[150px] text-center">
                            <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-slate-600 hover:text-brand-blue transition-colors">
                                www.argentina.gob.ar/ssn
                            </a>
                        </div>

                        <div className="h-px w-full lg:h-8 lg:w-px bg-slate-100" />

                        <div className="relative w-[240px] h-[40px] opacity-90">
                            <Image
                                src="/SSN_Argentina_logo.png"
                                alt="SSN - Superintendencia de Seguros de la Nación"
                                fill
                                sizes="240px"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
