"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import { CASES } from "@/data/cases";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn, formatNumber } from "@/lib/utils";

const FILTERS = [
  { key: "all", label: "Все" },
  { key: "cinema", label: "Кино" },
  { key: "events", label: "Мероприятия" },
  { key: "promo", label: "Промо" },
] as const;

type Filter = (typeof FILTERS)[number]["key"];

export function CasesIndex() {
  const [filter, setFilter] = useState<Filter>("all");

  const list = useMemo(
    () => (filter === "all" ? CASES : CASES.filter((c) => c.category === filter)),
    [filter]
  );

  return (
    <div className="min-h-dvh bg-milk">
      <section className="pt-40 pb-16 md:pt-48">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <Eyebrow className="text-ink/60">Кейсы</Eyebrow>
              <h1 className="mt-6 font-display text-hero font-light leading-[0.94] tracking-tight text-balance">
                Что мы делали, <br />
                <em className="italic font-light text-ink/50">кроме кофе.</em>
              </h1>
            </div>
            <p className="md:col-span-4 self-end max-w-md text-ink/60 text-lg text-pretty">
              Отобрали проекты, которые лучше всего показывают, как мы работаем в разных
              контекстах — от полевых съёмок до городских активаций.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all",
                filter === f.key
                  ? "border-ink bg-ink text-milk"
                  : "border-ink/15 text-ink/70 hover:border-ink/40"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {list.map((c, i) => (
            <motion.div
              key={c.slug}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/contact"
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-[32px]",
                  i % 4 === 0 || i % 4 === 3 ? "bg-ink text-milk" : "bg-cream text-ink"
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={c.cover}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-milk/90 px-3 py-1 text-xs font-medium uppercase tracking-widest text-ink backdrop-blur">
                    {c.categoryLabel}
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest opacity-60">
                      {c.client}
                    </div>
                    <h3 className="mt-4 font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-light leading-snug tracking-tight text-balance">
                      {c.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed opacity-70 text-pretty">
                      {c.short}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-current/10 pt-5 text-sm opacity-80">
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      <span className="tabular-nums">{formatNumber(c.guests)} чел.</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      <span>{c.location}</span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="h-32" />
    </div>
  );
}
