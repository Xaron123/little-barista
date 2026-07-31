import type { Metadata } from "next";
import { BlogIndex } from "@/sections/blog/BlogIndex";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Заметки о мобильном кейтеринге: съёмки, свадьбы, активации. Опыт и цифры из практики Little Barista.",
};

export default function BlogPage() {
  return <BlogIndex />;
}
