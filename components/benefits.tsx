import { BadgeCheck, MessageCircle, Rocket, WandSparkles } from "lucide-react";
import { siteConfig } from "@/site.config";
import { SectionKicker } from "@/components/section-kicker";

const icons = [WandSparkles, MessageCircle, Rocket, BadgeCheck];

export function Benefits() {
  return (
    <section id="beneficios" className="relative border-y border-ink/10 bg-bone text-ink">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionKicker
            eyebrow="Por qué Nanaimo"
            title="Diseñamos como si el negocio fuera nuestro."
            description="La página tiene que verse bien, sí. Pero sobre todo tiene que ayudar a que alguien confíe, pregunte y compre."
            tone="light"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.benefits.map((benefit, index) => {
              const Icon = icons[index] ?? BadgeCheck;

              return (
                <article
                  key={benefit.title}
                  className="group rounded-[2rem] border border-ink/10 bg-white/80 p-6 text-ink shadow-sm transition duration-300 hover:-translate-y-2 hover:rotate-1 hover:border-cyan/30 hover:shadow-xl"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan to-mint text-white transition group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-black tracking-[-0.04em]">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 leading-7 text-ink/66">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
