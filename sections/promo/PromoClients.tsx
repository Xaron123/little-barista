"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const LOGOS = [
  "Yandex", "Sber", "Bosco", "Aviasales", "Кинопоиск", "MTS",
  "Ozon", "T-Bank", "Delivery", "VK", "Lamoda", "Adidas",
];

export function PromoClients() {
  return (
    <section className="bg-black text-milk py-24">
      <div className="container mb-10">
        <SectionLabel n="05" title="Клиенты и партнёры" className="text-milk/60" />
      </div>

      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-linelight">
        {LOGOS.map((l, i) => (
          <motion.div
            key={l}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.03 }}
            className="flex h-28 items-center justify-center border-b border-r border-linelight transition-colors hover:bg-graphite/50"
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
