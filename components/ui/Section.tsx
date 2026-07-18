import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: string;
}

export default function Section({
  children,
  className,
  id,
  spacing = "py-20 sm:py-24 lg:py-32",
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(spacing, className)}
    >
      {children}
    </section>
  );
}
