import { forwardRef } from "react";

import { cn } from "../../lib/cn";

/**
 * Reusable elevated surface.
 *
 * Provides a consistent visual container for menus,
 * cards, dialogs, and other surfaced UI.
 */
const Card = forwardRef(function Card(
  { children, className = "", ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl",
        "border",
        "border-neutral-200",
        "bg-white",
        "shadow-xl",
        "p-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export default Card;