<script lang="ts">
	const year = new Date().getFullYear();

	const addresses = [
		{ label: 'marlonbaatjes62@gmail.com', href: 'mailto:marlonbaatjes62@gmail.com' },
		{ label: 'LinkedIn: marlonbaatjes', href: 'https://www.linkedin.com/in/marlonbaatjes' },
		{ label: 'GitHub: mdesignscode', href: 'https://github.com/mdesignscode' },
		{ label: 'WhatsApp: +27 79 022 6755', href: 'https://wa.me/27790226755' },
		{ label: 'CodePen: Marlon-B', href: 'https://codepen.io/Marlon-B' }
	];
</script>

<!-- the back of the card: it rises into place as the page ends -->
<footer>
	<div class="wrap">
		<div class="panel" data-reveal>
			<span class="scallops" aria-hidden="true">
				{#each Array(12) as _}<i></i>{/each}
			</span>

			<div class="message">
				<h2>Thanks for reading</h2>
				<p>
					If something here is close to what you need, write to me. I'm looking for a first role
					as a developer, and I still take on cover art for releases.
				</p>
				<p class="lede">Marlon, South Africa</p>
			</div>

			<div class="address">
				<img
					class="stamp"
					src="/marlon_avatar.png"
					alt="Illustrated portrait of Marlon"
					width="88"
					height="117"
					loading="lazy"
				/>
				<ul>
					{#each addresses as a}
						<li><a class="link" href={a.href} target={a.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{a.label}</a></li>
					{/each}
				</ul>
			</div>

			<p class="imprint">
				© {year} Marlon Baatjes · Record crate photograph by Fabien Barral, CC0, via Wikimedia
				Commons · Cover art and interfaces by Marlon
			</p>
		</div>
	</div>
</footer>

<style>
	footer {
		background: var(--deep);
		padding-block: 96px 32px;
	}

	.panel {
		position: relative;
		max-width: 1180px;
		margin-inline: auto;
		background: var(--bg);
		color: var(--ink);
		padding: clamp(28px, 5vw, 64px);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px clamp(32px, 6vw, 96px);
	}

	.scallops {
		position: absolute;
		top: -1px;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		transform: translateY(-50%);
	}

	.scallops i {
		display: block;
		width: calc(100% / 12);
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--deep);
		transform: scale(0.82);
	}

	h2 {
		font-size: var(--step-head);
		margin-top: 24px;
	}

	.message p {
		margin-top: 20px;
		max-width: 44ch;
	}

	.lede {
		font-family: var(--display);
		font-style: italic;
		font-weight: 500;
		font-size: var(--step-lead);
	}

	.address {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 24px;
		margin-top: 24px;
	}

	.stamp {
		width: 88px;
		aspect-ratio: 3 / 4;
		object-fit: cover;
		background: var(--surface);
		padding: 6px;
		transform: rotate(4deg);
		transition: transform 300ms var(--ease-out);
	}

	.stamp:hover {
		transform: rotate(-2deg) scale(1.06);
	}

	ul {
		align-self: stretch;
		display: grid;
		gap: 12px;
		font-size: var(--step-body);
	}

	.imprint {
		grid-column: 1 / -1;
		text-align: center;
		font-size: var(--step-small);
		color: var(--muted);
		margin-top: 16px;
	}

	@media (max-width: 760px) {
		.panel {
			grid-template-columns: 1fr;
		}

		.scallops i:nth-child(n + 7) {
			display: none;
		}

		.scallops i {
			width: calc(100% / 6);
		}

		.address {
			margin-top: 0;
		}

		.stamp {
			position: absolute;
			top: 32px;
			right: 24px;
			width: 64px;
		}

		h2 {
			padding-right: 72px;
		}
	}
</style>
