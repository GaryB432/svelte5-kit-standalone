import { dev } from '$app/environment';
import { PUBLIC_DB_HOST } from '$env/static/public';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	console.log('here i am');
	console.log(PUBLIC_DB_HOST, dev);

	return await resolve(event);
}) satisfies Handle;
