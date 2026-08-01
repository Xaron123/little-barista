"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const REVIEWS = [
  {
    quote:
      "Little Barista сделали нашу свадьбу вкусной. Гости до сих пор пишут про их фильтр-кофе и лепёшки с треской.",
    author: "Аня и Костя",
    role: "Свадьба · Никола-Ленивец",
  },
  {
    quote:
      "Заказывали фудтрак на 30-летие. Всё быстро, красиво, без единого «мы забыли». Плюс — свою эстетику привозят с собой.",
    author: "Дарья",
    role: "Юбилей · дом на Пироговке",
  },
  {
    quote:
      "3000 гостей на open-air и ни одной задержки на выдаче. Ребята — золото.",
    author: "Артём Ким",
    role: "Фестиваль Signal",
  },
];

export function EventsReviews() {
  return (
    <section className="bg-milk py-28 md:py-40">
      <div className="container">
        <div className="flex items-end justify-between">
          <SectionLabel n="04" title="Отзывы" className="text-ink/70" />
          <div className="flex items-center gap-3 text-sm text-ink/60">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-bronze text-bronze" />
              ))}
            </div>
            <span className="font-mono text-meta uppercase num-pill">
              4.98 · 312
            </span>
          </div>
        </div>

        <h2 className="mt-14 max-w-4xl font-display text-display font-light leading-[0.96] tracking-tightest text-balance">
          Гости пишут первыми.{" "}
          <em className="italic font-light text-ink/50">
            Это лучший индикатор.
          </em>
        </h2>

        <div className="mt-20 space-y-0">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-12 items-baseline gap-6 border-t border-ink/15 py-12"
            >
              <div className="col-span-12 md:col-span-3 font-mono text-meta uppercase text-ink/60">
                <div className="text-bronze">N° 0{i + 1}</div>
                <div className="mt-3 text-ink">{r.author}</div>
                <div className="mt-1 text-ink/50 normal-case tracking-normal">
                  {r.role}
                </div>
              </div>
              <blockquote className="col-span-12 md:col-span-9 font-display text-[clamp(1.5rem,2.8vw,2.5rem)] font-light leading-[1.08] tracking-tight text-ink text-balance">
                <span className="italic text-bronze">«</span>
                {r.quote}
                <span className="italic text-bronze">»</span>
              </blockquote>
            </motion.figure>
          ))}
          <div className="border-t border-ink/15" />
        </div>
      </div>
    </section>
  );
}
