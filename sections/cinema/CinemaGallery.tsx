"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const SHOTS = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    tag: "Ночь",
    caption: "Реклама Sber · рассвет в 5:12",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=1600&q=80",
    tag: "Поле",
    caption: "Полнометр в Крыму · день 12/42",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1489599735734-79b4212bea9c?auto=format&fit=crop&w=1600&q=80",
    tag: "Кофе",
    caption: "Сериал · Кинопоиск · −20 °C",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1585999969346-de40e7d353b1?auto=format&fit=crop&w=1600&q=80",
    tag: "Крю",
    caption: "Утренний завтрак на 120 человек",
    aspect: "aspect-[4/5]",
  },
];

export function CinemaGallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-graphite text-milk py-28 md:py-36"
    >
      <div className="container mb-14">
        <SectionLabel n="05" title="Storyboard" className="text-milk/60" />
        <div className="mt-10 ed-grid items-end">
          <h2 className="col-span-12 lg:col-span-8 font-display text-display font-light leading-[0.96] tracking-tightest">
            Смены глазами{" "}
            <em className="italic font-light text-latte">оператора.</em>
          </h2>
          <p className="col-span-12 lg:col-span-3 lg:col-start-10 mt-6 lg:mt-0 text-milk/60">
            Кадры со съёмок последних 12 месяцев.
          </p>
        </div>
      </div>

      <motion.div style={{ x }} className="flex items-end gap-8 pl-6 md:pl-10">
        {SHOTS.map((s, i) => (
          <motion.figure
            key={s.src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative w-[72vw] shrink-0 overflow-hidden md:w-[38vw] lg:w-[26vw] ${s.aspect}`}
          >
            <img
              src={s.src}
              alt={s.caption}
              className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 font-mono text-meta uppercase text-milk">
              <span className="max-w-[70%] text-balance">{s.caption}</span>
              <span className="rounded-full border border-linelight bg-ink/50 px-3 py-1 backdrop-blur">
                {s.tag}
              </span>
            </figcaption>
          </motion.figure>
        ))}
        <div className="w-8 shrink-0" />
      </motion.div>
    </section>
  );
}
