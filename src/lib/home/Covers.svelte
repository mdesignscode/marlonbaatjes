<script lang="ts">
	import { covers } from '$lib/covers';

	const tiles = covers.slice(1, 13);
</script>

<section id="covers" class="covers" aria-labelledby="covers-title">
	<div class="wrap">
		<div class="head">
			<h2 id="covers-title" data-reveal>Cover art</h2>
			<p data-reveal style="--d: 80ms">
				Album, single and mix covers, artist cards and event flyers, made in Photoshop for
				musicians in my circle.
			</p>
		</div>

		<ul class="grid">
			{#each tiles as c, i}
				<li class="tile" data-tone={i % 4} data-reveal style="--d: {(i % 4) * 70}ms">
					<img src={c.src} alt={`${c.kind} for ${c.title} by ${c.artist}`} width="640" height="640" decoding="async" />
					<div class="strip">
						<p class="t">{c.title}</p>
						<p class="row"><span>{c.artist}</span><span>{c.kind}</span></p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.covers {
		background: var(--surface);
		padding-block: var(--section);
	}

	.head {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--gap);
		align-items: end;
		margin-bottom: 48px;
	}

	h2 {
		font-size: var(--step-head);
	}

	.head p {
		max-width: 44ch;
		justify-self: end;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 28px 12px;
	}

	.tile {
		--s: var(--ink);
		--s-ink: var(--bg);
	}

	.tile[data-tone='1'] {
		--s: var(--bg);
		--s-ink: var(--ink);
	}

	.tile[data-tone='2'] {
		--s: var(--deep);
		--s-ink: var(--bg);
	}

	.tile[data-tone='3'] {
		--s: #cfe0dc;
		--s-ink: var(--deep);
	}

	img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		transition: transform 500ms var(--ease-out);
		position: relative;
		z-index: 0;
	}

	.tile:hover img {
		transform: translateY(-8px) rotate(-1deg);
	}

	.strip {
		position: relative;
		z-index: 1;
		min-height: 84px;
		padding: 12px;
		background: var(--s);
		color: var(--s-ink);
		font-size: var(--step-small);
		font-variant-numeric: tabular-nums;
	}

	.t {
		font-weight: 600;
		font-size: var(--step-body);
		line-height: 1.25;
	}

	.row {
		margin-top: 8px;
		display: flex;
		justify-content: space-between;
		gap: 12px;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 20px 8px;
		}

		.head {
			grid-template-columns: 1fr;
		}

		.head p {
			justify-self: start;
		}

		.row {
			flex-direction: column;
			gap: 2px;
		}
	}
</style>
