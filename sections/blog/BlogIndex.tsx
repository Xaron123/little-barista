"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { POSTS, type BlogCategory } from "@/data/blog";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const FILTERS: { key: BlogCategory | "all"; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "cinema", label: "Кино" },
  { key: "events", label: "Мероприятия" },
  { key: "promo", label: "Промо" },
];

export function BlogIndex() {
  const [filter, setFilter] = useState<BlogCategory | "all">("all");

  const featured = POSTS.find((p) => p.featured);
  const list = useMemo(
    () =>
      POSTS.filter((p) => !p.featured && (filter === "all" || p.category === filter)),
    [filter]
  );

  return (
    <div className="min-h-dvh bg-milk">
      {/* Head */}
      <section className="pt-40 pb-16 md:pt-48">
        <div className="container">
          <SectionLabel n="00" title="Journal · Edition MMXXVI" className="text-ink/70" />
          <div className="mt-14 ed-grid items-end">
            <h1 className="col-span-12 lg:col-span-9 font-display text-hero font-light leading-[0.9] tracking-tightest text-balance">
              Заметки со смен, <br />
              <em className="italic font-light text-ink/50">
                мероприятий и активаций.
              </em>
            </h1>
            <p className="col-span-12 lg:col-span-3 mt-8 lg:mt-0 self-end text-ink/60 text-pretty">
              Практические разборы, чек-листы и цифры из проектов последних месяцев.
            </p>
          </div>
        </div>
      </section>

      {/* Featured spread */}
      {featured && (
        <section className="container">
          <Link
            href={`/blog/${featured.slug}`}
            className="group ed-grid items-end gap-y-8"
          >
            <div className="col-span-12 lg:col-span-8 relative aspect-[16/10] overflow-hidden">
              <img
                src={featured.cover}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between font-mono text-meta uppercase text-milk">
                <span className="rounded-full bg-ink/60 px-3 py-1 backdrop-blur">
                  N° 01 · Cover story
                </span>
                <span className="rounded-full bg-bronzeLight px-3 py-1 text-ink">
                  {featured.categoryLabel}
                </span>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pl-4">
              <div className="text-eyebrow uppercase font-mono text-ink/50">
                Главная статья
              </div>
              <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-light leading-[0.98] tracking-tightest text-balance">
                {featured.title}
              </h2>
              <p className="mt-6 text-ink/70 text-pretty">{featured.excerpt}</p>
              <div className="mt-8 flex items-center justify-between border-t border-ink/15 pt-4 text-sm text-ink/60">
                <span>
                  {featured.author} · {featured.date}
                </span>
                <ArrowUpRight className="h-5 w-5 text-ink/60 transition-transform group-hover:rotate-45" />
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Filters */}
      <section className="container mt-24">
        <div className="flex flex-wrap items-center gap-3 border-t border-b border-ink/15 py-5 font-mono text-meta uppercase">
          <span className="mr-3 text-ink/50">Filter</span>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "transition-colors",
                filter === f.key ? "text-bronze" : "text-ink/60 hover:text-ink"
              )}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-ink/40 num-pill">{list.length}</span>
        </div>
      </section>

      {/* Grid */}
      <section className="container mt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
          >
            {list.map((p, i) => (
              <PostCard key={p.slug} post={p} i={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      <div className="h-32" />
    </div>
  );
}

function PostCard({
  post,
  i,
}: {
  post: (typeof POSTS)[number];
  i: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
          />
        </div>
        <div className="mt-5 flex items-baseline justify-between font-mono text-meta uppercase text-ink/50">
          <span className="text-bronze">{post.categoryLabel}</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-light leading-snug tracking-tight text-ink text-balance">
          {post.title}
        </h3>
        <div className="mt-5 flex items-center justify-between border-t border-ink/15 pt-3 text-sm text-ink/50">
          <span>{post.date}</span>
          <ArrowUpRight className="h-4 w-4 text-ink/60 transition-transform group-hover:rotate-45" />
        </div>
      </Link>
    </motion.article>
  );
}
