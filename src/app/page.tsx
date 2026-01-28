import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { TrustedBy } from "@/components/TrustedBy";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <About />
      <Team />
      <FAQ />
      <Contact />

      {/* Footer */}
      <footer className="bg-brand-navy py-12 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="text-white font-bold text-xl mb-4 uppercase">
            Coscia <span className="text-brand-blue">Asesores</span>
          </div>
          <p className="text-brand-slate text-sm max-w-md mx-auto mb-8">
            Protegiendo tus proyectos y tu familia con la solidez de los mejores del mercado.
          </p>
          <div className="text-brand-slate text-xs border-t border-white/5 pt-8">
            © {new Date().getFullYear()} Coscia Asesores. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
