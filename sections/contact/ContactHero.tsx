"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealText } from "@/components/ui/Reveal";

export function ContactHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={ref}
      className="relative h-[90dvh] min-h-[600px] w-full overflow-hidden bg-graphite text-milk"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1533777324565-a040eb52facd?auto=format&fit=crop&w=2400&q=70"
          alt="Фудтрак вечером"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/30 to-ink" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-grain opacity-10 mix-blend-overlay" />

      <div className="relative z-10 flex h-full flex-col justify-end pb-14">
        <div className="container">
          <Eyebrow className="text-milk/60">Контакты</Eyebrow>
          <h1 className="mt-6 font-display font-light leading-[0.94] tracking-tight text-hero max-w-4xl">
            <RevealText text="Приедем." /> <br />
            <em className="italic text-latte">
              <RevealText text="Приготовим. Уберём." delay={0.1} />
            </em>
          </h1>
        </div>
      </div>
    </section>
  );
}
