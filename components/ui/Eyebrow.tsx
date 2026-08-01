import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  dot = true,
  n,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
  n?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-eyebrow uppercase font-mono",
        className
      )}
    >
      {n && <span className="opacity-60">N° {n}</span>}
      {dot && !n && (
        <span className="inline-block h-1 w-1 rounded-full bg-current opacity-60" />
      )}
      <span>{children}</span>
    </span>
  );
}
