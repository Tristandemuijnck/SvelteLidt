import { createClient } from '$lib/prismicio';

export const prerender = true;

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	const page = await client.getByUID('nieuws', 'nieuws');

    console.log('INFO',page);

	return page.data;
    // console.log(page.data.slices);
}