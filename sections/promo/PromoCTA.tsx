"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PromoCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-milk py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=2000&q=70')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

      <div className="container relative">
        <Eyebrow className="text-milk/60">Запустить активацию</Eyebrow>
        <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.98] tracking-tight text-balance">
          Обсудим кампанию <br />
          <em className="italic text-latte">и посчитаем медиа-эффект.</em>
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-6 rounded-full bg-latte px-6 py-4 text-ink transition-colors hover:bg-milk"
          >
            <span className="font-medium">Запросить медиакит</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-latte transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/cases"
            className="inline-flex items-center rounded-full border border-linelight px-6 py-4 text-milk hover:bg-white/5"
          >
            Посмотреть кейсы
          </Link>
        </div>
      </div>
    </section>
  );
}
