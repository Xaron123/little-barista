"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

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
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % REVIEWS.length);
  const prev = () => setI((v) => (v - 1 + REVIEWS.length) % REVIEWS.length);
  const r = REVIEWS[i];

  return (
    <section className="bg-ink text-milk py-32 md:py-40">
      <div className="container">
        <SectionLabel n="06" title="Слово продюсерам" className="text-milk/60" />

        <div className="mt-16 ed-grid items-end">
          <div className="col-span-12 lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-light leading-[0.98] tracking-tightest text-[clamp(2rem,5vw,4.5rem)] text-balance"
              >
                <span className="italic text-bronzeLight">«</span>
                {r.quote}
                <span className="italic text-bronzeLight">»</span>
              </motion.blockquote>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.figcaption
                key={"cap-" + i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 font-mono text-meta uppercase text-milk/60"
              >
                — {r.author} · {r.role}
              </motion.figcaption>
            </AnimatePresence>
          </div>

          <div className="col-span-12 lg:col-span-2 lg:col-start-11 mt-10 lg:mt-0 flex items-center gap-3 lg:justify-end">
            <button
              onClick={prev}
              className="inline-flex h-12 w-12 items-center justify-center border border-linelight text-milk hover:bg-milk hover:text-ink"
              aria-label="Prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="inline-flex h-12 w-12 items-center justify-center border border-linelight text-milk hover:bg-milk hover:text-ink"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <span className="ml-4 font-mono text-meta uppercase text-milk/50 num-pill">
              {String(i + 1).padStart(2, "0")} / {String(REVIEWS.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
