"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ClosingCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-graphite text-milk py-32 md:py-48"
    >
      <motion.div style={{ y }} className="absolute inset-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1533777324565-a040eb52facd?auto=format&fit=crop&w=2000&q=70"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent" />
      </motion.div>

      <div className="container relative">
        <Eyebrow className="text-milk/60">Готовы приехать</Eyebrow>
        <h2 className="mt-6 font-display font-light leading-[0.95] tracking-tight text-[clamp(3rem,8vw,7rem)]">
          Расскажите <br />
          <em className="italic text-latte">о задаче.</em>
        </h2>
        <p className="mt-8 max-w-lg text-milk/70 text-lg text-pretty">
          Ответим в течение часа. Пришлём готовую смету и меню в тот же день.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-6 rounded-full bg-milk px-6 py-4 text-ink transition-colors hover:bg-cream"
          >
            <span className="font-medium">Отправить бриф</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-milk transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
          <a
            href="tel:+79999999999"
            className="text-milk/80 hover:text-milk underline underline-offset-4"
          >
            +7 (999) 999-99-99
          </a>
        </div>
      </div>
    </section>
  );
}
