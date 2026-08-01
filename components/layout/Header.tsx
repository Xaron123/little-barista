"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/cinema", label: "Кино", num: "01" },
  { href: "/events", label: "События", num: "02" },
  { href: "/promo", label: "Промо", num: "03" },
  { href: "/cases", label: "Кейсы" },
  { href: "/blog", label: "Журнал" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isDark =
    pathname?.startsWith("/cinema") || pathname?.startsWith("/promo");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[padding,background-color,backdrop-filter] duration-500",
          scrolled ? "py-3" : "py-5",
          scrolled
            ? isDark
              ? "bg-ink/60 backdrop-blur-xl"
              : "bg-milk/70 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className={cn(
              "flex items-baseline gap-3 font-display leading-none",
              isDark ? "text-milk" : "text-ink"
            )}
          >
            <span className="text-[15px] tracking-[0.02em]">Little Barista</span>
            <span
              className={cn(
                "hidden sm:inline text-meta uppercase",
                isDark ? "text-milk/40" : "text-ink/40"
              )}
            >
              — est. 2018
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className={cn(
              "hidden md:flex items-center gap-8 text-sm",
              isDark ? "text-milk/80" : "text-ink/80"
            )}
          >
            {NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative flex items-baseline gap-1.5 transition-colors",
                    active
                      ? isDark
                        ? "text-milk"
                        : "text-ink"
                      : "hover:text-current"
                  )}
                >
                  {item.num && (
                    <sup className="font-mono text-[10px] tracking-widest opacity-60">
                      {item.num}
                    </sup>
                  )}
                  <span className="link-bronze">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                "hidden md:inline-flex items-center gap-3 text-sm",
                isDark ? "text-milk" : "text-ink"
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  isDark ? "bg-bronzeLight" : "bg-bronze"
                )}
              />
              <span className="link-bronze">Связаться</span>
            </Link>

            <button
              aria-label="Меню"
              onClick={() => setOpen((s) => !s)}
              className={cn(
                "md:hidden inline-flex h-10 w-10 items-center justify-center",
                isDark ? "text-milk" : "text-ink"
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
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "h-full w-full pt-24 px-6",
                isDark ? "bg-ink text-milk" : "bg-milk text-ink"
              )}
            >
              <nav className="flex flex-col">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-baseline justify-between border-b border-current/10 py-5 font-display text-4xl tracking-tight"
                    >
                      <span>{item.label}</span>
                      {item.num && (
                        <span className="font-mono text-xs uppercase tracking-widest opacity-40">
                          N° {item.num}
                        </span>
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-10"
                >
                  <Link
                    href="/contact"
                    className={cn(
                      "inline-flex items-baseline gap-3 border-b pb-2 font-display text-3xl italic",
                      isDark ? "border-milk/30 text-milk" : "border-ink/30 text-ink"
                    )}
                  >
                    Связаться
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
