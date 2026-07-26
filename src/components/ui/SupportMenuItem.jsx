import { forwardRef } from "react";

import { cn } from "../../lib/cn";

/**
 * Renders a single support action inside the SupportMenu.
 *
 * Responsibilities:
 * - renders one support link
 * - presents an icon and label
 * - exposes the underlying anchor element
 */
const SupportMenuItem = forwardRef(function SupportMenuItem(
  {
    icon,
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
      className={cn(
        "group",
        "flex",
        "w-full",
        "items-center",
        "gap-3",

        "rounded-2xl",

        "px-4",
        "py-3",

        "text-left",

        "transition-all",
        "duration-200",

        "hover:bg-[var(--color-background)]",
        "hover:-translate-y-0.5",

        "active:translate-y-0",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[var(--color-primary)]",
        "focus-visible:ring-offset-2",

        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          "flex",
          "h-10",
          "w-10",
          "items-center",
          "justify-center",

          "rounded-full",

          "bg-white",

          "text-lg",

          "transition-colors",
          "duration-200",

          "group-hover:text-[var(--color-primary)]",
        )}
      >
        {icon}
      </span>

      <span
        className={cn(
          "text-sm",
          "font-semibold",

          "tracking-wide",

          "text-[var(--color-text)]",

          "transition-colors",
          "duration-200",

          "group-hover:text-[var(--color-primary)]",
        )}
      >
        {label}
      </span>
    </a>
  );
});

export default SupportMenuItem;