"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

const LOGOS = [
  "Yandex",
  "Sber",
  "Bosco",
  "Aviasales",
  "Kinopoisk",
  "MTS",
  "Ozon",
  "T-Bank",
  "Delivery",
  "VK",
  "Lamoda",
  "Adidas",
];

export function PromoClients() {
  return (
    <section className="bg-ink text-milk py-24">
      <div className="container mb-10">
        <Eyebrow className="text-milk/60">Клиенты и партнёры</Eyebrow>
      </div>

      <div className="container grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-linelight bg-linelight sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {LOGOS.map((l, i) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.04 }}
            className="flex h-28 items-center justify-center bg-ink transition-colors hover:bg-graphite"
          >
            <span className="font-display text-2xl font-light tracking-tight text-milk/70">
              {l}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
