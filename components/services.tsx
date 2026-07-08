import { ArrowRight, Layers3 } from "lucide-react";
import { siteConfig } from "@/site.config";
import { SectionKicker } from "@/components/section-kicker";
import { ButtonLink } from "@/components/button-link";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Services() {
  return (
    <section id="servicios" className="relative bg-paper py-24 text-ink">
      <div className="absolute inset-0 -z-0 bg-grid bg-[length:48px_48px] opacity-60" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-lava/20 blur-[90px]" />
      <div className="absolute bottom-12 right-0 h-80 w-80 rounded-full bg-cyan/16 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionKicker
            eyebrow="Servicios"
            title="Elige el tamaño de tu salto digital."
            description="Partimos simple si conviene, pero dejamos la base pensada para crecer."
            tone="light"
          />
          <div className="flex flex-wrap gap-2">
            {siteConfig.categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink/60 shadow-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {siteConfig.products.map((product, index) => (
            <article
              key={product.name}
              className="group flex min-h-[520px] flex-col rounded-[2.25rem] border border-ink/10 bg-white/78 p-6 shadow-sm transition duration-300 hover:-translate-y-3 hover:border-cyan/40 hover:shadow-2xl lg:even:translate-y-8"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-ink text-bone transition group-hover:rotate-6">
                  <Layers3 className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-lava px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-bone shadow-sm">
                  {product.badge}
                </span>
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan">
                {String(index + 1).padStart(2, "0")} / {product.category}
              </p>
              <h3 className="mt-4 font-display text-3xl font-black tracking-[-0.05em]">
                {product.name}
              </h3>
              <p className="mt-3 font-display text-xl font-black text-lava">{product.price}</p>
              <p className="mt-5 leading-7 text-ink/66">{product.description}</p>
              <ul className="mt-7 space-y-3">
                {product.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3 text-sm font-semibold text-ink/72">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    {deliverable}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={getWhatsAppLink(
                  `Hola Nanaimo, me interesa el servicio ${product.name}. ¿Me cuentas cómo funciona?`
                )}
                variant={index === 1 ? "primary" : "ghost"}
                className="mt-auto w-full"
              >
                {product.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
