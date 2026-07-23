import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional class names and merges conflicting Tailwind classes.
 *
 * Example:
 * cn("px-4", condition && "px-8")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}