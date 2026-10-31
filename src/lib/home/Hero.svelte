<script lang="ts">
	import { covers } from '$lib/covers';

	const left = covers[0];
	const right = covers[2];
</script>

<section class="hero" aria-labelledby="hero-title">
	<figure class="plate plate--left">
		<img src={left.src} alt={`Cover for ${left.title} by ${left.artist}`} width="640" height="640" />
		<figcaption>{left.title}, {left.artist}</figcaption>
	</figure>

	<div class="card">
		<span class="corner tl" aria-hidden="true"></span>
		<span class="corner tr" aria-hidden="true"></span>

		<h1 id="hero-title">
			<span class="l1">Marlon</span>
			<span class="l2">Baatjes</span>
		</h1>

		<p class="sub">
			I build full-stack web apps and Python tools, and I design album covers for South African
			artists.
		</p>

		<ul class="details">
			<li>Self-taught</li>
			<li>TypeScript and Python</li>
			<li>South Africa</li>
		</ul>

		<div class="actions">
			<a class="btn" href="#work">See the work</a>
			<a class="link" href="/projects">All projects</a>
		</div>
	</div>

	<figure class="plate plate--right">
		<img src={right.src} alt={`Cover for ${right.title} by ${right.artist}`} width="640" height="640" />
		<figcaption>{right.title}, {right.artist}</figcaption>
	</figure>
</section>

<style>
	.hero {
		position: relative;
		background: var(--field-1);
		color: var(--field-1-ink);
		height: calc(100svh - 76px);
		min-height: 640px;
		overflow: hidden;
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		column-gap: var(--gap);
		padding-inline: var(--margin);
		align-items: start;
	}

	.card {
		position: relative;
		grid-column: 4 / 10;
		grid-row: 1;
		margin-top: clamp(40px, 8vh, 96px);
		aspect-ratio: 5 / 7;
		background: var(--bg);
		color: var(--ink);
		padding: clamp(40px, 4.5vw, 64px) clamp(24px, 4vw, 56px);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		animation: rise 900ms var(--ease-out) both;
	}

	.corner {
		position: absolute;
		top: -22px;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: var(--field-1);
	}

	.tl {
		left: -22px;
	}

	.tr {
		right: -22px;
	}

	h1 {
		font-size: clamp(3.5rem, 7.2vw, 7.75rem);
		line-height: 0.92;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.l1 {
		align-self: center;
		transform: translateX(-12%);
	}

	.l2 {
		align-self: center;
		transform: translateX(10%);
	}

	.sub {
		margin-top: 40px;
		font-size: var(--step-lead);
		line-height: 1.35;
		max-width: 24ch;
	}

	.details {
		margin-top: 32px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 10px 20px;
		font-size: var(--step-small);
		font-weight: 600;
	}

	.details li + li::before {
		content: '';
		display: inline-block;
		width: 10px;
		height: 10px;
		background: var(--ink);
		transform: rotate(45deg) translateY(-2px);
		margin-right: 20px;
	}

	.actions {
		margin-top: 40px;
		display: flex;
		align-items: center;
		gap: 28px;
	}

	.plate {
		grid-row: 1;
		margin-top: 22vh;
		animation: rise 1100ms var(--ease-out) both;
		animation-delay: 150ms;
	}

	.plate--left {
		grid-column: 1 / 4;
		--tilt: -4deg;
	}

	.plate--right {
		grid-column: 10 / 13;
		margin-top: 38vh;
		--tilt: 3deg;
		animation-delay: 260ms;
	}

	.plate img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		transform: rotate(var(--tilt));
		transition: transform 500ms var(--ease-out);
	}

	.plate:hover img {
		transform: rotate(0deg) scale(1.03);
	}

	figcaption {
		margin-top: 20px;
		font-size: var(--step-small);
		font-weight: 600;
	}

	@keyframes rise {
		from {
			transform: translateY(56px);
		}
		to {
			transform: none;
		}
	}

	@media (max-width: 1024px) {
		.card {
			grid-column: 3 / 11;
		}

		.plate {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.hero {
			display: block;
			padding-inline: 12px;
			height: auto;
			min-height: calc(100svh - 68px);
		}

		.card {
			margin-top: 28px;
			aspect-ratio: auto;
			min-height: calc(100svh - 68px - 28px + 80px);
			padding: 48px 24px;
		}

		h1 {
			font-size: 17vw;
		}

		.l1,
		.l2 {
			transform: none;
		}

		.sub {
			margin-top: 32px;
		}

		.actions {
			flex-direction: column;
			gap: 20px;
		}
	}
</style>
