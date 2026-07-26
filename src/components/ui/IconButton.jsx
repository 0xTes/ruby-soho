import { forwardRef } from "react";

import { cn } from "../../lib/cn";

/**
 * Circular icon button for external social links.
 */
const IconButton = forwardRef(function IconButton(
  {
    icon: Icon,
    label,
    href,
    className = "",
    ...props
  },
  ref,
) {
  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={cn(
        "group",

        "inline-flex",
        "h-14",
        "w-14",
        "items-center",
        "justify-center",

        "rounded-full",

        "border",
        "border-neutral-300",

        "bg-white",

        "text-[var(--color-secondary)]",

        "shadow-md",

        "transition-all",
        "duration-200",

        "motion-safe:hover:-translate-y-0.5",
        "motion-safe:hover:border-[var(--color-primary)]",
        "motion-safe:hover:shadow-lg",

        "active:scale-[0.97]",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[var(--color-primary)]",
        "focus-visible:ring-offset-4",

        className,
      )}
      {...props}
    >
      <Icon
        aria-hidden="true"
        className={cn(
          "h-5",
          "w-5",

          "transition-all",
          "duration-200",

          "group-hover:text-[var(--color-primary)]",
          "motion-safe:group-hover:scale-110",
        )}
      />
    </a>
  );
});

export default IconButton;