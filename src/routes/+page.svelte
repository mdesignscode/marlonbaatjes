<script lang="ts">
	import 'animations';
	import { ImageLibrary, MarlonSVG, TypeEffect, RecruitersPitch } from 'components';
	import { isNavigating } from 'globalStore';
	import { inView } from 'inView';
</script>

<svelte:head>
	<title>Home</title>
	<meta
		name="description"
		content="Web Developer Portfolio [Full Stack|Web Dev|Javascript|Python|Software Engineer]"
	/>
</svelte:head>

<section class="relative h-dvh overflow-y-hidden text-coffee">
	<ImageLibrary />

	<div class="home flex h-full flex-col gap-4 overflow-y-auto md:justify-around">
		<!-- Greeting section -->
		<div
			class="hero__greeting relative mb-2 mt-4 flex w-full items-center justify-around gap-2 md:mt-8 md:px-4"
		>
			<div class="flex flex-col items-center">
				<div class="relative flex w-fit flex-col justify-center">
					<div class="flex gap-1 text-xl text-vanilla drop-shadow">
						<h1
							style:animation-delay="1.4s"
							style:animation-duration="1.6s"
							class={[$isNavigating ? 'animFadeOutUp' : 'animFadeInDown']}
						>
							Hi there,
						</h1>
						<h1 class="animFadeIn pacity-0" style:animation-delay="2.8s">I'm</h1>
					</div>
					<span class={['transition-opacity duration-700', $isNavigating && 'opacity-0']}
						><MarlonSVG /></span
					>

					<span class={['typewriter', $isNavigating && 'animWidth']}><TypeEffect /></span>
				</div>

				<div class="home__intro flex w-5/6 flex-col text-white md:w-4/6">
					<p
						style:animation-delay="4.2s"
						class={[
							'glass-effect accent my-4 -ml-2 p-2 transition-all delay-500 duration-500',
							$isNavigating ? 'animFadeOutLeft' : 'animFadeInLeft'
						]}
					>
						A self-taught software engineer and IT specialist from South Africa. I’m passionate
						about building intuitive software and solving technical problems.
					</p>

					<p
						style:animation-delay="4.2s"
						class={[
							'glass-effect accent -mr-2 p-2 text-right transition-all duration-500',
							$isNavigating ? 'animFadeOutRight' : 'animFadeInRight'
						]}
					>
						By day, I'm knee-deep in code, crafting full-stack apps with tools like TypeScript,
						React, and Next.js. By night, I’m the go-to tech guy in my community — whether it's
						fixing broken systems, rooting Android phones, or bypassing FRP locks.
					</p>
				</div>
			</div>
		</div>

		<div class={{ animFadeOutDown: $isNavigating }}><RecruitersPitch /></div>

		<footer
			use:inView={'animFooter'}
			class={[
				'glass-effect accent mt-auto flex flex-col items-center pb-[12vh] pt-2 text-center text-sm text-white',
				$isNavigating ? 'animFadeOutDown' : 'opacity-0'
			]}
		>
			<p>Terminal's open. Neovim’s ready. Let's debug the world.</p>
			<p>© {new Date().getFullYear()} Marlon Baatjes | Always learning, always building.</p>
		</footer>
	</div>
</section>

<style>
	.accent {
		@apply bg-honey-gold/30;
	}

	.typewriter {
		@apply absolute -right-2 bottom-0;
	}

	@keyframes animFooter {
		from {
			height: 0;
			opacity: 0;
		}
		to {
			height: auto;
			opacity: 1;
		}
	}

	:global {
		#recruiters-pitch button {
			animation: fadeInUp 1s ease 3.8s both;
		}

		.animFooter {
			animation: animFooter 7s ease both;
		}
	}
</style>
