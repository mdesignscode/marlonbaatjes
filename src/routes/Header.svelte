<script lang="ts">
	import { page } from '$app/state';

	const links = [
		{ title: 'Work', url: '/#work' },
		{ title: 'Projects', url: '/projects' },
		{ title: 'Cover art', url: '/#covers' }
	];

	const current = (url: string) =>
		url === '/projects' && page.url.pathname.startsWith('/projects') ? 'page' : undefined;
</script>

<header>
	<div class="bar wrap">
		<a class="mark" href="/" aria-label="Marlon Baatjes, home">
			<span class="mono" aria-hidden="true">MB</span>
			<span class="name">Marlon Baatjes</span>
		</a>

		<nav aria-label="Main">
			<ul>
				{#each links as link}
					<li class:keep={link.url === '/projects'}>
						<a href={link.url} aria-current={current(link.url)}>{link.title}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<a class="btn btn--paper" href="/#contact">Get in touch</a>
	</div>
</header>

<style>
	header {
		position: relative;
		z-index: 2;
		background: var(--field-1);
		color: var(--field-1-ink);
	}

	.bar {
		height: 76px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
	}

	.mark {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		font-weight: 600;
		font-size: var(--step-small);
	}

	.mono {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: var(--bg);
		color: var(--ink);
		font-family: var(--display);
		font-weight: 800;
		font-size: var(--step-small);
		letter-spacing: -0.02em;
		transition: transform 300ms var(--ease-out);
	}

	.mark:hover .mono {
		transform: rotate(-12deg);
	}

	ul {
		display: flex;
		gap: clamp(16px, 3vw, 44px);
	}

	nav a {
		font-size: var(--step-small);
		font-weight: 600;
		text-decoration: none;
		padding-block: 12px;
		position: relative;
	}

	nav a::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 6px;
		height: 2px;
		background: currentColor;
		transform: scaleX(0);
		transform-origin: left;
		transition: transform 240ms var(--ease-out);
	}

	nav a:hover::after,
	nav a[aria-current='page']::after {
		transform: scaleX(1);
	}

	@media (max-width: 720px) {
		.name {
			display: none;
		}

		li:not(.keep) {
			display: none;
		}

		.bar {
			height: 68px;
			gap: 12px;
		}
	}
</style>
