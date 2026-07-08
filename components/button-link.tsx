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
          "bg-lava text-bone shadow-glow hover:-translate-y-1 hover:bg-[#ff654c]",
        variant === "ghost" &&
          "border border-bone/20 bg-bone/5 text-bone hover:-translate-y-1 hover:border-mint/70 hover:bg-mint/10",
        variant === "light" && "bg-bone text-ink hover:-translate-y-1 hover:bg-mint",
        className
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
