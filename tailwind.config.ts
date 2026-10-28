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
        beige: {
          DEFAULT: "#F4F1EB",
          light: "#FBF9F6",
          dark: "#EBE6DC",
        },
        charcoal: {
          DEFAULT: "#1C1B1A",
          light: "#2A2928",
          card: "#222120",
        },
        emerald: {
          DEFAULT: "#065F46",
          hover: "#044E39",
          light: "#E6F4EA",
        },
        terracotta: {
          DEFAULT: "#E25822",
          hover: "#C84715",
          light: "#FDEEE9",
        },
        muted: "#6B6965",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
