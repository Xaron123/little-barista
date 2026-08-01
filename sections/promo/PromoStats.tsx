"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const STATS = [
  { v: "2 400+", l: "чашек за смену", d: "средний трафик активации" },
  { v: "6 ч", l: "монтаж и старт", d: "с момента приезда на локацию" },
  { v: "14K", l: "UGC-охват", d: "пост-статистика в среднем" },
  { v: "38%", l: "конверсия QR", d: "механики с прямой оплатой" },
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
      className="relative overflow-hidden bg-graphite text-milk py-28 md:py-40"
    >
      <motion.div
        style={{ x }}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[20vw] leading-none font-light italic text-milk/[0.05]"
      >
        Numbers · Matter
      </motion.div>

      <div className="container relative">
        <SectionLabel n="03" title="Цифры со смен" className="text-milk/60" />

        <h2 className="mt-14 max-w-4xl font-display text-display font-light leading-[0.96] tracking-tightest text-balance">
          За первую половину года <br />
          <em className="italic text-latte">— 62 активации.</em>
        </h2>

        <div className="mt-24 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-linelight pt-14 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-mono text-meta uppercase text-bronzeLight num-pill">
                N° 0{i + 1}
              </div>
              <div className="mt-4 font-display text-[clamp(3rem,5.5vw,5rem)] font-light leading-[0.9] tracking-tightest num-pill">
                {s.v}
              </div>
              <div className="mt-5 text-milk font-medium">{s.l}</div>
              <div className="text-sm text-milk/50">{s.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
