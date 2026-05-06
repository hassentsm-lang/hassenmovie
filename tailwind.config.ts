import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:       "#0F1113",
        surface:  "#1A1D20",
        surface2: "#23272B",
        gold:     "#E0AF4C",
        gold2:    "#F5D078",
      },
      fontFamily: {
        grotesk:  ["var(--font-grotesk)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to:   { transform: "translateY(0)" },
        },
      },
      animation: {
        marquee:  "marquee 30s linear infinite",
        "fade-up":"fadeUp 0.3s ease forwards",
        "slide-up":"slideUp 0.3s cubic-bezier(.4,0,.2,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
