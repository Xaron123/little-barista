"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
    <section id="formats" className="bg-ink text-milk py-28 md:py-36">
      <div className="container">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Eyebrow className="text-milk/60">Форматы активаций</Eyebrow>
            <h2 className="mt-6 font-display text-display font-light leading-[1.02] tracking-tight text-balance">
              От брендирования <br />
              <em className="italic font-light text-milk/50">до полноценной кампании.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {FORMATS.map((f, i) => (
            <Reveal
              key={f.n}
              delay={(i % 2) * 0.08}
              className="group relative overflow-hidden rounded-3xl border border-linelight bg-graphite/60 p-8 transition-colors hover:bg-graphite md:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-latte text-ink transition-transform duration-500 group-hover:rotate-6">
                  <f.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-milk/40">
                  {f.n}
                </div>
              </div>

              <div className="mt-14">
                <div className="font-display text-3xl font-light tracking-tight">
                  {f.title}
                </div>
                <p className="mt-3 max-w-md text-milk/60 text-pretty">{f.text}</p>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 h-px origin-left bg-latte/40"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
