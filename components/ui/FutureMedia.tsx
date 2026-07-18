import clsx from "clsx";

type FutureMediaProps = {
  alt: string;
  className?: string;
  label: string;
  src: string;
  tone?: "ink" | "sage" | "stone";
};

export default function FutureMedia({
  alt,
  className,
  label,
  src,
  tone = "ink",
}: FutureMediaProps) {
  return (
    <figure
      role="img"
      aria-label={alt}
      className={clsx("future-media", `future-media--${tone}`, className)}
    >
      <span className="future-media__rule" aria-hidden="true" />
      <figcaption>
        <span>{label}</span>
        <code>{src}</code>
      </figcaption>
    </figure>
  );
}
