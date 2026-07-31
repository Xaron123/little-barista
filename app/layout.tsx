import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Little Barista — мобильный кейтеринг",
    template: "%s · Little Barista",
  },
  description:
    "Фудтрак Little Barista: питание съёмочных групп, кейтеринг на мероприятиях и BTL-активации. Работаем в поле, в студии и в центре города.",
  keywords: [
    "фудтрак",
    "мобильный кейтеринг",
    "питание съёмочных групп",
    "кейтеринг для мероприятий",
    "BTL",
    "промо-акции",
    "Little Barista",
  ],
  authors: [{ name: "Little Barista" }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Little Barista — мобильный кейтеринг",
    description:
      "Фудтрак, который накормит съёмочную группу, проведёт промо и станет изюминкой праздника.",
    siteName: "Little Barista",
  },
  metadataBase: new URL("https://littlebarista.local"),
};

export const viewport: Viewport = {
  themeColor: "#FAF7F1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="antialiased">
      <body className="min-h-dvh bg-milk text-ink font-sans selection:bg-ink selection:text-milk">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
