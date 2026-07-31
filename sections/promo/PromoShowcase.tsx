"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRight } from "lucide-react";

const SHOWS = [
  {
    brand: "Sber Green",
    title: "Кампания за экологию, парк Горького",
    kpi: "2 340 чашек · 14K UGC",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=70",
  },
  {
    brand: "Yandex Musical",
    title: "Промо стриминга на дне города",
    kpi: "6 часов · 3 200 контактов",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=70",
  },
  {
    brand: "Aviasales",
    title: "Летний sampling у ГУМа",
    kpi: "4 дня · 8 100 чашек",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=70",
  },
];

export function PromoShowcase() {
  return (
    <section className="bg-graphite text-milk py-28 md:py-36">
      <div className="container">
        <div className="mb-14 flex items-end justify-between gap-8">
          <div>
            <Eyebrow className="text-milk/60">Свежие активации</Eyebrow>
            <h2 className="mt-6 font-display text-display font-light leading-[1.02] tracking-tight text-balance max-w-xl">
              Три кейса, <br />
              <em className="italic font-light text-latte">которые сработали.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SHOWS.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-linelight bg-ink/40"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono uppercase tracking-widest text-latte">
                    {s.brand}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-milk/60 transition-transform group-hover:rotate-45" />
                </div>
                <div className="mt-4 font-display text-xl font-light leading-snug tracking-tight text-milk">
                  {s.title}
                </div>
                <div className="mt-3 text-sm text-milk/50 tabular-nums">{s.kpi}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
