import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { POSTS } from "@/data/blog";
import { Eyebrow } from "@/components/ui/Eyebrow";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-dvh bg-milk">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40">
        <div className="container">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-ink"
          >
            <ChevronLeft className="h-4 w-4" /> Все статьи
          </Link>

          <div className="mt-12 max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink/50">
              <span>{post.categoryLabel}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>{post.date}</span>
            </div>
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight text-balance">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-ink/70 text-xl text-pretty">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Cover */}
      <section className="container">
        <div className="aspect-[16/9] overflow-hidden rounded-[32px]">
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Body */}
      <section className="container py-20">
        <article className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-ink/80">
          <p>
            Это большой разбор из практики. Мы не любим общих слов, поэтому в статье
            только то, что реально работало в проекте — с цифрами, таймлайнами и
            выводами.
          </p>
          <p>
            Полный текст статьи готовится редакцией. Здесь бы стоял живой опыт бариста,
            фотогалерея со смены и небольшая шпаргалка «что взять с собой на подобную
            задачу».
          </p>
          <h2 className="pt-8 font-display text-3xl font-light tracking-tight text-ink">
            Что сработало
          </h2>
          <p>
            Ключ — простота. Мы всегда возим одинаковый минимум оборудования и подстраиваем
            под задачу только меню. Это делает выезды предсказуемыми и по цене, и по времени.
          </p>
          <h2 className="pt-8 font-display text-3xl font-light tracking-tight text-ink">
            Что бы изменили
          </h2>
          <p>
            В следующий раз мы бы добавили ещё одного бариста и вторую эспрессо-машину.
            Пик спроса на 40% выше, чем мы прогнозировали. Хорошая проблема.
          </p>
        </article>

        <div className="mx-auto mt-16 flex max-w-2xl items-center justify-between border-t border-ink/10 pt-8 text-sm text-ink/60">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
      </section>

      {/* Related */}
      <section className="bg-cream py-24">
        <div className="container">
          <Eyebrow className="text-ink/60">Продолжить чтение</Eyebrow>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block overflow-hidden rounded-3xl bg-milk"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-mono uppercase tracking-widest text-ink/50">
                    {p.categoryLabel}
                  </div>
                  <div className="mt-3 font-display text-xl font-light leading-tight text-balance">
                    {p.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
