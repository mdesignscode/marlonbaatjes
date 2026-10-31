<script lang="ts">
	let { children } = $props();
</script>

<div class="desk">
	{@render children()}
</div>

<style>
	.desk {
		min-height: 100dvh;
		background: var(--surface);
		padding: 40px 16px;
	}

	@media print {
		.desk {
			background: none;
			padding: 0;
			min-height: 0;
		}
	}
</style>
