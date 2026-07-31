"use client";

import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const ITEMS = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (999) 999-99-99",
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
        <Eyebrow className="text-ink/60">Ещё способы</Eyebrow>
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal
              key={it.label}
              delay={i * 0.06}
              className="group bg-milk p-8 transition-colors hover:bg-cream"
            >
              <a href={it.href} className="block h-full">
                <it.icon className="h-6 w-6 text-ink/70" strokeWidth={1.5} />
                <div className="mt-10 text-xs font-mono uppercase tracking-widest text-ink/50">
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
