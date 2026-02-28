import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      colors: {
        purple: {
          deep: "#4a1d96",
          mid: "#6d28d9",
          light: "#a78bfa",
        },
      },
    },
  },
  plugins: [],
};
export default config;
