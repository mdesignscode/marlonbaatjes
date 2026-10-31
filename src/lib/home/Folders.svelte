<script lang="ts">
	import allProjects from '../../routes/projects/allProjects';

	const p = allProjects.personal;

	const folders = [
		{
			key: 'spots',
			group: 'personal',
			project: p.spots,
			image: p.spots.images[2],
			category: 'Python CLI on PyPI',
			text: 'A music library tool that resolves a song across Spotify, Deezer and YouTube, then downloads and tags it with cover art and lyrics. I took a Flask API and React UI that needed several services running and turned them into one installable package, with caching, download history and retries.'
		},
		{
			key: 'triviamania',
			group: 'personal',
			project: p.triviamania,
			image: p.triviamania.images[3],
			category: 'Full-stack game',
			text: 'A multi-page trivia game with accounts, a record of every answered question and hundreds of questions by category and difficulty. I ported it from Next.js to SvelteKit, moved storage from JSON files to a database, and cut the client bundle by sending each answer straight to the server.'
		},
		{
			key: 'randomstuff',
			group: 'personal',
			project: p.randomstuff,
			image: p.randomstuff.images[0],
			category: 'Next.js and public APIs',
			text: 'Rock Paper Scissors against the computer, poems, recipes and more, each fed by a public API behind one fast, accessible interface. Built with Next.js, Prisma and Tailwind, rendered on the server for quick first loads and search engines, and tested end to end with Cypress.'
		},
		{
			key: 'estore',
			group: 'personal',
			project: p.estore,
			image: p.estore.images[1],
			category: 'Next.js and Stripe',
			text: 'A shop with product listings, cart, wish list, accounts, purchase history and a dashboard for stock. Checkout runs through Stripe, state lives in Zustand, data goes through Prisma, and loading skeletons and tooltips cover the details.'
		},
		{
			key: 'bmwi5',
			group: 'personal',
			project: p.bmwi5,
			image: p.bmwi5.images[0],
			category: 'Front end and motion',
			text: 'A showcase page for the BMW i5 eDrive40, built to learn front-end motion. Parallax scrolling with Framer Motion, a Headless UI menu, React and a Vite build.'
		}
	];
</script>

<section id="work" class="work" aria-labelledby="work-title">
	<div class="wrap">
		<h2 id="work-title" data-reveal>Selected work</h2>
	</div>

	<div class="stack wrap">
		{#each folders as f, i}
			<article class="folder" style="--i: {i}" data-tone={i % 4}>
				<header class="strip">
					<h3 class="tab">{f.project.title}</h3>
					<p class="cat">{f.category}</p>
				</header>
				<div class="body">
					<a class="shot" href={`/projects/${f.group}/${f.key}`} tabindex="-1" aria-hidden="true">
						<img src={encodeURI(f.image)} alt="" width="1366" height="854" decoding="async" />
					</a>
					<div class="text">
						<p data-reveal>{f.text}</p>
						<p class="stack-list" data-reveal style="--d: 80ms">{f.project.techStack.join(' · ')}</p>
						<div class="links" data-reveal style="--d: 160ms">
							<a class="btn" href={`/projects/${f.group}/${f.key}`}>Read the details</a>
							{#if f.project.live}
								<a class="link" href={f.project.live} target="_blank" rel="noreferrer">Open it</a>
							{/if}
							{#if f.project.source}
								<a class="link" href={f.project.source} target="_blank" rel="noreferrer">Source</a>
							{/if}
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>

<style>
	.work {
		background: var(--bg);
		padding-block: var(--section) 0;
	}

	h2 {
		font-size: var(--step-head);
		margin-bottom: 48px;
	}

	.folder {
		--band: var(--field-1);
		--band-ink: var(--field-1-ink);
		--tab: var(--deep);
		--tab-ink: var(--deep-ink);
		position: sticky;
		top: calc(var(--i) * 56px + 12px);
		color: var(--band-ink);
		/* equal margin-box bottoms, so the stack lets go as one and no folder slides over a tab */
		margin-bottom: calc((4 - var(--i)) * 56px);
	}

	.folder + .folder {
		margin-top: calc((5 - var(--i)) * -56px);
	}

	.folder[data-tone='1'] {
		--band: #cfe0dc;
		--band-ink: var(--ink);
		--tab: var(--ink);
		--tab-ink: var(--bg);
	}

	.folder[data-tone='2'] {
		--band: var(--deep);
		--band-ink: var(--deep-ink);
		--tab: #cfe0dc;
		--tab-ink: var(--ink);
	}

	.folder[data-tone='3'] {
		--band: #e4ecea;
		--band-ink: var(--ink);
		--tab: #0c6d78;
		--tab-ink: var(--bg);
	}

	.strip {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 16px;
	}

	.tab {
		min-width: 220px;
		height: 56px;
		padding: 0 40px 0 24px;
		display: flex;
		align-items: center;
		background: var(--tab);
		color: var(--tab-ink);
		font-size: var(--step-lead);
		white-space: nowrap;
		clip-path: polygon(0 0, calc(100% - 28px) 0, 100% 100%, 0 100%);
	}

	.cat {
		align-self: stretch;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 24px;
		font-size: var(--step-small);
		font-weight: 600;
		background: var(--band);
		clip-path: polygon(0 100%, 0 40%, 100% 40%, 100% 100%);
		padding-top: 22px;
	}

	.body {
		background: var(--band);
		min-height: min(64svh, 600px);
		padding: clamp(24px, 3vw, 48px);
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		column-gap: var(--gap);
		align-items: start;
	}

	.shot {
		grid-column: 1 / 8;
		display: block;
		overflow: hidden;
		background: var(--bg);
	}

	.shot img {
		width: 100%;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		object-position: top left;
		transition: transform 700ms var(--ease-out);
	}

	.shot:hover img {
		transform: scale(1.03);
	}

	.text {
		grid-column: 9 / 13;
	}

	.stack-list {
		margin-top: 20px;
		font-size: var(--step-small);
		font-weight: 600;
	}

	.links {
		margin-top: 32px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px 24px;
	}

	.folder[data-tone='0'] .btn,
	.folder[data-tone='2'] .btn {
		background: var(--bg);
		color: var(--ink);
	}

	@media (max-width: 900px) {
		.folder {
			position: relative;
			top: 0;
			margin-bottom: 16px;
		}

		.folder + .folder {
			margin-top: 0;
		}

		.tab {
			min-width: 0;
			height: 44px;
			font-size: 1.25rem;
			padding-left: 20px;
		}

		.cat {
			padding-right: 16px;
		}

		.body {
			display: block;
			min-height: 0;
			padding: 20px;
		}

		.shot img {
			aspect-ratio: 4 / 3;
		}

		.text {
			margin-top: 24px;
		}
	}

	@media (max-width: 480px) {
		.cat {
			display: none;
		}
	}
</style>
