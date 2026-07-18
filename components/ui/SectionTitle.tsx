import clsx from "clsx";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={clsx("mb-12 sm:mb-16", center && "text-center")}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#9a7257]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-4xl leading-[0.98] tracking-[-0.035em] text-stone-900 sm:text-5xl lg:text-6xl [font-family:var(--font-heading)]">
        {title}
      </h2>
      {description ? (
        <p className={clsx("mt-5 max-w-2xl text-pretty leading-7 text-stone-600", center && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
