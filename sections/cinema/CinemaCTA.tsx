"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CinemaCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-milk py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599735734-79b4212bea9c?auto=format&fit=crop&w=2200&q=70')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />

      <div className="container relative">
        <Eyebrow className="text-milk/60">Готовы к смене</Eyebrow>
        <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.98] tracking-tight text-balance">
          Ваш следующий проект <br />
          <em className="italic text-latte">заслуживает горячей еды.</em>
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#calculator"
            className="group inline-flex items-center gap-6 rounded-full bg-milk px-6 py-4 text-ink transition-colors hover:bg-cream"
          >
            <span className="font-medium">Собрать смету</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-milk transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-linelight px-6 py-4 text-milk hover:bg-white/5"
          >
            Написать в Telegram
          </Link>
        </div>
      </div>
    </section>
  );
}
