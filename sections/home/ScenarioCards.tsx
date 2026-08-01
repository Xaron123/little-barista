"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type Row = {
  n: string;
  tag: string;
  title: string;
  titleItalic: string;
  lead: string;
  bullets: string[];
  href: string;
  image: string;
  imageCaption: string;
  reverse?: boolean;
  theme: "cream" | "graphite" | "milk";
};

const ROWS: Row[] = [
  {
    n: "01",
    tag: "Кино · TV · Реклама",
    title: "Питание",
    titleItalic: "съёмочной группы.",
    lead: "Горячее питание на локации, бесперебойный кофе и ланч-боксы — от рассвета до глубокой ночи. Приезжаем за 90 минут, работаем до последнего дубля.",
    bullets: ["Полная кухня в трейлере", "От 20 до 300 человек", "Ланч-боксы навынос"],
    href: "/cinema",
    image:
      "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&w=1800&q=80",
    imageCaption: "Ночная смена, −18 °C · Сериал для Кинопоиска",
    theme: "graphite",
  },
  {
    n: "02",
    tag: "Свадьбы · ДР · Корпоративы",
    title: "Кейтеринг",
    titleItalic: "живого праздника.",
    lead: "Свадьбы, дни рождения, корпоративы. Фудтрак становится живым центром вашего вечера — от утреннего кофе для команды до вечернего десерта под гирлянды.",
    bullets: ["От камерного ужина до 3000 гостей", "Меню под ваш формат", "Работа в паре с декоратором"],
    href: "/events",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
    imageCaption: "Свадьба в Никола-Ленивце · 140 гостей",
    reverse: true,
    theme: "cream",
  },
  {
    n: "03",
    tag: "Промо · Дегустации · BTL",
    title: "Рекламные акции",
    titleItalic: "и брендирование.",
    lead: "Мы превращаем фудтрак в промо-инструмент: брендируем машину, готовим тематическое меню, собираем очередь и контент. Живая альтернатива стандартным активациям.",
    bullets: ["Полное брендирование машины", "Городские активации", "QR-механики, дегустации"],
    href: "/promo",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=80",
    imageCaption: "Sber Green · парк Горького · 2 340 чашек за смену",
    theme: "milk",
  },
];

export function ScenarioCards() {
  return (
    <section id="scenarios" className="bg-milk">
      {/* Section intro */}
      <div className="container pt-24 pb-16 md:pt-36 md:pb-24">
        <SectionLabel n="02" title="Сценарии работы" className="text-ink/70" />
        <div className="mt-10 ed-grid items-end">
          <h2 className="col-span-12 lg:col-span-8 font-display text-display font-light tracking-tightest text-balance">
            Один фудтрак —{" "}
            <em className="italic font-light text-ink/50">три истории.</em>{" "}
            Выберите свою.
          </h2>
          <p className="col-span-12 lg:col-span-3 lg:col-start-10 mt-6 lg:mt-0 text-ink/60 text-pretty">
            У каждого направления собственный дизайн, ритм и предложение. Кликните — и
            сайт превратится в отдельный лендинг для вашей задачи.
          </p>
        </div>
      </div>

      {ROWS.map((row) => (
        <ScenarioRow key={row.n} row={row} />
      ))}
    </section>
  );
}

function ScenarioRow({ row }: { row: Row }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  const themes = {
    graphite: "bg-graphite text-milk",
    cream: "bg-cream text-ink",
    milk: "bg-ink text-milk",
  };
  const rules =
    row.theme === "cream" ? "border-ink/10" : "border-linelight";

  return (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden", themes[row.theme])}
    >
      <div className="container py-20 md:py-32">
        <div
          className={cn(
            "ed-grid items-center gap-y-10",
            row.reverse && "lg:[direction:rtl]"
          )}
        >
          {/* Image */}
          <div className="col-span-12 lg:col-span-6 [direction:ltr]">
            <motion.figure
              className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6]"
            >
              <motion.img
                style={{ y, scale }}
                src={row.image}
                alt={row.title}
                className="h-full w-full object-cover will-change-transform"
              />
              <figcaption
                className={cn(
                  "absolute inset-x-4 bottom-4 flex items-center justify-between font-mono text-meta uppercase",
                  row.theme === "cream" ? "text-milk" : "text-milk/80"
                )}
              >
                <span
                  className={cn(
                    "rounded-full px-3 py-1 backdrop-blur-sm",
                    row.theme === "cream"
                      ? "bg-ink/60 text-milk"
                      : "bg-ink/50 text-milk"
                  )}
                >
                  Fig. {row.n}
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 backdrop-blur-sm max-w-[70%] text-right",
                    row.theme === "cream"
                      ? "bg-ink/60 text-milk"
                      : "bg-ink/50 text-milk"
                  )}
                >
                  {row.imageCaption}
                </span>
              </figcaption>
            </motion.figure>
          </div>

          {/* Text */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 [direction:ltr]">
            <SectionLabel
              n={row.n}
              title={row.tag}
              className={row.theme === "cream" ? "text-ink/60" : "text-milk/60"}
            />

            <h3 className="mt-8 font-display font-light leading-[0.95] tracking-tightest text-[clamp(2.5rem,6vw,5rem)] text-balance">
              {row.title}
              <br />
              <em className="italic font-light opacity-70">{row.titleItalic}</em>
            </h3>

            <p
              className={cn(
                "mt-8 max-w-md text-lg leading-relaxed text-pretty",
                row.theme === "cream" ? "text-ink/70" : "text-milk/70"
              )}
            >
              {row.lead}
            </p>

            <ul
              className={cn(
                "mt-10 space-y-3 border-t pt-6 text-sm",
                rules
              )}
            >
              {row.bullets.map((b, i) => (
                <li
                  key={b}
                  className={cn(
                    "flex items-baseline gap-4 border-b pb-3",
                    rules
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-meta num-pill",
                      row.theme === "cream" ? "text-bronze" : "text-bronzeLight"
                    )}
                  >
                    0{i + 1}
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href={row.href}
              className={cn(
                "group mt-10 inline-flex items-baseline gap-4 border-b pb-3 font-display text-2xl italic",
                row.theme === "cream"
                  ? "border-ink/30 text-ink"
                  : "border-milk/30 text-milk"
              )}
            >
              <span>Открыть сценарий</span>
              <ArrowUpRight className="h-5 w-5 translate-y-1 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
