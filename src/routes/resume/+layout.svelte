<script lang="ts">
	import 'globalCss';
	let { children } = $props();
</script>

<div class="h-dvh overflow-y-auto bg-vanilla text-coffee">
        {@render children()}
</div>

