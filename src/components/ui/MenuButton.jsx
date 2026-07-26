import { forwardRef } from "react";

import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import { cn } from "../../lib/cn";

/**
 * Support menu trigger.
 *
 * Responsibilities:
 * - toggles the support menu
 * - reflects open/closed state
 * - exposes the underlying button element
 */
const MenuButton = forwardRef(function MenuButton(
  {
    isOpen = false,
    className = "",
    ...props
  },
  ref,
) {
  const Icon = isOpen ? HiOutlineXMark : HiOutlineBars3;

  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={isOpen}
      aria-haspopup="menu"
      aria-label={isOpen ? "Close support menu" : "Open support menu"}
      className={cn(
        "inline-flex",
        "h-12",
        "w-12",
        "items-center",
        "justify-center",

        "rounded-full",

        "bg-white",

        "text-[var(--color-secondary)]",

        "shadow-md",

        "transition-all",
        "duration-200",

        "hover:-translate-y-0.5",
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
        className="h-6 w-6"
      />
    </button>
  );
});

export default MenuButton;