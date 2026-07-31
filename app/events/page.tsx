import type { Metadata } from "next";
import { EventsHero } from "@/sections/events/EventsHero";
import { EventsFormats } from "@/sections/events/EventsFormats";
import { EventsStory } from "@/sections/events/EventsStory";
import { EventsReviews } from "@/sections/events/EventsReviews";
import { EventsGallery } from "@/sections/events/EventsGallery";
import { EventsCTA } from "@/sections/events/EventsCTA";

export const metadata: Metadata = {
  title: "Кейтеринг на мероприятиях · Свадьбы, дни рождения, корпоративы",
  description:
    "Фудтрак Little Barista для свадеб, дней рождения, корпоративов и фестивалей. Уютная эстетика и меню под ваш формат.",
};

export default function EventsPage() {
  return (
    <div className="bg-milk text-ink">
      <EventsHero />
      <EventsFormats />
      <EventsStory />
      <EventsReviews />
      <EventsGallery />
      <EventsCTA />
    </div>
  );
}
