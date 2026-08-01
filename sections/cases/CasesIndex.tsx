"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CASES } from "@/data/cases";
import { SectionLabel } from "@/components/ui/SectionLabel";
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
      {/* Head */}
      <section className="pt-40 pb-16 md:pt-48">
        <div className="container">
          <SectionLabel n="00" title="Case Studies" className="text-ink/70" />
          <div className="mt-14 ed-grid items-end">
            <h1 className="col-span-12 lg:col-span-9 font-display text-hero font-light leading-[0.9] tracking-tightest text-balance">
              Что мы делали, <br />
              <em className="italic font-light text-ink/50">кроме кофе.</em>
            </h1>
            <p className="col-span-12 lg:col-span-3 mt-8 lg:mt-0 self-end text-ink/60 text-pretty">
              Отобрали проекты, которые лучше всего показывают, как мы работаем в разных
              контекстах — от полевых съёмок до городских активаций.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container">
        <div className="flex flex-wrap items-center gap-3 border-t border-b border-ink/15 py-5 font-mono text-meta uppercase">
          <span className="text-ink/50 mr-3">Filter</span>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "transition-colors",
                filter === f.key
                  ? "text-bronze"
                  : "text-ink/60 hover:text-ink"
              )}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-ink/40 num-pill">
            {list.length} / {CASES.length}
          </span>
        </div>
      </section>

      {/* Case rows */}
      <div className="mt-16">
        {list.map((c, i) => (
          <CaseRow key={c.slug} c={c} i={i} />
        ))}
      </div>

      <div className="h-24" />
    </div>
  );
}

function CaseRow({
  c,
  i,
}: {
  c: (typeof CASES)[number];
  i: number;
}) {
  const reverse = i % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "border-t border-ink/15 py-20 md:py-28",
        i === 0 && "border-t-0"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "ed-grid items-center gap-y-10",
            reverse && "lg:[direction:rtl]"
          )}
        >
          {/* Image */}
          <div className="col-span-12 lg:col-span-7 [direction:ltr]">
            <Link href="/contact" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.cover}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-4 top-4 flex items-center justify-between font-mono text-meta uppercase text-milk">
                  <span className="rounded-full bg-ink/60 px-3 py-1 backdrop-blur">
                    Case N° {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-milk px-3 py-1 text-ink">
                    {c.categoryLabel}
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Content */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 [direction:ltr]">
            <div className="font-mono text-meta uppercase text-bronze">
              {c.client}
            </div>
            <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3.75rem)] font-light leading-[0.98] tracking-tightest text-balance">
              {c.title}
            </h3>
            <p className="mt-6 text-ink/65 leading-relaxed text-pretty">{c.short}</p>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/15 pt-6 text-sm">
              <div>
                <dt className="text-meta uppercase font-mono text-ink/50">Гости</dt>
                <dd className="mt-1 font-display text-2xl font-light num-pill">
                  {formatNumber(c.guests)}
                </dd>
              </div>
              <div>
                <dt className="text-meta uppercase font-mono text-ink/50">Локация</dt>
                <dd className="mt-1 text-ink text-sm leading-tight">
                  {c.location}
                </dd>
              </div>
              <div>
                <dt className="text-meta uppercase font-mono text-ink/50">Дата</dt>
                <dd className="mt-1 text-ink text-sm leading-tight">{c.date}</dd>
              </div>
            </dl>

            <div className="mt-8 border-t border-ink/15 pt-6">
              <div className="text-meta uppercase font-mono text-ink/50 mb-3">
                Результат
              </div>
              <p className="italic font-display text-xl text-coffee text-pretty">
                — {c.result}
              </p>
            </div>

            <Link
              href="/contact"
              className="group mt-10 inline-flex items-baseline gap-3 border-b border-ink/40 pb-2 font-display text-xl italic"
            >
              Обсудить похожий проект
              <ArrowUpRight className="h-4 w-4 translate-y-0.5 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
