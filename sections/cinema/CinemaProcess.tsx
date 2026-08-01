"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    time: "T − 48ч",
    title: "Пре-продакшн",
    text: "Согласование меню, аллергены, вегетарианские опции, специфика группы.",
  },
  {
    time: "T − 90 мин",
    title: "Прибытие",
    text: "Разворачиваем кухню, готовим первый кофе, стартуем завтрак.",
  },
  {
    time: "T = 0",
    title: "Смена",
    text: "Работаем в ритме площадки: завтрак, полдник, обед, ужин, ночной перекус.",
  },
  {
    time: "T + 30",
    title: "Свёртка",
    text: "Убираем локацию до состояния «до нас». Ланч-боксы отправляем с водителем.",
  },
];

export function CinemaProcess() {
  return (
    <section className="bg-ink text-milk py-28 md:py-40">
      <div className="container">
        <SectionLabel n="03" title="Регламент смены" className="text-milk/60" />

        <h2 className="mt-14 max-w-4xl font-display text-display font-light leading-[0.96] tracking-tightest text-balance">
          Приходим за 90 минут,{" "}
          <em className="italic font-light text-latte">уходим последними.</em>
        </h2>

        <ol className="mt-20 space-y-0 border-t border-linelight">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.06}
              className="border-b border-linelight py-10 md:py-14"
            >
              <div className="ed-grid items-baseline">
                <div className="col-span-3 md:col-span-2 font-mono text-meta uppercase text-bronzeLight num-pill">
                  {s.time}
                </div>
                <div className="col-span-9 md:col-span-4 font-display text-[clamp(1.75rem,3vw,3rem)] font-light leading-none tracking-tightest">
                  {s.title}
                </div>
                <p className="col-span-12 mt-4 md:col-span-5 md:col-start-8 md:mt-0 text-milk/70 text-lg text-pretty">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
