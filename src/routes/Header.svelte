<script lang="ts">
	import './styles/hamburger.css';
	import { Close, WhatsApp, CodePen, Github, LinkedIn } from 'icons';
	import { page } from '$app/state';
	import Transition from 'svelte-transition';
	import { onNavigate } from '$app/navigation';
	import { store } from 'store';
	import allProjects from './projects/allProjects';
	import { createDisclosure } from 'svelte-headlessui';
	import { fly, slide } from 'svelte/transition';

	let destination = $state('');

	const contactInfo = createDisclosure({ expanded: false });
	const navbar = createDisclosure({ expanded: false });

	onNavigate((e) => {
		store.isNavigating = true;

		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 500);
		});
	});

	const links = [
		{ title: 'Home', url: '/' },
		{ title: 'Projects', url: '/projects' }
	];

	const socialLinks = [
		{
			label: "Visit developer's github profile",
			href: 'https://github.com/mdesignscode',
			icon: Github
		},
		{
			label: "Visit Marlon's LinkedIn Profile",
			href: 'https://www.linkedin.com/in/marlonbaatjes',
			icon: LinkedIn
		},
		{
			label: 'Chat on WhatsApp',
			href: 'https://wa.me/+27790226755',
			icon: WhatsApp
		},
		{
			label: "View Marlon's CodePen's",
			href: 'https://codepen.io/Marlon-B',
			icon: CodePen
		}
	];
</script>

{#if $contactInfo.expanded}
	<section
		use:contactInfo.panel
		class="glass-effect absolute bottom-[14%] right-1/2 z-50 flex w-fit translate-x-1/2 items-center gap-2 p-2"
		id="social-links"
	>
		{#each socialLinks as { label, href, icon }, i}
			<a
				transition:slide|global={{ delay: i * 150 }}
				aria-label={label}
				{href}
				target="_blank"
			>
				<svelte:component this={icon} />
			</a>
		{/each}
		<button
                        transition:slide={{ delay: 600 }}
			use:contactInfo.button
			aria-label="Close social links"
			class="size-8 [writing-mode:sideways-lr]"><Close /></button
		>
	</section>
{/if}

<header
        class={["glass-effect transition-all absolute bottom-[4%] right-8 z-[9999] flex flex-row-reverse", $navbar.expanded && "w-5/6 md:w-auto"]}
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

                                <button
                                        use:contactInfo.button
					transition:fly|global={{ x: 100, delay: 350 }}
                                        >Contact</button>
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

