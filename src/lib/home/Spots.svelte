<script lang="ts">
	// The live thing: type a track the way Spots wants it and read back what Spots does with it.
	let query = $state('Kelsey Lynn - Modern Day Marilyn Monroe');
	let copied = $state(false);

	const parsed = $derived.by(() => {
		const q = query.trim();
		if (/^https?:\/\//.test(q)) return { url: q };
		const i = q.indexOf(' - ');
		if (i < 1 || i + 3 >= q.length) return null;
		return { artist: q.slice(0, i).trim(), title: q.slice(i + 3).trim() };
	});

	const command = $derived(`spots_cli download "${query.trim()}"`);

	async function copy() {
		try {
			await navigator.clipboard.writeText(command);
			copied = true;
			setTimeout(() => (copied = false), 1600);
		} catch {
			copied = false;
		}
	}

	const slips = [
		{
			head: 'spots_cli setup',
			lines: ['Asks a few questions', 'Writes your config folder', 'Turns Spotify, YouTube and the other providers on or off']
		},
		{
			head: 'spots_cli migrate-likes',
			lines: ['Reads your liked songs on Spotify', 'Finds each one on YouTube', 'Likes it there too', 'More providers to come']
		},
		{
			head: 'spots_cli add-to-history',
			lines: ['Points at a music folder', 'Records every song in it', 'So nothing downloads twice']
		},
		{
			head: 'spots_cli remove-duplicates',
			lines: ['Scans a folder', 'Finds the same song saved twice', 'Keeps one copy']
		},
		{
			head: 'Under the hood',
			lines: ['A cache, so repeat searches skip the API', 'Retries when the network drops', 'Falls back when a provider fails', 'Scores matches across platforms']
		}
	];
</script>

<section class="spots" aria-labelledby="spots-title">
	<img
		class="photo"
		src="/img/record-crate.jpg"
		alt="Rows of second-hand vinyl records in a record shop crate"
		width="1920"
		height="1275"
		loading="lazy"
	/>

	<div class="copy">
		<h2 id="spots-title" data-reveal>Give it a track</h2>
		<p data-reveal style="--d: 80ms">
			Spots is my Python CLI on PyPI. Name a song and it finds it across Spotify, Deezer and
			YouTube, downloads it and tags it.
		</p>
		<p data-reveal style="--d: 160ms">
			It began as a Flask API with a React front end. I rebuilt the core as one install with one
			command, then put the API and a new web UI back on top. It saves videos too.
		</p>
		<div class="links" data-reveal style="--d: 240ms">
			<a class="link" href="https://pypi.org/project/spots-cli/" target="_blank" rel="noreferrer">Spots on PyPI</a>
			<a class="link" href="https://github.com/mdesignscode/spots_flask" target="_blank" rel="noreferrer">Source</a>
			<a class="link" href="/projects/personal/spots">How I built it</a>
		</div>
	</div>

	<div class="slips">
		<form class="slip slip--live" onsubmit={(e) => { e.preventDefault(); copy(); }}>
			<label class="head" for="track">spots_cli download</label>
			<input id="track" bind:value={query} autocomplete="off" spellcheck="false" aria-describedby="track-out" />
			<p class="div" aria-hidden="true">- - - - - - - - - - - - -</p>
			<div id="track-out" aria-live="polite">
				{#if parsed && 'url' in parsed}
					<p>Direct link, no search needed</p>
					<p>Download and convert</p>
					<p>Store it in your library</p>
				{:else if parsed}
					<p>Artist: <strong>{parsed.artist}</strong></p>
					<p>Title: <strong>{parsed.title}</strong></p>
					<p>Resolve it with the metadata providers</p>
					<p>Match it to a YouTube video</p>
					<p>Download, convert, tag</p>
					<p>Store it in your library</p>
				{:else}
					<p>Spots needs the artist, then a spaced dash, then the title.</p>
					<p>For example: Kelsey Lynn - Modern Day Marilyn Monroe</p>
				{/if}
			</div>
			<button class="btn copy-btn" type="submit" disabled={!parsed}>
				{copied ? 'Copied' : 'Copy the command'}
			</button>
		</form>

		{#each slips as slip, i}
			<div class="slip" style="--h: {[34, 40, 30, 37, 28][i]}svh; --t: {[1.5, 0, -1.2, 0, 1][i]}deg">
				<p class="head">{slip.head}</p>
				<p class="div" aria-hidden="true">- - - - - - - - - - - - -</p>
				{#each slip.lines as line}<p>{line}</p>{/each}
			</div>
		{/each}
	</div>
</section>

<style>
	.spots {
		position: relative;
		min-height: max(100svh, 820px);
		overflow: hidden;
		color: var(--bg);
		background: #1d1a14;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.photo {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		animation: drift 30s ease-in-out infinite alternate;
	}

	@keyframes drift {
		from {
			transform: scale(1.04) translate3d(0, 0, 0);
		}
		to {
			transform: scale(1.12) translate3d(-2%, -1.5%, 0);
		}
	}

	.copy {
		position: relative;
		margin-top: clamp(64px, 10vh, 120px);
		margin-left: 18%;
		width: min(640px, 64%);
		padding: 40px 44px;
		background: rgb(10 14 14 / 0.78);
	}

	h2 {
		font-size: var(--step-head);
	}

	.copy p {
		margin-top: 20px;
		font-size: var(--step-lead);
		line-height: 1.35;
	}

	.links {
		margin-top: 28px;
		display: flex;
		flex-wrap: wrap;
		gap: 12px 28px;
		font-size: var(--step-small);
	}

	.slips {
		position: relative;
		margin-top: 64px;
		display: flex;
		align-items: flex-end;
		gap: 12px;
		padding-inline: var(--margin);
	}

	.slip {
		flex: 1 1 0;
		min-width: 0;
		height: var(--h, 36svh);
		min-height: 260px;
		padding: 22px 20px;
		background: var(--bg);
		color: var(--ink);
		font-size: var(--step-small);
		line-height: 1.45;
		transform: translateY(14px) rotate(var(--t, 0deg));
		transform-origin: bottom center;
		transition: transform 400ms var(--ease-out);
	}

	.slip:hover {
		transform: translateY(0) rotate(0deg);
	}

	.slip--live {
		flex: 1.6 1 0;
		height: 46svh;
		min-height: 400px;
		display: flex;
		flex-direction: column;
	}

	.head {
		font-weight: 600;
		font-size: var(--step-body);
	}

	.div {
		margin-block: 6px 10px;
		color: var(--muted);
		letter-spacing: 0.1em;
		white-space: nowrap;
		overflow: hidden;
	}

	input {
		margin-top: 8px;
		width: 100%;
		min-height: 48px;
		padding: 0 14px;
		font: inherit;
		font-size: 16px;
		color: var(--ink);
		background: var(--surface);
		border: 0;
		border-bottom: 2px solid var(--ink);
	}

	input:focus-visible {
		outline-offset: 0;
	}

	.copy-btn {
		margin-top: auto;
		align-self: flex-start;
	}

	.copy-btn:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}

	@media (max-width: 900px) {
		.spots {
			min-height: 0;
		}

		.copy {
			margin-left: var(--margin);
			margin-right: var(--margin);
			width: auto;
			padding: 28px 24px;
		}

		.slips {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: start;
			gap: 12px;
		}

		.slip,
		.slip--live {
			height: auto;
			min-height: 0;
			transform: rotate(var(--t, 0deg));
		}

		.slip--live {
			grid-column: 1 / -1;
			gap: 0;
		}

		.copy-btn {
			margin-top: 16px;
		}

		.slip:last-child {
			margin-bottom: 40px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.photo {
			animation: none;
		}
	}
</style>
