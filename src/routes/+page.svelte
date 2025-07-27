<script lang="ts">
	import 'animations';
	import { store } from 'store';
	import { inView } from 'inView';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { flyTransition, slideTransition } from 'utils';
	import {
		Nextjs,
		Svelte,
		React,
		TS,
		Tailwind,
		Python,
		Flask,
		Express,
		DoubleArrow,
		Nodejs,
		ExternalLink,
		Photoshop,
		Linux,
		Github,
                Windows,
                Magisk,
                Android,
                C,
                Zsh,
	} from 'icons';

	const FETools = [Nextjs, Svelte, React, TS, Tailwind];
	const BETools = [C, Python, Flask, Nodejs, Express];
        const SysTools = [Linux, Windows, Zsh, Github, Android, Magisk];

	const itemsInView = 6;
	const viewElements = $state(Array.from({ length: itemsInView }, () => false));

	let mounted = $state(false);
	onMount(() => {
		store.isNavigating = false;
		mounted = true;
		return () => (mounted = false);
	});

	const containerStyles = 'glass-effect accent p-2';
</script>

{#snippet infoBox(
	title: string,
	tools: typeof FETools,
	viewIndex: number,
	description: string[],
	textRight: boolean = false
)}
        <div use:inView={() => (viewElements[viewIndex] = true)} class={["w-full", textRight && 'text-right md:self-end md:-mr-12']}>
		{#if viewElements[viewIndex]}
			<div
				in:fly={slideTransition(0, -100)}
				out:fly|global={slideTransition(0, -50)}
				class={['flex flex-col gap-2 md:-ml-12', containerStyles]}
			>
				<div class={['flex flex-col gap-1', textRight && 'items-end']}>
					<div class="tools flex gap-1">
						{#each tools as tool}
							<svelte:component this={tool} />
						{/each}
					</div>
					<h4 class="font-semibold">{title}</h4>
				</div>

				<div class="space-y-2" transition:fly={flyTransition(100)}>
					{#each description as text}
						<p>{text}</p>
					{/each}
				</div>
			</div>
		{/if}
	</div>
{/snippet}

<svelte:head>
	<title>Home</title>
	<meta
		name="description"
		content="Web Developer Portfolio [Full Stack|Web Developer|Javascript|Python|Software Engineer|React]"
	/>
</svelte:head>

<section class="relative h-dvh overflow-y-hidden text-coffee">
	{#if mounted && !store.isNavigating}
		<div class="home flex h-full flex-col items-center gap-8 overflow-y-auto pb-[12vh] pt-8">
			<div class="w-[95%] md:w-4/6" use:inView={() => (viewElements[0] = true)}>
				{#if viewElements[0]}
					<div
						in:fly={flyTransition()}
						out:fly|global={flyTransition(0, -50)}
						class={['flex flex-col justify-center', containerStyles]}
					>
						<h1 in:fly={flyTransition(100, 50)} class="text-lg font-bold">
							Hi, I'm Marlon Baatjes
						</h1>
						<p in:fly={flyTransition(200, 50)}>
							A self-taught, full-stack web developer based in South Africa. I love computers and
							building web apps.
						</p>
					</div>
				{/if}
			</div>

			<div class="flex w-[90%] flex-col gap-4 md:w-4/6">
				<div
					class="banner-text mx-auto flex gap-4"
					in:fly|global={flyTransition(150, -50)}
					out:fly|global={flyTransition(0, -50)}
				>
					<a href="#whatido" class={['flex items-center gap-2', containerStyles]}>
						<p>What I do</p>
						<DoubleArrow />
					</a>
					<a href="/projects" class={['flex items-center gap-2', containerStyles]}>
						<p>My projects</p>
						<ExternalLink />
					</a>
				</div>

				<section id="whatido" class="flex flex-col gap-3">
					{@render infoBox('Web development', FETools, 2, [
						'I love translating a backend into a responsive UI with a seamless user experience.',
						'As a modern web developer, I use UI meta frameworks to ensure smooth communication between the frontend and backend, while keeping the codebase modular and developer-friendly.'
					])}

					{@render infoBox(
						'Server-side scripting',
						BETools,
						3,
						[
							'Python is my go-to backend language — whether for daily scripting, automation, or building APIs with Flask.',
							'I enjoy solving problems through code — like my obsession with a perfect music library, which led to building a Spotify/YouTube downloader.',
							'It combines web scraping and task automation to deliver a pixel-perfect local library, backed by a caching system for performance and a retry mechanism for robustness.'
						],
						true
					)}

					{@render infoBox('Systems & Customization', SysTools, 4, [
						'I don’t just write code — I run the machine.',
						'My daily driver is Debian Linux, tuned for performance and coding comfort. I dual boot Windows for Photoshop and gaming.',
						'I love customizing everything — even my phone is Magisk-rooted to unlock its full potential.'
					])}

					{@render infoBox(
						'Cover Art design',
						[Photoshop],
						5,
						[
							'I have a creative side too!',
							'I like designing cover art and creating trippy Photoshop illustrations for fun.'
						],
						true
					)}
				</section>
			</div>
		</div>
	{/if}
</section>

<style>
	:global(.tools svg, .banner-text svg) {
		@apply size-5;
	}
</style>

