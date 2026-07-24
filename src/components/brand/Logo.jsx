/**
 * Ruby Soho wordmark.
 *
 * This component intentionally renders a typographic logo until
 * an official SVG logo becomes available.
 */
function Logo({
  as: Component = "a",
  href = "/",
  className = "",
}) {
  return (
    <Component
      href={href}
      aria-label="Ruby Soho"
      className={[
        "inline-flex items-center justify-center",
        "font-black uppercase tracking-[0.2em]",
        "text-[var(--color-primary)]",
        "transition-colors duration-200",
        "hover:opacity-90",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[var(--color-primary)]",
        "focus-visible:ring-offset-4",
        className,
      ].join(" ")}
    >
      <span className="text-2xl sm:text-3xl">
        Ruby Soho
      </span>
    </Component>
  );
}

export default Logo;