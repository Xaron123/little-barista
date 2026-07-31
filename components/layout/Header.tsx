"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/cinema", label: "Кино" },
  { href: "/events", label: "Мероприятия" },
  { href: "/promo", label: "Промо" },
  { href: "/cases", label: "Кейсы" },
  { href: "/blog", label: "Блог" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDark = pathname?.startsWith("/cinema");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[padding,background,backdrop-filter] duration-500",
          scrolled ? "py-3" : "py-5",
          scrolled
            ? isDark
              ? "bg-ink/70 backdrop-blur-xl"
              : "bg-milk/70 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "group flex items-center gap-2.5 font-display text-xl tracking-tight",
              isDark ? "text-milk" : "text-ink"
            )}
          >
            <LogoMark className={cn("h-7 w-7", isDark ? "text-milk" : "text-ink")} />
            <span className="hidden sm:block">
              Little<span className="italic font-normal opacity-80"> Barista</span>
            </span>
          </Link>

          <nav
            className={cn(
              "hidden md:flex items-center gap-1 rounded-full border px-2 py-1.5 text-sm",
              isDark
                ? "border-linelight bg-ink/40 text-milk/80"
                : "border-line bg-white/40 text-ink/80"
            )}
          >
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 transition-colors",
                    active
                      ? isDark
                        ? "bg-milk text-ink"
                        : "bg-ink text-milk"
                      : "hover:text-current"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-transform hover:scale-[0.98]",
                isDark
                  ? "bg-milk text-ink hover:bg-cream"
                  : "bg-ink text-milk hover:bg-graphite"
              )}
            >
              Обсудить
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <button
              aria-label="Меню"
              onClick={() => setOpen((s) => !s)}
              className={cn(
                "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border",
                isDark ? "border-linelight text-milk" : "border-line text-ink"
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "h-full w-full pt-24 px-6",
                isDark ? "bg-ink text-milk" : "bg-milk text-ink"
              )}
            >
              <nav className="flex flex-col gap-1">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-current/10 py-5 font-display text-4xl tracking-tight"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8"
                >
                  <Link
                    href="/contact"
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-5 py-3 text-base font-medium",
                      isDark ? "bg-milk text-ink" : "bg-ink text-milk"
                    )}
                  >
                    Обсудить проект
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M8 14h20a4 4 0 0 1 4 4v6a8 8 0 0 1-8 8H12a4 4 0 0 1-4-4V14Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M28 18h2a3 3 0 1 1 0 6h-2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14 6c0 2 2 2 2 4s-2 2-2 4M20 6c0 2 2 2 2 4s-2 2-2 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
