"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
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
  const y1 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-latte/40 py-28 md:py-40">
      <div className="container">
        <SectionLabel n="03" title="История одного вечера" className="text-ink/70" />

        <div className="mt-14 ed-grid items-start gap-y-14">
          {/* Text */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display text-display font-light leading-[0.96] tracking-tightest text-balance">
              Свадьба под Тверью,{" "}
              <em className="italic font-light text-coffee">140 гостей.</em>
            </h2>
            <p className="mt-8 drop-cap max-w-lg text-ink/75 text-lg leading-relaxed text-pretty">
              Мы приехали за 6 часов до церемонии. Развернули две зоны: спокойный кофе
              для сборов невесты и барбекю-линию у воды. Ночью — тёплый шоколад и
              ланч-боксы с собой.
            </p>

            <div className="mt-10 space-y-0">
              {NOTES.map((n, i) => (
                <Reveal
                  key={n.time}
                  delay={i * 0.05}
                  className="flex items-baseline justify-between border-b border-ink/15 py-3"
                >
                  <span className="font-mono text-meta uppercase text-bronze num-pill">
                    {n.time}
                  </span>
                  <span className="text-right text-ink text-pretty">{n.label}</span>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Editorial photo grid */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 grid grid-cols-6 gap-3">
            <motion.figure
              style={{ y: y1 }}
              className="col-span-3 aspect-[3/4] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.figure>
            <motion.figure
              style={{ y: y2 }}
              className="col-span-3 mt-16 aspect-[3/4] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1200&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.figure>
            <motion.figure
              style={{ y: y3 }}
              className="col-span-6 aspect-[16/9] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1800&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
