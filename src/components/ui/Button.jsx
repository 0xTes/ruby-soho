import { forwardRef } from "react";

import { cn } from "../../lib/cn";

/**
 * Primary action button.
 *
 * Responsibilities:
 * - renders either a <button> or <a>
 * - applies primary button styling
 * - exposes the underlying DOM node via forwardRef
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
    disabled = false,
    ...props
  },
  ref,
) {
  const classes = cn(
    "inline-flex items-center justify-center",

    "h-14",

    "rounded-full",

    "bg-[var(--color-primary)]",

    "px-10",

    "font-semibold",

    "text-white",

    "shadow-lg",

    "transition-all duration-200",

    "hover:-translate-y-0.5",
    "hover:shadow-xl",

    "active:scale-[0.98]",

    "disabled:pointer-events-none",
    "disabled:opacity-60",

    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--color-primary)]",
    "focus-visible:ring-offset-4",

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
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;