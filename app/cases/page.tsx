import type { Metadata } from "next";
import { CasesIndex } from "@/sections/cases/CasesIndex";

export const metadata: Metadata = {
  title: "Кейсы",
  description:
    "Реализованные проекты Little Barista: съёмки, свадьбы, промо-активации. Локации, гости, детали.",
};

export default function CasesPage() {
  return <CasesIndex />;
}
