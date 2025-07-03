<script lang="ts">
	import 'animations';
	import { slide, scale } from 'svelte/transition';
	import { inView } from 'inView';
	import { isNavigating } from 'globalStore';
	import { createDisclosure } from 'svelte-headlessui';

	let { projectsList } = $props();

	const filters = createDisclosure({ expanded: false });

	let projectCards = $state(projectsList.map((p) => false));

	// filter by project type
	const filterOptions = {
		all: { key: 'all', value: 'All projects' },
		personal: { key: 'personal', value: 'Personal projects' },
		clones: { key: 'clones', value: 'Website clones' },
		fcc: { key: 'fcc', value: 'Projects by FreeCodeCamp' }
	};

	// filter by tech stack
	const stacks = Array.from(new Set(projectsList.flatMap((p) => p.techStack).sort()));
	stacks.unshift('All');

	let typeFilter = $state(filterOptions.all);
        let languageFilter = $state('All');
	let filteredProjects = $state(projectsList);

	const handleSelectChangeGroup = (event) => {
                const value = event.target.value;
                typeFilter = filterOptions[value];
                languageFilter = 'All';
		filteredProjects = projectsList.filter(({ group }) =>
			value === 'all' ? true : group === value
		);
	};
	const handleSelectChangeLang = (event) => {
                const value = event.target.value;
                languageFilter = value;
                typeFilter = filterOptions.all;
		filteredProjects = projectsList.filter(({ techStack }) =>
			value === 'All' ? true : techStack.includes(value)
		);
	};
	const filterStyles = 'flex gap-4 glass-effect w-fit p-2 mx-auto items-center';
</script>

<div class="projects flex h-dvh flex-col md:hidden">
	<div class="sticky top-2 flex flex-col gap-2">
		<button
			class={[
				'glass-effect mx-auto mt-4 w-fit p-2',
				$isNavigating ? 'animFadeOutUp' : 'animFadeInDown'
			]}
			use:filters.button
		>
			{#if $filters.expanded}
				Hide filters
			{:else}
				Show filters
			{/if}
		</button>

		{#if $filters.expanded}
			<div class={filterStyles} use:filters.panel transition:slide>
				<p>Project type:</p>

				<select
					id="filter"
					bind:value={typeFilter.key}
					class="glass-effect p-1"
					onchange={handleSelectChangeGroup}
				>
					{#each Object.values(filterOptions) as option}
						<option value={option.key}>{option.value}</option>
					{/each}
				</select>
			</div>

			<div class={filterStyles} use:filters.panel transition:slide={{ delay: 200 }}>
				<p>Language/Framework:</p>

				<select
					id="filter"
					bind:value={languageFilter}
					class="glass-effect p-1"
					onchange={handleSelectChangeLang}
				>
					{#each stacks as stack}
						<option value={stack}>{stack}</option>
					{/each}
				</select>
			</div>
		{/if}
	</div>

	<div
		class="projects__container mt-8 flex flex-1 flex-col items-center gap-2 overflow-y-auto pb-4 w-full"
	>
		{#each filteredProjects as project, i}
                        <div use:inView={() => (projectCards[i] = true)} class="w-5/6 aspect-video">
				{#if projectCards[i]}
					<div
						transition:scale
						class={['w-full space-y-2 rounded-md bg-white/30 p-4 backdrop-blur-sm']}
					>
						<div class="flex justify-between">
							<p>{project.title}</p>

							<a
								class="rounded-[4px] border border-white px-2"
								href={`/projects/${project.group}/${project.key}`}>View details</a
							>
						</div>
						<img
							class="aspect-video rounded-md"
							src={project.preview}
							alt={`${project.title} preview`}
						/>
						<p>{project.summary}</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.projects {
		background-image: url('/wp14543200-minion-4k-mobile-wallpapers.jpg');
	}

	.projectExit:nth-child(odd) {
		animation: fadeOutRight 0.8s ease both;
	}

	.projectExit:nth-child(even) {
		animation: fadeOutLeft 0.6s ease both;
	}

	:global(.projectEnter) {
		animation: fadeInLeft 1.2s ease both;
	}

	@keyframes fadeInLeft {
		from {
			opacity: 0;
			transform: translateX(-50px);
		}

		to {
			opacity: 1;
			transform: translateX(0px);
		}
	}
</style>

