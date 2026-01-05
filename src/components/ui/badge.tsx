import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

type BadgeVariant = "neutral" | "accent" | "outline" | "status";

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  neutral: "bg-white/5 text-white/70",
  accent: "bg-accent/15 text-accent",
  outline: "border border-white/10 text-white/70",
  status: "bg-white/10 text-white/80",
};

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
