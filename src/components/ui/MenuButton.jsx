import { forwardRef } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import { cn } from "../../lib/cn";

/**
 * Accessible trigger button used by SupportMenu.
 *
 * Stateless:
 * - renders the correct icon
 * - exposes its DOM node through a forwarded ref
 * *does not* manage menu state
 */
const MenuButton = forwardRef(function MenuButton(
  {
    isOpen = false,
    onClick,
    className = "",
  },
  ref,
) {
  const Icon = isOpen ? HiOutlineXMark : HiOutlineBars3;

  return (
    <button
      ref={ref}
      type="button"
      aria-label={isOpen ? "Close support menu" : "Open support menu"}
      aria-expanded={isOpen}
      onClick={onClick}
      className={cn(
        "inline-flex",
        "h-12",
        "w-12",
        "items-center",
        "justify-center",

        "rounded-full",

        "border",
        "border-[var(--color-secondary)]",

        "bg-white",

        "text-[var(--color-secondary)]",

        "shadow-sm",

        "transition-all",
        "duration-200",

        "hover:-translate-y-0.5",
        "hover:border-[var(--color-primary)]",
        "hover:text-[var(--color-primary)]",
        "hover:shadow-md",

        "active:translate-y-0",

        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[var(--color-primary)]",
        "focus-visible:ring-offset-2",

        className,
      )}
    >
      <Icon
        aria-hidden="true"
        className="h-6 w-6"
      />
    </button>
  );
});

export default MenuButton;