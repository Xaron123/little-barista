"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealText } from "@/components/ui/Reveal";

const STATS = [
  { value: "7", label: "лет на выезде" },
  { value: "480+", label: "проектов" },
  { value: "3", label: "фудтрака в парке" },
  { value: "24/7", label: "график смен" },
];

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-28 md:py-40">
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -left-24 top-1/3 hidden h-[120%] w-1/3 md:block"
      >
        <div className="h-full w-full rounded-full bg-latte/60 blur-[80px]" />
      </motion.div>

      <div className="container relative">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <Eyebrow className="text-ink/60">Философия</Eyebrow>
            <p className="mt-6 max-w-sm text-ink/60 leading-relaxed">
              Мы верим, что еда на площадке или мероприятии — это не сервис. Это часть
              атмосферы, в которой рождаются лучшие моменты, кадры и решения.
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-display text-display font-light leading-[1.02] tracking-tight text-balance">
              <RevealText text="Готовим горячее," />
              <br />
              <RevealText text="варим кофе," delay={0.1} />
              <br />
              <em className="italic font-light text-ink/40">
                <RevealText text="создаём паузу." delay={0.2} />
              </em>
            </h2>
          </div>
        </div>

        <Reveal className="mt-24">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink/10 pt-12 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                <div className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-none tabular-nums">
                  {s.value}
                </div>
                <div className="mt-3 text-sm uppercase tracking-widest text-ink/50">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
