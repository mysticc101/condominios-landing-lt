import clsx from "clsx";

type MediaPlaceholderProps = {
  alt: string;
  className?: string;
  label: string;
  src: string;
  variant?: "dark" | "light" | "warm";
};

/** A layout-safe reserve for final architectural photography or film. */
export default function MediaPlaceholder({
  alt,
  className,
  label,
  src,
  variant = "dark",
}: MediaPlaceholderProps) {
  return (
    <figure
      role="img"
      aria-label={alt}
      className={clsx("media-placeholder", `media-placeholder--${variant}`, className)}
    >
      <div className="media-placeholder__grid" aria-hidden="true" />
      <div className="media-placeholder__mark" aria-hidden="true"><span /><span /></div>
      <figcaption className="media-placeholder__caption">
        <span>{label}</span>
        <code>{src}</code>
      </figcaption>
    </figure>
  );
}
