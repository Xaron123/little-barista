"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/Reveal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[110dvh] min-h-[720px] w-full overflow-hidden bg-graphite text-milk"
    >
      {/* Cinematic image layer */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=2400&q=70"
          alt="Little Barista фудтрак"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-graphite/50 via-graphite/20 to-graphite" />
        <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-transparent" />
      </motion.div>

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-overlay bg-grain" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full flex-col justify-between pt-32 pb-12"
      >
        <div className="container flex justify-between text-milk/70">
          <Eyebrow>
            <span>Since 2018 · Мобильный кейтеринг</span>
          </Eyebrow>
          <Eyebrow className="hidden sm:inline-flex">
            <span>Moscow · Санкт-Петербург</span>
          </Eyebrow>
        </div>

        <div className="container">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="font-display font-light tracking-tight text-milk text-hero leading-[0.95]"
          >
            <span className="block">
              <RevealText text="Little Barista —" />
            </span>
            <span className="block">
              <RevealText text="фудтрак," delay={0.05} />
            </span>
            <span className="block italic font-normal text-latte">
              <RevealText text="который приезжает первым." delay={0.1} />
            </span>
          </motion.h1>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-6 max-w-lg text-milk/80 text-lg md:text-xl leading-snug text-pretty"
            >
              От выездной вечеринки до съёмочной площадки. Накормим группу в поле,
              проведём промо-акцию или станем изюминкой вашего праздника.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="md:col-span-6 flex flex-wrap items-center justify-start gap-6 md:justify-end"
            >
              <div className="flex items-center gap-3 text-milk/70">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-linelight animate-pulse">
                  <ArrowDown className="h-4 w-4" />
                </div>
                <span className="text-sm font-mono uppercase tracking-widest">
                  Выберите сценарий
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Corner meta */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10">
        <div className="container flex items-end justify-between pb-6 text-milk/50 text-xs font-mono uppercase">
          <div className="tabular-nums">N 55° 45′ 20″ · E 37° 37′ 03″</div>
          <div className="tabular-nums hidden sm:block">01 · Little Barista</div>
        </div>
      </div>
    </section>
  );
}
