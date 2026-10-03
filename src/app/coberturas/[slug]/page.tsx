import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight, Laptop, MessageCircle, Send, Users } from "lucide-react";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { coverages, getCoverage } from "@/data/coverages";
import { QUOTER_URL, whatsappUrl } from "@/lib/site";

// Solo existen las coberturas definidas en src/data/coverages.ts; cualquier otro slug da 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return coverages.map((coverage) => ({ slug: coverage.slug }));
}

export async function generateMetadata({ params }: PageProps<"/coberturas/[slug]">): Promise<Metadata> {
    const { slug } = await params;
    const coverage = getCoverage(slug);
    if (!coverage) return {};

    const title = `${coverage.metaTitle} | Coscia Asesores`;
    const url = `/coberturas/${coverage.slug}`;

    return {
        title,
        description: coverage.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title,
            description: coverage.metaDescription,
            url,
        },
    };
}

export default async function CoveragePage({ params }: PageProps<"/coberturas/[slug]">) {
    const { slug } = await params;
    const coverage = getCoverage(slug);
    if (!coverage) notFound();

    const Icon = coverage.icon;
    const others = coverages.filter((c) => c.slug !== coverage.slug);
    const location = `cobertura-${coverage.slug}`;

    return (
        <main className="min-h-screen bg-white">
            <SubpageHeader />

            {/* Hero */}
            <section className="relative bg-brand-navy text-white overflow-hidden">
                <Image
                    src={coverage.image}
                    alt={coverage.title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/70 to-brand-navy/40" />
                <div className="relative container mx-auto px-6 py-16 md:py-24">
                    <nav aria-label="Ruta" className="text-sm text-brand-silver mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                        <span className="mx-2">/</span>
                        <Link href="/#servicios" className="hover:text-white transition-colors">Coberturas</Link>
                        <span className="mx-2">/</span>
                        <span className="text-white">{coverage.title}</span>
                    </nav>
                    <div className="flex items-center gap-4 md:gap-6 mb-6">
                        <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center rounded-2xl bg-white shadow-xl">
                            <Icon className="w-8 h-8 md:w-10 md:h-10 text-brand-blue" />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">{coverage.title}</h1>
                    </div>
                    <p className="text-lg md:text-xl text-brand-silver max-w-3xl">{coverage.summary}</p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12 md:py-20">
                <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
                    {/* Contenido */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="space-y-4">
                            {coverage.intro.map((paragraph) => (
                                <p key={paragraph} className="text-lg text-brand-body leading-relaxed">{paragraph}</p>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">¿Qué cubre?</h2>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {coverage.includes.map((item) => (
                                    <li key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                        <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                                        <span className="text-brand-navy">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTAs + para quién es */}
                    <aside className="self-start space-y-6">
                        <div className="rounded-3xl bg-brand-navy text-white p-8 shadow-2xl">
                            <h2 className="text-2xl font-bold mb-2">¿Te interesa?</h2>
                            <p className="text-brand-silver mb-6">
                                Te asesoramos sin compromiso y comparamos entre las mejores compañías.
                            </p>
                            <div className="flex flex-col gap-3">
                                {coverage.hasQuoter && (
                                    <TrackedLink
                                        href={QUOTER_URL}
                                        channel="quoter"
                                        location={location}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-blue hover:bg-white hover:text-brand-blue font-bold transition-all shadow-lg shadow-brand-blue/20"
                                    >
                                        <Laptop className="w-5 h-5" />
                                        Cotizar online
                                    </TrackedLink>
                                )}
                                <TrackedLink
                                    href={whatsappUrl(coverage.whatsappText)}
                                    channel="whatsapp"
                                    location={location}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-green-600 hover:bg-green-700 font-bold transition-all shadow-lg"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    Consultar por WhatsApp
                                </TrackedLink>
                                <Link
                                    href={`/?servicio=${coverage.formValue}#contacto`}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/20 hover:bg-white/5 font-bold transition-all"
                                >
                                    <Send className="w-5 h-5" />
                                    Dejanos tus datos
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-3xl bg-slate-50 border border-slate-100 p-8">
                            <h2 className="text-xl md:text-2xl font-bold text-brand-navy mb-5">¿Para quién es?</h2>
                            <ul className="space-y-3">
                                {coverage.forWho.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <Users className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                                        <span className="text-brand-body">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Otras coberturas */}
            <section className="bg-slate-100/60 py-12 md:py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8 text-center">Otras coberturas</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {others.map((other) => {
                            const OtherIcon = other.icon;
                            return (
                                <Link
                                    key={other.slug}
                                    href={`/coberturas/${other.slug}`}
                                    className="group flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                                >
                                    <OtherIcon className="w-6 h-6 text-brand-blue shrink-0" />
                                    <span className="font-bold text-brand-navy text-sm md:text-base leading-tight flex-1">{other.title}</span>
                                    <ChevronRight className="w-4 h-4 text-brand-blue shrink-0 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
