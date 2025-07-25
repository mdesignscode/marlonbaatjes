<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let mounted = $state(false);
	onMount(() => (mounted = true));

	const images = import.meta.glob('$lib/images/cover_art/*.jpg', {
		eager: true
	});
	const imagesPaths = Object.values(images).map((image) => image.default);
	imagesPaths.push(...imagesPaths);
</script>

{#if mounted}
	<div class="h-dvh w-dvw overflow-hidden opacity-60 blur-[2px] absolute top-0 left-0 z-0">
		<div class="container flex flex-1 flex-wrap">
			{#each imagesPaths as src, index}
				<img
                                        transition:scale|global={{ delay: index * 1.15 }}
					{src}
					alt=""
					class="inline-block aspect-square w-[calc(100%/4)] md:w-[calc(100%/6)] lg:w-[calc(100%/9)]"
				/>
			{/each}
		</div>
	</div>
{/if}

