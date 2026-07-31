"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

const SCENARIOS = ["Кино / TV", "Мероприятие", "Промо / BTL", "Ещё не решили"];
const GUESTS = ["до 30", "30–100", "100–500", "500+"];

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
      <div className="container grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Eyebrow className="text-ink/60">Бриф</Eyebrow>
          <h2 className="mt-6 font-display text-display font-light leading-[1.02] tracking-tight text-balance">
            Оставьте заявку — <br />
            <em className="italic font-light text-ink/50">ответим за час.</em>
          </h2>
          <p className="mt-6 max-w-sm text-ink/60 text-pretty">
            Расскажите, что за проект, сколько людей и когда. Дальше подхватим и сделаем
            всё сами.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="lg:col-span-8 rounded-[32px] border border-ink/10 bg-cream p-6 md:p-10"
        >
          <Field label="Направление">
            <div className="mt-4 flex flex-wrap gap-2">
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
          </Field>

          <Divider />

          <Field label="Количество гостей">
            <div className="mt-4 flex flex-wrap gap-2">
              {GUESTS.map((g) => (
                <Chip key={g} active={guests === g} onClick={() => setGuests(g)}>
                  {g}
                </Chip>
              ))}
            </div>
          </Field>

          <Divider />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Field label="Как к вам обращаться">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
                className="mt-4 w-full border-b border-ink/15 bg-transparent pb-3 text-lg placeholder:text-ink/30 focus:border-ink focus:outline-none"
              />
            </Field>
            <Field label="Телефон или Telegram">
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="+7 999 999-99-99"
                className="mt-4 w-full border-b border-ink/15 bg-transparent pb-3 text-lg placeholder:text-ink/30 focus:border-ink focus:outline-none"
              />
            </Field>
          </div>

          <Divider />

          <Field label="Про проект">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Локация, дата, особенности, референсы…"
              rows={4}
              className="mt-4 w-full resize-none border-b border-ink/15 bg-transparent pb-3 text-lg placeholder:text-ink/30 focus:border-ink focus:outline-none"
            />
          </Field>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="max-w-md text-xs text-ink/50">
              Нажимая «Отправить», вы соглашаетесь с политикой обработки персональных
              данных.
            </p>
            <motion.button
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={sent}
              className={cn(
                "group inline-flex items-center gap-6 rounded-full px-6 py-4 transition-colors",
                sent ? "bg-coffee text-milk" : "bg-ink text-milk hover:bg-graphite"
              )}
            >
              <span className="font-medium">
                {sent ? "Отправлено · спасибо" : "Отправить бриф"}
              </span>
              <span
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full bg-milk text-ink transition-transform",
                  sent ? "rotate-45" : "group-hover:rotate-45"
                )}
              >
                {sent ? <Check className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
              </span>
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-eyebrow uppercase font-mono text-ink/50">{label}</div>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="my-8 h-px bg-ink/10" />;
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
        "rounded-full border px-4 py-2 text-sm transition-all",
        active
          ? "border-ink bg-ink text-milk"
          : "border-ink/15 text-ink/70 hover:border-ink/40"
      )}
    >
      {children}
    </button>
  );
}
