"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { POSTS, type BlogCategory } from "@/data/blog";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
      <section className="pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="container">
          <Eyebrow className="text-ink/60">Журнал</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-hero font-light leading-[0.94] tracking-tight text-balance">
            Заметки со смен, <br />
            <em className="italic font-light text-ink/50">мероприятий и активаций.</em>
          </h1>
          <p className="mt-8 max-w-xl text-ink/60 text-lg text-pretty">
            Практические разборы, чек-листы и цифры из проектов последних месяцев.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="container">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[36px] bg-ink text-milk md:grid-cols-12"
          >
            <div className="relative aspect-[4/3] overflow-hidden md:col-span-7 md:aspect-auto">
              <img
                src={featured.cover}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute left-6 top-6 rounded-full bg-milk/90 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
                Главное
              </div>
            </div>
            <div className="flex flex-col justify-between p-8 md:col-span-5 md:p-14">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-milk/60">
                  <span>{featured.categoryLabel}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="mt-6 font-display text-[clamp(2rem,3.5vw,3rem)] font-light leading-tight tracking-tight text-balance">
                  {featured.title}
                </h2>
                <p className="mt-5 text-milk/70 text-pretty">{featured.excerpt}</p>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <div className="text-sm text-milk/60">
                  {featured.author} · {featured.date}
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-milk text-ink transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Filters */}
      <section className="container mt-20">
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-all",
                filter === f.key
                  ? "border-ink bg-ink text-milk"
                  : "border-ink/15 text-ink/70 hover:border-ink/40"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
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
      transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block overflow-hidden rounded-3xl bg-cream"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          />
        </div>
        <div className="p-7">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink/50">
            <span>{post.categoryLabel}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-light leading-snug tracking-tight text-ink text-balance">
            {post.title}
          </h3>
          <div className="mt-6 flex items-center justify-between text-sm text-ink/50">
            <span>{post.date}</span>
            <ArrowUpRight className="h-4 w-4 text-ink/60 transition-transform group-hover:rotate-45" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
