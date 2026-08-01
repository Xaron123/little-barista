"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ClosingCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-espresso text-milk py-32 md:py-48"
    >
      <motion.div style={{ y }} className="absolute inset-0 opacity-45 grain-overlay">
        <img
          src="https://images.unsplash.com/photo-1533777324565-a040eb52facd?auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />
      </motion.div>

      <div className="container relative">
        <SectionLabel n="06" title="Готовы приехать" className="text-milk/60" />

        <h2 className="mt-10 font-display font-light leading-[0.9] tracking-tightest text-[clamp(3rem,10vw,9rem)]">
          Расскажите
          <br />
          <em className="italic text-latte">о задаче.</em>
        </h2>

        <div className="mt-14 ed-grid items-end">
          <p className="col-span-12 lg:col-span-5 text-milk/70 text-lg text-pretty">
            Ответим в течение часа. Пришлём готовую смету и меню в тот же день.
            Никаких лишних встреч и промо.
          </p>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-wrap items-center gap-8">
            <Link
              href="/contact"
              className="group inline-flex items-baseline gap-4 border-b border-milk/50 pb-3 font-display text-3xl italic"
            >
              <span>Отправить бриф</span>
              <ArrowUpRight className="h-6 w-6 translate-y-1 transition-transform group-hover:rotate-45" />
            </Link>
            <a
              href="tel:+79999999999"
              className="font-mono num-pill text-milk/70 hover:text-milk"
            >
              +7 999 999 99 99
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
