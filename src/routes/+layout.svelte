<script lang="ts">
        import { fly } from 'svelte/transition';
	import Header from './Header.svelte';
        //import Contact from './Contact.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="bg-vanilla text-coffee h-dvh overflow-y-auto">
        <Header />
	<main transition:fly={{ y: 20, duration: 300 }}>
		{@render children()}
	</main>
</div>

<style>
</style>

