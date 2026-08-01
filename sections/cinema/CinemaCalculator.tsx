"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
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
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
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
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="calculator" className="bg-espresso text-milk py-28 md:py-36">
      <div className="container">
        <SectionLabel n="04" title="Call sheet · Смета" className="text-milk/60" />

        <div className="mt-12 ed-grid items-end">
          <h2 className="col-span-12 lg:col-span-8 font-display text-display font-light leading-[0.96] tracking-tightest text-balance">
            Калькулятор{" "}
            <em className="italic font-light text-latte">съёмочной смены.</em>
          </h2>
          <p className="col-span-12 lg:col-span-3 lg:col-start-10 mt-6 lg:mt-0 text-milk/60 text-pretty">
            Выберите параметры смены — получите ориентировочную стоимость. Финальная
            смета зависит от локации и меню.
          </p>
        </div>

        {/* Call sheet header */}
        <div className="mt-16 border-t border-b border-linelight py-4 font-mono text-meta uppercase text-milk/60">
          <div className="grid grid-cols-4 gap-4">
            <div>Field</div>
            <div className="col-span-2">Value</div>
            <div className="text-right">Section</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="ed-grid mt-12 gap-y-10">
          {/* Left column: form */}
          <div className="col-span-12 lg:col-span-8 space-y-10">
            {/* People */}
            <FieldRow label="Количество человек" section="Crew">
              <div>
                <div className="flex items-baseline justify-between">
                  <input
                    type="number"
                    value={people}
                    min={5}
                    max={500}
                    onChange={(e) => setPeople(Number(e.target.value) || 0)}
                    className="w-24 border-0 bg-transparent font-display text-4xl font-light tracking-tight text-milk focus:outline-none num-pill"
                  />
                  <span className="font-mono text-meta uppercase text-milk/40">
                    человек
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={300}
                  step={5}
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className="mt-3 w-full accent-bronzeLight"
                />
              </div>
            </FieldRow>

            <FieldRow label="Переработка" section="Time">
              <div className="inline-flex border border-linelight">
                {(
                  [
                    { v: false, l: "Нет" },
                    { v: true, l: "Да · +15%" },
                  ] as const
                ).map(({ v, l }) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setOvertime(v)}
                    className={cn(
                      "px-6 py-3 text-sm transition-all",
                      overtime === v
                        ? "bg-milk text-ink"
                        : "text-milk/70 hover:text-milk"
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </FieldRow>

            <FieldRow label="Питание" section="Meals">
              <div className="flex flex-wrap gap-2">
                {(Object.keys(MEAL_LABELS) as Meal[]).map((m) => {
                  const active = meals.includes(m);
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => toggleMeal(m)}
                      className={cn(
                        "inline-flex items-center gap-3 border px-5 py-3 text-sm transition-all",
                        active
                          ? "border-bronzeLight bg-bronzeLight/10 text-milk"
                          : "border-linelight text-milk/70 hover:border-milk/40"
                      )}
                    >
                      <span
                        className={cn(
                          "inline-flex h-4 w-4 items-center justify-center border transition-colors",
                          active
                            ? "border-bronzeLight bg-bronzeLight text-ink"
                            : "border-milk/30"
                        )}
                      >
                        {active && <Check className="h-3 w-3" strokeWidth={3} />}
                      </span>
                      {MEAL_LABELS[m]}
                      <span className="font-mono text-meta text-milk/40 num-pill">
                        {formatNumber(MEAL_PRICE[m])} ₽
                      </span>
                    </button>
                  );
                })}
              </div>
            </FieldRow>

            <FieldRow label="Локация съёмки" section="Location">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <TextField
                  label="Город"
                  value={city}
                  onChange={setCity}
                  placeholder="Москва"
                />
                <TextField
                  label="Область / регион"
                  value={region}
                  onChange={setRegion}
                  placeholder="МО, Тверская обл., Крым…"
                />
              </div>
            </FieldRow>

            <FieldRow label="Комментарий" section="Notes">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ночная смена, вегетарианцы, аллергены…"
                rows={3}
                className="w-full resize-none border-b border-linelight bg-transparent pb-3 text-lg text-milk placeholder:text-milk/30 focus:border-bronzeLight focus:outline-none"
              />
            </FieldRow>

            <button
              type="submit"
              disabled={sent}
              className={cn(
                "group inline-flex items-baseline gap-4 border-b pb-3 font-display text-3xl italic transition-colors",
                sent
                  ? "border-bronzeLight text-bronzeLight"
                  : "border-milk/40 text-milk hover:text-latte"
              )}
            >
              <span>{sent ? "Отправлено — свяжемся" : "Получить расчёт"}</span>
              <ArrowUpRight
                className={cn(
                  "h-6 w-6 translate-y-1 transition-transform",
                  sent ? "rotate-45" : "group-hover:rotate-45"
                )}
              />
            </button>
          </div>

          {/* Right column: sticky estimate */}
          <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="sticky top-28 border border-linelight bg-black/40 p-8">
              <div className="flex items-center justify-between font-mono text-meta uppercase text-milk/50">
                <span>Оценка</span>
                <span className="text-bronzeLight">Live</span>
              </div>

              <motion.div
                key={total}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6 font-display text-[clamp(2.5rem,5vw,4rem)] font-light leading-none tracking-tightest num-pill"
              >
                {formatNumber(total)}{" "}
                <span className="font-mono text-2xl text-milk/50">₽</span>
              </motion.div>
              <div className="mt-2 text-sm text-milk/50">за смену без НДС</div>

              <div className="mt-10 space-y-4 border-t border-linelight pt-6 text-sm">
                <Row label="Крю" value={`${people} чел.`} />
                <Row
                  label="Приёмов пищи"
                  value={meals.length ? meals.length + " шт." : "—"}
                />
                <Row label="Переработка" value={overtime ? "Да · +15%" : "Нет"} />
                <Row label="Локация" value={city || "—"} />
              </div>

              <div className="mt-10 border-t border-linelight pt-6 text-xs leading-relaxed text-milk/50">
                Оценка ориентировочная. Финальную смету пришлём в течение часа с учётом
                локации и меню под ваш проект.
              </div>
            </div>
          </aside>
        </form>
      </div>
    </section>
  );
}

function FieldRow({
  label,
  section,
  children,
}: {
  label: string;
  section: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 border-b border-linelight pb-10 md:grid-cols-4">
      <div>
        <div className="text-eyebrow uppercase font-mono text-milk/50">{label}</div>
      </div>
      <div className="md:col-span-2">{children}</div>
      <div className="text-right font-mono text-meta uppercase text-milk/30">
        {section}
      </div>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-mono uppercase tracking-widest text-milk/40">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-linelight bg-transparent pb-2 text-lg text-milk placeholder:text-milk/30 focus:border-bronzeLight focus:outline-none"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-milk/50">{label}</span>
      <span className="text-right text-milk num-pill">{value}</span>
    </div>
  );
}
