"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const NOTES = [
  { time: "10:00", label: "Кофе-станция для сборов" },
  { time: "13:30", label: "Welcome-фуршет у арки" },
  { time: "16:00", label: "Barbecue-линия у пруда" },
  { time: "19:00", label: "Десертный бар и коктейли" },
  { time: "23:00", label: "Ночной перекус для гостей" },
];

export function EventsStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-latte/40 py-28 md:py-36">
      <div className="container grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6">
          <Eyebrow className="text-ink/60">История одного вечера</Eyebrow>
          <h2 className="mt-6 font-display text-display font-light leading-[1.02] tracking-tight text-balance">
            Свадьба под Тверью, <br />
            <em className="italic font-light text-coffee">140 гостей.</em>
          </h2>
          <p className="mt-6 max-w-lg text-ink/70 text-lg text-pretty">
            Мы приехали за 6 часов до церемонии. Развернули две зоны: спокойный кофе
            для сборов невесты и барбекю-линию у воды. Ночью — тёплый шоколад и
            ланч-боксы с собой.
          </p>

          <div className="mt-10 space-y-3">
            {NOTES.map((n, i) => (
              <Reveal
                key={n.time}
                delay={i * 0.06}
                className="flex items-center justify-between border-b border-ink/10 pb-3"
              >
                <span className="font-mono text-sm uppercase tracking-widest text-ink/50 tabular-nums">
                  {n.time}
                </span>
                <span className="text-ink text-pretty text-right">{n.label}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="md:col-span-6 relative grid grid-cols-2 gap-4">
          <motion.figure
            style={{ y: y1 }}
            className="aspect-[3/4] overflow-hidden rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=70"
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.figure>
          <motion.figure
            style={{ y: y2 }}
            className="mt-16 aspect-[3/4] overflow-hidden rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1200&q=70"
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.figure>
          <motion.figure
            style={{ y: y2 }}
            className="col-span-2 aspect-[16/9] overflow-hidden rounded-3xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1600&q=70"
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
