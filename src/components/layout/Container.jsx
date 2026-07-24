import { cn } from "../../lib/cn";

/**
 * Centers content horizontally while constraining its maximum width.
 */
function Container({
  children,
  className = "",
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Container;