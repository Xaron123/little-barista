import { cn } from "@/lib/utils";

/** Editorial section label: N° XX / TITLE  ---  used at the top of sections */
export function SectionLabel({
  n,
  title,
  className,
}: {
  n: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline gap-4 font-mono text-meta uppercase",
        className
      )}
    >
      <span className="opacity-60">N° {n}</span>
      <span className="hair flex-1 self-center" />
      <span>{title}</span>
    </div>
  );
}
