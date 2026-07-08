import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/site.config";
import { ButtonLink } from "@/components/button-link";
import { SectionKicker } from "@/components/section-kicker";
import { useWhatsAppLink } from "@/hooks/use-whatsapp-link";

export function Contact() {
  const whatsappLink = useWhatsAppLink();

  return (
    <section id="contacto" className="bg-bone py-24 text-ink">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[3rem] bg-ink text-bone">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-12 lg:p-16">
              <SectionKicker
                eyebrow="Cotizar"
                title="Si tu negocio está listo para verse más serio, conversemos."
                description="Cuéntanos qué vendes, qué necesitas y qué tan rápido quieres salir. Te respondemos con una ruta clara, no con palabras infladas."
              />
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={whatsappLink}>Escribir por WhatsApp</ButtonLink>
                <ButtonLink href={siteConfig.contact.instagram} variant="ghost">
                  Ver Instagram
                </ButtonLink>
              </div>
            </div>
            <div className="bg-lava p-8 text-bone md:p-12 lg:p-16">
              <p className="font-display text-4xl font-black leading-none tracking-[-0.06em]">
                Datos rápidos
              </p>
              <div className="mt-10 space-y-5">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring flex items-center gap-4 rounded-2xl bg-ink/20 p-4 font-bold transition hover:bg-ink/30"
                >
                  <MessageCircle className="h-6 w-6" />
                  {siteConfig.contact.whatsapp}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="focus-ring flex items-center gap-4 rounded-2xl bg-ink/20 p-4 font-bold transition hover:bg-ink/30"
                >
                  <Mail className="h-6 w-6" />
                  {siteConfig.contact.email}
                </a>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring flex items-center gap-4 rounded-2xl bg-ink/20 p-4 font-bold transition hover:bg-ink/30"
                >
                  <Instagram className="h-6 w-6" />
                  Instagram owner
                </a>
                <div className="flex items-center gap-4 rounded-2xl bg-ink/20 p-4 font-bold">
                  <MapPin className="h-6 w-6" />
                  {siteConfig.contact.address}
                </div>
              </div>
              <div className="mt-10 rounded-[2rem] bg-bone p-6 text-ink">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-ink/50">
                  Promesa Nanaimo
                </p>
                <p className="mt-3 font-display text-3xl font-black leading-none tracking-[-0.05em]">
                  Diseño rico, código limpio y una entrega que puedas explicar en una llamada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
