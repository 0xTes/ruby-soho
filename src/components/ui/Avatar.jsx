import { cn } from "../../lib/cn";

/**
 * Displays the creator portrait.
 */
function Avatar({
  src,
  alt,
  caption,
  className = "",
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-t-[3rem]",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        className="block h-auto w-full object-cover"
      />

      {caption ? (
        <figcaption className="sr-only">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default Avatar;