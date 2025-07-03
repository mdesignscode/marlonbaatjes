<script lang="ts">
	import 'animations';
	const images = import.meta.glob('$lib/images/cover_art/*.jpg', {
		eager: true
	});
	const imagesPaths = Object.values(images).map((image) => image.default);
</script>

<div
	class="image-library absolute left-0 top-0 z-0 flex h-dvh w-screen overflow-hidden"
	aria-hidden="true"
>
	<div class="relative size-full">
		<div class="clip-right absolute flex h-1/2 w-full flex-wrap opacity-60 blur-[2px]">
			{#each imagesPaths as src, index}
				<img
					{src}
					alt=""
					class="animFadeInDown aspect-square w-[25%] opacity-0 md:w-[15%]"
					style:animation-delay={index * 0.15 + 's'}
				/>
			{/each}
		</div>
		<div
			class="clip-left absolute bottom-0 right-0 flex h-2/4 w-full flex-wrap opacity-70 blur-[2px]"
		>
			{#each imagesPaths.reverse() as src, index}
				<img
					{src}
					alt=""
					class="animFadeInUp aspect-square w-[25%] opacity-0 md:w-[15%]"
					style:animation-delay={index * 0.15 + 's'}
				/>
			{/each}
		</div>
	</div>
</div>

<style>
	.clip-left {
		clip-path: polygon(0 100%, 100% 100%, 100% 0%);
	}

	.clip-right {
		clip-path: polygon(0 0, 100% 0, 0 100%);
	}
</style>
