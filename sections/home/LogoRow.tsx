"use client";

import { Marquee } from "@/components/ui/Marquee";
import { Eyebrow } from "@/components/ui/Eyebrow";

const CLIENTS = [
  "Кинокомпания «Октябрь»",
  "Yandex",
  "Bosco",
  "Студия Никиты Михалкова",
  "Первый канал",
  "MTS",
  "Кинопоиск",
  "Aviasales",
  "Ozon",
];

export function LogoRow() {
  return (
    <section className="border-y border-ink/10 bg-milk py-14">
      <div className="container mb-8 flex items-center justify-between text-ink/50">
        <Eyebrow>Работали с</Eyebrow>
        <div className="hidden font-mono text-xs uppercase tracking-widest md:block">
          и ещё 200+ команд
        </div>
      </div>
      <Marquee
        items={CLIENTS.map((c) => (
          <span
            key={c}
            className="font-display text-[clamp(1.75rem,3vw,2.75rem)] font-light italic text-ink/70"
          >
            {c}
          </span>
        ))}
      />
    </section>
  );
}
