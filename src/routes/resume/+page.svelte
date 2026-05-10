<script lang="ts">
	import { Github, LinkedIn, Portfolio, Mail } from 'icons';
	import allProjects from '../projects/allProjects';

	const featuredProjects = Object.entries(allProjects)
		.flatMap(([group, projects]) =>
			Object.entries(projects).map(([key, data]) => ({ group, key, ...data }))
		)
		.filter((p) => p.isFeatured && p.key !== "spots");
	const { spots } = allProjects.personal

	const skills = {
		Languages: ['TypeScript', 'JavaScript', 'Python'],
		Frontend: [
			'SvelteKit',
			'React',
			'Next.js',
			'Tailwind CSS',
			'Responsive Design',
			'Accessibility (WCAG)'
		],
		Backend: [
			'Flask',
			'RESTful API Design',
			'System Design',
			'Caching & Performance Optimization'
		],
		Database: ['Sequelize (SQL)', 'Data Modeling'],
		Concepts: [
			'REST APIs',
			'Caching',
			'Data Pipelines',
			'Fault Tolerance',
			'Performance Optimization'
		],
		Other: ['Git / GitHub', 'Linux']
	};

	const urlStyles = 'text-blue-600 underline underline-offset-2';
	const titleStyles = 'border-b pb-1 text-lg font-semibold';
	const portfolioUri = 'https://marlonbaatjes.is-a.dev/';
</script>

<section id="resume" class="mx-auto space-y-2 bg-white px-8 py-10 font-sans text-black">
	<section class="border-b pb-2">
		<h1 class="text-xl font-bold">
			Marlon Baatjes <span class="text-lg">- Full Stack Developer</span>
		</h1>
		<section class="contact-info mt-2 flex-wrap flex items-center gap-4">
			<div class="flex items-center gap-1">
				<LinkedIn />
				<a href="https://www.linkedin.com/in/marlonbaatjes" class={urlStyles}
					>linkedin.com/in/marlonbaatjes</a
				>
			</div>
			<div class="flex items-center gap-1">
				<Github />
				<a href="https://github.com/mdesignscode" class={urlStyles}>github.com/mdesignscode</a>
			</div>
			<div class="flex items-center gap-1">
				<Portfolio />
				<a href={portfolioUri} class={urlStyles}>marlonbaatjes.is-a.dev</a>
			</div>
			<div class="flex items-center gap-1">
				<Mail />
				<a href="mailto:marlonbaatjes62@gmail.com" class={urlStyles}>marlonbaatjes62@gmail.com</a>
			</div>
		</section>
	</section>

	<p class="border-b-2 pb-2 text-sm">
		Full-stack developer focused on building practical, end-to-end software systems using JavaScript/TypeScript and Python.

		Developed and distributed a music management tool (Spots) from a CLI application into a packaged Python library (PyPI), emphasizing performance, reliability, and user experience through caching, retry logic, and automation workflows.

		Experience designing RESTful APIs, building responsive frontends, and architecting systems that solve real-world problems. Strong focus on clean architecture, maintainability, and performance-driven development.
	</p>

	<div class="flex gap-4">
		<div class="flex-[0.35] border-r pr-4">
			<section>
				<h2 class={titleStyles}>Skills</h2>

				<section class="mt-2 flex flex-col">
					{#each Object.keys(skills) as category}
						<h3 class="mt-2 text-base">{category}</h3>

						<ul class="mt-2 flex list-inside list-disc flex-col gap-2 text-xs text-gray-600 pl-2">
							{#each skills[category as keyof typeof skills] as skill}
								<li>{skill}</li>
							{/each}
						</ul>
					{/each}
				</section>
			</section>
		</div>

		<div class="flex flex-1 flex-col gap-4">
			<section>
				<h2 class={titleStyles}>Project Experience</h2>

        <section class="border-b-2 pb-4 mt-2">
					<div>
						<div class="flex items-center gap-3">
							<h3 class="font-semibold text-base">{spots.title}</h3>
							<a
								class="text-xs italic text-gray-400 underline underline-offset-2"
								href={spots.live}>more details</a
							>
						</div>
						<p class="text-sm text-gray-700">{spots.description}</p>
						<ul class="list-disc my-2 pl-4 text-gray-600 text-sm">
							<li>Built and published a Python package installable via <a href="https://pypi.org/project/spots-cli/">pip</a></li>
							<li>Implemented caching system to eliminate redundant API requests</li>
							<li>Designed a CLI-based workflow to process and download entire playlists efficiently</li>
							<li>Automated music download and metadata embedding workflows</li>
						</ul>
						<ul class="mt-1 flex flex-wrap gap-2 pr-2 text-xs">
							{#each spots.techStack as tech}
								<li class="rounded bg-blue-100 px-1 py-0.5 text-blue-800">{tech}</li>
							{/each}
						</ul>
					</div>
        </section>
			</section>

			<section>
				<h2 class={titleStyles}>Highlighted Projects</h2>

				<section class="mt-2 space-y-4">
					{#each featuredProjects as project}
						<div>
							<div class="flex items-center gap-3">
								<h3 class="font-semibold text-base">{project.title}</h3>
								<a
									class="text-xs italic text-gray-400 underline underline-offset-2"
									href={`${portfolioUri}projects/${project.group}/${project.key}`}>more details</a
								>
							</div>
							<p class="text-sm text-gray-700">{project.description}</p>
								
							<ul class="mt-1 flex flex-wrap gap-2 pr-2 text-xs">
								{#each project.techStack as tech}
									<li class="rounded bg-blue-100 px-1 py-0.5 text-blue-800">{tech}</li>
								{/each}
							</ul>
						</div>
					{/each}
				</section>
			</section>

			<section>
				<h2 class={titleStyles}>Certifications</h2>
				<ul class="mt-2 list-inside list-disc text-xs text-gray-700">
					<li>Google IT Support Professional Certificate</li>
					<li>FreeCodeCamp Responsive Web Design</li>
					<li>FreeCodeCamp JavaScript Algorithms and Data Structures</li>
					<li>FreeCodeCamp Front End Development Libraries</li>
				</ul>
			</section>
		</div>
	</div>
</section>

<style>
	#resume {
		font-size: 12px;
		width: 210mm;
		height: 297mm;
	}

	:global(.contact-info svg) {
		@apply size-4;
	}
</style>

