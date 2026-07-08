import { ArrowRight, Layers3 } from "lucide-react";
import { siteConfig } from "@/site.config";
import { SectionKicker } from "@/components/section-kicker";
import { ButtonLink } from "@/components/button-link";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Services() {
  return (
    <section id="servicios" className="relative bg-ink py-24">
      <div className="absolute inset-0 -z-0 bg-grid bg-[length:48px_48px] opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionKicker
            eyebrow="Servicios"
            title="Elige el tamaño de tu salto digital."
            description="Partimos simple si conviene, pero dejamos la base pensada para crecer."
          />
          <div className="flex flex-wrap gap-2">
            {siteConfig.categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-bone/15 bg-bone/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-bone/60"
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
              className="group flex min-h-[520px] flex-col rounded-[2.25rem] border border-bone/10 bg-bone/[0.06] p-6 transition duration-300 hover:-translate-y-2 hover:border-lava/70 hover:bg-bone/[0.09]"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-bone text-ink">
                  <Layers3 className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-lava px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-bone">
                  {product.badge}
                </span>
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-mint">
                {String(index + 1).padStart(2, "0")} / {product.category}
              </p>
              <h3 className="mt-4 font-display text-3xl font-black tracking-[-0.05em]">
                {product.name}
              </h3>
              <p className="mt-3 font-display text-xl font-black text-lava">{product.price}</p>
              <p className="mt-5 leading-7 text-bone/66">{product.description}</p>
              <ul className="mt-7 space-y-3">
                {product.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-3 text-sm font-semibold text-bone/72">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
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
