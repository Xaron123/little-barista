export type BlogCategory = "cinema" | "events" | "promo";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  categoryLabel: string;
  date: string;
  readTime: string;
  cover: string;
  author: string;
  featured?: boolean;
};

export const POSTS: BlogPost[] = [
  {
    slug: "night-shoot-catering",
    title: "Как накормить сотню человек на ночной смене — и не сбить график",
    excerpt:
      "Разбираем реальный опыт работы на ночной съёмке в −18°C, где каждая минута дороже, чем в дневном блоке.",
    category: "cinema",
    categoryLabel: "Кино",
    date: "12 июля 2026",
    readTime: "6 мин",
    author: "Игорь Козлов",
    cover:
      "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&w=1600&q=70",
    featured: true,
  },
  {
    slug: "wedding-checklist",
    title: "Чек-лист свадебного кейтеринга: что мы уточняем за 48 часов до дня X",
    excerpt:
      "Аллергены, гости-вегетарианцы, дети, поздние гости — всё, что должно быть в брифе, чтобы никто не остался голодным.",
    category: "events",
    categoryLabel: "Мероприятия",
    date: "28 июня 2026",
    readTime: "5 мин",
    author: "Аня Демидова",
    cover:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=70",
  },
  {
    slug: "btl-food-samples",
    title: "Почему кофе — лучший sampling-инструмент",
    excerpt:
      "Кейсы, механики и цифры. Разбираем, как органика вокруг чашки работает на воронку сильнее баннера.",
    category: "promo",
    categoryLabel: "Промо",
    date: "20 июня 2026",
    readTime: "8 мин",
    author: "Кирилл Мамонтов",
    cover:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=70",
  },
  {
    slug: "field-cooking-gear",
    title: "Что должно быть в трейлере, если вы едете в поле на трое суток",
    excerpt:
      "Наш гид по оборудованию, воде, холодильнику и запасам. Инженерная сторона мобильного кейтеринга.",
    category: "cinema",
    categoryLabel: "Кино",
    date: "14 июня 2026",
    readTime: "9 мин",
    author: "Игорь Козлов",
    cover:
      "https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=1600&q=70",
  },
  {
    slug: "seasonal-menu",
    title: "Летнее меню-2026: холодный брю, гаспачо и рафаэлло",
    excerpt:
      "Обновили сезонное меню. Рассказываем, что пробовали и что оставили в финале.",
    category: "events",
    categoryLabel: "Мероприятия",
    date: "01 июня 2026",
    readTime: "4 мин",
    author: "Аня Демидова",
    cover:
      "https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=1600&q=70",
  },
  {
    slug: "sber-park-case",
    title: "Кейс Sber Green: 2 340 чашек и 14K органики за одну смену",
    excerpt:
      "Разбор недавней активации в парке Горького. Механика, тайминг, оборудование, цифры.",
    category: "promo",
    categoryLabel: "Промо",
    date: "22 мая 2026",
    readTime: "7 мин",
    author: "Кирилл Мамонтов",
    cover:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=70",
  },
];
