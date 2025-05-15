<script lang="ts">
        import Visit from "icons/Visit.svelte";
        import Github from "icons/Github.svelte";

        let { data } = $props();

        const images = Object.keys(import.meta.glob("$lib/images/list_icons/*.png"));
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
                        <h2 class="glass-effect w-fit p-2 rounded-b-none">{title}</h2>

                        <div class="glass-effect p-2 rounded-tl-none">
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
        <div class="flex gap-2 project__head items-center flex-wrap">
                <p class="mr-4 text-lg">{data.title}</p>

                {#if data.live}
                        <a target="_blank glass-effect" href={data.live} class="hidden md:inline">Visit project</a>
                        <a target="_blank glass-effect" href={data.live} aria-label="View live demo" class="md:hidden">
                                <Visit size={24} />
                        </a>
                {/if}

                {#if data.source}
                        <a target="_blank glass-effect" href={data.source} class="hidden md:inline">View source code</a>
                        <a target="_blank glass-effect" href={data.source} aria-label="View source code" class="md:hidden">
                                <Github size={24} />
                        </a>
                {/if}
        </div>
        {@render detailBox({ title: "About this project", data: data.description, condition: true })}
        {@render detailBox({ title: "This project was built using", data: data.techStack, condition: true })}
{/snippet}

{#snippet infoBox()}
        {@render detailBox({ title: "The project provides the following features", data: data.features, condition: data.features })}

        {@render detailBox({ title: "Technical details", data: data.technicalDetails, condition: data.technicalDetails })}
{/snippet}

<section class="project gap-4 px-4 pt-6 overflow-y-hidden flex flex-col relative text-white h-dvh">
        <nav aria-label="Breadcrumb">
                <ol class="flex gap-1">
                        <li class="underline"><a href="/projects">Projects</a></li>
                        <li>/</li>
                        <li>{data.title}</li>
                </ol>
        </nav>

        <div class="md:hidden space-y-4 flex-1 overflow-y-auto pb-[12vh]">
                {@render titleBox()}
                {@render infoBox()}
        </div>

        <div class="md:flex gap-4 hidden overflow-y-hidden flex-1">
                <div class="w-[35%] space-y-4 h-full overflow-y-auto">
                        {@render titleBox()}
                </div>

                <div class="flex-1 px-2 rounded space-y-2 h-full overflow-y-auto">
                        {@render infoBox()}
                </div>
        </div>
</section>

<style>
        .project > * { @apply relative z-20; }

        .project::after {
                content: "";
                @apply absolute w-screen h-screen top-0 left-0 bg-black/30 backdrop-blur-[3px];
        }

        .project__head a {
                @apply py-1 px-2;
        }

        ul li {
                background-image: var(--list-icon);
                background-size: 15px auto;
                padding-left: 20px;
                background-repeat: no-repeat;
        }

        section{
                background-image: url("/wp2279368-yu-gi-oh-wallpapers.jpg");
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
        }
</style>

