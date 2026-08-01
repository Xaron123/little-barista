"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealText } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ContactHero() {
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
      className="relative h-[95dvh] min-h-[600px] w-full overflow-hidden bg-black text-milk"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 grain-overlay">
        <img
          src="https://images.unsplash.com/photo-1533777324565-a040eb52facd?auto=format&fit=crop&w=2600&q=80"
          alt="Фудтрак вечером"
          className="h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-between pt-32 pb-14">
        <div className="container">
          <SectionLabel n="00" title="Contact" className="text-milk/60" />
        </div>

        <div className="container">
          <h1 className="font-display font-light leading-[0.9] tracking-tightest text-hero max-w-5xl">
            <RevealText text="Приедем." /> <br />
            <em className="italic text-latte">
              <RevealText text="Приготовим. Уберём." delay={0.1} />
            </em>
          </h1>
        </div>

        <div className="container flex items-end justify-between font-mono text-meta uppercase text-milk/50">
          <div>Evening light · warm</div>
          <div className="hidden sm:block">55°45′ N · 37°37′ E</div>
        </div>
      </div>
    </section>
  );
}
