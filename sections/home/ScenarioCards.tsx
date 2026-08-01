"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type Scene = {
  n: string;
  tag: string;
  title: string;
  titleItalic: string;
  world: string;
  bullets: string[];
  href: string;
  truck: string;
  ctx: string;
  theme: "graphite" | "cream" | "ink";
};

const SCENES: Scene[] = [
  {
    n: "01",
    tag: "Кино · TV · Реклама",
    title: "Тот же трейлер —",
    titleItalic: "на съёмочной площадке.",
    world: "В поле, в мороз, в 4 утра. Горячее питание для группы 20 — 300 человек, кофе на автомате, ланч-боксы для тех, кто в кадре.",
    bullets: [
      "12-часовая смена без пауз",
      "Ланч-боксы навынос",
      "Работа с продакшн-графиком",
    ],
    href: "/cinema",
    truck: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&w=1800&q=80",
    ctx: "На локации сериала · Тверская область",
    theme: "graphite",
  },
  {
    n: "02",
    tag: "Свадьбы · ДР · Корпоративы",
    title: "Тот же трейлер —",
    titleItalic: "на вашем празднике.",
    world: "Живой центр вечера: welcome-кофе для сборов, барбекю-линия у пруда, десертный бар после ужина. От камерных до фестивальных.",
    bullets: [
      "Меню собираем под формат вечера",
      "От 30 до 3000 гостей",
      "Работа в связке с декоратором",
    ],
    href: "/events",
    truck: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
    ctx: "Свадьба в Николо-Урюпине · 140 гостей",
    theme: "cream",
  },
  {
    n: "03",
    tag: "Промо · BTL · Дегустации",
    title: "Тот же трейлер —",
    titleItalic: "в центре города.",
    world: "Полная плёнка бренда, тематическое меню, механики с QR. Живая альтернатива стандартным активациям в ТЦ и на набережных.",
    bullets: [
      "Брендирование под ключ",
      "Дегустации и sampling",
      "Разрешения на нашей стороне",
    ],
    href: "/promo",
    truck: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1800&q=80",
    ctx: "Sber Green · парк Горького",
    theme: "ink",
  },
];

export function ScenarioCards() {
  const [active, setActive] = useState(0);

  return (
    <section id="scenarios" className="bg-milk">
      {/* Section intro */}
      <div className="container pt-24 pb-14 md:pt-36 md:pb-20">
        <SectionLabel n="02" title="Сценарии использования" className="text-ink/70" />
        <div className="mt-10 ed-grid items-end">
          <h2 className="col-span-12 lg:col-span-8 font-display text-display font-light tracking-tightest text-balance">
            Один фудтрак.{" "}
            <em className="italic font-light text-ink/50">Три сценария.</em>{" "}
            Ноль компромиссов.
          </h2>
          <p className="col-span-12 lg:col-span-3 lg:col-start-10 mt-6 lg:mt-0 text-ink/60 text-pretty">
            Наводите курсор или кликайте — сайт превратится в лендинг под ваш сценарий:
            другие фото, другие тексты, другие кейсы.
          </p>
        </div>
      </div>

      {/* Preview showcase — same truck, three worlds */}
      <div className="border-y border-ink/10 bg-cream/60">
        <div className="container py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0">
            {SCENES.map((s, i) => (
              <ScenePreview
                key={s.n}
                scene={s}
                i={i}
                active={active === i}
                onEnter={() => setActive(i)}
                isLast={i === SCENES.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full spread rows */}
      {SCENES.map((s) => (
        <SceneRow key={s.n} scene={s} />
      ))}
    </section>
  );
}

function ScenePreview({
  scene,
  i,
  active,
  onEnter,
  isLast,
}: {
  scene: Scene;
  i: number;
  active: boolean;
  onEnter: () => void;
  isLast: boolean;
}) {
  return (
    <Link
      href={scene.href}
      onMouseEnter={onEnter}
      className={cn(
        "group relative flex flex-col p-6 md:p-8 transition-all md:border-r md:border-ink/10",
        active ? "bg-milk" : "bg-transparent",
        isLast && "md:border-r-0"
      )}
    >
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-meta uppercase text-bronze num-pill">
          N° {scene.n}
        </span>
        <ArrowUpRight
          className={cn(
            "h-5 w-5 text-ink/50 transition-transform duration-500",
            active && "rotate-45 text-ink"
          )}
        />
      </div>

      <div className="relative mt-6 aspect-[4/3] overflow-hidden">
        <motion.img
          src={scene.truck}
          alt={scene.ctx}
          className="h-full w-full object-cover"
          animate={{
            scale: active ? 1.06 : 1,
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between font-mono text-meta uppercase text-milk">
          <span className="rounded-full bg-ink/60 px-3 py-1 backdrop-blur">
            {scene.ctx}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <div className="font-mono text-meta uppercase text-ink/60">{scene.tag}</div>
        <div className="mt-2 font-display text-2xl font-light leading-tight tracking-tight text-ink">
          {scene.title}
          <br />
          <em className="italic font-light opacity-70">{scene.titleItalic}</em>
        </div>
      </div>
    </Link>
  );
}

function SceneRow({ scene }: { scene: Scene }) {
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
    ink: "bg-ink text-milk",
  };
  const rules = scene.theme === "cream" ? "border-ink/12" : "border-linelight";
  const reverse = scene.n === "02";

  return (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden", themes[scene.theme])}
    >
      <div className="container py-20 md:py-32">
        <div
          className={cn(
            "ed-grid items-center gap-y-10",
            reverse && "lg:[direction:rtl]"
          )}
        >
          <div className="col-span-12 lg:col-span-6 [direction:ltr]">
            <motion.figure className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6]">
              <motion.img
                style={{ y, scale }}
                src={scene.truck}
                alt={scene.title}
                className="h-full w-full object-cover will-change-transform"
              />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between font-mono text-meta uppercase text-milk/85">
                <span className="rounded-full bg-ink/55 px-3 py-1 backdrop-blur">
                  Fig. {scene.n} · Тот же трейлер
                </span>
                <span className="rounded-full bg-ink/55 px-3 py-1 backdrop-blur max-w-[70%] text-right">
                  {scene.ctx}
                </span>
              </figcaption>
            </motion.figure>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8 [direction:ltr]">
            <SectionLabel
              n={scene.n}
              title={scene.tag}
              className={scene.theme === "cream" ? "text-ink/60" : "text-milk/60"}
            />

            <h3 className="mt-8 font-display font-light leading-[0.95] tracking-tightest text-[clamp(2.5rem,6vw,5rem)] text-balance">
              {scene.title}
              <br />
              <em className="italic font-light opacity-70">{scene.titleItalic}</em>
            </h3>

            <p
              className={cn(
                "mt-8 max-w-md text-lg leading-relaxed text-pretty",
                scene.theme === "cream" ? "text-ink/70" : "text-milk/70"
              )}
            >
              {scene.world}
            </p>

            <ul className={cn("mt-10 space-y-3 border-t pt-6 text-sm", rules)}>
              {scene.bullets.map((b, i) => (
                <li
                  key={b}
                  className={cn("flex items-baseline gap-4 border-b pb-3", rules)}
                >
                  <span
                    className={cn(
                      "font-mono text-meta num-pill",
                      scene.theme === "cream" ? "text-bronze" : "text-bronzeLight"
                    )}
                  >
                    0{i + 1}
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link
              href={scene.href}
              className={cn(
                "group mt-10 inline-flex items-baseline gap-4 border-b pb-3 font-display text-2xl italic",
                scene.theme === "cream"
                  ? "border-ink/30 text-ink"
                  : "border-milk/30 text-milk"
              )}
            >
              <span>Открыть этот сценарий</span>
              <ArrowUpRight className="h-5 w-5 translate-y-1 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
