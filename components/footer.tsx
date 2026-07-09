import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/site.config";

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <Link href="#" className="focus-ring flex items-center gap-3 rounded-full">
            <Image
              src={siteConfig.logo.mark}
              alt={siteConfig.logo.alt}
              width={40}
              height={40}
              className="rounded-2xl"
            />
            <div>
              <p className="font-display text-xl font-black tracking-[-0.05em] text-bone">
                {siteConfig.name}
              </p>
              <p className="text-sm text-bone/50">
                Sitios web, ecommerce y marketing desde {siteConfig.city}.
              </p>
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-5 text-sm font-bold text-bone/60">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-mint">
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full hover:text-mint"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-bone/10 pt-6 text-xs font-bold uppercase tracking-[0.18em] text-bone/38 md:flex-row">
          <p>© {new Date().getFullYear()} Nanaimo. Hecho con cariño y código.</p>
          <p>Preparado para Shopify · Mercado Pago · Meta Pixel · Analytics</p>
        </div>
      </div>
    </footer>
  );
}
