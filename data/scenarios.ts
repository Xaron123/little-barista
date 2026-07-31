export type Scenario = {
  slug: "cinema" | "events" | "promo";
  index: string;
  tag: string;
  title: string;
  titleAccent?: string;
  description: string;
  tags: string[];
  href: string;
  accent: string;
  bg: string;
  fg: string;
  image: string;
};

export const SCENARIOS: Scenario[] = [
  {
    slug: "cinema",
    index: "01",
    tag: "Продакшн",
    title: "Питание съёмочных\nгрупп",
    titleAccent: "групп",
    description:
      "Кино, TV, реклама. Горячее питание на локации, бесперебойный кофе и ланч-боксы — от рассвета до глубокой ночи.",
    tags: ["Кино", "Сериалы", "Реклама"],
    href: "/cinema",
    accent: "#E7D9C4",
    bg: "bg-graphite",
    fg: "text-milk",
    image:
      "https://images.unsplash.com/photo-1518929458113-9dc93af71a97?auto=format&fit=crop&w=1600&q=70",
  },
  {
    slug: "events",
    index: "02",
    tag: "Мероприятия",
    title: "Кейтеринг\nна событиях",
    titleAccent: "событиях",
    description:
      "Свадьбы, дни рождения, корпоративы. Мы становимся живым центром вашего праздника — от утреннего кофе до вечернего десерта.",
    tags: ["Свадьбы", "Дни рождения", "Корпоративы"],
    href: "/events",
    accent: "#5B3A22",
    bg: "bg-cream",
    fg: "text-ink",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=70",
  },
  {
    slug: "promo",
    index: "03",
    tag: "BTL",
    title: "Рекламные\nакции и BTL",
    titleAccent: "BTL",
    description:
      "Промо, дегустации, брендирование фудтрака. Оживляем город и превращаем очередь за кофе в очередь к вашему бренду.",
    tags: ["Промо", "Дегустации", "Брендирование"],
    href: "/promo",
    accent: "#F6F1E7",
    bg: "bg-ink",
    fg: "text-milk",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=70",
  },
];
