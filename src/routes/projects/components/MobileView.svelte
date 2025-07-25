<script lang="ts">
	import 'animations';
	import { scale, fly } from 'svelte/transition';
	import { inView } from 'inView';
	import { store } from 'store';
	import { createDisclosure } from 'svelte-headlessui';
        import { flyTransition, slideTransition } from 'utils';
        import { onMount } from 'svelte';

        let mounted = $state(false);
        onMount(() => {
                store.isNavigating = false;

                mounted = true;
                return () => mounted = false;
        });
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
	const filterStyles = 'flex gap-4 glass-effect accent w-fit p-2 mx-auto items-center';
</script>

<div class="projects flex h-dvh flex-col md:hidden">
        {#if mounted && !store.isNavigating}
	<div class="sticky top-2 flex flex-col gap-2">
		<button
			class={[
				'glass-effect accent mx-auto mt-4 w-fit p-2',
			]}
			use:filters.button
                        transition:fly={flyTransition()}
		>
			{#if $filters.expanded}
				Hide filters
			{:else}
				Show filters
			{/if}
		</button>

		{#if $filters.expanded}
			<div class={filterStyles} use:filters.panel transition:fly={flyTransition()}>
				<p>Project type:</p>

				<select
					id="filter"
					bind:value={typeFilter.key}
					class="glass-effect accent p-1"
					onchange={handleSelectChangeGroup}
				>
					{#each Object.values(filterOptions) as option}
						<option value={option.key}>{option.value}</option>
					{/each}
				</select>
			</div>

			<div class={filterStyles} use:filters.panel transition:fly={flyTransition(200)}>
				<p>Language/Framework:</p>

				<select
					id="filter"
					bind:value={languageFilter}
					class="glass-effect accent p-1"
					onchange={handleSelectChangeLang}
				>
					{#each stacks as stack}
						<option value={stack}>{stack}</option>
					{/each}
				</select>
			</div>
		{/if}
	</div>
        {/if}

	<div
		class="projects__container mt-8 flex flex-1 flex-col items-center gap-2 overflow-y-auto pb-4 w-full"
	>
		{#each filteredProjects as project, i}
                        <div use:inView={() => (projectCards[i] = true)} class="w-5/6 aspect-video">
                                {#if projectCards[i] && (!store.isNavigating && mounted)}
					<div
						in:scale
                                                out:fly={slideTransition(0, !(i % 2) ? -100 : 100)}
						class={['w-full space-y-2 glass-effect accent p-4']}
					>
						<div class="flex justify-between">
							<p>{project.title}</p>

							<a
								class="rounded-[4px] border border-white px-2"
								href={`/projects/${project.group}/${project.key}`}>View details</a
							>
						</div>
						<img
							class="w-full aspect-video rounded-md"
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

