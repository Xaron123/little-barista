"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const REVIEWS = [
  {
    quote:
      "Little Barista сделали нашу свадьбу вкусной. Гости до сих пор пишут про их фильтр-кофе и лепёшки с треской.",
    author: "Аня и Костя",
    role: "Свадьба · Никола-Ленивец",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=70",
  },
  {
    quote:
      "Заказывали фудтрак на 30-летие. Всё быстро, красиво, без единого «мы забыли». Плюс — свою эстетику привозят с собой.",
    author: "Дарья",
    role: "Юбилей · дом на Пироговке",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=70",
  },
  {
    quote:
      "3000 гостей на open-air и ни одной задержки на выдаче. Ребята — золото.",
    author: "Артём Ким",
    role: "Фестиваль Signal",
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=70",
  },
];

export function EventsReviews() {
  return (
    <section className="bg-milk py-28 md:py-36">
      <div className="container">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-ink/60">Отзывы</Eyebrow>
            <h2 className="mt-6 font-display text-display font-light leading-[1.02] tracking-tight max-w-2xl text-balance">
              Гости пишут первыми. <br />
              <em className="italic font-light text-ink/50">Это лучший индикатор.</em>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-coffee text-coffee" />
              ))}
            </div>
            <div className="text-sm text-ink/60">
              4.98 · <span className="tabular-nums">312</span> отзывов
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col overflow-hidden rounded-3xl bg-cream"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={r.img} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <blockquote className="font-display text-xl font-light leading-snug tracking-tight text-ink text-pretty">
                  «{r.quote}»
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <div className="font-medium text-ink">{r.author}</div>
                  <div className="text-sm text-ink/60">{r.role}</div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
