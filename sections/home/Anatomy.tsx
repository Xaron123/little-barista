"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealText } from "@/components/ui/Reveal";
import { Coffee, Snowflake, Flame, Droplet, Zap, Package } from "lucide-react";

const SPECS = [
  { n: "01", icon: Coffee, title: "Кофейная станция", value: "2 группы", unit: "эспрессо-машина, гриндер, фильтр" },
  { n: "02", icon: Flame, title: "Горячая линия", value: "6 конфорок", unit: "плита, гриль, конвекционная печь" },
  { n: "03", icon: Snowflake, title: "Холодильная зона", value: "480 л", unit: "цепочка холода на любом выезде" },
  { n: "04", icon: Droplet, title: "Вода и слив", value: "200 л", unit: "автономная работа без коммуникаций" },
  { n: "05", icon: Zap, title: "Энергия", value: "12 кВт", unit: "генератор + резерв" },
  { n: "06", icon: Package, title: "Хранение", value: "3 м³", unit: "продукты, упаковка, ланч-боксы" },
];

const KPIS = [
  { v: "12 м²", l: "рабочая кухня" },
  { v: "300", l: "порций в час" },
  { v: "4 ч", l: "монтаж на месте" },
  { v: "24/7", l: "мобильность" },
];

export function Anatomy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-milk py-28 md:py-40">
      <div className="container">
        <SectionLabel n="03" title="Устройство инструмента" className="text-ink/70" />

        <div className="mt-14 ed-grid items-end">
          <h2 className="col-span-12 lg:col-span-9 font-display text-display font-light leading-[0.94] tracking-tightest text-balance">
            <RevealText text="Полноценная кухня —" />
            <br />
            <em className="italic font-light text-ink/50">
              <RevealText text="в 12 квадратных метрах." delay={0.1} />
            </em>
          </h2>
          <p className="col-span-12 lg:col-span-3 mt-6 lg:mt-0 self-end text-ink/60 text-pretty">
            Каждый узел подобран так, чтобы работать автономно на любой локации — без
            воды, без сети, без готовой инфраструктуры.
          </p>
        </div>

        {/* Truck blueprint layout */}
        <div className="mt-24 ed-grid gap-y-14 items-start">
          {/* Left: truck photo with parallax */}
          <motion.figure
            style={{ y: imgY }}
            className="col-span-12 lg:col-span-6 relative aspect-[4/5] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80"
              alt="Устройство фудтрака Little Barista"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between font-mono text-meta uppercase text-milk">
              <span className="rounded-full bg-ink/60 px-3 py-1 backdrop-blur">
                Fig. 03 · Кухня внутри
              </span>
              <span className="rounded-full bg-ink/60 px-3 py-1 backdrop-blur">
                Ø 6 × 2.3 м
              </span>
            </figcaption>
          </motion.figure>

          {/* Right: specs list */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="hair mb-4" />
            <div className="text-meta uppercase font-mono text-ink/50">
              Технический разворот
            </div>

            <ul className="mt-6 space-y-0 border-t border-ink/12">
              {SPECS.map((s, i) => (
                <Reveal
                  key={s.n}
                  delay={i * 0.05}
                  className="group border-b border-ink/12 py-5 transition-colors hover:bg-cream"
                >
                  <div className="grid grid-cols-12 items-baseline gap-3">
                    <span className="col-span-2 font-mono text-meta num-pill text-bronze">
                      {s.n}
                    </span>
                    <span className="col-span-1">
                      <s.icon
                        className="h-4 w-4 text-ink/60 transition-transform group-hover:-rotate-6"
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="col-span-5 text-ink">{s.title}</span>
                    <span className="col-span-4 text-right font-display text-xl font-light num-pill text-ink">
                      {s.value}
                    </span>
                    <span className="col-span-12 pl-14 text-sm text-ink/50 text-pretty">
                      {s.unit}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        {/* KPI strip */}
        <div className="mt-24 grid grid-cols-2 gap-x-8 gap-y-14 border-t border-ink/15 pt-14 md:grid-cols-4">
          {KPIS.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="font-display text-[clamp(3rem,6vw,5.5rem)] font-light leading-none num-pill">
                {s.v}
              </div>
              <div className="mt-4 text-ink font-medium">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
