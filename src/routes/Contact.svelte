<script lang="ts">
        import { LinkedIn, Reddit, WhatsApp, Github, CodePen, Connect } from "icons";

        let showingLinks = $state(false);

        const contactLinks = [
                {
                        link: "https://github.com/mdesignscode",
                        label: "visit developer's github profile",
                        icon: Github
                },
                {
                        link: "https://www.linkedin.com/in/marlonbaatjes",
                        label: "Visit Marlon's LinkedIn Profile",
                        icon: LinkedIn
                },
                {
                        link: "https://wa.me/+27790226755",
                        label: "Chat on WhatsApp",
                        icon: WhatsApp
                },
                {
                        link: "https://codepen.io/Marlon-B",
                        label: "View Marlon's CodePen's",
                        icon: CodePen
                },
                {
                        link: "https://www.reddit.com/u/Illustrious_Road_495/s/8BeQOR7PSX",
                        label: "Visit Marlon's Reddit profile",
                        icon: Reddit
                }
        ]
</script>

<section class="absolute right-0 top-1/2 -translate-y-1/2 z-[9999] p-2 contact__container">
        <span class="glass-effect w-12 border contact__container-trigger ">
                <Connect />
        </span>

        <ul class={["flex hidden", showingLinks ? "":""]}>
                {#each contactLinks as contact}
                        <li class="contact-link">
                                <a
                                        class="size-10"
                                        aria-label={contact.label}
                                        href={contact.link}
                                        target="_blank">
                                        <svelte:component this={contact.icon} />
                                </a>
                        </li>
                {/each}
        </ul>
</section>

<style>
        :global {
                .contact-link {
                        @apply size-12;
                }

                .contact__container-trigger svg {
                        @apply size-16;
                }
        }
</style>

