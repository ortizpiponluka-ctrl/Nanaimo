import { getCommerceReadiness } from "@/lib/commerce";
import { siteConfig } from "@/site.config";
import { SectionKicker } from "@/components/section-kicker";

export function Process() {
  const readiness = getCommerceReadiness();

  return (
    <section id="proceso" className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionKicker
              eyebrow="Cómo funciona"
              title="Un proceso simple, serio y sin humo digital."
              description="El objetivo es que sepas qué estás comprando, en qué etapa vamos y qué queda listo para vender."
            />
            <div className="mt-8 rounded-[2rem] border border-bone/10 bg-bone/[0.06] p-5">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-bone/50">
                Preparado para crecer
              </p>
              <div className="grid gap-3">
                {readiness.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl bg-ink px-4 py-3"
                  >
                    <span className="text-sm font-bold text-bone/74">{item.label}</span>
                    <span className="rounded-full bg-mint px-3 py-1 text-xs font-black text-ink">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {siteConfig.process.map((step) => (
              <article
                key={step.step}
                className="rounded-[2rem] border border-bone/10 bg-bone/[0.06] p-7 transition hover:border-mint/50"
              >
                <div className="mb-8 font-display text-6xl font-black tracking-[-0.08em] text-lava">
                  {step.step}
                </div>
                <h3 className="font-display text-3xl font-black tracking-[-0.05em]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-bone/65">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
