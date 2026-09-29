import { Hero } from "@/components/sections/Hero";
import { Companies } from "@/components/sections/Companies";
import { Services } from "@/components/sections/Services";
import { getSitePhotos } from "@/lib/photos";
import dynamic from "next/dynamic";

const HowItWorks   = dynamic(() => import("@/components/sections/HowItWorks").then(m => ({ default: m.HowItWorks })));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const WhyUs        = dynamic(() => import("@/components/sections/WhyUs").then(m => ({ default: m.WhyUs })));
const About        = dynamic(() => import("@/components/sections/About").then(m => ({ default: m.About })));
const FAQ          = dynamic(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));
const Contact      = dynamic(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));

export default function Home() {
  const photos = getSitePhotos();

  return (
    <main className="min-h-screen">
      <Hero heroImage={photos.inicio} />
      <Companies />
      <Services />
      <HowItWorks />
      <Testimonials />
      <WhyUs />
      <About ownerPhotos={{ gustavo: photos.gustavo, nahuel: photos.nahuel }} />
      <FAQ />
      <Contact />
    </main>
  );
}
