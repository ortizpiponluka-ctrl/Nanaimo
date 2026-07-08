"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/site.config";
import { useWhatsAppLink } from "@/hooks/use-whatsapp-link";

export function FloatingWhatsApp() {
  const whatsappLink = useWhatsAppLink();

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label={`Contactar a ${siteConfig.name} por WhatsApp`}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-mint px-5 py-4 font-black text-ink shadow-mint transition hover:-translate-y-1 hover:bg-bone"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Cotizar</span>
    </a>
  );
}
