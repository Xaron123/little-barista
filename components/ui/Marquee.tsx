import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  itemClassName,
}: {
  items: React.ReactNode[];
  className?: string;
  itemClassName?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <div key={i} className={cn("flex items-center gap-16", itemClassName)}>
            {item}
            <span className="text-current/40">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
