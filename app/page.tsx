import { About } from "@/components/about";
import { Benefits } from "@/components/benefits";
import { Contact } from "@/components/contact";
import { FaqSection } from "@/components/faq-section";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { TopNav } from "@/components/top-nav";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-bone text-ink">
      <TopNav />
      <Hero />
      <Benefits />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <FaqSection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
