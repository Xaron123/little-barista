"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/Reveal";

export function EventsHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      className="relative min-h-[105dvh] w-full overflow-hidden bg-cream"
    >
      <div className="relative z-10 flex min-h-[105dvh] flex-col justify-between pt-32 pb-14">
        <div className="container flex items-center justify-between text-ink/60">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm hover:text-ink"
          >
            <ChevronLeft className="h-4 w-4" /> На главную
          </Link>
          <Eyebrow className="text-ink/60">Сценарий 02 · Мероприятия</Eyebrow>
        </div>

        <div className="container grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h1 className="font-display font-light leading-[0.94] tracking-tight text-hero text-ink">
              <span className="block">
                <RevealText text="Гости запомнят" />
              </span>
              <span className="block italic text-coffee">
                <RevealText text="не столы," delay={0.05} />
              </span>
              <span className="block">
                <RevealText text="а атмосферу." delay={0.1} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-10 max-w-xl text-ink/70 text-lg md:text-xl text-pretty"
            >
              Свадьбы, юбилеи, корпоративы. Фудтрак становится живым центром вашего
              праздника — от утреннего кофе для команды до вечернего десерта под гирлянды.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-6 rounded-full bg-ink px-6 py-4 text-milk transition-colors hover:bg-graphite"
              >
                <span className="font-medium">Обсудить праздник</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-milk text-ink transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-4 text-ink hover:bg-ink/5"
              >
                Посмотреть события
              </Link>
            </motion.div>
          </div>

          <motion.figure
            style={{ y, scale }}
            className="md:col-span-5 relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=70"
              alt="Свадебный кейтеринг"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-milk/85 px-4 py-3 text-sm text-ink backdrop-blur">
              <span>Свадьба в Николо-Урюпине</span>
              <span className="font-mono text-xs uppercase tracking-widest text-ink/60">
                08 · 24
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
