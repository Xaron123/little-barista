"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const REVIEWS = [
  {
    quote:
      "Ребята приехали в 4 утра в поле под Тверью и кормили 120 человек три смены подряд. Ни одной задержки на площадке.",
    author: "Алёна Ким",
    role: "Линейный продюсер, «Медиаслово»",
  },
  {
    quote:
      "Кофе Little Barista стал отдельным пунктом в райдере всех наших рекламных съёмок. Пересмотрели после них шоурил.",
    author: "Иван Соколов",
    role: "Режиссёр, Hype Production",
  },
  {
    quote:
      "Гибкие. Быстрые. Не задают глупых вопросов. Идеальный подрядчик, когда график ломается каждый час.",
    author: "Мария Ветрова",
    role: "Исполнительный продюсер, KINO",
  },
];

export function CinemaTestimonials() {
  return (
    <section className="bg-graphite text-milk py-28 md:py-36">
      <div className="container">
        <div className="mb-14">
          <Eyebrow className="text-milk/60">Слово продюсерам</Eyebrow>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-3xl border border-linelight bg-ink/50 p-8"
            >
              <Quote className="h-8 w-8 text-latte/80" strokeWidth={1.2} />
              <blockquote className="mt-6 font-display text-2xl font-light leading-snug tracking-tight text-milk/90 text-balance">
                {r.quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-linelight pt-5">
                <div className="text-milk">{r.author}</div>
                <div className="text-sm text-milk/50">{r.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
