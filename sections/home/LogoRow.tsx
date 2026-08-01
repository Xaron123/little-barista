"use client";

import { Marquee } from "@/components/ui/Marquee";
import { SectionLabel } from "@/components/ui/SectionLabel";

const CLIENTS = [
  "Кинопоиск",
  "Yandex",
  "Bosco",
  "Студия Никиты Михалкова",
  "Первый канал",
  "MTS",
  "Aviasales",
  "Ozon",
  "T-Bank",
  "VK",
  "Sber Green",
  "Adidas",
];

export function LogoRow() {
  return (
    <section className="border-y border-ink/10 bg-milk py-16">
      <div className="container mb-10">
        <SectionLabel n="04" title="Клиенты" className="text-ink/70" />
      </div>
      <Marquee
        items={CLIENTS.map((c) => (
          <span
            key={c}
            className="font-display text-[clamp(2rem,3.5vw,3.25rem)] font-light italic text-ink/70"
          >
            {c}
          </span>
        ))}
      />
    </section>
  );
}
