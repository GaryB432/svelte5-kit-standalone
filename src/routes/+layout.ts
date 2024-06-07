import { createLetters } from '$lib/tester.svelte';
import type { LayoutLoad } from './$types';

export const load = (async () => {
	console.log('yep loading');
	return {
		letterStuff: createLetters()
	};
}) satisfies LayoutLoad;
