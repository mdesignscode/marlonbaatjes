<script lang="ts">
	import allProjects from '../../routes/projects/allProjects';

	const items = [
		...Object.entries(allProjects.clones).map(([key, p]) => ({ key, group: 'clones', p, kind: 'Clone' })),
		...Object.entries(allProjects.fcc).map(([key, p]) => ({ key, group: 'fcc', p, kind: 'freeCodeCamp' }))
	];

	let open = $state(0);
</script>

<section class="deck-section" aria-labelledby="deck-title">
	<div class="wrap">
		<h2 id="deck-title" data-reveal>Clones and exercises</h2>
		<p class="intro" data-reveal style="--d: 80ms">
			Before my own projects I rebuilt pages I admired and worked through the freeCodeCamp
			certificates.
		</p>

		<div class="deck" data-reveal style="--d: 160ms">
			{#each items as item, i}
				<article class="card" class:open={open === i} data-tone={i % 3}>
					<button
						class="spine"
						aria-expanded={open === i}
						aria-controls={`deck-${item.key}`}
						onclick={() => (open = i)}
					>
						<span>{item.p.title}</span>
					</button>
					<div class="face" id={`deck-${item.key}`} hidden={open !== i ? true : undefined}>
						<h3>{item.p.title}</h3>
						<p>{item.p.summary}</p>
						<p class="meta">{item.kind} · {item.p.techStack.slice(0, 4).join(', ')}</p>
						<div class="foot">
							<a class="link" href={`/projects/${item.group}/${item.key}`}>Read it</a>
							{#if item.p.live}
								<a class="link" href={item.p.live} target="_blank" rel="noreferrer">Open it</a>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>

		<p class="count">
			{items.length} small projects, and every other build, are on the
			<a class="link" href="/projects">projects page</a>.
		</p>
	</div>
</section>

<style>
	.deck-section {
		background: var(--bg);
		padding-block: var(--section);
	}

	h2 {
		font-size: var(--step-head);
	}

	.intro {
		margin-top: 24px;
		max-width: 52ch;
	}

	.deck {
		margin-top: 48px;
		height: 380px;
		display: flex;
		gap: 6px;
	}

	.card {
		--card: var(--ink);
		--card-ink: var(--bg);
		flex: 0 0 76px;
		min-width: 0;
		display: flex;
		background: var(--card);
		color: var(--card-ink);
		overflow: hidden;
		transition: flex-basis 600ms var(--ease-out), flex-grow 600ms var(--ease-out);
	}

	.card[data-tone='1'] {
		--card: #0c6d78;
	}

	.card[data-tone='2'] {
		--card: var(--deep);
	}

	.card.open {
		flex: 1 1 560px;
	}

	.spine {
		flex: 0 0 76px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding-bottom: 24px;
		background: none;
		border: 0;
		color: inherit;
		cursor: pointer;
		transition: background-color 200ms ease;
	}

	.spine:hover {
		background: rgb(255 255 255 / 0.08);
	}

	.spine span {
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		font-family: var(--display);
		font-weight: 800;
		font-size: var(--step-lead);
		white-space: nowrap;
		max-height: 330px;
		overflow: hidden;
	}

	.open .spine {
		display: none;
	}

	.face {
		padding: 32px;
		display: flex;
		flex-direction: column;
		min-width: 420px;
		animation: show 500ms var(--ease-out) both;
	}

	.face[hidden] {
		display: none;
	}

	@keyframes show {
		from {
			opacity: 0;
			transform: translateX(24px);
		}
	}

	h3 {
		font-size: var(--step-head);
		line-height: 1;
	}

	.face p {
		margin-top: 16px;
		max-width: 46ch;
	}

	.meta {
		font-size: var(--step-small);
		font-weight: 600;
	}

	.foot {
		margin-top: auto;
		display: flex;
		gap: 28px;
	}

	.count {
		margin-top: 48px;
	}

	@media (max-width: 1080px) {
		.deck {
			height: auto;
			flex-direction: column;
			gap: 6px;
		}

		.card,
		.card.open {
			flex: none;
			flex-direction: column;
		}

		.spine {
			flex: none;
			height: 60px;
			justify-content: flex-start;
			align-items: center;
			padding: 0 20px;
		}

		.spine span {
			writing-mode: horizontal-tb;
			transform: none;
			font-size: var(--step-lead);
		}

		.face {
			min-width: 0;
			padding: 24px 20px;
			min-height: 300px;
		}
	}
</style>
