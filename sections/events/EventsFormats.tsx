"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const FORMATS = [
  {
    n: "01",
    title: "Свадьбы",
    text: "Утренний кофе для сборов невесты, welcome-зона для гостей, десертный бар после ужина.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=70",
  },
  {
    n: "02",
    title: "Дни рождения",
    text: "Камерный формат в парке или на даче. Барбекю, коктейли и живой ритуал приготовления.",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=70",
  },
  {
    n: "03",
    title: "Корпоративы",
    text: "Тимбилдинг с кулинарным мастер-классом. Мы забираем на себя логистику и еду.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=70",
  },
  {
    n: "04",
    title: "Фестивали и open-air",
    text: "От 100 до 3000 гостей. Быстрая линия выдачи, безналичный расчёт, тайминг под артистов.",
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=70",
  },
];

export function EventsFormats() {
  return (
    <section className="bg-milk py-28 md:py-36">
      <div className="container">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow className="text-ink/60">Форматы</Eyebrow>
            <h2 className="mt-6 font-display text-display font-light leading-[1.02] tracking-tight text-balance">
              Один трейлер — <br />
              <em className="italic font-light text-ink/50">десятки сценариев.</em>
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 self-end max-w-md text-ink/60 text-pretty">
            У нас нет фиксированного меню. Мы собираем формат под ваш вечер: от
            деликатных завтраков до полноценного ужина в четыре подачи.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {FORMATS.map((f, i) => (
            <Reveal
              key={f.n}
              delay={(i % 2) * 0.1}
              className="group relative overflow-hidden rounded-3xl bg-cream"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={f.img}
                  alt={f.title}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.06 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-3xl font-light tracking-tight">
                    {f.title}
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-ink/40">
                    {f.n}
                  </span>
                </div>
                <p className="mt-3 max-w-md text-ink/60 text-pretty">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
