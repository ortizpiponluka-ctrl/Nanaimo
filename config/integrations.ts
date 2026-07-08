import { siteConfig } from "@/site.config";

export const integrations = {
  whatsapp: {
    enabled: siteConfig.integrations.whatsappSales,
    mode: "manual-close",
    description:
      "El sitio deriva consultas o pedidos a WhatsApp. No procesa pagos ni datos de tarjeta."
  },
  shopify: {
    enabled: false,
    prepared: siteConfig.integrations.futureShopify,
    description:
      "La arquitectura permite una futura conexión con Shopify si el negocio necesita ecommerce completo."
  },
  mercadoPago: {
    enabled: false,
    prepared: siteConfig.integrations.futureMercadoPago,
    description:
      "La integración de pago se deja considerada como etapa posterior, sin credenciales ni cobros activos."
  },
  analytics: {
    enabled: false,
    prepared: siteConfig.integrations.futureAnalytics,
    description:
      "El proyecto puede recibir Meta Pixel, Google Analytics o eventos personalizados más adelante."
  }
} as const;
