import type { Metadata } from "next";
import { CinemaHero } from "@/sections/cinema/CinemaHero";
import { CinemaWhy } from "@/sections/cinema/CinemaWhy";
import { CinemaProcess } from "@/sections/cinema/CinemaProcess";
import { CinemaCalculator } from "@/sections/cinema/CinemaCalculator";
import { CinemaGallery } from "@/sections/cinema/CinemaGallery";
import { CinemaTestimonials } from "@/sections/cinema/CinemaTestimonials";
import { CinemaCTA } from "@/sections/cinema/CinemaCTA";

export const metadata: Metadata = {
  title: "Питание съёмочных групп · Кино, TV, реклама",
  description:
    "Мобильный фудтрак Little Barista для съёмок: горячее питание, кофе, ланч-боксы. Работаем в поле и в павильоне.",
};

export default function CinemaPage() {
  return (
    <div className="theme-dark bg-ink text-milk">
      <CinemaHero />
      <CinemaWhy />
      <CinemaProcess />
      <CinemaCalculator />
      <CinemaGallery />
      <CinemaTestimonials />
      <CinemaCTA />
    </div>
  );
}
