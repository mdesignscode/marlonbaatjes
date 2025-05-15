<script lang="ts">
        import "animations";
        import { inView } from "inView";
        import { isNavigating } from "globalStore";
        let { projectsList } = $props();

        const filterOptions = {
                all: { key: "all", value: "All projects" },
                personal: { key: "personal", value: "Personal projects" },
                clones: { key: "clones", value: "Website clones" },
                fcc: { key: "fcc", value: "Projects by FreeCodeCamp" }
        };

        let filter = $state(filterOptions.all);
        let filteredProjects = $state(projectsList);

        const handleSelectChange = (event) => {
                const value = event.target.value;
                filteredProjects = projectsList.filter(({ group }) => value === "all" ? true : group === value);
        };
</script>

<div class="projects flex flex-col h-dvh md:hidden">
        <div class={["flex gap-4 glass-effect w-fit p-2 mx-auto items-center sticky top-4 z-20", $isNavigating ? "animFadeOutUp" : "animFadeInDown"]}>
                <p>Filter:</p>

                <select id="filter" value={filter.key} class="glass-effect p-1" onchange={handleSelectChange}>
                        {#each Object.values(filterOptions) as option}
                                <option value={option.key} key={option.key}>{option.value}</option>
                        {/each}
                </select>
        </div>

        <div class="flex flex-1 overflow-y-auto mt-8 flex-col gap-2 items-center pb-4 projects__container">
                {#each filteredProjects as project}
                        <div use:inView={"projectEnter"} class={["bg-white/30 space-y-2 backdrop-blur-sm w-5/6 rounded-md p-4", $isNavigating ? "projectExit" : "opacity-0"]}>
                                <div class="flex justify-between">
                                        <p>{project.title}</p>

                                        <a
                                                class="border-white border px-2 rounded-[4px]"
                                                href={`/projects/${project.group}/${project.key}`}
                                        >View details</a>
                                </div>
                                <img class="rounded-md" src={project.preview} alt={`${project.title} preview`} />
                                <p>{project.summary}</p>
                        </div>
                {/each}
        </div>
</div>

<style>
        .projects {
                background-image: url("/wp14543200-minion-4k-mobile-wallpapers.jpg");
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

