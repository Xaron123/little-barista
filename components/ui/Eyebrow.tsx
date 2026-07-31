import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  dot = true,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-eyebrow uppercase font-mono",
        className
      )}
    >
      {dot && (
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-current opacity-60" />
      )}
      {children}
    </span>
  );
}
