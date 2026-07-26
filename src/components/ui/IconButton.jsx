import { forwardRef } from "react";

import { cn } from "../../lib/cn";

/**
 * Circular icon button for external social links.
 *
 * Responsibilities:
 * - renders a circular icon link
 * - provides accessible labels
 * - exposes the underlying anchor element
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

        "hover:-translate-y-0.5",
        "hover:border-[var(--color-primary)]",
        "hover:text-[var(--color-primary)]",
        "hover:shadow-lg",

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
        className="h-5 w-5"
      />
    </a>
  );
});

export default IconButton;