import Image from "next/image";
import { CheckCircle2, MousePointer2, Sparkles, Zap } from "lucide-react";
import { siteConfig } from "@/site.config";
import { ButtonLink } from "@/components/button-link";
import { useWhatsAppLink } from "@/hooks/use-whatsapp-link";

export function Hero() {
  const whatsappLink = useWhatsAppLink();

  return (
    <section className="relative isolate bg-[radial-gradient(circle_at_12%_18%,rgba(37,99,235,.16),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(255,90,95,.20),transparent_28%),linear-gradient(135deg,#FCF7EF_0%,#EEF3FF_100%)] pt-28">
      <div className="absolute left-8 top-36 -z-10 h-28 w-28 rotate-12 rounded-[2rem] bg-mint/55 blur-xl" />
      <div className="absolute bottom-16 right-14 -z-10 h-36 w-36 rounded-full bg-lava/35 blur-2xl" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <div className="flex flex-col justify-center">
          <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm font-black text-ink/75 shadow-sm">
            <Sparkles className="h-4 w-4 text-lava" />
            {siteConfig.hero.eyebrow}
          </div>
          <h1 className="text-balance font-display text-6xl font-black uppercase leading-[0.78] tracking-[-0.075em] text-ink md:text-8xl">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-ink/68">{siteConfig.hero.subtitle}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={whatsappLink}>{siteConfig.hero.primaryCta}</ButtonLink>
            <ButtonLink href="#servicios" variant="ghost">
              {siteConfig.hero.secondaryCta}
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {siteConfig.hero.proof.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/60 px-4 py-3 text-sm font-black text-ink/72 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-cyan" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-7 top-10 z-10 hidden rotate-[-8deg] rounded-3xl bg-lava px-5 py-4 font-display text-2xl font-black uppercase tracking-[-0.05em] text-bone shadow-xl md:block">
            menos bla
            <br />
            más venta
          </div>
          <div className="absolute -right-5 top-28 z-10 hidden rotate-6 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-black text-bone shadow-xl md:flex">
            <MousePointer2 className="h-4 w-4 text-mint" />
            click con intención
          </div>
          <div className="clip-slant relative overflow-hidden rounded-[2.5rem] border border-ink/10 bg-white/70 p-3 shadow-glow">
            <div className="absolute inset-y-0 left-0 w-1/2 animate-scan bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
            <Image
              src="/work/demo-commerce.svg"
              alt="Demo visual de una web ecommerce creada por Nanaimo"
              width={900}
              height={620}
              className="h-auto w-full rounded-[2rem]"
              priority
            />
          </div>
          <div className="absolute -bottom-8 left-4 right-4 grid gap-3 rounded-[2rem] border border-ink/10 bg-white/88 p-4 shadow-2xl backdrop-blur-xl sm:grid-cols-3">
            {siteConfig.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.35rem] bg-paper p-4">
                <p className="font-display text-2xl font-black text-cyan">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-ink/52">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-16 right-8 hidden rotate-3 rounded-3xl bg-mint px-5 py-4 font-black text-ink shadow-xl lg:flex lg:items-center lg:gap-2">
            <Zap className="h-5 w-5" />
            web con pulso
          </div>
        </div>
      </div>
    </section>
  );
}
