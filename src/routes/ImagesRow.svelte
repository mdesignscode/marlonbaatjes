<script lang="ts">
	const images = Object.keys(import.meta.glob('$lib/images/cover_art/*.jpg'));
</script>

<div class="absolute -z-10 size-full">
	{#each images as src}
		{#each row as image}
			<img {src} alt="" />
		{/each}
	{/each}
</div>

<style>
</style>
