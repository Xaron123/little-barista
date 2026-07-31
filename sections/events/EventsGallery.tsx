"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Eyebrow";

const IMAGES = [
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1200&q=70",
];

export function EventsGallery() {
  return (
    <section id="gallery" className="bg-cream py-28 md:py-36">
      <div className="container">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <Eyebrow className="text-ink/60">Кадры</Eyebrow>
            <h2 className="mt-6 font-display text-display font-light leading-[1.02] tracking-tight">
              Просто <em className="italic font-light text-ink/50">атмосфера.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          {IMAGES.map((src, i) => {
            const spans = [
              "col-span-2 row-span-2 md:col-span-3 md:row-span-2 aspect-square",
              "col-span-1 md:col-span-2 aspect-[3/4]",
              "col-span-1 md:col-span-1 aspect-square",
              "col-span-2 md:col-span-2 aspect-[4/3]",
              "col-span-1 md:col-span-2 aspect-[4/3]",
              "col-span-1 md:col-span-2 aspect-[4/3]",
            ];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl ${spans[i]}`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
