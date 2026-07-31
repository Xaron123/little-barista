# Little Barista — Мобильный кейтеринг

Премиум мультилендинг: три сценария работы фудтрака (кино, мероприятия, BTL) внутри одного проекта.

## Стек

- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis Smooth Scroll
- Lucide Icons

## Запуск

```bash
npm install
npm run dev
```

Открыть [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm start
```

## Структура

```
app/         — App Router: страницы и layout
components/  — переиспользуемые UI-блоки
sections/    — крупные секции лендинга
data/        — статические данные (блог, кейсы)
lib/         — утилиты
hooks/       — кастомные хуки
public/      — статика
styles/      — глобальные стили
```

## Деплой

Совместимо с Vercel. Просто подключите репозиторий.
