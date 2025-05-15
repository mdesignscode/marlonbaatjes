<script lang="ts">
        import { currentIndex } from "./store.ts";
        import Close from "icons/Close.svelte";
        import CoverArtDesigns from "./CoverArtDesigns.svelte";
        const images = import.meta.glob("$lib/images/cover_art/*.jpg", { eager: true });
        const imagesPaths = Object.values(images).map(image => image.default)

        import Transition from 'svelte-transition'
        let { projectsList } = $props();
        import ArrowIcon from "./icons/ArrowIcon.svelte";

        const rowOneProjects = projectsList.filter(({ key }) => ["bmwi5", "qrates", "estore", "drum-machine", "random-quotes-machine"].includes(key));
        const mainProjects = projectsList.filter(({ isFeatured }) => isFeatured);
        const rowTwoProjects = projectsList.filter(({ key }) => ["amazon", "game-info", "airbnb", "markdown-previewer", "pomodoro-timer", "javascript-calculator"].includes(key));

        let showingDesigns = $state(false);
        let rowOneCurrent = $state(0);
        let rowTwoCurrent = $state(0);
        let mainCurrent = $state(0);

        const navigationHandler = ({ direction, container }: { direction: "left" | "right", container: "row" | "main" }) => {
                const rowOneLen = rowOneProjects.length - 1;
                const rowTwoLen = rowTwoProjects.length - 1;
                const mainLen = mainProjects.length - 1;

                const isLeft = direction === "left";

                if (container === "row") {
                        rowOneCurrent = rowOneCurrent === 0
                                ? (isLeft ? rowOneLen : 1)
                                : rowOneCurrent === rowOneLen
                                        ? (isLeft ? rowOneLen - 1 : 0)
                                        : rowOneCurrent + (isLeft ? -1 : 1);

                        rowTwoCurrent = rowTwoCurrent === 0
                                ? (!isLeft ? rowTwoLen : 1)
                                : rowTwoCurrent === rowTwoLen
                                        ? (!isLeft ? rowTwoCurrent - 1 : 0)
                                        : rowTwoCurrent + (isLeft ? 1 : -1);
                } else {
                        mainCurrent = mainCurrent === 0
                                ? (isLeft ? mainLen : 1)
                                : mainCurrent === mainLen
                                        ? (isLeft ? mainCurrent - 1 : 0)
                                        : mainCurrent + (isLeft ? -1 : 1)
                }
        };

</script>

{#snippet projectBox({ project, isRow, show })}
        <Transition
                {show}
		enter="duration-[400ms]"
		enterFrom="opacity-0 rotate-[-120deg] scale-50"
		enterTo="opacity-100 rotate-0 scale-100"
		leave="duration-200 transition ease-in-out"
		leaveFrom="opacity-100 rotate-0 scale-100"
		leaveTo="opacity-0 scale-95"
	>
                <div
                        class={["p-2 pt-8 flex flex-col gap-4 bg-white/30 relative backdrop-blur-sm overflow-x-hidden rounded-md", isRow ? "flex-1" : "w-[80%] mx-auto"]}
                >
                        <div class="flex justify-between py-1 px-2 w-full fixed left-0 top-0 bg-white/20 backdrop-blur-sm">
                                <p>{project.title}</p>

                                <a
                                        class="border-white border px-2 rounded-[4px]"
                                        href={`/projects/${project.group}/${project.key}`}
                                >View details</a>
                        </div>
                        <img class="rounded-md" src={project.preview} alt={`${project.title} preview`} />
                        <p>{project.summary}</p>
                </div>
	</Transition>
{/snippet}

{#snippet navigationBox({text, leftHandler, rightHandler})}
        <div class="flex rounded-md items-center justify-around bg-white/20 backdrop-blur-sm">
                <button onclick={leftHandler}>
                        <ArrowIcon direction="-rotate-90" />
                </button>
                <p>{text}</p>
                <button onclick={rightHandler}>
                        <ArrowIcon direction="rotate-90" />
                </button>
        </div>
{/snippet}

<div class="projects h-screen relative hidden md:flex flex-col">
        <div class="absolute z-0 size-full background-black/10 backdrop-blur-[1px]"></div>
        <div class={showingDesigns ? "opacity-100 z-20" : "opacity-0 -z-20"}>
                <div class="absolute top-0 left-0 bg-black/50 backdrop-blur-[2px] w-screen h-screen transition-all"></div>
                <img src={images[$currentIndex]} alt="" class={["absolute z-30 top-10 left-10 w-[40%] rounded-sm transition-all", showingDesigns ? "opacity-100" : "opacity-0"]} />
                <p class="text-2xl relative z-[99]">{$currentIndex}</p>
        </div>

        <div class="projects__container flex flex-1 overflow-hidden p-4">
                <div class="flex flex-col gap-4 w-2/5 p-4">
                        {#each rowOneProjects as project, index}
                                {@render projectBox({project, isRow: true, show: index === rowOneCurrent})}
                        {/each}

                        {@render navigationBox({ text: "Navigate more projects", leftHandler: () => navigationHandler({ direction: "left", container: "row" }), rightHandler: () => navigationHandler({ direction: "right", container: "row" }) })}

                        {#each rowTwoProjects as project, index}
                                {@render projectBox({project, isRow: true, show: index === rowTwoCurrent})}
                        {/each}
                </div>
                <div class="flex-1 flex flex-col main__container">
                        <div class="flex-1 py-4 px-10 flex flex-col gap-4 relative justify-center">
                                <!-- {@render navigationBox({ text: "Navigate my top projects", leftHandler: () => navigationHandler({ direction: "left", container: "main" }), rightHandler: () => navigationHandler({ direction: "right", container: "main" }) })} -->
                                <button class="absolute left-0 top-1/2 -translate-y-1/2" onclick={() => navigationHandler({ container: "main", direction: "left"})}>
                                        <ArrowIcon direction="-rotate-90" />
                                </button>

                                {#each mainProjects as project, index}
                                        {@render projectBox({project, isRow: false, show: index === mainCurrent})}
                                {/each}

                                <button class="absolute right-0 top-1/2 -translate-y-1/2" onclick={() => navigationHandler({ direction: "right", container: "main"})}>
                                        <ArrowIcon direction="rotate-90" />
                                </button>
                        </div>

                        <div class="h-[40%] p-4 flex flex-col items-center gap-2 relative z-30">
                                <button class={["px-2 py-1 mx-auto", !showingDesigns && "bg-white/10 backdrop-blur-sm hover:border-white rounded-lg transition-border border-transparent border"]} onclick={() => showingDesigns = !showingDesigns}>
                                        {#if !showingDesigns}View some of my graphic arts
                                        {:else}<Close />{/if}
                                </button>

                                <div class="flex justify-center rounded-md py-2">
                                        <CoverArtDesigns currentIndex={currentIndex} showingDesigns={showingDesigns} images={images} />
                                </div>
                        </div>
                </div>
        </div>
</div>

<style>
        .projects {
                background-image: url("/wp11540818-star-trek-prodigy-wallpapers.jpg");
        }

        /*.project__box {
                animation-duration: 1s;
                animation-timing-function: linear;
                animation-fill-mode: forwards;
        }

        .project__box.right {
                animation-name: fadeInLeft;
        }

        .project__box.left {
                animation-name: fadeInRight;
        }*/
</style>

