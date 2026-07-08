import { cn } from "@/lib/utils";

type SectionKickerProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionKicker({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark"
}: SectionKickerProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p
        className={cn(
          "mb-4 font-display text-xs font-bold uppercase tracking-[0.32em]",
          tone === "dark" ? "text-mint" : "text-lava"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl",
          tone === "dark" ? "text-bone" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 text-lg leading-8 md:text-xl",
            tone === "dark" ? "text-bone/68" : "text-ink/68"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
