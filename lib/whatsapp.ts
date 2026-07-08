import { siteConfig } from "@/site.config";
import { formatPhoneForWhatsApp } from "@/lib/utils";

export function getWhatsAppLink(customMessage?: string) {
  const phone = formatPhoneForWhatsApp(siteConfig.contact.whatsapp);
  const text = encodeURIComponent(customMessage ?? siteConfig.contact.whatsappMessage);

  return `https://wa.me/${phone}?text=${text}`;
}
