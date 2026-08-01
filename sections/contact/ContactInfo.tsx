"use client";

import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const ITEMS = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 999 999 99 99",
    href: "tel:+79999999999",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@littlebarista_bot",
    href: "https://t.me/littlebarista_bot",
  },
  {
    icon: Mail,
    label: "Почта",
    value: "hello@littlebarista.ru",
    href: "mailto:hello@littlebarista.ru",
  },
  {
    icon: MapPin,
    label: "База",
    value: "Москва · Пресня",
    href: "#",
  },
];

export function ContactInfo() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container">
        <SectionLabel n="02" title="Ещё способы" className="text-ink/70" />

        <div className="mt-14 grid grid-cols-1 border-t border-l border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal
              key={it.label}
              delay={i * 0.06}
              className="group border-b border-r border-ink/15 p-8 transition-colors hover:bg-milk"
            >
              <a href={it.href} className="block h-full">
                <div className="flex items-center justify-between">
                  <it.icon className="h-5 w-5 text-ink/70" strokeWidth={1.5} />
                  <span className="font-mono text-meta uppercase text-ink/40">
                    N° 0{i + 1}
                  </span>
                </div>
                <div className="mt-16 text-eyebrow uppercase font-mono text-ink/50">
                  {it.label}
                </div>
                <div className="mt-2 font-display text-2xl font-light tracking-tight text-ink transition-colors group-hover:text-coffee">
                  {it.value}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
