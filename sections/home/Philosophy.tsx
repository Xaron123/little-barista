"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealText } from "@/components/ui/Reveal";

const STATS = [
  { value: "7", label: "лет на выезде", sub: "с 2018" },
  { value: "480", label: "проектов", sub: "и продолжаем" },
  { value: "3", label: "фудтрака", sub: "в парке" },
  { value: "24/7", label: "график", sub: "смены и ночь" },
];

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-cream py-28 md:py-40"
    >
      <div className="container">
        <SectionLabel n="03" title="Манифест" className="text-ink/70" />

        <div className="mt-14 ed-grid items-start gap-y-16">
          {/* Big statement */}
          <h2 className="col-span-12 lg:col-span-9 font-display font-light leading-[0.94] tracking-tightest text-[clamp(2.5rem,7vw,6.5rem)] text-balance">
            <RevealText text="Готовим горячее," />
            <br />
            <RevealText text="варим кофе," delay={0.1} />
            <br />
            <em className="italic font-light text-bronze">
              <RevealText text="создаём паузу." delay={0.2} />
            </em>
          </h2>

          {/* Sidebar quote */}
          <motion.div
            style={{ y: y1 }}
            className="col-span-12 lg:col-span-3 lg:col-start-10 lg:mt-14"
          >
            <div className="hair mb-5 bg-bronze/60" />
            <p className="drop-cap text-ink/70 leading-relaxed text-pretty">
              Мы верим, что еда на площадке или мероприятии — это не сервис. Это часть
              атмосферы, в которой рождаются лучшие моменты, кадры и решения.
            </p>
            <div className="mt-6 font-mono text-meta uppercase text-ink/50">
              — Игорь Козлов, шеф
            </div>
          </motion.div>
        </div>

        {/* Big editorial photo */}
        <motion.figure
          style={{ y: y2 }}
          className="relative mt-24 aspect-[16/9] w-full overflow-hidden md:mt-32"
        >
          <img
            src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=2200&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <figcaption className="absolute inset-x-6 bottom-6 flex items-end justify-between font-mono text-meta uppercase text-milk">
            <span className="rounded-full bg-ink/50 px-3 py-1 backdrop-blur">
              Fig. 04 · Кухня фудтрака
            </span>
            <span className="hidden sm:inline">Photo 35 mm · f/2.8</span>
          </figcaption>
        </motion.figure>

        {/* Stats grid */}
        <Reveal className="mt-24">
          <div className="grid grid-cols-2 gap-x-8 gap-y-14 border-t border-ink/15 pt-14 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col"
              >
                <div className="font-display text-[clamp(3rem,6vw,5.5rem)] font-light leading-none num-pill">
                  {s.value}
                </div>
                <div className="mt-4 text-ink font-medium">{s.label}</div>
                <div className="text-sm text-ink/50">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
