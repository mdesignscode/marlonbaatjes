import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#fcfffc",
        dark: "#040f0f",
        primary: "#e58237",
        secondary: "#2d2e2e",
        accent: "#b33f62"
      },
      boxShadow: {
        card: '10px 10px 0px 0px',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme, addComponents }) {
      addBase({
        ":root": {
          "--primary": theme("colors")?.primary,
          "--secondary": theme("colors")?.secondary
        }
      })
    })
  ],
};

export default config;
