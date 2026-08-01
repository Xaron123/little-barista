"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { Clock, Flame, Users2, Snowflake, Sparkles, Layers } from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "12-часовая смена",
    text: "Горячее питание в три подхода: ранний завтрак, обед в разгар смены, ужин на переработке.",
  },
  {
    icon: Flame,
    title: "Полевая кухня",
    text: "Плита, гриль, конвекция, холодильник, вода. Готовим прямо на локации.",
  },
  {
    icon: Users2,
    title: "20 — 300 человек",
    text: "Масштабируем меню и подачу под численность съёмочной группы без потери качества.",
  },
  {
    icon: Snowflake,
    title: "Цепочка холода",
    text: "Соблюдаем режим на любой локации. Санитарные документы — на руках у бригадира.",
  },
  {
    icon: Sparkles,
    title: "Спешелти-кофе",
    text: "Профессиональная эспрессо-машина, свежая обжарка, альтернатива, безлактозное молоко.",
  },
  {
    icon: Layers,
    title: "Ланч-боксы",
    text: "Собираем герметичные боксы для тех, кто работает на выезде или в кадре.",
  },
];

export function CinemaWhy() {
  return (
    <section className="bg-graphite text-milk py-28 md:py-40">
      <div className="container">
        <SectionLabel n="02" title="Почему нас берут в тендеры" className="text-milk/60" />

        <div className="mt-14 ed-grid items-end">
          <h2 className="col-span-12 lg:col-span-8 font-display text-display font-light leading-[0.96] tracking-tightest text-balance">
            <RevealText text="Продюсеры возвращаются," /> <br />
            <em className="italic font-light text-milk/50">
              <RevealText text="потому что мы работаем" delay={0.1} />
            </em>{" "}
            <em className="italic font-light text-milk/50">
              <RevealText text="как часть команды." delay={0.2} />
            </em>
          </h2>
          <p className="col-span-12 lg:col-span-3 lg:col-start-10 mt-8 lg:mt-0 text-milk/60 text-pretty">
            Понимаем перенос смены, ночной блок и внезапный дождь. Встраиваем питание
            так, чтобы график не сдвигался ни на минуту.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const borders = [
              "md:border-r border-linelight",
              "lg:border-r border-linelight",
              "border-linelight",
              "md:border-r border-t border-linelight",
              "lg:border-r border-t border-linelight",
              "border-t border-linelight",
            ];
            return (
              <Reveal
                key={f.title}
                delay={i * 0.06}
                className={`group relative flex min-h-[280px] flex-col justify-between p-8 ${borders[i]}`}
              >
                <div className="flex items-center justify-between">
                  <f.icon
                    className="h-6 w-6 text-bronzeLight transition-transform duration-500 group-hover:-rotate-6"
                    strokeWidth={1.4}
                  />
                  <span className="font-mono text-meta uppercase text-milk/40 num-pill">
                    N° 0{i + 1}
                  </span>
                </div>
                <div>
                  <div className="font-display text-3xl font-light tracking-tight">
                    {f.title}
                  </div>
                  <p className="mt-3 max-w-xs text-milk/60 leading-relaxed text-pretty">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
