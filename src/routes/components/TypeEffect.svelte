<script lang="ts">
	import 'animations';
	import { onMount, tick } from 'svelte';

	const allSkills = [
		'Web Developer',
		'IT Specialist',
		'Linux Enthusiast',
		'Problem Solver',
		'Gamer',
		'Music Lover',
		'Creative Designer',
		'Internet Power User'
	];

	let skill = '';
	let index = 0;

	let prefersAnimations = false;
	onMount(() => {
		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			prefersAnimations = true;
		}

		setTimeout(() => typeEffect(), 3200);
	});

	async function typeEffect() {
		while (true) {
			const word = allSkills[index];

			// Type letters one by one
			for (let i = 0; i <= word.length; i++) {
				skill = word.slice(0, i);
				await tick(); // Ensure UI updates
				await delay(100);
			}

			// Pause before erasing
			await delay(1500);

			// Erase letters one by one
			for (let i = word.length; i >= 0; i--) {
				skill = word.slice(0, i);
				await tick();
				await delay(50);
			}

			// Move to next skill
			index = (index + 1) % allSkills.length;
		}
	}

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
</script>

<div class="fade-in relative w-fit pl-2">
	<!-- decorative box -->
	<span
		class="absolute bottom-1 left-0 h-1/2 w-full -skew-x-6 -skew-y-[2deg] bg-white text-white"
		aria-hidden="true"
	></span>

	<p class="text-dark relative z-10 text-sm">{skill}<span class="blinking-cursor">|</span></p>
</div>

<style>
	.fade-in {
		opacity: 0;
		animation: fadeIn 1s ease 2s forwards;
	}
	.blinking-cursor {
		display: inline-block;
		width: 0.6em;
		animation: blink 1s infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
