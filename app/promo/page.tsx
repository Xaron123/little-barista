import type { Metadata } from "next";
import { PromoHero } from "@/sections/promo/PromoHero";
import { PromoFormats } from "@/sections/promo/PromoFormats";
import { PromoStats } from "@/sections/promo/PromoStats";
import { PromoShowcase } from "@/sections/promo/PromoShowcase";
import { PromoClients } from "@/sections/promo/PromoClients";
import { PromoCTA } from "@/sections/promo/PromoCTA";

export const metadata: Metadata = {
  title: "Рекламные акции и BTL · Промо, дегустации, брендирование",
  description:
    "Промо-активации в формате брендированного фудтрака: sampling, кампании, городские events. Little Barista.",
};

export default function PromoPage() {
  return (
    <div className="bg-ink text-milk">
      <PromoHero />
      <PromoFormats />
      <PromoStats />
      <PromoShowcase />
      <PromoClients />
      <PromoCTA />
    </div>
  );
}
