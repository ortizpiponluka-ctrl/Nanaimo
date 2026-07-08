import { Star } from "lucide-react";
import { siteConfig } from "@/site.config";
import { SectionKicker } from "@/components/section-kicker";

export function Testimonials() {
  return (
    <section id="confianza" className="bg-paper py-24 text-ink">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionKicker
          eyebrow="Confianza"
          title="Que se vea bonito es el piso. Que venda mejor es el juego."
          description="Nanaimo trabaja desde lo simple: claridad, estética, intención comercial y una entrega que no deja al cliente solo."
          align="center"
          tone="light"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {siteConfig.testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[2rem] bg-bone p-7 shadow-sm">
              <div className="mb-7 flex gap-1 text-lava">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-xl font-semibold leading-8 tracking-[-0.02em]">
                “{testimonial.quote}”
              </p>
              <div className="mt-8 border-t border-ink/10 pt-5">
                <p className="font-display text-xl font-black tracking-[-0.04em]">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-ink/50">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
