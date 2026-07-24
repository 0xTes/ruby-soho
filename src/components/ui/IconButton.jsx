import { cn } from "../../lib/cn";

/**
 * Circular icon button for external social links.
 */
function IconButton({
  icon: Icon,
  label,
  href,
  className = "",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-14 w-14 items-center justify-center",
        "rounded-full",
        "border-2 border-[var(--color-secondary)]",
        "bg-white",
        "text-[var(--color-secondary)]",
        "transition-all duration-200",
        "hover:-translate-y-0.5",
        "hover:border-[var(--color-primary)]",
        "hover:text-[var(--color-primary)]",
        "active:translate-y-0",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[var(--color-primary)]",
        "focus-visible:ring-offset-4",
        className,
      )}
    >
      <Icon
        aria-hidden="true"
        className="h-6 w-6"
      />
    </a>
  );
}

export default IconButton;