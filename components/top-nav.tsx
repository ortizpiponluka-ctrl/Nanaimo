import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ButtonLink } from "@/components/button-link";
import { useWhatsAppLink } from "@/hooks/use-whatsapp-link";

export function TopNav() {
  const whatsappLink = useWhatsAppLink();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-bone/10 bg-ink/80 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="#" className="focus-ring flex items-center gap-3 rounded-full">
          <Image
            src={siteConfig.logo.mark}
            alt={siteConfig.logo.alt}
            width={42}
            height={42}
            className="rounded-2xl"
            priority
          />
          <span className="font-display text-lg font-black tracking-[-0.04em]">
            {siteConfig.logo.text}
          </span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full text-sm font-bold text-bone/70 transition hover:text-mint"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <ButtonLink href={whatsappLink} className="hidden sm:inline-flex">
          Hablemos
        </ButtonLink>
      </nav>
    </header>
  );
}
