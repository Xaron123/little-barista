"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const SCENARIOS = ["Кино / TV", "Мероприятие", "Промо / BTL", "Ещё не решили"];
const GUESTS = ["до 30", "30—100", "100—500", "500+"];

export function ContactForm() {
  const [scenario, setScenario] = useState(SCENARIOS[0]);
  const [guests, setGuests] = useState(GUESTS[1]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="bg-milk py-24 md:py-32">
      <div className="container">
        <SectionLabel n="01" title="Бриф · 60 секунд" className="text-ink/70" />

        <div className="mt-14 ed-grid gap-y-14">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-display text-display font-light leading-[0.96] tracking-tightest text-balance">
              Оставьте заявку —{" "}
              <em className="italic font-light text-ink/50">ответим за час.</em>
            </h2>
            <p className="mt-8 max-w-sm text-ink/60 text-pretty">
              Расскажите, что за проект, сколько людей и когда. Дальше подхватим и
              сделаем всё сами.
            </p>

            <div className="mt-12 space-y-4 border-t border-ink/15 pt-8 text-sm">
              <div className="flex items-baseline justify-between">
                <span className="text-meta uppercase font-mono text-ink/50">
                  Оффер
                </span>
                <span className="text-ink">Ответ в течение часа</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-meta uppercase font-mono text-ink/50">
                  Смета
                </span>
                <span className="text-ink">В тот же день</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-meta uppercase font-mono text-ink/50">
                  Договор
                </span>
                <span className="text-ink">Электронный, СБП</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={submit}
            className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-10"
          >
            <FieldRow label="Направление">
              <div className="flex flex-wrap gap-2">
                {SCENARIOS.map((s) => (
                  <Chip
                    key={s}
                    active={scenario === s}
                    onClick={() => setScenario(s)}
                  >
                    {s}
                  </Chip>
                ))}
              </div>
            </FieldRow>

            <FieldRow label="Количество гостей">
              <div className="flex flex-wrap gap-2">
                {GUESTS.map((g) => (
                  <Chip key={g} active={guests === g} onClick={() => setGuests(g)}>
                    {g}
                  </Chip>
                ))}
              </div>
            </FieldRow>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <FieldRow label="Как к вам обращаться">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Имя"
                  className="w-full border-b border-ink/20 bg-transparent pb-3 text-lg placeholder:text-ink/30 focus:border-bronze focus:outline-none"
                />
              </FieldRow>
              <FieldRow label="Телефон или Telegram">
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+7 999 999 99 99"
                  className="w-full border-b border-ink/20 bg-transparent pb-3 text-lg placeholder:text-ink/30 focus:border-bronze focus:outline-none"
                />
              </FieldRow>
            </div>

            <FieldRow label="Про проект">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Локация, дата, особенности, референсы…"
                rows={4}
                className="w-full resize-none border-b border-ink/20 bg-transparent pb-3 text-lg placeholder:text-ink/30 focus:border-bronze focus:outline-none"
              />
            </FieldRow>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <p className="max-w-md text-xs text-ink/50">
                Нажимая «Отправить», вы соглашаетесь с политикой обработки персональных
                данных.
              </p>
              <motion.button
                whileHover={{ scale: 0.99 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={sent}
                className={cn(
                  "group inline-flex items-baseline gap-4 border-b pb-3 font-display text-3xl italic transition-colors",
                  sent
                    ? "border-bronze text-bronze"
                    : "border-ink/40 text-ink hover:text-coffee"
                )}
              >
                <span>{sent ? "Отправлено · спасибо" : "Отправить бриф"}</span>
                {sent ? (
                  <Check className="h-6 w-6 translate-y-1 text-bronze" />
                ) : (
                  <ArrowUpRight className="h-6 w-6 translate-y-1 transition-transform group-hover:rotate-45" />
                )}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FieldRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-5 text-eyebrow uppercase font-mono text-ink/50">
        {label}
      </div>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "border px-5 py-3 text-sm transition-all",
        active
          ? "border-ink bg-ink text-milk"
          : "border-ink/20 text-ink/70 hover:border-ink/50"
      )}
    >
      {children}
    </button>
  );
}
