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
        primary: "#fffd82",
        secondary: "#2d3a3a",
        accent: "#ff36ab"
      }
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--primary": theme("colors")?.primary,
          "--secondary": theme("colors")?.secondary
        }
      })
      // Add your custom styles here
    })
  ],
};

export default config;
