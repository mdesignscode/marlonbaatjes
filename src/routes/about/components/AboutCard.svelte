<script>
	import 'animations';
	let { children, title } = $props();
	import { isNavigating } from 'globalStore';
</script>

<li class={['about__card overlay group', $isNavigating ? 'animOut' : 'animIn']}>
	<h2 class="text-lg">{title}</h2>

	<div
		class="about__card-slot visible flex-1 translate-y-4 truncate duration-700 group-hover:visible group-hover:translate-y-[0] group-hover:overflow-auto group-hover:whitespace-normal"
	>
		{@render children()}
	</div>
</li>

<style>
	.about__card {
		@apply flex h-[calc((100dvh/3)-5%)] w-5/6 flex-col overflow-y-hidden p-4 opacity-0 shadow-white transition-all hover:shadow-sm md:h-[70%] md:w-[25%];
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.animIn {
		animation: fadeInUp 1s ease forwards;
	}

	.animOut {
		animation: fadeOutDown 1s ease both;
	}

	.about__card:hover {
		@apply z-[99] my-4 scale-[1.1] rounded-md md:mx-6 md:my-0;
	}

	:global {
		.about__card:hover + *,
		.about__card:hover + * + *,
		.about__card:has(+ *:hover),
		.about__card:has(+ * + *:hover) {
			filter: brightness(0.6);
		}

		.about__card.animIn:nth-of-type(1) {
			animation-delay: 0.5s;
		}
		.about__card.animIn:nth-of-type(2) {
			animation-delay: 1s;
		}
		.about__card.animIn:nth-of-type(3) {
			animation-delay: 1.5s;
		}

		.about__card li:not(:first-child) {
			@apply invisible;
		}

		.about__card li:first-child,
		.about__card p {
			@apply relative;
		}

		.about__card li:first-child::after,
		.about__card p::after {
			content: '...';
			@apply absolute -bottom-6 -left-2 text-xl transition-all;
		}

		.about__card p::after {
			@apply left-0;
		}

		.about__card:hover li:first-child::after,
		.about__card:hover p::after {
			opacity: 0;
		}

		.about__card:hover li:not(:first-child) {
			@apply visible;
		}

		.social-links {
			@apply text-coffee transition-colors hover:text-honey-gold;
		}

		.animOut:nth-of-type(2) {
			animation-delay: 0.4s;
		}
		.animOut:nth-of-type(3) {
			animation-delay: 0.8s;
		}
	}
</style>
