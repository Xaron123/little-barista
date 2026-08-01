"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ArrowUpRight } from "lucide-react";
import { RevealText } from "@/components/ui/Reveal";

export function EventsHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={ref}
      className="relative min-h-[110dvh] w-full overflow-hidden bg-cream"
    >
      <div className="relative z-10 flex min-h-[110dvh] flex-col justify-between pt-32 pb-14">
        <div className="container flex items-center justify-between font-mono text-meta uppercase text-ink/60">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:text-ink"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Cover
          </Link>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-bronze" />
            <span>Scenario N° 02 · Events</span>
          </div>
          <span className="hidden sm:block">Season · Warm · MMXXVI</span>
        </div>

        <div className="container">
          <div className="ed-grid items-center gap-y-14">
            {/* Text */}
            <div className="col-span-12 lg:col-span-7">
              <h1 className="font-display font-light leading-[0.92] tracking-tightest text-hero text-ink">
                <span className="block">
                  <RevealText text="Тот же трейлер —" />
                </span>
                <span className="block italic text-coffee">
                  <RevealText text="на вашем" delay={0.06} />
                </span>
                <span className="block">
                  <RevealText text="празднике." delay={0.12} />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="mt-10 max-w-xl text-ink/70 text-lg md:text-xl text-pretty"
              >
                Тот же универсальный фудтрак становится живым центром вечера. Утренний
                кофе для сборов, барбекю-линия у пруда, десертный бар под гирлянды —
                свадьбы, юбилеи, корпоративы, фестивали.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.9 }}
                className="mt-10 flex flex-wrap items-center gap-8"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-baseline gap-3 border-b border-ink/40 pb-2 font-display text-2xl italic"
                >
                  Обсудить праздник
                  <ArrowUpRight className="h-5 w-5 translate-y-1 transition-transform group-hover:rotate-45" />
                </Link>
                <Link
                  href="#gallery"
                  className="font-mono text-meta uppercase text-ink/60 link-bronze"
                >
                  Посмотреть события
                </Link>
              </motion.div>
            </div>

            {/* Image */}
            <motion.figure
              className="col-span-12 lg:col-span-5 relative aspect-[3/4] overflow-hidden"
            >
              <motion.img
                style={{ y, scale }}
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
                alt="Свадебный кейтеринг"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between font-mono text-meta uppercase text-milk">
                <span className="rounded-full bg-ink/50 px-3 py-1 backdrop-blur">
                  Fig. 02
                </span>
                <span className="rounded-full bg-ink/50 px-3 py-1 backdrop-blur">
                  Свадьба в Николо-Урюпине
                </span>
              </figcaption>
            </motion.figure>
          </div>
        </div>

        <div className="container flex items-end justify-between font-mono text-meta uppercase text-ink/50">
          <div>Chapter 02</div>
          <div className="hidden sm:block">Little Barista · Events Division</div>
        </div>
      </div>
    </section>
  );
}
