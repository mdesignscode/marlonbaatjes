<section class="letter-section" aria-labelledby="letter-title">
	<article class="sheet" data-reveal>
		<img class="portrait" src="/marlon_avatar.png" alt="Illustrated portrait of Marlon" width="56" height="56" loading="lazy" />
		<h2 id="letter-title">A note from me</h2>

		<p>
			I taught myself to code because I love computers, and I've kept going because I like
			building things people can use. I started with the freeCodeCamp certificates and the Google
			IT Support certificate, then rebuilt sites I admired until my own ideas were worth building.
		</p>
		<p>
			On the front end I reach for SvelteKit, React and Next.js. On the server it's Python first:
			everyday scripts, automation, and APIs in Flask. Spots came out of an obsession with a
			<mark>perfect music library</mark>, and it taught me caching, retries and how to ship a package.
		</p>
		<p>
			I run the machine too. My daily driver is Debian Linux, tuned for coding; I dual boot Windows
			for Photoshop and games, and my phone is rooted with Magisk.
		</p>
		<p>
			Away from code I design cover art and flyers for musicians around me. Some of it is further
			down this page.
		</p>

		<p class="sign">Marlon Baatjes</p>
		<p class="role">Full-stack developer</p>

		<div class="tear">
			<a class="link" href="mailto:marlonbaatjes62@gmail.com">marlonbaatjes62@gmail.com</a>
			<a class="btn" href="#contact">Write to me</a>
		</div>
	</article>
</section>

<style>
	.letter-section {
		background: var(--field-1);
		padding: var(--section) var(--margin);
	}

	.sheet {
		position: relative;
		max-width: 680px;
		margin-inline: auto;
		background: var(--bg);
		color: var(--ink);
		padding: clamp(28px, 5vw, 64px) clamp(24px, 5vw, 64px) 0;
	}

	.portrait {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		object-fit: cover;
		background: var(--surface);
	}

	h2 {
		margin-top: 28px;
		font-size: var(--step-lead);
		line-height: 1.1;
	}

	p {
		margin-top: 20px;
		line-height: 1.6;
	}

	mark {
		background: #cfe0dc;
		color: inherit;
		padding: 0 0.15em;
	}

	.sign {
		margin-top: 36px;
		font-family: var(--display);
		font-style: italic;
		font-weight: 500;
		font-size: var(--step-lead);
		line-height: 1.1;
	}

	.role {
		margin-top: 4px;
		font-size: var(--step-small);
		color: var(--muted);
	}

	/* the tear-off strip, joined to the sheet by a row of perforations */
	.tear {
		margin: 40px calc(-1 * clamp(24px, 5vw, 64px)) 0;
		padding: 24px clamp(24px, 5vw, 64px);
		background: var(--surface);
		border-top: 6px dotted var(--field-1);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}

	@media (max-width: 520px) {
		.tear {
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>
