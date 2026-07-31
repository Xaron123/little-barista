import { Hero } from "@/sections/home/Hero";
import { ScenarioCards } from "@/sections/home/ScenarioCards";
import { Philosophy } from "@/sections/home/Philosophy";
import { LogoRow } from "@/sections/home/LogoRow";
import { HowItWorks } from "@/sections/home/HowItWorks";
import { ClosingCTA } from "@/sections/home/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScenarioCards />
      <Philosophy />
      <LogoRow />
      <HowItWorks />
      <ClosingCTA />
    </>
  );
}
