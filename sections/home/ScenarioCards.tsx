"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SCENARIOS } from "@/data/scenarios";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

export function ScenarioCards() {
  return (
    <section id="scenarios" className="relative bg-milk py-24 md:py-32">
      <div className="container">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow className="text-ink/60">Три сценария</Eyebrow>
            <h2 className="mt-5 font-display text-display font-light leading-[1.02] tracking-tight text-balance">
              Один фудтрак — три истории.<br />
              <span className="italic text-ink/50">Выберите свою.</span>
            </h2>
          </div>
          <p className="max-w-md text-ink/60 text-lg text-pretty">
            У каждого направления собственный дизайн, логика и предложение. Кликните —
            и сайт превратится в отдельный лендинг для вашей задачи.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {SCENARIOS.map((s, i) => (
            <ScenarioCard key={s.slug} scenario={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScenarioCard({
  scenario,
  index,
}: {
  scenario: (typeof SCENARIOS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    >
      <Link
        href={scenario.href}
        className={cn(
          "group relative flex h-[560px] flex-col justify-between overflow-hidden rounded-[28px] p-7 transition-transform duration-500 hover:-translate-y-1 md:h-[640px]",
          scenario.bg,
          scenario.fg
        )}
      >
        {/* Image bg */}
        <div className="absolute inset-0 opacity-70 transition-opacity duration-700 group-hover:opacity-90">
          <img
            src={scenario.image}
            alt=""
            className="h-full w-full object-cover scale-105 transition-transform duration-[1200ms] ease-out group-hover:scale-100"
          />
          <div
            className={cn(
              "absolute inset-0",
              scenario.slug === "events"
                ? "bg-gradient-to-t from-cream via-cream/40 to-cream/10"
                : scenario.slug === "cinema"
                ? "bg-gradient-to-t from-graphite via-graphite/70 to-graphite/20"
                : "bg-gradient-to-t from-ink via-ink/70 to-ink/20"
            )}
          />
        </div>

        {/* Top row */}
        <div className="relative z-10 flex items-start justify-between">
          <Eyebrow className={cn(scenario.fg, "opacity-80")}>
            <span>{scenario.index}</span>
            <span className="opacity-60">/</span>
            <span>{scenario.tag}</span>
          </Eyebrow>
          <span
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-transform duration-500 group-hover:rotate-45",
              scenario.slug === "events"
                ? "border-ink/20 bg-ink/5"
                : "border-white/20 bg-white/5"
            )}
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        {/* Bottom content */}
        <div className="relative z-10">
          <h3
            className={cn(
              "font-display text-[clamp(2rem,3.5vw,3.25rem)] font-light leading-[0.98] tracking-tight text-balance",
              scenario.fg
            )}
          >
            {scenario.title.split("\n").map((line, i, arr) => (
              <span key={i} className="block">
                {i === arr.length - 1 ? <em className="font-light italic">{line}</em> : line}
              </span>
            ))}
          </h3>

          <p
            className={cn(
              "mt-5 max-w-md text-sm md:text-base opacity-80 text-pretty",
              scenario.fg
            )}
          >
            {scenario.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {scenario.tags.map((t) => (
              <span
                key={t}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs backdrop-blur-sm",
                  scenario.slug === "events"
                    ? "border-ink/15 bg-white/40 text-ink/80"
                    : "border-white/20 bg-white/5 text-white/85"
                )}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
