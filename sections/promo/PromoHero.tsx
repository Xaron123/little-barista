"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ArrowUpRight } from "lucide-react";
import { RevealText } from "@/components/ui/Reveal";

export function PromoHero() {
  return (
    <section className="relative min-h-[110dvh] w-full overflow-hidden bg-black text-milk pt-32 pb-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-bronze/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-coffee/40 blur-[160px]" />

      <div className="container relative z-10">
        <div className="flex items-center justify-between font-mono text-meta uppercase text-milk/70">
          <Link href="/" className="inline-flex items-center gap-2 hover:text-milk">
            <ChevronLeft className="h-3.5 w-3.5" /> Cover
          </Link>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-bronzeLight" />
            <span>Scenario N° 03 · BTL</span>
          </div>
          <span className="hidden sm:block">Field · Урбан · MMXXVI</span>
        </div>

        <div className="mt-24 ed-grid items-center gap-y-14">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-display font-light leading-[0.9] tracking-tightest text-hero">
              <span className="block">
                <RevealText text="Тот же трейлер —" />
              </span>
              <span className="block italic text-latte">
                <RevealText text="в центре" delay={0.06} />
              </span>
              <span className="block">
                <RevealText text="города." delay={0.12} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-10 max-w-xl text-milk/75 text-lg md:text-xl text-pretty"
            >
              Универсальный фудтрак — теперь в роли промо-инструмента. Брендируем
              машину, готовим тематическое меню, собираем очередь и контент. Живая
              альтернатива стандартным активациям.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-10 flex flex-wrap items-center gap-8"
            >
              <Link
                href="/contact"
                className="group inline-flex items-baseline gap-3 border-b border-milk/40 pb-2 font-display text-2xl italic"
              >
                Запросить медиакит
                <ArrowUpRight className="h-5 w-5 translate-y-1 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                href="#formats"
                className="font-mono text-meta uppercase text-milk/70 link-bronze"
              >
                Форматы активаций
              </Link>
            </motion.div>
          </div>

          {/* Right — live case card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-linelight">
              <img
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute inset-x-6 top-6 flex items-center justify-between font-mono text-meta uppercase text-milk">
                <span className="rounded-full bg-milk/10 px-3 py-1 backdrop-blur">
                  Recent · Sber Green
                </span>
                <span className="flex items-center gap-2 rounded-full bg-bronzeLight px-3 py-1 text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Live
                </span>
              </div>

              <div className="absolute inset-x-6 bottom-6">
                <div className="font-display text-2xl font-light leading-tight text-milk">
                  Активация в парке Горького
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 border-t border-linelight pt-4 text-milk/80">
                  <div>
                    <div className="font-display text-2xl num-pill">2 340</div>
                    <div className="text-xs uppercase tracking-widest text-milk/50">
                      Чашек
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl num-pill">6ч</div>
                    <div className="text-xs uppercase tracking-widest text-milk/50">
                      Смена
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-2xl num-pill">14K</div>
                    <div className="text-xs uppercase tracking-widest text-milk/50">
                      UGC
                    </div>
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
