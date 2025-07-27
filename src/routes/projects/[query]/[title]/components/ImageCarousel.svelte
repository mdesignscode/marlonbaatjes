<script lang="ts">
        import { fly } from 'svelte/transition';
        import { slideTransition, flyTransition } from 'utils';

	let { images } = $props();
	let currentIndex = $state(0);
</script>

<div class="flex flex-col gap-2" transition:fly|global={slideTransition()}>
        <div class="flex flex-1" transition:fly|global={flyTransition(300, -50)}>
                {#each images as src, i}
                        {#if i === currentIndex}
                                <img transition:scale={{ duration: 150 }} {src} alt={`Project preview ${i}`} class="rounded-md aspect-video" />
                        {/if}
                {/each}
        </div>

	<ul class="flex gap-2 overflow-x-auto">
		{#each images as _, i}
			<li>
				<button
					onclick={() => (currentIndex = i)}
                                        class={["transition-colors grid size-7 place-content-center rounded-full md:size-6 md:text-sm", i === currentIndex ? "bg-vanilla/60" : "bg-honey-gold/60"]}
				>
					{i + 1}
				</button>
			</li>
		{/each}
	</ul>
</div>

