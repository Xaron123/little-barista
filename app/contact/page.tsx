import type { Metadata } from "next";
import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactForm } from "@/sections/contact/ContactForm";
import { ContactInfo } from "@/sections/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Оставьте заявку на выезд фудтрака Little Barista — свяжемся в течение часа.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </>
  );
}
