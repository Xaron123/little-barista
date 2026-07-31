import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-dvh items-center bg-milk pt-24">
      <div className="container">
        <div className="text-eyebrow uppercase font-mono text-ink/50">404</div>
        <h1 className="mt-6 font-display text-hero font-light leading-[0.94] tracking-tight">
          Такой страницы <br />
          <em className="italic text-ink/50">у нас нет.</em>
        </h1>
        <p className="mt-6 max-w-lg text-ink/60 text-lg text-pretty">
          Возможно, вы искали что-то из наших сценариев.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex items-center gap-6 rounded-full bg-ink px-6 py-4 text-milk transition-colors hover:bg-graphite"
        >
          <span className="font-medium">Вернуться на главную</span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-milk text-ink transition-transform group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}
