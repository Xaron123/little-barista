"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { Clock, Flame, Users2, Snowflake, Sparkles, Layers } from "lucide-react";

const FEATURES = [
  {
    icon: Clock,
    title: "Готовы к 12-часовой смене",
    text: "Горячее питание в три подхода: ранний завтрак, обед в разгар смены, ужин на переработке.",
  },
  {
    icon: Flame,
    title: "Полевая кухня в трейлере",
    text: "Плита, гриль, конвекция, холодильник, вода. Готовим прямо на площадке.",
  },
  {
    icon: Users2,
    title: "Группа 20 — 300 человек",
    text: "Масштабируем меню и подачу под численность съёмочной группы без потери качества.",
  },
  {
    icon: Snowflake,
    title: "Холодильная линия",
    text: "Соблюдаем цепочку холода на любой локации. Санитарные документы — на руках у бригадира.",
  },
  {
    icon: Sparkles,
    title: "Кофе, как в спешелти",
    text: "Профессиональная эспрессо-машина, свежая обжарка, альтернатива, безлактозное молоко.",
  },
  {
    icon: Layers,
    title: "Ланч-боксы навынос",
    text: "Собираем герметичные боксы для тех, кто работает на выезде или в кадре.",
  },
];

export function CinemaWhy() {
  return (
    <section className="bg-graphite text-milk py-28 md:py-40">
      <div className="container">
        <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow className="text-milk/60">Почему нас берут в тендеры</Eyebrow>
            <h2 className="mt-6 font-display text-display font-light leading-[1.02] tracking-tight text-balance">
              <RevealText text="Продюсеры" /> <br />
              <RevealText text="возвращаются," delay={0.1} /> <br />
              <em className="italic font-light text-milk/50">
                <RevealText text="потому что мы работаем" delay={0.2} />
              </em>{" "}
              <em className="italic font-light text-milk/50">
                <RevealText text="как часть команды." delay={0.3} />
              </em>
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 self-end max-w-md text-milk/60 text-lg text-pretty">
            Мы понимаем, что такое перенос смены, ночной блок и внезапный дождь. И умеем
            встраивать питание так, чтобы график не сдвигался ни на минуту.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-linelight bg-linelight md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 0.06}
              className="group flex min-h-[280px] flex-col justify-between bg-graphite p-8 transition-colors duration-500 hover:bg-ink"
            >
              <f.icon
                className="h-7 w-7 text-latte transition-transform duration-500 group-hover:-rotate-6"
                strokeWidth={1.4}
              />
              <div>
                <div className="font-display text-2xl font-light tracking-tight text-balance">
                  {f.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-milk/60 text-pretty">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
