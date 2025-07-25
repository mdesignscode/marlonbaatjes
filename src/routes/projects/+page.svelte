<script lang="ts">
	import MobileView from './components/MobileView.svelte';
	import DesktopView from './components/DesktopView.svelte';
	import allProjects from './allProjects.ts';

	// create a list to render
	// with group: clones/personal
	// and subkeys as titles
	const projectsList = Object.entries(allProjects).flatMap(([group, projects]) =>
		Object.entries(projects).map(([key, data]) => ({ group, key, ...data }))
	);
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="View projects I worked on" />
</svelte:head>

<section class="text-white" style:display="contents">
	<MobileView {projectsList}><p class="text-2xl text-white">child</p></MobileView>
	<DesktopView {projectsList}><p class="text-2xl text-white">child</p></DesktopView>
</section>

