"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, Play } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/Reveal";

export function CinemaHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      className="relative min-h-[105dvh] w-full overflow-hidden bg-ink text-milk"
    >
      <motion.div style={{ y: imgY, scale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&w=2400&q=70"
          alt="Кинопродакшн"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/40" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.1] mix-blend-overlay" />

      <div className="relative z-10 flex min-h-[105dvh] flex-col justify-between pt-32 pb-16">
        <div className="container flex items-center justify-between text-milk/70">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm hover:text-milk"
          >
            <ChevronLeft className="h-4 w-4" /> На главную
          </Link>
          <Eyebrow>Сценарий 01 · Продакшн</Eyebrow>
        </div>

        <div className="container">
          <div className="max-w-5xl">
            <h1 className="font-display font-light leading-[0.94] tracking-tight text-hero">
              <span className="block">
                <RevealText text="Питание" />
              </span>
              <span className="block italic text-latte">
                <RevealText text="съёмочной группы —" delay={0.05} />
              </span>
              <span className="block">
                <RevealText text="без пауз в работе." delay={0.1} />
              </span>
            </h1>

            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="md:col-span-6 max-w-xl text-milk/75 text-lg md:text-xl text-pretty"
              >
                Мы кормили сериалы федеральных каналов, ночные смены рекламных
                съёмок и полнометражное кино в поле. Приезжаем за 90 минут, работаем
                до последнего дубля.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="md:col-span-6 flex justify-start md:justify-end"
              >
                <button className="group inline-flex items-center gap-4 rounded-full border border-linelight px-4 py-3 text-milk hover:bg-white/5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-latte text-ink transition-transform group-hover:scale-95">
                    <Play className="h-4 w-4 translate-x-0.5" fill="currentColor" />
                  </span>
                  <span className="pr-3 text-sm uppercase tracking-widest">
                    Смотреть шоурил · 2:14
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="container flex items-end justify-between text-milk/50 text-xs font-mono uppercase">
          <div>ISO 800 · f/1.8 · 24 fps</div>
          <div className="hidden sm:block">Cinema · 01</div>
        </div>
      </div>
    </section>
  );
}
