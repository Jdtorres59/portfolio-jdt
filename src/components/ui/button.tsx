import { cn } from "@/lib/cn";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariants = "primary" | "secondary" | "ghost" | "highlight";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariants;
  href?: string;
};

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  variant?: ButtonVariants;
  href: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50";

const variants: Record<ButtonVariants, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-[0_16px_40px_-24px_rgba(63,214,179,0.6)] hover:bg-accent/90",
  secondary:
    "border border-white/10 bg-white/5 text-white hover:bg-white/10",
  ghost: "text-white/70 hover:text-white",
  highlight:
    "bg-emerald-400 text-slate-950 shadow-[0_16px_40px_-24px_rgba(52,211,153,0.7)] hover:bg-emerald-300",
};

export function Button(props: ButtonProps | AnchorProps) {
  const { className, variant = "primary", href, ...rest } = props;
  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    const anchorProps = rest as Omit<AnchorProps, "href">;
    return <a href={href} className={classes} {...anchorProps} />;
  }

  return <button className={classes} {...(rest as ButtonProps)} />;
}
