"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn, formatNumber } from "@/lib/utils";

type Meal = "breakfast" | "lunch" | "dinner" | "boxes";
const MEAL_LABELS: Record<Meal, string> = {
  breakfast: "Завтрак",
  lunch: "Обед",
  dinner: "Ужин",
  boxes: "Ланч-боксы",
};
const MEAL_PRICE: Record<Meal, number> = {
  breakfast: 480,
  lunch: 720,
  dinner: 690,
  boxes: 520,
};

export function CinemaCalculator() {
  const [people, setPeople] = useState(45);
  const [overtime, setOvertime] = useState(false);
  const [meals, setMeals] = useState<Meal[]>(["breakfast", "lunch"]);
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  const total = useMemo(() => {
    const base = meals.reduce((sum, m) => sum + MEAL_PRICE[m] * people, 0);
    const overtimeAdd = overtime ? Math.round(base * 0.15) : 0;
    return base + overtimeAdd;
  }, [people, overtime, meals]);

  const toggleMeal = (m: Meal) =>
    setMeals((prev) => (prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="calculator" className="bg-ink text-milk py-28 md:py-36">
      <div className="container">
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow className="text-milk/60">Смета за 30 секунд</Eyebrow>
            <h2 className="mt-6 font-display text-display font-light leading-[1.02] tracking-tight text-balance">
              Калькулятор <br />
              <em className="italic font-light text-latte">съёмочной смены.</em>
            </h2>
          </div>
          <p className="md:col-span-5 max-w-md text-milk/60 text-pretty">
            Выберите параметры смены — получите ориентировочную стоимость. Финальная
            смета зависит от локации и меню.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-8 rounded-3xl border border-linelight bg-graphite/60 p-6 md:p-10"
          >
            {/* People */}
            <FieldBlock label="Количество человек" hint={`${people} чел.`}>
              <div className="mt-6">
                <input
                  type="range"
                  min={10}
                  max={300}
                  step={5}
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className="w-full accent-latte"
                />
                <div className="mt-2 flex justify-between text-xs font-mono uppercase tracking-widest text-milk/40">
                  <span>10</span>
                  <span>150</span>
                  <span>300</span>
                </div>
              </div>
            </FieldBlock>

            <Divider />

            {/* Overtime */}
            <FieldBlock label="Переработка" hint={overtime ? "Да · +15%" : "Нет"}>
              <div className="mt-6 inline-flex rounded-full border border-linelight p-1">
                {(
                  [
                    { v: false, l: "Нет" },
                    { v: true, l: "Да" },
                  ] as const
                ).map(({ v, l }) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setOvertime(v)}
                    className={cn(
                      "rounded-full px-6 py-2.5 text-sm transition-all",
                      overtime === v
                        ? "bg-milk text-ink"
                        : "text-milk/70 hover:text-milk"
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </FieldBlock>

            <Divider />

            {/* Meals */}
            <FieldBlock label="Питание" hint={`${meals.length} позиции`}>
              <div className="mt-6 flex flex-wrap gap-2">
                {(Object.keys(MEAL_LABELS) as Meal[]).map((m) => {
                  const active = meals.includes(m);
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => toggleMeal(m)}
                      className={cn(
                        "group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm transition-all",
                        active
                          ? "border-latte bg-latte text-ink"
                          : "border-linelight text-milk/80 hover:border-milk/30"
                      )}
                    >
                      <span
                        className={cn(
                          "inline-flex h-4 w-4 items-center justify-center rounded-full border transition-colors",
                          active
                            ? "border-ink bg-ink text-latte"
                            : "border-milk/30"
                        )}
                      >
                        {active && <Check className="h-3 w-3" strokeWidth={3} />}
                      </span>
                      {MEAL_LABELS[m]}
                    </button>
                  );
                })}
              </div>
            </FieldBlock>

            <Divider />

            {/* Location */}
            <FieldBlock label="Локация съёмки" hint="г. Москва / МО / выезд">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Например, павильон Мосфильма"
                className="mt-6 w-full border-b border-linelight bg-transparent pb-3 text-lg text-milk placeholder:text-milk/30 focus:border-latte focus:outline-none"
              />
            </FieldBlock>

            <Divider />

            {/* Comment */}
            <FieldBlock label="Комментарий" hint="Особые пожелания">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ночная смена, вегетарианцы, аллергены…"
                rows={3}
                className="mt-6 w-full resize-none border-b border-linelight bg-transparent pb-3 text-lg text-milk placeholder:text-milk/30 focus:border-latte focus:outline-none"
              />
            </FieldBlock>

            <button
              type="submit"
              disabled={sent}
              className={cn(
                "group mt-10 inline-flex w-full items-center justify-between gap-6 rounded-full px-6 py-4 transition-all sm:w-auto",
                sent ? "bg-latte text-ink" : "bg-milk text-ink hover:bg-cream"
              )}
            >
              <span className="text-base font-medium">
                {sent ? "Отправлено — свяжемся с вами" : "Получить расчёт"}
              </span>
              <span
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-full text-milk transition-transform",
                  sent ? "bg-ink rotate-45" : "bg-ink group-hover:rotate-45"
                )}
              >
                {sent ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <ArrowUpRight className="h-4 w-4" />
                )}
              </span>
            </button>
          </form>

          {/* Estimate card */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl border border-linelight bg-graphite/60 p-8">
              <Eyebrow className="text-milk/60">Оценка</Eyebrow>
              <div className="mt-8">
                <motion.div
                  key={total}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-[clamp(2.75rem,5vw,4rem)] font-light leading-none tabular-nums"
                >
                  {formatNumber(total)} ₽
                </motion.div>
                <div className="mt-2 text-sm text-milk/50">за смену без НДС</div>
              </div>

              <div className="mt-8 space-y-3 text-sm">
                <Row label="Гости" value={`${people} чел.`} />
                <Row
                  label="Приёмов пищи"
                  value={meals.length ? meals.map((m) => MEAL_LABELS[m]).join(", ") : "—"}
                />
                <Row label="Переработка" value={overtime ? "Да · +15%" : "Нет"} />
              </div>

              <div className="mt-10 rounded-2xl border border-linelight bg-ink/40 p-5 text-xs leading-relaxed text-milk/60">
                Оценка ориентировочная. Финальную смету пришлём в течение часа с учётом
                локации, времени года и меню под ваш проект.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function FieldBlock({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <div className="text-eyebrow uppercase font-mono text-milk/50">{label}</div>
        {hint && (
          <div className="text-xs font-mono uppercase tracking-widest text-latte/80 tabular-nums">
            {hint}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="my-8 h-px bg-linelight" />;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-milk/50">{label}</span>
      <span className="text-right text-milk">{value}</span>
    </div>
  );
}
