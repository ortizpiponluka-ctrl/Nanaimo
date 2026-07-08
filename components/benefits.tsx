import { BadgeCheck, MessageCircle, Rocket, WandSparkles } from "lucide-react";
import { siteConfig } from "@/site.config";
import { SectionKicker } from "@/components/section-kicker";

const icons = [WandSparkles, MessageCircle, Rocket, BadgeCheck];

export function Benefits() {
  return (
    <section id="beneficios" className="border-y border-bone/10 bg-bone text-ink">
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
                  className="group rounded-[2rem] border border-ink/10 bg-ink p-6 text-bone transition duration-300 hover:-translate-y-1 hover:bg-[#151925]"
                >
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-ink transition group-hover:rotate-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-black tracking-[-0.04em]">
                    {benefit.title}
                  </h3>
                  <p className="mt-4 leading-7 text-bone/68">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
