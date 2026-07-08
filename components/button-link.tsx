import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(
        "focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-black transition duration-300",
        variant === "primary" &&
          "bg-cyan text-bone shadow-glow hover:-translate-y-1 hover:bg-[#1d4ed8]",
        variant === "ghost" &&
          "border border-ink/10 bg-white/60 text-ink shadow-sm hover:-translate-y-1 hover:border-cyan/40 hover:bg-white",
        variant === "light" && "bg-bone text-ink hover:-translate-y-1 hover:bg-mint",
        className
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
