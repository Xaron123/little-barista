"use client";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { MessageSquare, ClipboardCheck, Truck, Coffee } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquare,
    n: "01",
    title: "Бриф",
    text: "10 минут разговора: место, задача, тайминг, вкусовые ожидания.",
  },
  {
    icon: ClipboardCheck,
    n: "02",
    title: "Смета и меню",
    text: "Собираем меню под смену или мероприятие, фиксируем детали в договоре.",
  },
  {
    icon: Truck,
    n: "03",
    title: "Выезд",
    text: "Фудтрак приезжает за 90 минут до старта. Разворачиваем кухню на месте.",
  },
  {
    icon: Coffee,
    n: "04",
    title: "Работа",
    text: "Готовим, наливаем, убираем. Вы занимаетесь своим делом, мы — своим.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-milk py-28 md:py-36">
      <div className="container">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow className="text-ink/60">Как работаем</Eyebrow>
            <h2 className="mt-5 font-display text-display font-light leading-[1.02] tracking-tight text-balance">
              Четыре шага <br />
              <em className="italic font-light text-ink/50">без сюрпризов.</em>
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 max-w-md text-ink/60 text-lg text-pretty">
            Мы не любим лишних встреч и переписок. Всё, что нужно — короткий бриф.
            Дальше берём ответственность на себя.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.08}
              className="group relative flex min-h-[280px] flex-col justify-between bg-milk p-8 transition-colors duration-300 hover:bg-cream"
            >
              <div className="flex items-center justify-between">
                <s.icon
                  className="h-6 w-6 text-ink/70 transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <span className="font-mono text-xs uppercase tracking-widest text-ink/40">
                  {s.n}
                </span>
              </div>
              <div>
                <div className="font-display text-3xl font-light tracking-tight">
                  {s.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 text-pretty">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
