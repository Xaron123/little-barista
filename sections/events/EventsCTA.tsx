"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function EventsCTA() {
  return (
    <section className="relative overflow-hidden bg-milk py-32">
      <div className="container">
        <div className="relative overflow-hidden bg-coffee text-milk">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative p-10 md:p-20 lg:p-24">
            <SectionLabel n="06" title="Планируем событие" className="text-milk/70" />
            <h2 className="mt-10 max-w-5xl font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.94] tracking-tightest text-balance">
              Расскажите, каким <br />
              <em className="italic text-latte">вы видите день.</em>
            </h2>
            <p className="mt-8 max-w-lg text-milk/75 text-lg text-pretty">
              Соберём меню, покажем референсы и рассчитаем стоимость под ваш формат.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Link
                href="/contact"
                className="group inline-flex items-baseline gap-4 border-b border-milk/50 pb-3 font-display text-3xl italic"
              >
                Отправить бриф
                <ArrowUpRight className="h-6 w-6 translate-y-1 transition-transform group-hover:rotate-45" />
              </Link>
              <a
                href="tel:+79999999999"
                className="font-mono text-meta uppercase text-milk/70 num-pill hover:text-milk"
              >
                +7 999 999 99 99
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
