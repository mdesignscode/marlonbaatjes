<script lang="ts">
	import './styles/hamburger.css';
	import { Close, WhatsApp, CodePen, Github, LinkedIn } from 'icons';
	import { page } from '$app/state';
	import Transition from 'svelte-transition';
	import { onNavigate } from '$app/navigation';
	import { isNavigating } from 'globalStore';
	import allProjects from './projects/allProjects';
	import { createDisclosure } from 'svelte-headlessui';
	import { fly, slide } from 'svelte/transition';

	let destination = $state('');

	const contactInfo = createDisclosure({ expanded: false });
	const navbar = createDisclosure({ expanded: false });

	onNavigate((e) => {
		if (!e.to) return;

		const { query, title } = e.to.params;

		if (query && title) destination = allProjects[query][title].title;
		else destination = e.to.url.pathname;
		if (!destination) return;

		// start exit animations
		isNavigating.update(() => true);

		// close navbar
		navbar.close();

		return new Promise((resolve) => {
			setTimeout(() => {
				// end transition
				isNavigating.update(() => false);
				destination = '';
				resolve();
			}, 4000 /* Display page transition */);
		});
	});

	const options = {
		'/': 'No place like home',
		'/about': 'Gathering info about me',
		'/projects': 'Organizing my projects'
	};
	const navOptions = new Proxy(options, {
		get(target, prop) {
			return target[prop] ?? `Unpacking ${prop}`;
		}
	});

	const links = [
		{ title: 'Home', url: '/' },
		{ title: 'About', url: '/about' },
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

<Transition
	show={$isNavigating}
	enter="duration-[1.8s] delay-[1s]"
	enterFrom="-top-full"
	enterTo="top-0"
	leave="duration-[1s]"
	leaveFrom="top-0"
	leaveTo="top-full"
>
	<div
		class={[
			'page-transition',
			'absolute left-0 top-0 z-[99999] h-full w-screen',
			'flex flex-col items-center justify-center gap-6 text-lg',
			'background'
		]}
		data-destination={Object.keys(navOptions).includes(destination) ? destination : 'project'}
	>
		<Transition
			enter="duration-[1s] delay-[1.6s]"
			enterFrom="opacity-0 scale-50"
			enterTo="opacity-100 scale-100"
			leave="duration-200 transition ease-in-out"
			leaveFrom="opacity-100 rotate-0 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<img src="/marlon_avatar.png" alt="" class="w-20" />
		</Transition>
		<Transition
			enter="duration-[1s] delay-[1.8s]"
			enterFrom="opacity-0 translate-y-4"
			enterTo="opacity-100 translate-y-0"
			leave="duration-200 transition ease-in-out"
			leaveFrom="opacity-100 rotate-0 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<div class="flex items-end text-white drop-shadow">
				<p class="animate-pulse">{navOptions[destination]}</p>

				<div class="ml-1 flex gap-1 pb-[8px]">
					<span class="size-1 animate-bounce rounded-full bg-white [animation-delay:0s]"></span>
					<span class="size-1 animate-bounce rounded-full bg-white [animation-delay:0.2s]"></span>
					<span class="size-1 animate-bounce rounded-full bg-white [animation-delay:0.4s]"></span>
				</div>
			</div>
		</Transition>
	</div>
</Transition>

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
		class={['hamburger hamburger--emphatic relative z-50', $navbar.expanded && 'is-active']}
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
						aria-current={page.url.pathname === link.url ? 'page' : undefined}
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
	.background[data-destination='project'] {
		@apply bg-violet-400;
	}

	.background[data-destination='/projects'] {
		@apply bg-blue-400;
	}

	.background[data-destination='/'] {
		@apply bg-vanilla;
	}

	.background[data-destination='/about'] {
		@apply bg-violet-400;
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

