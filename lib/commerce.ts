import { siteConfig } from "@/site.config";

export function getCommerceReadiness() {
  return [
    {
      label: "Cierre por WhatsApp",
      status: siteConfig.integrations.whatsappSales ? "Activo" : "Pendiente"
    },
    {
      label: "Shopify",
      status: siteConfig.integrations.futureShopify ? "Preparado" : "No considerado"
    },
    {
      label: "Mercado Pago",
      status: siteConfig.integrations.futureMercadoPago ? "Preparado" : "No considerado"
    },
    {
      label: "Pixel y Analytics",
      status: siteConfig.integrations.futureAnalytics ? "Preparado" : "No considerado"
    }
  ];
}
