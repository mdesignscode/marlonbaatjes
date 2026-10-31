<script lang="ts">
	import Hero from '$lib/home/Hero.svelte';
	import Spots from '$lib/home/Spots.svelte';
	import Folders from '$lib/home/Folders.svelte';
	import Deck from '$lib/home/Deck.svelte';
	import Letter from '$lib/home/Letter.svelte';
	import Covers from '$lib/home/Covers.svelte';
	import Coupon from '$lib/home/Coupon.svelte';
</script>

<svelte:head>
	<title>Marlon Baatjes, full-stack developer</title>
	<meta
		name="description"
		content="Marlon Baatjes is a self-taught full-stack developer in South Africa. Web apps in SvelteKit, React and Next.js, Python tools like the Spots CLI, and album cover art."
	/>
</svelte:head>

<Hero />
<Spots />
<Folders />
<Deck />
<Letter />
<Covers />
<Coupon />
