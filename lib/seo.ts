import { siteConfig } from "@/site.config";

export function getSiteUrl() {
  return siteConfig.seo.url.replace(/\/$/, "");
}
