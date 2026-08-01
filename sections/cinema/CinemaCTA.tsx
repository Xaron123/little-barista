"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CinemaCTA() {
  return (
    <section className="relative overflow-hidden bg-black text-milk py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 grain-overlay"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599735734-79b4212bea9c?auto=format&fit=crop&w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />

      <div className="container relative">
        <SectionLabel n="07" title="Готовы к смене" className="text-milk/60" />

        <h2 className="mt-10 max-w-5xl font-display text-[clamp(2.5rem,8vw,7rem)] font-light leading-[0.9] tracking-tightest text-balance">
          Ваш следующий проект <br />
          <em className="italic text-latte">заслуживает горячей еды.</em>
        </h2>

        <div className="mt-14 flex flex-wrap items-center gap-10">
          <Link
            href="#calculator"
            className="group inline-flex items-baseline gap-4 border-b border-milk/50 pb-3 font-display text-3xl italic"
          >
            Собрать смету
            <ArrowUpRight className="h-6 w-6 translate-y-1 transition-transform group-hover:rotate-45" />
          </Link>
          <Link
            href="/contact"
            className="font-mono text-meta uppercase text-milk/70 link-bronze hover:text-milk"
          >
            Написать в Telegram
          </Link>
        </div>
      </div>
    </section>
  );
}
