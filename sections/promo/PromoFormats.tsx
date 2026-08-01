"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Palette, Coffee, Zap, Radio } from "lucide-react";

const FORMATS = [
  {
    icon: Palette,
    n: "01",
    title: "Брендирование фудтрака",
    text: "Полная плёнка, брендированные стаканы, форма бариста, welcome-меню под ключ.",
  },
  {
    icon: Coffee,
    n: "02",
    title: "Дегустации и sampling",
    text: "Продукт бренда попадает в руки ЦА в комфортной ситуации кофе-паузы.",
  },
  {
    icon: Zap,
    n: "03",
    title: "Промо-акции",
    text: "Механики со сканом QR, подписки, розыгрыши, интеграция с CRM.",
  },
  {
    icon: Radio,
    n: "04",
    title: "Городские activations",
    text: "Работаем в парках, на набережных, во дворах ТЦ. Разрешения — на нашей стороне.",
  },
];

export function PromoFormats() {
  return (
    <section id="formats" className="bg-ink text-milk py-28 md:py-40">
      <div className="container">
        <SectionLabel n="02" title="Форматы активаций" className="text-milk/60" />

        <h2 className="mt-14 max-w-5xl font-display text-display font-light leading-[0.96] tracking-tightest text-balance">
          От брендирования{" "}
          <em className="italic font-light text-milk/50">до полной кампании.</em>
        </h2>

        <div className="mt-20 space-y-0 border-t border-linelight">
          {FORMATS.map((f, i) => (
            <Reveal
              key={f.n}
              delay={i * 0.05}
              className="group grid grid-cols-12 items-center gap-6 border-b border-linelight py-10 transition-colors hover:bg-graphite/50 md:py-14"
            >
              <div className="col-span-12 md:col-span-1 font-mono text-meta uppercase text-bronzeLight num-pill">
                N° {f.n}
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="inline-flex h-12 w-12 items-center justify-center border border-linelight transition-transform duration-500 group-hover:rotate-6">
                  <f.icon className="h-5 w-5 text-bronzeLight" strokeWidth={1.4} />
                </div>
              </div>
              <div className="col-span-10 md:col-span-5 font-display text-[clamp(1.75rem,3vw,3rem)] font-light leading-none tracking-tightest">
                {f.title}
              </div>
              <p className="col-span-12 md:col-span-5 text-milk/70 text-lg text-pretty">
                {f.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
