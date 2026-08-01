"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const FORMATS = [
  {
    n: "01",
    title: "Свадьбы",
    text: "Утренний кофе для сборов невесты, welcome-зона для гостей, десертный бар после ужина.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
    scale: "large",
  },
  {
    n: "02",
    title: "Дни рождения",
    text: "Камерный формат в парке или на даче. Барбекю, коктейли и живой ритуал приготовления.",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=80",
    scale: "small",
  },
  {
    n: "03",
    title: "Корпоративы",
    text: "Тимбилдинг с кулинарным мастер-классом. Забираем на себя логистику и еду.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80",
    scale: "small",
  },
  {
    n: "04",
    title: "Фестивали и open-air",
    text: "От 100 до 3000 гостей. Быстрая линия выдачи, безнал, тайминг под артистов.",
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=80",
    scale: "large",
  },
];

export function EventsFormats() {
  return (
    <section className="bg-milk py-28 md:py-36">
      <div className="container">
        <SectionLabel n="02" title="Форматы" className="text-ink/70" />

        <div className="mt-14 ed-grid items-end">
          <h2 className="col-span-12 lg:col-span-8 font-display text-display font-light leading-[0.96] tracking-tightest text-balance">
            Один трейлер —{" "}
            <em className="italic font-light text-ink/50">десятки сценариев.</em>
          </h2>
          <p className="col-span-12 lg:col-span-3 lg:col-start-10 mt-6 lg:mt-0 text-ink/60 text-pretty">
            У нас нет фиксированного меню. Собираем формат под ваш вечер: от деликатных
            завтраков до полноценного ужина в четыре подачи.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6">
          {FORMATS.map((f, i) => {
            const spans = i === 0 ? "col-span-12 md:col-span-7" : i === 3 ? "col-span-12 md:col-span-7" : "col-span-12 md:col-span-5";
            const aspects = f.scale === "large" ? "aspect-[16/10]" : "aspect-[4/3]";
            return (
              <Reveal
                key={f.n}
                delay={(i % 2) * 0.08}
                className={`${spans}`}
              >
                <article className="group">
                  <div className={`relative overflow-hidden ${aspects}`}>
                    <motion.img
                      src={f.img}
                      alt={f.title}
                      className="h-full w-full object-cover"
                      initial={{ scale: 1.08 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between">
                    <div>
                      <span className="font-mono text-meta uppercase text-bronze num-pill">
                        N° {f.n}
                      </span>
                      <h3 className="mt-2 font-display text-3xl font-light tracking-tight">
                        {f.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 max-w-md text-ink/60 text-pretty">{f.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
