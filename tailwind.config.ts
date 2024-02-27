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
        primary: "#ff36ab",
        secondary: "#2d3a3a",
        accent: "#fffd82"
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
