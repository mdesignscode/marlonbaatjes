import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
        // Consult https://svelte.dev/docs/kit/integrations
        // for more information about preprocessors
        preprocess: vitePreprocess(),

        kit: {
                // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
                // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
                // See https://svelte.dev/docs/kit/adapters for more information about adapters.
                adapter: adapter(),

                // my aliases
                alias: {
                        animations: 'src/routes/styles/animations.css',
                        icons: 'src/routes/components/icons/',
                        components: 'src/routes/components/',
                        store: 'src/utils/store.svelte.ts',
                        utils: 'src/utils/index.ts',
                        inView: 'src/lib/actions/use:inView.svelte.ts',
                }
        }
};

export default config;

