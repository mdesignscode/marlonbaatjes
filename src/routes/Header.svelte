<script lang="ts">
        import "./styles/hamburger.css";
        import { page } from "$app/state";
        import Transition from 'svelte-transition';
        import { onNavigate } from "$app/navigation";
        import { isNavigating } from "globalStore";
        import allProjects from "./projects/allProjects";

        let destination = $state("");
        let active = $state(false);

        onNavigate(e => {
                if (!e.to) return;

                const { query, title } = e.to.params;

                if (query && title) destination = allProjects[query][title].title
                else destination = e.to.url.pathname;
                if (!destination) return;

                // start exit animations
                isNavigating.update(() => true);

                // close navbar
                active = false;

                return new Promise((resolve) => {
                        setTimeout(() => {
                                // end transition
                                isNavigating.update(() => false);
                                destination = "";
                                resolve();
                        }, 4000 /* Display page transition */);
                })
        });

        const options = {
                "/": "No place like home",
                "/about": "Gathering info about me",
                "/projects": "Organizing my projects",
        };
        const navOptions = new Proxy(options, {
                get(target, prop) {
                        return target[prop] ?? `Unpacking ${prop}`;
                }
        });

        const links = [
                { title: "Home", url: "/" },
                {title: "About", url: "/about" },
                { title: "Projects", url: "/projects" }
        ]
</script>

<Transition
        show={$isNavigating}
        enter="duration-[1.8s] delay-[1s]"
        enterFrom="-top-full"
        enterTo="top-0"
        leave="duration-[1s]"
        leaveFrom="top-0"
        leaveTo="top-full"
>
        <div
                class={[
                        "page-transition", "h-full w-screen absolute top-0 left-0 z-[99999]",
                        "flex flex-col justify-center items-center gap-6 text-lg",
                        "background"
                ]}
                data-destination={Object.keys(navOptions).includes(destination) ? destination : "project"}
        >
                <Transition
                        enter="duration-[1s] delay-[1.6s]"
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="duration-200 transition ease-in-out"
                        leaveFrom="opacity-100 rotate-0 scale-100"
                        leaveTo="opacity-0 scale-95"
                >
                        <img src="/marlon_avatar.png" alt="" class="w-20" />
                </Transition>
                <Transition
                        enter="duration-[1s] delay-[1.8s]"
                        enterFrom="opacity-0 translate-y-4"
                        enterTo="opacity-100 translate-y-0"
                        leave="duration-200 transition ease-in-out"
                        leaveFrom="opacity-100 rotate-0 scale-100"
                        leaveTo="opacity-0 scale-95"
                >

                        <div class="flex items-end drop-shadow text-white">
                                <p class="animate-pulse">{navOptions[destination]}</p>

                                <div class="flex gap-1 ml-1 pb-[8px]">
                                        <span class="size-1 bg-white rounded-full animate-bounce [animation-delay:0s]"></span>
                                        <span class="size-1 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                        <span class="size-1 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                        </div>
                </Transition>
        </div>
</Transition>

<header
        class="overflow-hidden transition-all items-stretch bottom-[4%] right-8 absolute z-[9999] border-coffee flex flex-row-reverse glass-effect text-white"
>
        <button
                aria-label={active ? "Close navigation" : "Open navigation"}
                class={[
                        "relative z-50 hamburger hamburger--emphatic",
                        active && "is-active",
                ]}
                type="button"
                onclick={() => (active = !active)}
        >
                <span class="hamburger-box grid place-items-center">
                        <span class="hamburger-inner"></span>
                </span>
        </button>

        <nav
                class={[
                        !active && "w-0 opacity-0",
                        "flex-1 overflow-y-hidden overflow-x-hidden",
                ]}
        >
                <ul class="flex gap-4 px-4">
                        {#each links as link, index}
                                <li
                                        style:transition-delay={(index * .15) + "s"}
                                        class={["transition-all duration-700", active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"]}
                                        aria-current={page.url.pathname === link.url
                                                ? "page"
                                                : undefined}
                                >
                                        <a href={link.url}>{link.title}</a>
                                </li>
                        {/each}
                </ul>
        </nav>
</header>

<style>
        .background[data-destination="project"] {
                @apply bg-violet-400;
        }

        .background[data-destination="/projects"] {
                @apply bg-blue-400;
        }

        .background[data-destination="/"] {
                @apply bg-vanilla;
        }

        .background[data-destination="/about"] {
                @apply bg-violet-400;
        }

        ul, li { height: 100%; }

        li { @apply grid relative place-items-center; }

        a {
                @apply relative transition-transform translate-y-0;
        }

        li::after {
                @apply transition-all absolute left-1/2 -translate-x-1 opacity-0 size-12 -z-10 translate-y-6;
                content: "";
                background-image: url("/marlon_avatar.png");
                background-size: 15px auto;
                background-repeat: no-repeat;
        }

        li[aria-current=page]::after {
                @apply opacity-100 translate-y-1;
        }

        li[aria-current=page] a {
                @apply translate-y-3;
        }

        header {
                animation: animateIn 1s ease forwards;
        }

        @keyframes animateIn {
                0% {
                        opacity: 0;
                        scale: 2;
                        filter: blur(4px);
                }

                100% {
                        opacity: 1;
                        scale: 1;
                        filter: blur(px);
                }
        }
</style>

