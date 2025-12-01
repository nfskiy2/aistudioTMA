/**
 * specific utility to combine class names conditionally.
 * In a real project, we would use 'clsx' and 'tailwind-merge'.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}