"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const COLS = [
  {
    title: "Направления",
    links: [
      { href: "/cinema", label: "Кино и продакшн", n: "01" },
      { href: "/events", label: "Мероприятия", n: "02" },
      { href: "/promo", label: "Промо и BTL", n: "03" },
    ],
  },
  {
    title: "Проект",
    links: [
      { href: "/cases", label: "Кейсы" },
      { href: "/blog", label: "Журнал" },
      { href: "/contact", label: "Связаться" },
    ],
  },
  {
    title: "Каналы",
    links: [
      { href: "https://t.me/littlebarista_bot", label: "Telegram" },
      { href: "#", label: "Instagram" },
      { href: "mailto:hello@littlebarista.ru", label: "hello@littlebarista.ru" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="relative overflow-hidden bg-ink text-milk">
      <div className="container pt-28 pb-8 md:pt-40">
        <div className="ed-grid gap-y-16">
          {/* Big statement */}
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-6 flex items-center gap-3 text-meta uppercase text-milk/50">
              <span className="h-1.5 w-1.5 rounded-full bg-bronzeLight" />
              <span>Ready when you are</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light leading-[0.9] tracking-tightest text-[clamp(3rem,9vw,8rem)]"
            >
              Обсудим
              <br />
              <span className="italic text-latte">ваш проект.</span>
            </motion.h2>

            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
              <Link
                href="/contact"
                className="group inline-flex items-baseline gap-3 border-b border-milk/40 pb-2 text-lg"
              >
                <span>Отправить бриф</span>
                <ArrowUpRight className="h-4 w-4 translate-y-0.5 transition-transform group-hover:rotate-45" />
              </Link>
              <a
                href="tel:+79999999999"
                className="text-milk/70 font-mono num-pill hover:text-milk"
              >
                +7 999 999-99-99
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {COLS.map((col) => (
              <div key={col.title}>
                <div className="mb-5 text-meta uppercase text-milk/40">
                  {col.title}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href + l.label} className="flex items-baseline gap-2">
                      {"n" in l && l.n && (
                        <sup className="font-mono text-[9px] tracking-widest text-milk/40">
                          {l.n}
                        </sup>
                      )}
                      <Link
                        href={l.href}
                        className="text-milk/90 link-bronze hover:text-milk"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Meta strip */}
        <div className="mt-24 grid grid-cols-2 gap-6 border-t border-linelight pt-6 text-xs text-milk/50 md:grid-cols-4">
          <div className="font-mono uppercase tracking-widest">
            N° 01 · Edition MMXXVI
          </div>
          <div className="hidden md:block font-mono uppercase tracking-widest">
            Moscow · Санкт-Петербург
          </div>
          <div className="hidden md:block font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Little Barista
          </div>
          <div className="text-right font-mono uppercase tracking-widest">
            <Link href="#" className="link-bronze">Политика</Link>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 left-0 right-0 select-none overflow-hidden"
      >
        <div className="font-display text-[24vw] leading-[0.8] italic font-light text-milk/[0.05] whitespace-nowrap text-center">
          Little Barista
        </div>
      </div>
    </footer>
  );
}
