<script>
        let show = $state(false);
        import Close from "icons/Close.svelte";
</script>

<div class="flex flex-col items-center my-4 gap-4" id="recruiters-pitch">
        <button onclick={() => (show = true)} class="glass-effect px-2 py-1"
                >A message for Recruiters</button
        >

        <div
                class={[
                        "flex flex-col p-4 w-screen h-dvh absolute top-0 left-0 glass-effect",
                        show ? "visible z-50" : "invisible -z-10",
                ]}
        >
                <div
                        class={[
                                "space-y-2 flex-1 overflow-y-auto transition-all",
                                show ? "translate-y-4" : "translate-y-0",
                        ]}
                >
                        <p>
                                I am a self-taught full-stack developer and IT
                                generalist with a hacker's curiosity and an
                                engineer's attention to detail. I've written
                                complete web applications in React, TypeScript,
                                and Node.js and maintained a Debian-based Linux
                                development environment, scripting, and
                                automation environment.
                        </p>

                        <p>
                                What sets me apart? I've spent time in the edge
                                cases — dual-booting machines, flashing Android
                                ROMs, scripting my process, and helping people
                                fix broken devices and operating systems. I'm
                                not just building with tools — I know them.
                        </p>

                        <p>
                                If you're looking for someone who's resourceful,
                                adaptable, and actually passionate about
                                technology (both hardware and software), I'd
                                love to talk about how I can bring value to your
                                team.
                        </p>
                </div>

                <button
                        class={[
                                "transition-all",
                                show
                                        ? "visible translate-y-0"
                                        : "invisible translate-y-4",
                        ]}
                        onclick={() => (show = false)}><Close /></button
                >
        </div>
</div>
