"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const SHOTS = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=70",
    tag: "Камера",
    caption: "Ночная смена рекламы Sber",
  },
  {
    src: "https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=1600&q=70",
    tag: "Свет",
    caption: "Полнометражное кино, Крым",
  },
  {
    src: "https://images.unsplash.com/photo-1489599735734-79b4212bea9c?auto=format&fit=crop&w=1600&q=70",
    tag: "Кофе",
    caption: "Сериал в 8:00, минус 20°C",
  },
  {
    src: "https://images.unsplash.com/photo-1585999969346-de40e7d353b1?auto=format&fit=crop&w=1600&q=70",
    tag: "Группа",
    caption: "Продакшн Кинопоиска",
  },
];

export function CinemaGallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-graphite text-milk py-28 md:py-36">
      <div className="container mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Eyebrow className="text-milk/60">Смены глазами оператора</Eyebrow>
          <h2 className="mt-6 font-display text-display font-light leading-[1.02] tracking-tight">
            Мы работаем <br />
            <em className="italic font-light text-latte">в кадре и за кадром.</em>
          </h2>
        </div>
        <div className="max-w-xs text-milk/60 text-sm md:text-base">
          Кадры со съёмок последних 12 месяцев.
        </div>
      </div>

      <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-10">
        {SHOTS.map((s, i) => (
          <motion.figure
            key={s.src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[3/4] w-[72vw] shrink-0 overflow-hidden rounded-3xl md:w-[36vw] lg:w-[26vw]"
          >
            <img
              src={s.src}
              alt={s.caption}
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-milk">
              <span className="max-w-[70%] text-balance">{s.caption}</span>
              <span className="rounded-full border border-linelight bg-ink/40 px-3 py-1 text-xs font-mono uppercase backdrop-blur">
                {s.tag}
              </span>
            </figcaption>
          </motion.figure>
        ))}
        <div className="w-6 shrink-0" />
      </motion.div>
    </section>
  );
}
