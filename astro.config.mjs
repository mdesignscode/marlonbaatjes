import tailwindIntegration from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwindIntegration(), solidJs(), partytown(), sitemap()],
  site: "https://marlonbaatjes.vercel.app/"
});
