<script lang="ts">
	import { currentIndex } from './store.ts';
	let { images, showingDesigns } = $props();
	let navigating = $state(false);

	const imagesLen = images.length - 1;

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}

	const getPrevIndex = () => ($currentIndex === 0 ? imagesLen : $currentIndex - 1);
	const getNextIndex = () => ($currentIndex === imagesLen ? 0 : $currentIndex + 1);
	const setPrevIndex = () =>
		currentIndex.update(() =>
			$currentIndex === 1 ? images.length - 1 : modulo($currentIndex - 1, imagesLen)
		);
	const setNextIndex = () =>
		currentIndex.update(() => ($currentIndex === images.length ? 1 : $currentIndex + 1));
</script>

<button
	aria-label="Show previous design"
	class={[
		'cover__image image-left transition-all',
		navigating ? 'translate-x-4' : 'group-hover:-translate-x-28 group-hover:-rotate-[10deg]'
	]}
	onclick={() => {
		navigating = true;
		setTimeout(() => {
			setPrevIndex();
			navigating = false;
		}, 300);
	}}
>
	<img src={images[getPrevIndex()]} alt="Previous design" />
</button>

<img class="cover__image image-main" src={images[$currentIndex]} alt="Current design" />

<button
	aria-label="Show next design"
	class={[
		'cover__image image-right transition-all',
		navigating ? '-translate-x-4' : 'group-hover:-translate-x-28 group-hover:-rotate-[10deg]'
	]}
	onclick={() => {
		navigating = true;
		setTimeout(() => {
			setNextIndex();
			navigating = false;
		}, 300);
	}}
>
	<img src={images[getNextIndex()]} alt="Next design" />
</button>

<style>
	.cover__image {
		@apply relative w-[25%] rounded-md object-contain;
	}

	.image-left,
	.image-right {
		@apply z-30 scale-[0.9];
	}

	.image-left {
		@apply -mr-4;
		mask: linear-gradient(90deg, white 80%, transparent);
	}

	.image-right {
		@apply -ml-4;
		mask: linear-gradient(90deg, transparent, white 80%);
	}

	.image-main {
		@apply z-40;
	}
</style>
