"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { MapPin } from "lucide-react";

type Sighting = {
  date: string;
  where: string;
  coords: string;
  context: string;
  scene: "cinema" | "events" | "promo";
};

const LOG: Sighting[] = [
  { date: "26.07 · 04:20", where: "Тверская область", coords: "56°51′N 35°55′E", context: "Ночная смена сериала", scene: "cinema" },
  { date: "20.07 · 12:00", where: "Никола-Ленивец",   coords: "54°45′N 35°35′E", context: "Свадьба на 140 гостей", scene: "events" },
  { date: "15.07 · 09:00", where: "Парк Горького",    coords: "55°43′N 37°36′E", context: "Sber Green · 2 340 чашек", scene: "promo" },
  { date: "10.07 · 06:00", where: "Мосфильм",         coords: "55°43′N 37°32′E", context: "Реклама — второй съёмочный день", scene: "cinema" },
  { date: "05.07 · 17:00", where: "Пироговка",        coords: "55°43′N 37°33′E", context: "Юбилей на 30-летие", scene: "events" },
  { date: "01.07 · 10:00", where: "ГУМ",              coords: "55°45′N 37°37′E", context: "Aviasales · летний sampling", scene: "promo" },
];

const SCENE_COLORS = {
  cinema: "text-bronzeLight",
  events: "text-bronze",
  promo: "text-bronzeLight",
} as const;

export function Sightings() {
  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="container">
        <div className="flex items-baseline justify-between">
          <SectionLabel n="04" title="Trip log · Где мы были" className="text-ink/70" />
          <div className="font-mono text-meta uppercase text-ink/40 num-pill hidden sm:block">
            Log · N° 007 · MMXXVI
          </div>
        </div>

        <h2 className="mt-14 max-w-4xl font-display text-display font-light leading-[0.96] tracking-tightest text-balance">
          Смена локации —{" "}
          <em className="italic font-light text-ink/50">каждый второй день.</em>
        </h2>

        <ol className="mt-16 border-t border-ink/15">
          {LOG.map((s, i) => (
            <Reveal
              key={s.date + s.where}
              delay={i * 0.04}
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-ink/15 py-6 transition-colors hover:bg-milk md:py-7"
            >
              <div className="col-span-4 md:col-span-2 font-mono text-meta uppercase text-bronze num-pill">
                {s.date}
              </div>
              <div className="col-span-8 md:col-span-4 flex items-baseline gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-ink/40" strokeWidth={1.5} />
                <span className="font-display text-xl font-light tracking-tight text-ink">
                  {s.where}
                </span>
              </div>
              <div className="col-span-12 md:col-span-3 font-mono text-meta uppercase text-ink/40 num-pill">
                {s.coords}
              </div>
              <div className={`col-span-12 md:col-span-3 text-right ${SCENE_COLORS[s.scene]} italic font-display text-lg text-pretty`}>
                — {s.context}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
