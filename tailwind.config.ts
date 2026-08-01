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
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Warm neutrals
        milk: "#F8F4EC",
        cream: "#F1EADB",
        latte: "#E4D5BC",
        beige: "#D7C3A4",
        // Wood
        wood: "#B89773",
        // Coffee tones
        coffee: "#5E3A20",
        espresso: "#2A1A0F",
        // Dark
        graphite: "#151311",
        ink: "#0A0908",
        black: "#050403",
        // Bronze accents
        bronze: "#8A6A3D",
        bronzeLight: "#B69368",
        // Lines
        line: "rgba(10,9,8,0.10)",
        linelight: "rgba(248,244,236,0.14)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "eyebrow": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.26em" }],
        "meta": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
        "hero": ["clamp(3rem, 9.5vw, 10rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display": ["clamp(2.25rem, 6vw, 6rem)", { lineHeight: "0.96", letterSpacing: "-0.035em" }],
        "sub": ["clamp(1.5rem, 3vw, 2.75rem)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
      },
      animation: {
        "marquee": "marquee 60s linear infinite",
        "marquee-fast": "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      letterSpacing: {
        "tightest": "-0.045em",
      },
    },
  },
  plugins: [],
};

export default config;
