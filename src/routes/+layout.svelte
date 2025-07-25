<script lang="ts">
	import { ImageLibrary } from 'components';
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="h-dvh overflow-y-auto bg-vanilla text-coffee">
        <ImageLibrary />

	<Header />
	<main>
		{@render children()}
	</main>
</div>

<style>
</style>

