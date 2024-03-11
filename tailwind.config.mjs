/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
				"card-sm": '5px 5px 0px 0px #262626',
				card: '10px 10px 0px 0px #262626',
				inner: "0 0 25px rgba(0,0,0,.75) inset"
			},
			fontFamily: {
				'display': ['Oswald'],
			}
		},
	},
	plugins: [],
};
