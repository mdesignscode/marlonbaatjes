<script lang="ts">
	import allProjects from '../projects/allProjects';

	// ── Tailor here ────────────────────────────────────────────────────────────
	// Edit the role, the summary, the skills and which projects show for each application.
	const role = 'Full-stack developer';

	const summary = [
		'Self-taught full-stack developer building practical, end-to-end software in TypeScript and Python.',
		'Took my music tool Spots from a Flask API with a React front end to a Python package on PyPI, with caching, retry logic and automated download workflows for speed and reliability.',
		'Comfortable designing REST APIs, building responsive, accessible front ends and structuring code that stays maintainable.'
	];

	const skills: Record<string, string[]> = {
		Languages: ['TypeScript', 'JavaScript', 'Python'],
		Frontend: ['SvelteKit', 'React', 'Next.js', 'Tailwind CSS', 'Responsive design', 'Accessibility (WCAG)'],
		Backend: ['Flask', 'REST API design', 'System design', 'Caching and performance'],
		Data: ['Sequelize (SQL)', 'Prisma', 'Data modelling'],
		Concepts: ['Data pipelines', 'Fault tolerance', 'Performance optimisation'],
		Tools: ['Git and GitHub', 'Linux (Debian)', 'Photoshop']
	};

	const spotsPoints = [
		'Built and published a Python package installable with pip',
		'Added a cache that removes redundant API requests',
		'Designed a CLI workflow that processes whole playlists',
		'Automated downloading and embedding of metadata, cover art and lyrics'
	];

	// keys from allProjects to list under "Selected projects", in order
	const highlighted = ['personal/triviamania', 'personal/randomstuff'];

	const certifications = [
		'Google IT Support Professional Certificate',
		'freeCodeCamp Responsive Web Design',
		'freeCodeCamp JavaScript Algorithms and Data Structures',
		'freeCodeCamp Front End Development Libraries'
	];
	// ───────────────────────────────────────────────────────────────────────────

	const site = 'https://marlonbaatjes.is-a.dev';
	const { spots } = allProjects.personal;

	const projects = highlighted.map((path) => {
		const [group, key] = path.split('/') as ['personal', keyof typeof allProjects.personal];
		return { path, ...(allProjects[group][key] as (typeof allProjects.personal)['spots']) };
	});

	const contacts = [
		{ label: 'marlonbaatjes62@gmail.com', href: 'mailto:marlonbaatjes62@gmail.com' },
		{ label: 'marlonbaatjes.is-a.dev', href: site },
		{ label: 'github.com/mdesignscode', href: 'https://github.com/mdesignscode' },
		{ label: 'linkedin.com/in/marlonbaatjes', href: 'https://www.linkedin.com/in/marlonbaatjes' }
	];
</script>

<svelte:head>
	<title>Marlon Baatjes · Résumé</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="toolbar">
	<button class="btn" onclick={() => window.print()}>Print or save as PDF</button>
</div>

<article class="page" aria-label="Résumé of Marlon Baatjes">
	<header class="top">
		<div>
			<h1>Marlon Baatjes</h1>
			<p class="role">{role}</p>
		</div>
		<ul class="contacts">
			{#each contacts as c}
				<li><a href={c.href}>{c.label}</a></li>
			{/each}
		</ul>
	</header>

	<section class="summary" aria-label="Summary">
		{#each summary as line}<p>{line}</p>{/each}
	</section>

	<div class="body">
		<aside class="side">
			<h2>Skills</h2>
			{#each Object.entries(skills) as [group, list]}
				<h3>{group}</h3>
				<p class="skill-list">{list.join(', ')}</p>
			{/each}

			<h2 class="certs-title">Certifications</h2>
			<ul class="certs">
				{#each certifications as c}<li>{c}</li>{/each}
			</ul>
		</aside>

		<div class="main">
			<h2>Project experience</h2>

			<section class="project lead-project">
				<div class="ptitle">
					<h3>{spots.title}</h3>
					<a href={spots.live}>pypi.org/project/spots-cli</a>
				</div>
				<p>{spots.description}</p>
				<ul class="points">
					{#each spotsPoints as pt}<li>{pt}</li>{/each}
				</ul>
				<p class="stack">{spots.techStack.join(' · ')}</p>
			</section>

			<h2 class="sel">Selected projects</h2>
			{#each projects as p}
				<section class="project">
					<div class="ptitle">
						<h3>{p.title}</h3>
						<a href={`${site}/projects/${p.path}`}>marlonbaatjes.is-a.dev/projects/{p.path}</a>
					</div>
					<p>{p.description.replace('\n', ' ')}</p>
					<p class="stack">{p.techStack.join(' · ')}</p>
				</section>
			{/each}
		</div>
	</div>
</article>

<style>
	.toolbar {
		width: 210mm;
		max-width: 100%;
		margin: 0 auto 16px;
		display: flex;
		justify-content: flex-end;
	}

	/* the A4 sheet: teal ink on white paper */
	.page {
		width: 210mm;
		min-height: 297mm;
		max-width: 100%;
		margin: 0 auto;
		background: #fff;
		color: var(--ink);
		padding: 14mm 15mm 12mm;
		font-size: 9.6pt;
		line-height: 1.45;
		-webkit-print-color-adjust: exact;
		print-color-adjust: exact;
	}

	.top {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 8mm;
		padding-bottom: 6mm;
		border-bottom: 2.5pt solid var(--ink);
	}

	h1 {
		font-size: 30pt;
		line-height: 0.95;
	}

	.role {
		margin-top: 2mm;
		font-family: var(--display);
		font-style: italic;
		font-weight: 500;
		font-size: 14pt;
	}

	.contacts {
		text-align: right;
		font-size: 8.8pt;
		line-height: 1.6;
	}

	.contacts a,
	.ptitle a {
		text-decoration: none;
	}

	.contacts a:hover,
	.ptitle a:hover {
		text-decoration: underline;
	}

	.summary {
		margin-top: 5mm;
		font-size: 10.2pt;
		line-height: 1.5;
	}

	.summary p + p {
		margin-top: 1.5mm;
	}

	.body {
		margin-top: 6mm;
		display: grid;
		grid-template-columns: 52mm 1fr;
		gap: 8mm;
	}

	.side {
		background: var(--surface);
		padding: 5mm;
		align-self: start;
	}

	h2 {
		font-size: 13pt;
		line-height: 1;
		margin-bottom: 3mm;
	}

	h3 {
		font-family: var(--text);
		font-weight: 600;
		letter-spacing: 0;
		line-height: 1.2;
		font-size: 10pt;
	}

	.side h3 {
		margin-top: 3mm;
		font-size: 9pt;
	}

	.skill-list {
		margin-top: 0.5mm;
		font-size: 8.8pt;
	}

	.certs-title {
		margin-top: 6mm;
	}

	.certs {
		font-size: 8.8pt;
		display: grid;
		gap: 1.5mm;
	}

	.project {
		break-inside: avoid;
	}

	.project + .project {
		margin-top: 4.5mm;
	}

	.lead-project {
		background: var(--surface);
		padding: 4mm 5mm;
	}

	.ptitle {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 4mm;
	}

	.ptitle h3 {
		font-family: var(--display);
		font-weight: 800;
		font-size: 12pt;
	}

	.ptitle a {
		font-size: 8.2pt;
		color: var(--muted);
	}

	.project p {
		margin-top: 1.5mm;
	}

	.points {
		margin-top: 2mm;
		padding-left: 4mm;
		list-style: square;
	}

	.points li + li {
		margin-top: 0.8mm;
	}

	.stack {
		font-size: 8.4pt;
		font-weight: 600;
	}

	.sel {
		margin-top: 6mm;
	}

	@media screen and (max-width: 820px) {
		.page {
			width: auto;
			min-height: 0;
			padding: 24px 20px;
			font-size: 15px;
		}

		.top,
		.ptitle {
			flex-direction: column;
			align-items: flex-start;
		}

		.contacts {
			text-align: left;
		}

		.body {
			grid-template-columns: 1fr;
		}
	}

	@media print {
		@page {
			size: A4;
			margin: 0;
		}

		.toolbar {
			display: none;
		}

		.page {
			width: 210mm;
			min-height: 0;
			height: 297mm;
			overflow: hidden;
		}
	}
</style>
