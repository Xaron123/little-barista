"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const STATS = [
  { v: "2 400+", l: "чашек за смену", d: "средний трафик активации" },
  { v: "6ч", l: "монтаж и старт", d: "с момента приезда на локацию" },
  { v: "14K", l: "UGC-охват", d: "пост-статистика в среднем" },
  { v: "38%", l: "конверсия в скан QR", d: "механики с прямой оплатой" },
];

export function PromoStats() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-graphite text-milk py-28 md:py-36"
    >
      <motion.div
        style={{ x }}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[18vw] leading-none font-light italic text-white/[0.05]"
      >
        Numbers · that matter
      </motion.div>

      <div className="container relative">
        <div className="mb-16">
          <Eyebrow className="text-milk/60">Цифры со смен</Eyebrow>
          <h2 className="mt-6 max-w-3xl font-display text-display font-light leading-[1.02] tracking-tight text-balance">
            За полгода 2025 мы провели <br />
            <em className="italic text-latte">62 активации.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 border-t border-linelight pt-14 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-none text-milk tabular-nums">
                {s.v}
              </div>
              <div className="mt-4 text-milk font-medium">{s.l}</div>
              <div className="mt-1 text-sm text-milk/50">{s.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
