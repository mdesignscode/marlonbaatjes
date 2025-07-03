<script lang="ts">
	import Visit from 'icons/Visit.svelte';
	import Github from 'icons/Github.svelte';

	let { data } = $props();

	const images = Object.keys(import.meta.glob('$lib/images/list_icons/*.png'));
	const [min, max] = [0, images.length - 1];
	const randInt = () => Math.floor(Math.random() * (max - min + 1)) + min;
</script>

<svelte:head>
	<title>{data.title} info page</title>
	<meta name="description" content="Project details" />
</svelte:head>

{#snippet detailBox({ condition, title, data })}
	{#if condition}
		<div class="">
			<h2 class="glass-effect w-fit rounded-b-none p-2">{title}</h2>

			<div class="glass-effect rounded-tl-none p-2">
				{#if Array.isArray(data)}
					<ul>
						{#each data as item}
							<li style={`--list-icon: url(${images[randInt()]})`}>{item}</li>
						{/each}
					</ul>
				{:else}
					<p>{data}</p>
				{/if}
			</div>
		</div>
	{/if}
{/snippet}

{#snippet titleBox()}
	<div class="project__head flex flex-wrap items-center gap-2">
		<p class="mr-4 text-lg">{data.title}</p>

		{#if data.live}
			<a target="_blank glass-effect" href={data.live} class="hidden md:inline">Visit project</a>
			<a
				target="_blank glass-effect"
				href={data.live}
				aria-label="View live demo"
				class="md:hidden"
			>
				<Visit size={24} />
			</a>
		{/if}

		{#if data.source}
			<a target="_blank glass-effect" href={data.source} class="hidden md:inline"
				>View source code</a
			>
			<a
				target="_blank glass-effect"
				href={data.source}
				aria-label="View source code"
				class="md:hidden"
			>
				<Github size={24} />
			</a>
		{/if}
	</div>
	{@render detailBox({ title: 'About this project', data: data.description, condition: true })}
	{@render detailBox({
		title: 'This project was built using',
		data: data.techStack,
		condition: true
	})}
{/snippet}

{#snippet infoBox()}
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

<section class="project relative flex h-dvh flex-col gap-4 overflow-y-hidden px-4 pt-6 text-white">
	<nav aria-label="Breadcrumb">
		<ol class="flex gap-1">
			<li class="underline"><a href="/projects">Projects</a></li>
			<li>/</li>
			<li>{data.title}</li>
		</ol>
	</nav>

	<div class="flex-1 space-y-4 overflow-y-auto pb-[12vh] md:hidden">
		{@render titleBox()}
		{@render infoBox()}
	</div>

	<div class="hidden flex-1 gap-4 overflow-y-hidden md:flex">
		<div class="h-full w-[35%] space-y-4 overflow-y-auto">
			{@render titleBox()}
		</div>

		<div class="h-full flex-1 space-y-2 overflow-y-auto rounded px-2">
			{@render infoBox()}
		</div>
	</div>
</section>

<style>
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

	section {
		background-image: url('/wp2279368-yu-gi-oh-wallpapers.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
</style>
