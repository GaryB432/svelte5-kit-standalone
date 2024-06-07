<script lang="ts">
	let { data } = $props();
</script>

{#snippet welcome()}
	<h1>Welcome to SvelteKit</h1>
{/snippet}
{@render welcome()}
<button onclick={data.letterStuff.addNext}>Go</button>
<button onclick={data.letterStuff.reverse}>&lt;--</button>
{#each data.letterStuff.letters as ltr}
	{ltr}
{/each}
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
