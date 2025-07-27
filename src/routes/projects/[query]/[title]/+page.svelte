<script lang="ts">
        import ImageCarousel from './components/ImageCarousel.svelte';
	import Visit from 'icons/Visit.svelte';
	import Github from 'icons/Github.svelte';
        import { onMount } from 'svelte';
        import { store } from 'store';
	import { scale, fly } from 'svelte/transition';
        import { flyTransition, slideTransition } from 'utils';
	import { inView } from 'inView';

        let { data } = $props();

	const itemsInView = 4;
	const viewElements = $state(Array.from({ length: itemsInView }, () => false));

        let mounted = $state(false);
        onMount(() => {
                store.isNavigating = false;

                mounted = true;
                return () => mounted = false;
        });

	const images = Object.keys(import.meta.glob('$lib/images/list_icons/*.png'));
	const [min, max] = [0, images.length - 1];
	const randInt = () => Math.floor(Math.random() * (max - min + 1)) + min;
</script>

<svelte:head>
	<title>{data.title} info page</title>
	<meta name="description" content="Project details" />
</svelte:head>

{#snippet detailBox({ condition, title, data, index }: { condition: boolean, title: string, data: string[] | string, index: number })}
	{#if condition}
                <div transition:fly={flyTransition()}>
			<h2 class="glass-effect w-fit rounded-b-none p-2">{title}</h2>

			<div class="glass-effect rounded-tl-none p-2">
				{#if Array.isArray(data)}
					<ul>
						{#each data as item, i}
							<li transition:fly={slideTransition(i * 1.15)} style={`--list-icon: url(${images[randInt()]})`}>{item}</li>
						{/each}
					</ul>
				{:else}
					<p transition:fly|global={slideTransition()}>{data}</p>
				{/if}
			</div>
		</div>
	{/if}
{/snippet}

{#snippet infoBox()}
	{@render detailBox({ title: 'About this project', data: data.description, condition: true })}
	{@render detailBox({
		title: 'This project was built using',
		data: data.techStack,
		condition: true
	})}
{/snippet}

{#snippet featureBox()}
	{@render detailBox({
		title: 'The project provides the following features',
		data: data.features,
		condition: data.features
	})}

	{@render detailBox({
		title: 'Technical details',
		data: data.technicalDetails,
		condition: data.technicalDetails
	})}
{/snippet}

{#snippet header()}
        <div transition:fly|global={flyTransition(0, -50)} class="project__head flex flex-wrap items-center gap-2">
                <p class="mr-4 text-lg">{data.title}</p>

                <div class="border rounded-md p-[2px] flex">
                        {#if data.live}
                                <a target="_blank" href={data.live} class="hidden md:inline">Visit project</a>
                                <a
                                        target="_blank"
                                        href={data.live}
                                        aria-label="View live demo"
                                        class={["md:hidden", data.source && "border-r"]}
                                >
                                        <Visit size={24} />
                                </a>
                        {/if}

                        {#if data.source}
                                <a target="_blank" href={data.source} class="hidden md:inline"
                                        >View source code</a
                                >
                                <a
                                        target="_blank"
                                        href={data.source}
                                        aria-label="View source code"
                                        class="md:hidden"
                                >
                                        <Github size={24} />
                                </a>
                        {/if}
                </div>
        </div>
{/snippet}

<section class="project relative flex h-dvh flex-col gap-4 overflow-y-hidden px-4 pt-6 text-white">
        {#if !store.isNavigating && mounted}
                <nav transition:fly={flyTransition()} aria-label="Breadcrumb">
                        <ol class="flex gap-1">
                                <li class="underline"><a href="/projects">Projects</a></li>
                                <li>/</li>
                                <li>{data.title}</li>
                        </ol>
                </nav>

                <!-- mobile view -->
                <div class="flex-1 space-y-4 overflow-y-auto pb-[12vh] md:hidden">
                        {@render header()}
                        <ImageCarousel images={data.images} />
                        {@render infoBox()}
                        {@render featureBox()}
                </div>

                <!-- desktop view -->
                <div class="hidden flex-1 md:flex flex-col gap-3">
                        {@render header()}
                        <div class="gap-4 overflow-y-hidden flex">
                                <div class="h-full w-[35%] space-y-4 overflow-y-auto">
                                        {@render infoBox()}
                                </div>

                                <div class="h-full flex-1 space-y-2 overflow-y-auto rounded px-2">
                                        <div class="w-4/6 mx-auto">
                                                <ImageCarousel images={data.images} />
                                        </div>
                                        {@render featureBox()}
                                </div>
                        </div>
                </div>
        {/if}
</section>

<style>
        :global(.project__head a svg) {
                @apply size-5;
        }

	.project > * {
		@apply relative z-20;
	}

	.project::after {
		content: '';
		@apply absolute left-0 top-0 h-screen w-screen bg-black/30 backdrop-blur-[3px];
	}

	.project__head a {
		@apply px-2 py-1;
	}

	ul li {
		background-image: var(--list-icon);
		background-size: 15px auto;
		padding-left: 20px;
		background-repeat: no-repeat;
	}
</style>

