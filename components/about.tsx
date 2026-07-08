import { Quote } from "lucide-react";
import { siteConfig } from "@/site.config";
import { SectionKicker } from "@/components/section-kicker";

export function About() {
  return (
    <section id="nosotros" className="bg-paper py-24 text-ink">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="rounded-[3rem] bg-ink p-8 text-bone md:p-12">
            <Quote className="h-12 w-12 text-lava" />
            <h2 className="mt-8 font-display text-5xl font-black leading-[0.94] tracking-[-0.06em] md:text-7xl">
              {siteConfig.about.title}
            </h2>
          </div>
          <div>
            <SectionKicker
              eyebrow="Sobre nosotros"
              title="Una agencia chica con hambre de hacer cosas grandes."
              description={siteConfig.about.body}
              tone="light"
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {siteConfig.about.values.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-ink/10 bg-bone px-5 py-4 font-black"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
