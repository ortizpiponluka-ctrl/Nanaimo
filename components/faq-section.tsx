import { HelpCircle } from "lucide-react";
import { siteConfig } from "@/site.config";
import { SectionKicker } from "@/components/section-kicker";

export function FaqSection() {
  return (
    <section id="faq" className="bg-ink py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionKicker
          eyebrow="Preguntas frecuentes"
          title="Preguntas normales antes de comprar algo importante."
          description="Si una respuesta no está aquí, mejor: esa conversación seguramente nos ayuda a diseñar una web más precisa."
        />
        <div className="space-y-4">
          {siteConfig.faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.75rem] border border-bone/10 bg-bone/[0.06] p-6 open:border-lava/60"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl font-black tracking-[-0.04em]">
                {item.question}
                <HelpCircle className="h-6 w-6 shrink-0 text-mint transition group-open:rotate-45" />
              </summary>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-bone/68">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
