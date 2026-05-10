<script lang="ts">
	import 'styles/hamburger.css';
	import { page } from '$app/state';
	import { createDisclosure } from 'svelte-headlessui';
	import { fly } from 'svelte/transition';

	const navbar = createDisclosure({ expanded: false });
	const links = [
		{ title: 'Home', url: '/resume' },
		{ title: 'Chat Support', url: '/resume/chat-support' }
	];
</script>

<header
        class={["glass-effect transition-all absolute bottom-[4%] right-8 z-[9999] flex flex-row-reverse print:hidden", $navbar.expanded && "w-5/6 md:w-auto"]}
>
	<button
		use:navbar.button
		aria-label={$navbar.expanded ? 'Close navigation' : 'Open navigation'}
		class={['hamburger hamburger--emphatic relative z-50 print:hidden', $navbar.expanded && 'is-active']}
		type="button"
	>
		<span class="hamburger-box grid place-items-center">
			<span class="hamburger-inner"></span>
		</span>
	</button>

	{#if $navbar.expanded}
                <nav class="overflow-x-auto overflow-y-hidden text-white">
			<ul class="flex gap-4 px-4">
				{#each links as link, index}
					<li
						transition:fly|global={{ x: 100, delay: index * 100 }}
                                                aria-current={new RegExp(`${link.url}(?=\/|$)`).test(page.url.pathname) ? 'page' : undefined}
					>
						<a href={link.url}>{link.title}</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	:global(#social-links svg) {
		@apply size-8 text-white;
	}

	ul,
	li {
		height: 100%;
	}

	li {
		@apply relative grid place-items-center;
	}

	a {
		@apply relative translate-y-0 transition-transform;
	}

	li::after {
		@apply absolute left-1/2 -z-10 size-12 -translate-x-1 translate-y-6 opacity-0 transition-all;
		content: '';
		background-image: url('/marlon_avatar.png');
		background-size: 15px auto;
		background-repeat: no-repeat;
	}

	li[aria-current='page']::after {
		@apply translate-y-1 opacity-100;
	}

	li[aria-current='page'] a {
		@apply translate-y-3;
	}

	header {
		animation: animateIn 1s ease forwards;
	}

	@keyframes animateIn {
		0% {
			opacity: 0;
			scale: 2;
			filter: blur(4px);
		}

		100% {
			opacity: 1;
			scale: 1;
			filter: blur(px);
		}
	}
</style>

