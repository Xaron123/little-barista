"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function EventsCTA() {
  return (
    <section className="relative overflow-hidden bg-milk py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-[36px] bg-coffee text-milk">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1800&q=70')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative p-10 md:p-20">
            <Eyebrow className="text-milk/70">Планируем событие</Eyebrow>
            <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.98] tracking-tight text-balance">
              Расскажите, каким <br />
              <em className="italic text-latte">вы видите день.</em>
            </h2>
            <p className="mt-6 max-w-lg text-milk/70 text-lg text-pretty">
              Соберём меню, покажем референсы и рассчитаем стоимость под ваш формат.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-6 rounded-full bg-milk px-6 py-4 text-ink transition-colors hover:bg-cream"
              >
                <span className="font-medium">Отправить бриф</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink text-milk transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href="tel:+79999999999"
                className="text-milk/80 hover:text-milk underline underline-offset-4"
              >
                +7 (999) 999-99-99
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
