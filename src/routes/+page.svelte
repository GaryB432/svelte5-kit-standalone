<script lang="ts">
	import { browser } from '$app/environment';

	const localStorageValue = browser && window.localStorage.getItem('letters');
	// const localStorageValue = JSON.stringify(['A', 'B']); // works!

	const initial: string[] = localStorageValue ? JSON.parse(localStorageValue) : [];
	// -----------------
	// seems to cause empty hyrdate_nodes array
	let letters = $state<string[]>(initial);
	let counter = $state(65);

	function addNext() {
		if (counter > 65 + 25) {
			throw new Error('too much');
		}
		letters = [...letters, String.fromCharCode(counter++)];
	}
	function reverse() {
		letters = letters.slice().reverse();
	}
	function save() {
		window.localStorage.setItem('letters', JSON.stringify(letters));
	}
</script>

{#snippet welcome()}
	<h1>Welcome to SvelteKit</h1>
{/snippet}
{@render welcome()}

<button onclick={addNext}>Go</button>
<button onclick={reverse}>Reverse</button>
<button onclick={save}>Save</button>
<a href="./">home</a>

{#each letters as ltr}
	{ltr}
{/each}
<h2>Press F12 to open dev tools</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
