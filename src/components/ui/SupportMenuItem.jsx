import { cn } from "../../lib/cn";

/**
 * Renders a single support action inside the SupportMenu.
 */
function SupportMenuItem({
  icon,
  label,
  href,
  className = "",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex w-full items-center gap-3",
        "rounded-xl",
        "px-4 py-3",
        "text-left",
        "transition-colors duration-200",
        "hover:bg-[var(--color-background)]",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[var(--color-primary)]",
        "focus-visible:ring-offset-2",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="text-xl leading-none"
      >
        {icon}
      </span>

      <span
        className="
          text-sm
          font-semibold
          tracking-wide
          text-[var(--color-text)]
        "
      >
        {label}
      </span>
    </a>
  );
}

export default SupportMenuItem;