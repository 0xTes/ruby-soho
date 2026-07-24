import { cn } from "../../lib/cn";

/**
 * Primary action button.
 */
function Button({
  children,
  className = "",
  href,
  target,
  rel,
  onClick,
  type = "button",
}) {
  const classes = cn(
    "inline-flex items-center justify-center",
    "min-h-14",
    "rounded-full",
    "bg-[var(--color-primary)]",
    "px-8",
    "font-semibold",
    "text-white",
    "transition-all duration-200",
    "hover:scale-[1.02]",
    "hover:opacity-95",
    "active:scale-[0.98]",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--color-primary)]",
    "focus-visible:ring-offset-4",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}

export default Button;