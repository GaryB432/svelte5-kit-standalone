import { createLetters } from '$lib/tester.svelte';
import type { LayoutLoad } from './$types';

export const load = (async () => {
	return {
		letterStuff: createLetters()
	};
}) satisfies LayoutLoad;
