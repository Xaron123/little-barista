"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { RevealText } from "@/components/ui/Reveal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[110dvh] min-h-[720px] w-full overflow-hidden bg-espresso text-milk"
    >
      {/* Full-bleed truck photo */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 will-change-transform grain-overlay"
      >
        <img
          src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=2600&q=80"
          alt="Фудтрак Little Barista"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/50 via-espresso/25 to-espresso" />
        <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 flex h-full flex-col justify-between pt-32 pb-10"
      >
        {/* Top meta strip */}
        <div className="container flex items-center justify-between text-milk/70 font-mono text-meta uppercase">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-bronzeLight" />
            <span>Little Barista · Est. 2018</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>55°45′ N</span>
            <span className="opacity-40">/</span>
            <span>37°37′ E</span>
          </div>
          <div className="hidden md:block">Mobile · Universal · На выезд</div>
        </div>

        {/* Main headline */}
        <div className="container">
          <div className="ed-grid items-end">
            <h1 className="col-span-12 lg:col-span-10 font-display font-light tracking-tightest text-milk text-hero">
              <span className="block">
                <RevealText text="Фудтрак —" />
              </span>
              <span className="block italic font-normal text-latte">
                <RevealText text="универсальный" delay={0.06} />
              </span>
              <span className="block italic font-normal text-latte">
                <RevealText text="инструмент." delay={0.1} />
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 lg:col-span-2 mt-10 lg:mt-0 lg:pl-4"
            >
              <div className="hair mb-4" />
              <p className="text-milk/80 text-sm leading-relaxed">
                Приезжаем туда, где нужна качественная организация питания. От
                съёмочной площадки до BTL-активации.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="container flex items-end justify-between text-milk/60 font-mono text-meta uppercase">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-linelight">
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </div>
            <span>Выберите сценарий использования</span>
          </div>
          <div className="hidden sm:block">Один трейлер · Три сценария</div>
        </div>
      </motion.div>
    </section>
  );
}
