export type Case = {
  slug: string;
  title: string;
  client: string;
  category: "cinema" | "events" | "promo";
  categoryLabel: string;
  guests: number;
  location: string;
  date: string;
  cover: string;
  short: string;
};

export const CASES: Case[] = [
  {
    slug: "kinopoisk-series-shoot",
    title: "Питание группы 12-серийного сериала",
    client: "Кинопоиск",
    category: "cinema",
    categoryLabel: "Кино",
    guests: 120,
    location: "Подмосковье · 42 смены",
    date: "март — июль 2026",
    cover:
      "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&w=1600&q=70",
    short:
      "12-серийный сериал. Мы кормили 120-человечную группу на 42 сменах — от рассвета до глубокой ночи, семь дней в неделю.",
  },
  {
    slug: "gorky-park-activation",
    title: "Sampling-активация в парке Горького",
    client: "Sber Green",
    category: "promo",
    categoryLabel: "Промо",
    guests: 2340,
    location: "Парк Горького · Москва",
    date: "май 2026",
    cover:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=70",
    short:
      "Полное брендирование фудтрака, механика с QR-кодом, тематическое меню. 2 340 чашек за смену.",
  },
  {
    slug: "wedding-nikola",
    title: "Свадьба на 140 гостей",
    client: "Аня и Костя",
    category: "events",
    categoryLabel: "Мероприятия",
    guests: 140,
    location: "Никола-Ленивец",
    date: "август 2025",
    cover:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=70",
    short:
      "Два формата зон: спокойный кофе для сборов невесты и барбекю-линия у пруда. Ночью — тёплый шоколад.",
  },
  {
    slug: "signal-festival",
    title: "Open-air на 3000 гостей",
    client: "Signal Festival",
    category: "events",
    categoryLabel: "Мероприятия",
    guests: 3000,
    location: "Никола-Ленивец",
    date: "август 2025",
    cover:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1600&q=70",
    short:
      "Три фудтрака, быстрая линия выдачи, безналичный расчёт. Работали в тандеме с музыкальной программой.",
  },
  {
    slug: "aviasales-summer",
    title: "Летний sampling у ГУМа",
    client: "Aviasales",
    category: "promo",
    categoryLabel: "Промо",
    guests: 8100,
    location: "Красная площадь · Москва",
    date: "июль 2025",
    cover:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=70",
    short:
      "Четыре дня в самом центре города. Промо стриминга, брендированные стаканы, розыгрыши билетов.",
  },
  {
    slug: "sber-corp-anniversary",
    title: "Юбилей компании на 300 сотрудников",
    client: "Технокомпания",
    category: "events",
    categoryLabel: "Мероприятия",
    guests: 300,
    location: "лофт · Москва",
    date: "октябрь 2025",
    cover:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=70",
    short:
      "Корпоратив с двумя барами, живой станцией пасты и десертным столом. Тайминг синхронизирован с шоу.",
  },
];
