import { cn } from "../../lib/cn";

/**
 * Reusable section heading.
 *
 * Responsibilities:
 * - renders a section title
 * - optionally renders supporting copy
 * - provides consistent spacing across sections
 */
function SectionHeading({
  title,
  description,
  align = "center",
  className = "",
}) {
  return (
    <header
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      <h2
        className="
          text-3xl
          font-bold
          tracking-tight
          text-[var(--color-text)]

          md:text-4xl
        "
      >
        {title}
      </h2>

      {description ? (
        <p
          className="
            mt-4
            text-base
            leading-7
            text-neutral-600
          "
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

export default SectionHeading;