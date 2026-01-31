import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Companies } from "@/components/sections/Companies";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <HowItWorks />
      <Companies />
      <WhyUs />
      <About />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}

