<script lang="ts">
	import allProjects, { type TProjectInfo } from './allProjects';

	const entries = (o: Record<string, TProjectInfo>) => Object.entries(o);

	const groups = [
		{
			id: 'personal',
			title: 'My own projects',
			note: 'Apps and tools I designed and built from the ground up.',
			list: entries(allProjects.personal)
		},
		{
			id: 'clones',
			title: 'Clones',
			note: 'Sites I rebuilt to learn how the real thing works.',
			list: entries(allProjects.clones)
		},
		{
			id: 'fcc',
			title: 'freeCodeCamp',
			note: 'Certificate projects, each a small app in React on CodePen.',
			list: entries(allProjects.fcc)
		}
	];

	const total = groups.reduce((n, g) => n + g.list.length, 0);
</script>

<svelte:head>
	<title>Projects · Marlon Baatjes</title>
	<meta name="description" content="Every project Marlon Baatjes has built: personal apps, clones and freeCodeCamp work." />
</svelte:head>

<section class="intro">
	<div class="wrap igrid">
		<div class="itext">
		<h1>All projects</h1>
		<p>{total} builds: my own apps and tools, then clones of sites I admired, then the freeCodeCamp work I learned on.</p>
		<ul class="jump">
			{#each groups as g}
				<li><a class="link" href={`#${g.id}`}>{g.title}</a></li>
			{/each}
		</ul>
		</div>
		<div class="pile" aria-hidden="true">
			<img src={encodeURI(allProjects.personal.triviamania.preview)} alt="" width="1366" height="626" />
			<img src={encodeURI(allProjects.personal.spots.images[1])} alt="" width="1366" height="626" />
		</div>
	</div>
</section>

{#each groups as g, gi}
	<section id={g.id} class="group" data-layout={g.id} aria-labelledby={`${g.id}-title`}>
		<div class="wrap">
			<div class="ghead">
				<h2 id={`${g.id}-title`} data-reveal>{g.title}</h2>
				<p data-reveal style="--d: 80ms">{g.note}</p>
			</div>

			<ul class="rows">
				{#each g.list as [key, p], i}
					<li class="row" data-reveal style="--d: {(i % 3) * 70}ms">
						<a class="thumb" href={`/projects/${g.id}/${key}`} tabindex="-1" aria-hidden="true">
							<img src={encodeURI(p.preview)} alt="" width="1366" height="854" decoding="async" />
						</a>
						<div class="info">
							<h3><a href={`/projects/${g.id}/${key}`}>{p.title}</a></h3>
							<p>{p.summary}</p>
							<p class="stack">{p.techStack.join(' · ')}</p>
							<div class="links">
								<a class="link" href={`/projects/${g.id}/${key}`}>Details</a>
								{#if p.live}<a class="link" href={p.live} target="_blank" rel="noreferrer">Open it</a>{/if}
								{#if p.source}<a class="link" href={p.source} target="_blank" rel="noreferrer">Source</a>{/if}
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</section>
{/each}

<style>
	.intro {
		background: var(--field-1);
		color: var(--field-1-ink);
		padding-block: clamp(64px, 10vw, 140px) clamp(56px, 7vw, 96px);
	}

	.igrid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		column-gap: var(--gap);
		align-items: center;
	}

	.itext {
		grid-column: 1 / 7;
	}

	.pile {
		grid-column: 7 / 13;
		display: grid;
	}

	.pile img {
		grid-area: 1 / 1;
		width: 88%;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		object-position: top left;
		transform: rotate(-2deg);
		animation: rise 900ms var(--ease-out) both;
	}

	.pile img + img {
		justify-self: end;
		align-self: end;
		margin-top: 30%;
		transform: rotate(2deg);
		animation-delay: 140ms;
	}

	@keyframes rise {
		from {
			translate: 0 48px;
		}
	}

	h1 {
		font-size: var(--step-display);
	}

	.intro p {
		margin-top: 32px;
		font-size: var(--step-lead);
		line-height: 1.35;
		max-width: 36ch;
	}

	.jump {
		margin-top: 40px;
		display: flex;
		flex-wrap: wrap;
		gap: 12px 32px;
	}

	.group {
		padding-block: clamp(80px, 10vw, 160px);
	}

	.group[data-layout='clones'] {
		background: var(--surface);
	}

	.ghead {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--gap);
		align-items: end;
		margin-bottom: 56px;
	}

	.ghead p {
		justify-self: end;
		max-width: 40ch;
	}

	h2 {
		font-size: var(--step-head);
	}

	.rows {
		display: grid;
		gap: 56px;
	}

	/* personal: wide rows, picture on alternating sides */
	.row {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		column-gap: var(--gap);
		align-items: center;
	}

	.thumb {
		grid-column: 1 / 8;
		display: block;
		overflow: hidden;
		background: var(--surface);
	}

	.thumb img {
		width: 100%;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		object-position: top left;
		transition: transform 700ms var(--ease-out);
	}

	.row:hover .thumb img {
		transform: scale(1.03);
	}

	.info {
		grid-column: 9 / 13;
	}

	[data-layout='personal'] .row:nth-child(even) .thumb {
		grid-column: 6 / 13;
		grid-row: 1;
	}

	[data-layout='personal'] .row:nth-child(even) .info {
		grid-column: 1 / 5;
		grid-row: 1;
	}

	h3 {
		font-size: var(--step-lead);
		line-height: 1.05;
	}

	h3 a {
		text-decoration: none;
	}

	h3 a:hover {
		text-decoration: underline;
		text-decoration-thickness: 3px;
	}

	.info p {
		margin-top: 16px;
	}

	.stack {
		font-size: var(--step-small);
		font-weight: 600;
	}

	.links {
		margin-top: 24px;
		display: flex;
		flex-wrap: wrap;
		gap: 12px 24px;
	}

	/* clones: two columns, picture above */
	[data-layout='clones'] .rows {
		grid-template-columns: 1fr 1fr;
		gap: 64px var(--gap);
	}

	[data-layout='clones'] .row {
		display: block;
	}

	[data-layout='clones'] .info {
		margin-top: 24px;
	}

	/* freeCodeCamp: a tight list with small thumbnails */
	[data-layout='fcc'] .rows {
		gap: 12px;
	}

	[data-layout='fcc'] .row {
		background: var(--surface);
		padding: 16px;
	}

	[data-layout='fcc'] .thumb {
		grid-column: 1 / 3;
	}

	[data-layout='fcc'] .info {
		grid-column: 3 / 13;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: var(--gap);
	}

	[data-layout='fcc'] h3 {
		font-size: var(--step-lead);
		grid-column: 1 / -1;
	}

	[data-layout='fcc'] .info p {
		margin-top: 8px;
	}

	[data-layout='fcc'] .links {
		margin-top: 8px;
		grid-column: 1 / -1;
	}

	@media (max-width: 860px) {
		.igrid {
			display: block;
		}

		.pile {
			margin-top: 48px;
		}

		.ghead,
		[data-layout='clones'] .rows {
			grid-template-columns: 1fr;
		}

		.ghead p {
			justify-self: start;
		}

		.row,
		[data-layout='fcc'] .info {
			display: block;
		}

		.info,
		[data-layout='personal'] .row:nth-child(even) .info {
			margin-top: 20px;
		}

		[data-layout='fcc'] .thumb {
			display: none;
		}
	}
</style>
