import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        cream: "#F6F1E7",
        milk: "#FAF7F1",
        latte: "#E7D9C4",
        beige: "#D9C6A7",
        coffee: "#5B3A22",
        espresso: "#2A1B10",
        graphite: "#161514",
        ink: "#0B0A09",
        line: "rgba(11,10,9,0.08)",
        linelight: "rgba(255,255,255,0.10)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "hero-sm": ["3rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "hero": ["clamp(3rem, 8vw, 8.5rem)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
        "display": ["clamp(2.25rem, 5vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "eyebrow": ["0.75rem", { lineHeight: "1", letterSpacing: "0.24em" }],
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "shimmer": "shimmer 2.4s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
