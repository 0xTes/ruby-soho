import { forwardRef } from "react";

import { cn } from "../../lib/cn";

/**
 * Primary action button.
 *
 * Responsibilities:
 * - renders the primary call-to-action
 * - supports button and anchor variants
 * - exposes the underlying DOM element
 */
const Button = forwardRef(function Button(
  {
    children,
    className = "",
    href,
    target,
    rel,
    onClick,
    type = "button",
    ...props
  },
  ref,
) {
  const classes = cn(
    "inline-flex",
    "min-h-14",
    "items-center",
    "justify-center",

    "rounded-full",

    "bg-[var(--color-primary)]",

    "px-8",

    "font-semibold",
    "text-white",

    "shadow-md",

    "transition-all",
    "duration-200",

    "motion-safe:hover:-translate-y-0.5",
    "motion-safe:hover:shadow-lg",
    "motion-safe:hover:brightness-105",

    "active:translate-y-0",
    "active:scale-[0.98]",

    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--color-primary)]",
    "focus-visible:ring-offset-4",

    "disabled:pointer-events-none",
    "disabled:opacity-50",

    className,
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;