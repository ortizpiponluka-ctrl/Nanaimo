import { getWhatsAppLink } from "@/lib/whatsapp";

export function useWhatsAppLink(customMessage?: string) {
  return getWhatsAppLink(customMessage);
}
