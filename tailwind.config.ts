import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D4A843",
          light: "#E8C96A",
          dark: "#B8862E",
        },
        teal: {
          DEFAULT: "#1A9E8F",
          light: "#2CC4B3",
          dark: "#147A6E",
        },
        orange: {
          DEFAULT: "#E07A3A",
          light: "#F09A5E",
        },
        purple: {
          DEFAULT: "#8B3A8B",
          light: "#A855A8",
        },
        magenta: "#C44B8B",
        dark: {
          DEFAULT: "#0D1B2A",
          mid: "#132B3E",
          teal: "#0A3D3D",
          warm: "#1A1A2E",
        },
        neutral: {
          white: "#FAFAFA",
          100: "#F0EDE8",
          400: "#9CA3AF",
          700: "#374151",
          black: "#0A0A0A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": "clamp(2.5rem, 6vw, 5rem)",
        "section": "clamp(1.75rem, 4vw, 3rem)",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
