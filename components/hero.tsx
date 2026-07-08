import Image from "next/image";
import { CheckCircle2, Sparkles } from "lucide-react";
import { siteConfig } from "@/site.config";
import { ButtonLink } from "@/components/button-link";
import { useWhatsAppLink } from "@/hooks/use-whatsapp-link";

export function Hero() {
  const whatsappLink = useWhatsAppLink();

  return (
    <section className="relative isolate pt-28">
      <div className="absolute left-1/2 top-0 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-lava/20 blur-[150px]" />
      <div className="absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-mint/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
        <div className="flex flex-col justify-center">
          <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-bone/15 bg-bone/5 px-4 py-2 text-sm font-bold text-bone/80">
            <Sparkles className="h-4 w-4 text-mint" />
            {siteConfig.hero.eyebrow}
          </div>
          <h1 className="text-balance font-display text-6xl font-black leading-[0.86] tracking-[-0.08em] text-bone md:text-8xl">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-bone/70">{siteConfig.hero.subtitle}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={whatsappLink}>{siteConfig.hero.primaryCta}</ButtonLink>
            <ButtonLink href="#servicios" variant="ghost">
              {siteConfig.hero.secondaryCta}
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {siteConfig.hero.proof.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-bone/72">
                <CheckCircle2 className="h-5 w-5 text-mint" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="clip-slant relative overflow-hidden rounded-[2.5rem] border border-bone/15 bg-bone/8 p-3 shadow-glow">
            <div className="absolute inset-y-0 left-0 w-1/2 animate-scan bg-gradient-to-r from-transparent via-bone/20 to-transparent" />
            <Image
              src="/work/demo-commerce.svg"
              alt="Demo visual de una web ecommerce creada por Nanaimo"
              width={900}
              height={620}
              className="h-auto w-full rounded-[2rem]"
              priority
            />
          </div>
          <div className="absolute -bottom-8 left-4 right-4 grid gap-3 rounded-[2rem] border border-bone/10 bg-ink/90 p-4 shadow-2xl backdrop-blur-xl sm:grid-cols-3">
            {siteConfig.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-[1.35rem] bg-bone/8 p-4">
                <p className="font-display text-2xl font-black text-mint">{stat.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-bone/52">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
