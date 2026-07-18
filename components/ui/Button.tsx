import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition duration-300 focus-visible:outline-offset-4",
        variant === "primary" &&
          "bg-stone-900 text-white shadow-[0_12px_30px_rgba(38,29,22,0.18)] hover:-translate-y-0.5 hover:bg-stone-700",
        variant === "secondary" &&
          "border border-stone-300 bg-white/80 text-stone-900 hover:-translate-y-0.5 hover:bg-white",
        variant === "light" &&
          "border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/20",
        className
      )}
    >
      {children}
    </Link>
  );
}
