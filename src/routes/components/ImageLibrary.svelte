<script lang="ts">
        import "animations";
        const images = import.meta.glob("$lib/images/cover_art/*.jpg", {
                eager: true,
        });
        const imagesPaths = Object.values(images).map((image) => image.default);
</script>

<div
        class="overflow-hidden absolute h-dvh w-screen flex z-0 top-0 left-0 image-library"
        aria-hidden="true"
>
        <div class="relative size-full">
                <div
                        class="absolute w-full h-1/2 clip-right flex flex-wrap opacity-60 blur-[2px]"
                >
                        {#each imagesPaths as src, index}
                                <img
                                        {src}
                                        alt=""
                                        class="w-[25%] md:w-[15%] aspect-square opacity-0 animFadeInDown"
                                        style:animation-delay={(index * 0.15) + "s"}
                                />
                        {/each}
                </div>
                <div
                        class="absolute h-2/4 w-full clip-left bottom-0 right-0 flex flex-wrap blur-[2px] opacity-70"
                >
                        {#each imagesPaths.reverse() as src, index}
                                <img
                                        {src}
                                        alt=""
                                        class="w-[25%] md:w-[15%] aspect-square opacity-0 animFadeInUp"
                                        style:animation-delay={(index * 0.15) + "s"}
                                />
                        {/each}
                </div>
        </div>
</div>

<style>
        .clip-left {
                clip-path: polygon(0 100%, 100% 100%, 100% 0%);
        }

        .clip-right {
                clip-path: polygon(0 0, 100% 0, 0 100%);
        }
</style>

