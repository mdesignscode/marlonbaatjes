<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();

	// the résumé is a bare A4 sheet: no site chrome
	const bare = $derived(/^\/resume(\/|$)/.test(page.url.pathname));
</script>

{#if bare}
	{@render children()}
{:else}
	<a class="skip btn btn--paper" href="#main">Skip to content</a>
	<Header />
	<main id="main">
		{@render children()}
	</main>
	<Footer />
{/if}

<style>
	.skip {
		position: absolute;
		left: var(--margin);
		top: -80px;
		z-index: 10;
	}

	.skip:focus {
		top: 12px;
	}

	main {
		position: relative;
		z-index: 1;
		background: var(--bg);
	}
</style>
