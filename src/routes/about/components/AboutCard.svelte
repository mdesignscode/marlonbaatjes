<script>
        import "animations";
        let { children, title } = $props();
        import { isNavigating } from "globalStore";
</script>

<li class={["about__card overlay group", $isNavigating ? "animOut" : "animIn"]}>
        <h2 class="text-lg">{title}</h2>

        <div class="about__card-slot flex-1 duration-700 truncate group-hover:overflow-auto group-hover:whitespace-normal visible translate-y-4 group-hover:visible group-hover:translate-y-[0]">
                {@render children()}
        </div>
</li>

<style>
        .about__card {
                @apply md:w-[25%] w-5/6 transition-all h-[calc((100dvh/3)-5%)] md:h-[70%] p-4 transition-all overflow-y-hidden flex flex-col hover:shadow-sm shadow-white opacity-0;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
        }

        .animIn {
                animation: fadeInUp 1s ease forwards;
        }

        .animOut {
                animation: fadeOutDown 1s ease both;
        }

        .about__card:hover {
                @apply scale-[1.1] z-[99] my-4 md:my-0 md:mx-6 rounded-md;
        }

        :global {
                .about__card:hover + *,
                .about__card:hover + * + *,
                .about__card:has(+ *:hover),
                .about__card:has(+ * + *:hover) {
                        filter: brightness(0.6);
                }

                .about__card.animIn:nth-of-type(1) { animation-delay: .5s; }
                .about__card.animIn:nth-of-type(2) { animation-delay: 1s; }
                .about__card.animIn:nth-of-type(3) { animation-delay: 1.5s; }

                .about__card li:not(:first-child) {
                        @apply invisible;
                }

                .about__card li:first-child, .about__card p {
                        @apply relative;
                }

                .about__card li:first-child::after, .about__card p::after {
                        content: "...";
                        @apply absolute -bottom-6 -left-2 transition-all text-xl;
                }

                .about__card p::after {
                        @apply left-0;
                }

                .about__card:hover li:first-child::after, .about__card:hover p::after {
                        opacity: 0;
                }

                .about__card:hover li:not(:first-child) {
                        @apply visible;
                }

                .social-links {
                        @apply text-coffee hover:text-honey-gold transition-colors;
                }

                .animOut:nth-of-type(2) { animation-delay: .4s; }
                .animOut:nth-of-type(3) { animation-delay: .8s; }
        }
</style>

