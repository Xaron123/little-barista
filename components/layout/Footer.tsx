"use client";

import Link from "next/link";
import { ArrowUpRight, Instagram, Send, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const COLS = [
  {
    title: "Направления",
    links: [
      { href: "/cinema", label: "Кино и продакшн" },
      { href: "/events", label: "Мероприятия" },
      { href: "/promo", label: "Промо и BTL" },
    ],
  },
  {
    title: "Компания",
    links: [
      { href: "/cases", label: "Кейсы" },
      { href: "/blog", label: "Блог" },
      { href: "/contact", label: "Контакты" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();
  const isDark = pathname?.startsWith("/cinema");

  return (
    <footer
      className={cn(
        "relative overflow-hidden",
        isDark ? "bg-ink text-milk" : "bg-ink text-milk"
      )}
    >
      <div className="container pt-24 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tight text-milk"
            >
              Готовы обсудить <br />
              <span className="italic font-light text-latte">ваш проект?</span>
            </motion.p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-6 rounded-full bg-milk px-6 py-4 text-ink transition-colors hover:bg-cream"
              >
                <span className="text-base font-medium">Отправить бриф</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-milk transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <a
                href="tel:+79999999999"
                className="inline-flex items-center gap-3 rounded-full border border-linelight px-6 py-4 text-milk hover:bg-white/5"
              >
                <Phone className="h-4 w-4" />
                +7 (999) 999-99-99
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-6 md:grid-cols-3">
            {COLS.map((col) => (
              <div key={col.title}>
                <div className="text-eyebrow uppercase text-milk/50">{col.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 text-milk/85 hover:text-milk"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <div className="text-eyebrow uppercase text-milk/50">Связь</div>
              <ul className="mt-4 space-y-2.5 text-milk/85">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> hello@littlebarista.ru
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="h-4 w-4" /> @littlebarista
                </li>
                <li className="flex items-center gap-2">
                  <Send className="h-4 w-4" /> @littlebarista_bot
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-linelight pt-8 sm:flex-row sm:items-center">
          <div className="text-sm text-milk/60">
            © {new Date().getFullYear()} Little Barista. Мобильный кейтеринг.
          </div>
          <div className="flex gap-6 text-sm text-milk/60">
            <a href="#" className="hover:text-milk">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-milk">
              Публичная оферта
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-16 left-1/2 -translate-x-1/2 font-display text-[22vw] leading-none text-white/[0.04]"
      >
        Little Barista
      </div>
    </footer>
  );
}
