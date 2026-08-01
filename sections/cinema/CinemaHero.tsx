"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, Play } from "lucide-react";
import { RevealText } from "@/components/ui/Reveal";

export function CinemaHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      className="relative min-h-[110dvh] w-full overflow-hidden bg-black text-milk"
    >
      <motion.div style={{ y: imgY, scale }} className="absolute inset-0 grain-overlay">
        <img
          src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&w=2600&q=80"
          alt="Кинопродакшн"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/60" />
      </motion.div>

      <div className="relative z-10 flex min-h-[110dvh] flex-col justify-between pt-32 pb-14">
        <div className="container flex items-center justify-between font-mono text-meta uppercase text-milk/70">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-milk"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Cover
          </Link>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-bronzeLight" />
            <span>Scenario N° 01 · Cinema</span>
          </div>
          <span className="hidden sm:block">ISO 800 · 24 fps</span>
        </div>

        <div className="container">
          <div className="ed-grid items-end">
            <h1 className="col-span-12 font-display font-light leading-[0.9] tracking-tightest text-hero">
              <span className="block">
                <RevealText text="Тот же трейлер —" />
              </span>
              <span className="block italic text-latte">
                <RevealText text="на площадке," delay={0.06} />
              </span>
              <span className="block">
                <RevealText text="без пауз в графике." delay={0.12} />
              </span>
            </h1>
          </div>

          <div className="mt-14 ed-grid items-end">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="col-span-12 lg:col-span-6 max-w-xl text-milk/75 text-lg md:text-xl text-pretty"
            >
              Универсальный фудтрак Little Barista в контексте продакшна: горячее
              питание для группы 20–300 человек, ланч-боксы навынос, кофе на автомате.
              Приезжаем за 90 минут, работаем до последнего дубля.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-wrap items-center gap-8"
            >
              <button className="group inline-flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-latte text-ink transition-transform group-hover:scale-95">
                  <Play className="h-4 w-4 translate-x-0.5" fill="currentColor" />
                </span>
                <span className="font-mono text-meta uppercase">
                  Смотреть шоурил · 2:14
                </span>
              </button>
              <Link
                href="#calculator"
                className="group inline-flex items-baseline gap-3 border-b border-milk/50 pb-2 font-display text-2xl italic"
              >
                Собрать смету
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="container flex items-end justify-between font-mono text-meta uppercase text-milk/50">
          <div>Scene 01 / Take 01</div>
          <div className="hidden sm:block">Little Barista · Cinema Division</div>
        </div>
      </div>
    </section>
  );
}
