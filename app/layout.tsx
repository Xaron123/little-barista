import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
    title: "Little Barista — мобильный кейтеринг",
    description:
      "Фудтрак, который накормит съёмочную группу, проведёт промо и станет изюминкой праздника.",
    siteName: "Little Barista",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Barista — мобильный кейтеринг",
    description:
      "Фудтрак, который накормит съёмочную группу, проведёт промо и станет изюминкой праздника.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
    <html
      lang="ru"
      className={cn(
        "antialiased",
        inter.variable,
        cormorant.variable,
        jetbrains.variable
      )}
    >
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
