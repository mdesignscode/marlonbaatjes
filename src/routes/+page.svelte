<script lang="ts">
        import "animations";
        import { ImageLibrary, MarlonSVG, TypeEffect, RecruitersPitch } from "components";
        import { isNavigating } from "globalStore";
        import { inView } from "inView";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Web Developer Portfolio [Full Stack|Web Dev|Javascript|Python|Software Engineer]" />
</svelte:head>

<section class="text-coffee h-dvh overflow-y-hidden relative">
        <ImageLibrary />

        <div class="home h-full overflow-y-auto flex flex-col gap-4 md:justify-around">
                <!-- Greeting section -->
                <div class="relative flex gap-2 md:mt-8 mt-4 mb-2 md:px-4 w-full justify-around items-center hero__greeting">
                        <div class="flex flex-col items-center">
                                <div class="flex flex-col justify-center w-fit relative">
                                        <div class="text-xl text-vanilla drop-shadow flex gap-1">
                                                <h1
                                                        style:animation-delay="1.4s"
                                                        style:animation-duration="1.6s"
                                                        class={[$isNavigating ? "animFadeOutUp" : "animFadeInDown"]}>
                                                        Hi there, </h1>
                                                <h1
                                                        class="animFadeIn pacity-0"
                                                        style:animation-delay="2.8s">
                                                        I'm</h1>
                                        </div>
                                        <span class={["transition-opacity duration-700", $isNavigating && "opacity-0"]}><MarlonSVG /></span>

                                        <span class={["typewriter", $isNavigating && "animWidth"]}><TypeEffect /></span>
                                </div>

                                <div class="flex flex-col w-5/6 md:w-4/6 text-white home__intro">
                                        <p
                                                style:animation-delay="4.2s"
                                                class={["my-4 -ml-2 glass-effect p-2 accent transition-all delay-500 duration-500", $isNavigating ? "animFadeOutLeft" : "animFadeInLeft"]}>A self-taught software engineer and IT specialist from South Africa. I’m passionate about building intuitive software and solving technical problems.</p>

                                        <p
                                                style:animation-delay="4.2s"
                                                class={["text-right -mr-2 glass-effect p-2 accent transition-all duration-500", $isNavigating ? "animFadeOutRight" : "animFadeInRight"]}>By day, I'm knee-deep in code, crafting full-stack apps with tools like TypeScript, React, and Next.js. By night, I’m the go-to tech guy in my community — whether it's fixing broken systems, rooting Android phones, or bypassing FRP locks.</p>
                                </div>
                        </div>
                </div>

                <div class={{ "animFadeOutDown": $isNavigating }}><RecruitersPitch /></div>

                <footer use:inView={"animFooter"} class={["glass-effect mt-auto pb-[12vh] pt-2 flex flex-col items-center text-white text-center accent text-sm", $isNavigating ? "animFadeOutDown" : "opacity-0"]}>
                        <p>Terminal's open. Neovim’s ready. Let's debug the world.</p>
                        <p>© {new Date().getFullYear()} Marlon Baatjes | Always learning, always building.</p>
                </footer>
        </div>
</section>

<style>
        .accent { @apply bg-honey-gold/30; }

        .typewriter {
                @apply absolute bottom-0 -right-2;
        }

        @keyframes animFooter {
                from {
                        height: 0;
                        opacity: 0;
                }
                to {
                        height: auto;
                        opacity: 1;
                }
        }

        :global {
                #recruiters-pitch button {
                        animation: fadeInUp 1s ease 3.8s both;
                }

                .animFooter {
                        animation: animFooter 7s ease both;
                }
        }
</style>

