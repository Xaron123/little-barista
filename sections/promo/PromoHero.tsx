"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowUpRight, Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/Reveal";

export function PromoHero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-ink text-milk pt-32 pb-16">
      {/* Grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Blurs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-latte/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-coffee/40 blur-[140px]" />

      <div className="container relative z-10">
        <div className="mb-14 flex items-center justify-between text-milk/70">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm hover:text-milk"
          >
            <ChevronLeft className="h-4 w-4" /> На главную
          </Link>
          <Eyebrow>Сценарий 03 · BTL</Eyebrow>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-linelight bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-milk/80">
              <Sparkles className="h-3 w-3 text-latte" />
              <span>Живой promo-инструмент</span>
            </div>

            <h1 className="font-display font-light leading-[0.94] tracking-tight text-hero">
              <span className="block">
                <RevealText text="Ваш бренд —" />
              </span>
              <span className="block italic text-latte">
                <RevealText text="в очереди" delay={0.05} />
              </span>
              <span className="block">
                <RevealText text="за кофе." delay={0.1} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-10 max-w-lg text-milk/70 text-lg md:text-xl text-pretty"
            >
              Мы превращаем фудтрак в промо-инструмент: брендируем, готовим тематическое
              меню, собираем очередь и контент. Отличная альтернатива стандартным
              активациям в ТЦ.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-6 rounded-full bg-milk px-6 py-4 text-ink transition-colors hover:bg-cream"
              >
                <span className="font-medium">Запросить медиакит</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-milk transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="#formats"
                className="inline-flex items-center rounded-full border border-linelight px-6 py-4 text-milk hover:bg-white/5"
              >
                Форматы активаций
              </Link>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <div className="relative aspect-square overflow-hidden rounded-[32px] border border-linelight">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=70"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3">
                <div className="flex items-center justify-between text-milk">
                  <div className="text-xs font-mono uppercase tracking-widest text-milk/60">
                    Recent · Sber Green
                  </div>
                  <div className="rounded-full bg-latte px-2.5 py-0.5 text-xs font-medium text-ink">
                    Live
                  </div>
                </div>
                <div className="font-display text-2xl font-light leading-tight">
                  Активация в парке Горького
                </div>
                <div className="flex gap-6 text-xs text-milk/70">
                  <div>
                    <div className="tabular-nums text-milk text-lg font-mono">2 340</div>
                    <div>чашек за смену</div>
                  </div>
                  <div>
                    <div className="tabular-nums text-milk text-lg font-mono">6</div>
                    <div>часов</div>
                  </div>
                  <div>
                    <div className="tabular-nums text-milk text-lg font-mono">14K</div>
                    <div>охват UGC</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
