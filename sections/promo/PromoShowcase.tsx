"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const SHOWS = [
  {
    brand: "Sber Green",
    title: "Кампания за экологию",
    location: "парк Горького · Москва",
    kpi: "2 340 чашек · 14K UGC",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80",
  },
  {
    brand: "Yandex Musical",
    title: "Промо стриминга",
    location: "день города · Тверская",
    kpi: "6 часов · 3 200 контактов",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    brand: "Aviasales",
    title: "Летний sampling",
    location: "ГУМ · Красная площадь",
    kpi: "4 дня · 8 100 чашек",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
  },
];

export function PromoShowcase() {
  return (
    <section className="bg-ink text-milk py-28 md:py-36">
      <div className="container">
        <SectionLabel n="04" title="Свежие активации" className="text-milk/60" />

        <h2 className="mt-14 max-w-4xl font-display text-display font-light leading-[0.96] tracking-tightest text-balance">
          Три кейса,{" "}
          <em className="italic font-light text-latte">которые сработали.</em>
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {SHOWS.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-x-4 top-4 flex items-center justify-between font-mono text-meta uppercase text-milk">
                  <span className="rounded-full bg-milk/10 px-3 py-1 backdrop-blur">
                    N° 0{i + 1}
                  </span>
                  <span className="rounded-full bg-bronzeLight px-3 py-1 text-ink">
                    {s.brand}
                  </span>
                </div>
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-2xl font-light leading-snug tracking-tight text-milk">
                    {s.title}
                  </h3>
                  <div className="mt-1 text-sm text-milk/50">{s.location}</div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-milk/60 transition-transform group-hover:rotate-45" />
              </div>
              <div className="mt-4 font-mono text-meta uppercase text-bronzeLight num-pill">
                {s.kpi}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
