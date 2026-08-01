"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Бриф",
    text: "10 минут разговора: место, задача, тайминг, вкусовые ожидания. Заполним всё за вас.",
  },
  {
    n: "02",
    title: "Смета и меню",
    text: "Собираем меню под смену или мероприятие, фиксируем детали в договоре.",
  },
  {
    n: "03",
    title: "Выезд",
    text: "Фудтрак приезжает за 90 минут до старта. Разворачиваем кухню на месте, готовим первый кофе.",
  },
  {
    n: "04",
    title: "Работа",
    text: "Готовим, наливаем, убираем. Вы занимаетесь своим делом, мы — своим.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-milk py-28 md:py-40">
      <div className="container">
        <SectionLabel n="05" title="Как работаем" className="text-ink/70" />

        <div className="mt-14 ed-grid items-end">
          <h2 className="col-span-12 lg:col-span-8 font-display text-display font-light tracking-tightest text-balance">
            Четыре шага —{" "}
            <em className="italic font-light text-ink/50">без сюрпризов.</em>
          </h2>
          <p className="col-span-12 lg:col-span-3 lg:col-start-10 mt-6 lg:mt-0 text-ink/60 text-pretty">
            Мы не любим лишних встреч и переписок. Всё, что нужно — короткий бриф.
            Дальше берём ответственность на себя.
          </p>
        </div>

        <div className="mt-20 space-y-0">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.06}
              className="group border-t border-ink/12 py-8 transition-colors duration-500 hover:bg-cream md:py-12"
            >
              <div className="ed-grid items-baseline">
                <div className="col-span-2 md:col-span-1 font-mono text-meta uppercase text-bronze num-pill">
                  N° {s.n}
                </div>
                <motion.h3
                  initial={{ x: 0 }}
                  whileInView={{ x: 0 }}
                  className="col-span-10 md:col-span-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-none tracking-tightest text-ink"
                >
                  {s.title}
                </motion.h3>
                <p className="col-span-12 mt-4 md:col-span-5 md:col-start-8 md:mt-0 text-ink/65 text-lg text-pretty">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-ink/12" />
        </div>
      </div>
    </section>
  );
}
