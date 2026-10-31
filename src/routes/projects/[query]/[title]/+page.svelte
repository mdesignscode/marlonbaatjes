<script lang="ts">
	let { data } = $props();

	const images: string[] = $derived((data.images ?? [data.preview]).map((s: string) => encodeURI(s)));
	const [lead, ...rest] = $derived(images);
</script>

<svelte:head>
	<title>{data.title} · Marlon Baatjes</title>
	<meta name="description" content={data.summary} />
</svelte:head>

<section class="head">
	<div class="wrap grid">
		<div class="title">
			<nav aria-label="Breadcrumb">
				<a class="link" href="/projects">All projects</a>
			</nav>
			<h1>{data.title}</h1>
			<p class="summary">{data.summary}</p>
			<div class="actions">
				{#if data.live}<a class="btn btn--paper" href={data.live} target="_blank" rel="noreferrer">Open it</a>{/if}
				{#if data.source}<a class="link" href={data.source} target="_blank" rel="noreferrer">Read the source</a>{/if}
			</div>
		</div>
		<div class="built">
			<h2>Built with</h2>
			<ul>
				{#each data.techStack as t}<li>{t}</li>{/each}
			</ul>
		</div>
	</div>
</section>

<section class="sheet-wrap" aria-labelledby="about-title">
	<div class="wrap">
		<article class="sheet">
			<figure class="lead">
				<img src={lead} alt={`${data.title}, main screen`} width="1366" height="854" />
			</figure>

			<div class="about">
				<h2 id="about-title">About it</h2>
				{#each data.description.split('\n') as para}
					<p>{para}</p>
				{/each}
			</div>

			{#if data.features}
				<div class="block">
					<h2>What it does</h2>
					<ul class="points">
						{#each data.features as f}<li data-reveal>{f}</li>{/each}
					</ul>
				</div>
			{/if}

			{#if data.technicalDetails}
				<div class="block">
					<h2>How it's built</h2>
					<ol class="points">
						{#each data.technicalDetails as f}<li data-reveal>{f}</li>{/each}
					</ol>
				</div>
			{/if}
		</article>
	</div>
</section>

{#if rest.length}
	<section class="shots" aria-labelledby="shots-title">
		<div class="wrap">
			<h2 id="shots-title" data-reveal>More screens</h2>
			<ul>
				{#each rest as src, i}
					<li data-reveal style="--d: {(i % 2) * 80}ms">
						<img {src} alt={`${data.title}, screen ${i + 2}`} width="1366" height="854" loading="lazy" />
					</li>
				{/each}
			</ul>
		</div>
	</section>
{/if}

<style>
	.head {
		background: var(--field-1);
		color: var(--field-1-ink);
		padding-block: clamp(40px, 6vw, 80px) 180px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		column-gap: var(--gap);
		align-items: end;
	}

	.title {
		grid-column: 1 / 9;
	}

	.built {
		grid-column: 9 / 13;
	}

	.built h2 {
		font-size: var(--step-lead);
	}

	.built ul {
		margin-top: 16px;
		font-size: var(--step-lead);
		line-height: 1.3;
	}

	nav {
		font-size: var(--step-small);
	}

	h1 {
		margin-top: 40px;
		font-size: var(--step-display);
	}

	.summary {
		margin-top: 28px;
		font-size: var(--step-lead);
		line-height: 1.35;
		max-width: 34ch;
	}

	.actions {
		margin-top: 36px;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 16px 28px;
	}

	.sheet-wrap {
		background: var(--bg);
	}

	.sheet {
		position: relative;
		margin-top: -140px;
		background: var(--bg);
		padding: clamp(16px, 3vw, 40px);
		padding-bottom: clamp(64px, 8vw, 120px);
	}

	.lead {
		background: var(--surface);
	}

	.lead img {
		width: 100%;
		height: auto;
		max-height: 80svh;
		object-fit: contain;
	}

	.about {
		margin-top: 64px;
	}

	h2 {
		font-size: clamp(1.75rem, 1.3rem + 1.4vw, 2.5rem);
		line-height: 1.05;
	}

	.about p {
		margin-top: 20px;
		max-width: 62ch;
	}

	.block {
		margin-top: 80px;
	}

	.points {
		margin-top: 28px;
		columns: 2;
		column-gap: clamp(32px, 5vw, 80px);
		padding-left: 1.2em;
		list-style: square;
	}

	ol.points {
		list-style: decimal;
	}

	.points li {
		break-inside: avoid;
		margin-bottom: 20px;
		padding-left: 0.3em;
	}

	.shots {
		background: var(--surface);
		padding-block: clamp(80px, 10vw, 160px);
	}

	.shots h2 {
		font-size: var(--step-head);
	}

	.shots ul {
		margin-top: 48px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--gap);
	}

	.shots img {
		width: 100%;
		height: auto;
		background: var(--bg);
	}

	@media (max-width: 820px) {
		.shots ul {
			grid-template-columns: 1fr;
		}

		.points {
			columns: 1;
		}

		.grid {
			display: block;
		}

		.built {
			margin-top: 40px;
		}

		.head {
			padding-bottom: 120px;
		}

		.sheet {
			margin-top: -96px;
		}
	}
</style>
