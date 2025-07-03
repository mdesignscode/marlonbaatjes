<script>
	import 'animations';
	import AboutCard from './components/AboutCard.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Get to know me" />
</svelte:head>

<section class="about__container overlay">
	<ul
		class="flex h-dvh flex-col items-center justify-center overflow-y-hidden px-4 text-white group-hover:gap-2 md:flex-row md:px-6 md:py-10"
	>
		<AboutCard title="About me">
			<p class="leading-relaxed">
				A self-taught software engineer with a passion for building efficient, scalable, and
				user-friendly applications. Whether it’s crafting high-performance web apps with
				<span class="social-links font-medium">Next.js, React, and Flask</span>, optimizing backend
				logic with
				<span class="social links font-medium">SQL and Prisma</span>, or designing intuitive UI
				experiences with
				<span class="social-links font-medium">Tailwind and Material UI</span>, I thrive on
				problem-solving and clean code.
			</p>
		</AboutCard>

		<AboutCard title="What I do">
			<ul class="list-disc space-y-2 pl-4">
				<li>
					<strong>Full-Stack Development</strong> – From backend APIs (<span class="font-medium"
						>Flask, Express</span
					>) to interactive frontends (<span class="font-medium">React, Next.js</span>)
				</li>
				<li>
					<strong>Efficient State & Data Management</strong> – Leveraging tools like
					<span class="font-medium">React Query, Clerk.js, Prisma, and MySQL</span>
				</li>
				<li>
					<strong>Automation & CLI Tools</strong> – Writing
					<span class="font-medium">Python and C</span> scripts for efficiency
				</li>
				<li>
					<strong>Technical Problem-Solving</strong> – FRP bypassing, debugging, system optimizations
				</li>
				<li>
					<strong>Gaming & Community Support</strong> – Helping
					<span class="font-medium">Marvel Future Fight</span> players optimize their progression
				</li>
			</ul>
		</AboutCard>

		<AboutCard title="Miscellaneous Info">
			<em class="leading-relaxed">When I'm not coding, I'm either:</em>
			<ul class="list-disc space-y-2 pl-6">
				<li>
					Hanging out on
					<a
						class="social-links"
						href="https://www.reddit.com/u/Illustrious_Road_495/s/8BeQOR7PSX"
						aria-label="Visit Marlon's Reddit"
						target="_blank"
					>
						Reddit
					</a>, sharing knowledge, guiding new players, or learning something new about jailbreaking
					Android devices.
				</li>
				<li>Tinkering and customizing my devices</li>
				<li>
					Helping members in my community resolve technical issues, like FRP bypass (people often
					lose their unlock codes), installing and setting up Windows, etc.
				</li>
				<li>Keeping up with programming trends on YouTube</li>
				<li>Kicking back with a Cartoon, Comedy, or Sci-Fi show</li>
			</ul>
		</AboutCard>
	</ul>
</section>

<style>
	:global {
		.about__card:nth-of-type(1) {
			background-image: url(/photo_2025-04-07_16-45-48.jpg);
		}
		.about__card:nth-of-type(2) {
			background-image: url(/power-puff-girls.jpg);
		}
		.about__card:nth-of-type(3) {
			background-image: url(/photo_2025-04-07_16-45-41.jpg);
		}
	}

	.about__container {
		background-image: url(/wp2870306-wallpaper-cartoon-network.jpg);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	section.overlay::after {
		@apply bg-white/10 backdrop-blur-[3px];
	}
</style>
