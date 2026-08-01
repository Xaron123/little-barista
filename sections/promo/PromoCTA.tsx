"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PromoCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-milk py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

      <div className="container relative">
        <SectionLabel n="06" title="Запустить активацию" className="text-milk/60" />

        <h2 className="mt-10 max-w-5xl font-display text-[clamp(2.5rem,8vw,6.5rem)] font-light leading-[0.94] tracking-tightest text-balance">
          Обсудим кампанию <br />
          <em className="italic text-latte">и посчитаем медиа-эффект.</em>
        </h2>

        <div className="mt-14 flex flex-wrap items-center gap-8">
          <Link
            href="/contact"
            className="group inline-flex items-baseline gap-4 border-b border-milk/50 pb-3 font-display text-3xl italic"
          >
            Запросить медиакит
            <ArrowUpRight className="h-6 w-6 translate-y-1 transition-transform group-hover:rotate-45" />
          </Link>
          <Link
            href="/cases"
            className="font-mono text-meta uppercase text-milk/70 link-bronze"
          >
            Посмотреть кейсы
          </Link>
        </div>
      </div>
    </section>
  );
}
