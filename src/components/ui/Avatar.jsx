import { forwardRef } from "react";

import { cn } from "../../lib/cn";

/**
 * Displays the creator portrait.
 *
 * Responsibilities:
 * - renders the primary portrait image
 * - applies consistent presentation styling
 * - optionally exposes an accessible caption
 */
const Avatar = forwardRef(function Avatar(
  {
    src,
    alt,
    caption,
    className = "",
    ...props
  },
  ref,
) {
  return (
    <figure
      ref={ref}
      className={cn(
        "overflow-hidden",
        "rounded-t-[3rem]",
        "bg-neutral-100",
        "shadow-2xl",
        className,
      )}
      {...props}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        draggable={false}
        className={cn(
          "block",
          "h-auto",
          "w-full",

          "object-cover",

          "select-none",

          "transition-transform",
          "duration-500",

          "motion-safe:hover:scale-[1.02]",
        )}
      />

      {caption ? (
        <figcaption className="sr-only">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
});

export default Avatar;