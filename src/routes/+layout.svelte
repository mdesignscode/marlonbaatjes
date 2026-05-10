<script lang="ts">
	import { ImageLibrary } from 'components';
	import Header from './Header.svelte';
	import '../app.css';
        import { page } from '$app/state';

        const isResumePage = new RegExp('/resume(?=\/|$)').test(page.url.pathname)

	let { children } = $props();
</script>

<div class="h-dvh overflow-y-auto bg-vanilla text-coffee">
        {#if isResumePage}
		{@render children()}
        {:else}
                <ImageLibrary />
                <Header />
                <main>
                        {@render children()}
                </main>
        {/if}
</div>

<style>
</style>

