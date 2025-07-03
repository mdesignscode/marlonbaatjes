<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="h-dvh overflow-y-auto bg-vanilla text-coffee">
	<Header />
	<main>
		{@render children()}
	</main>
</div>

<style>
</style>

