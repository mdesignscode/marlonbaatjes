/** @type {import('tailwindcss').Config} */
export default {
        content: [
                "./src/**/*.{svelte,html,js,ts}",
                "./svelte.config.js"
        ],
        theme: {},
        plugins: [
                require("@tailwindcss/typography"),
        ],
};

