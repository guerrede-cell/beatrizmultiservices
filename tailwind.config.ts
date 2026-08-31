import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1235",
        "navy-soft": "#131B45",
        gold: "#C79A46",
        "gold-light": "#E4C98A",
        cream: "#FAF7F1",
        "cream-dark": "#F1EBE0",
        ink: "#23262F",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-jost)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
