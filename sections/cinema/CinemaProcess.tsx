"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    time: "T − 48ч",
    title: "Пре-продакшн",
    text: "Согласование меню, аллергены, вегетарианские опции, специфика группы.",
  },
  {
    time: "T − 90 мин",
    title: "Прибытие на локацию",
    text: "Разворачиваем кухню, готовим первый кофе, стартуем завтрак.",
  },
  {
    time: "T = 0",
    title: "Смена",
    text: "Работаем в ритме площадки: завтрак, полдник, обед, ужин, ночной перекус.",
  },
  {
    time: "T + 30 мин",
    title: "Свёртка",
    text: "Убираем локацию до состояния «до нас». Ланч-боксы отправляем с водителем.",
  },
];

export function CinemaProcess() {
  return (
    <section className="bg-ink text-milk py-28 md:py-36">
      <div className="container">
        <div className="mb-16">
          <Eyebrow className="text-milk/60">Регламент смены</Eyebrow>
          <h2 className="mt-6 font-display text-display font-light leading-[1.02] tracking-tight max-w-2xl text-balance">
            Мы приходим за 90 минут <br />
            <em className="italic font-light text-latte">и уходим последними.</em>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 hidden w-px bg-linelight md:block" />
          <ol className="space-y-8">
            {STEPS.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 0.06}
                className="relative grid grid-cols-1 gap-2 rounded-2xl border border-linelight bg-graphite/40 p-6 md:grid-cols-12 md:items-center md:gap-8 md:pl-16"
              >
                <span
                  aria-hidden
                  className="absolute left-4 top-6 hidden h-5 w-5 rounded-full border-2 border-latte bg-ink md:block"
                />
                <div className="md:col-span-3 font-mono text-sm uppercase tracking-widest text-latte tabular-nums">
                  {s.time}
                </div>
                <div className="md:col-span-3 font-display text-2xl font-light">
                  {s.title}
                </div>
                <div className="md:col-span-6 text-milk/70 text-pretty">{s.text}</div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
