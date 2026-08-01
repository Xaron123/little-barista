"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80", caption: "Пир на 140 гостей" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80", caption: "Утренний кофе" },
  { src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=1400&q=80", caption: "Барбекю-линия" },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1400&q=80", caption: "ДР в парке" },
  { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1400&q=80", caption: "Open-air Signal" },
  { src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1400&q=80", caption: "Десертный стол" },
];

export function EventsGallery() {
  return (
    <section id="gallery" className="bg-cream py-28 md:py-36">
      <div className="container">
        <SectionLabel n="05" title="Кадры" className="text-ink/70" />
        <div className="mt-14 mb-14 ed-grid items-end">
          <h2 className="col-span-12 lg:col-span-8 font-display text-display font-light leading-[0.96] tracking-tightest">
            Просто{" "}
            <em className="italic font-light text-ink/50">атмосфера.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-6">
          {IMAGES.map((img, i) => {
            const spans = [
              "col-span-2 row-span-2 md:col-span-3 md:row-span-2 aspect-square",
              "col-span-1 md:col-span-2 aspect-[3/4]",
              "col-span-1 md:col-span-1 aspect-square",
              "col-span-2 md:col-span-2 aspect-[4/3]",
              "col-span-1 md:col-span-2 aspect-[4/3]",
              "col-span-1 md:col-span-2 aspect-[4/3]",
            ];
            return (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden ${spans[i]}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 font-mono text-meta uppercase text-milk opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-ink/60 px-3 py-1 backdrop-blur">
                    Fig. 0{i + 1}
                  </span>
                  <span className="rounded-full bg-ink/60 px-3 py-1 backdrop-blur">
                    {img.caption}
                  </span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
