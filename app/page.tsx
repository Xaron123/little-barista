import { Hero } from "@/sections/home/Hero";
import { ScenarioCards } from "@/sections/home/ScenarioCards";
import { Anatomy } from "@/sections/home/Anatomy";
import { Sightings } from "@/sections/home/Sightings";
import { LogoRow } from "@/sections/home/LogoRow";
import { HowItWorks } from "@/sections/home/HowItWorks";
import { ClosingCTA } from "@/sections/home/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScenarioCards />
      <Anatomy />
      <Sightings />
      <LogoRow />
      <HowItWorks />
      <ClosingCTA />
    </>
  );
}
