<script>
	import './styles/animations.css';
	export let content;
	export let direction;
	export let prefersAnimations;
	export let style;
</script>

<div data-animated={prefersAnimations} class={`scroller ${style} text-brown`}>
	<ul class="scroller__inner" data-direction={direction}>
		{#each content as Item}
			<li class="scroller__item">
				<svelte:component this={Item} />
			</li>
		{/each}
		{#each content as Item}
			<li aria-hidden="true" class="scroller__item">
				<svelte:component this={Item} />
			</li>
		{/each}
	</ul>
</div>

<style>
	.scroller {
		opacity: 0;
	}

	.scroller[data-animated='true'] {
		@apply overflow-hidden;
		mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
		animation: 6s ease-out 5s 1 normal forwards;
	}

	.scroller:has([data-direction='right']) {
		animation-name: fadeInLeft;
	}

	.scroller:has([data-direction='left']) {
		animation-name: fadeInRight;
	}

	.scroller__inner {
		@apply flex w-fit flex-wrap gap-2;
	}

	.scroller[data-animated='true'] .scroller__inner {
		@apply flex-nowrap;
		animation-duration: 40s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	.scroller[data-animated='true'] .scroller__inner[data-direction='left'] {
		animation-name: scroll-left;
	}

	.scroller[data-animated='true'] .scroller__inner[data-direction='right'] {
		animation-name: scroll-right;
	}

	@keyframes scroll-left {
		100% {
			transform: translateX(calc(-50% - 4px));
		}
	}

	@keyframes scroll-right {
		0% {
			transform: translateX(-50%);
		}
		100% {
			transform: translateX(calc(0% + 4px));
		}
	}
</style>
