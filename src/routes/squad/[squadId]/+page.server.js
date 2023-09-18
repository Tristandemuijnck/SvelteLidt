import { createClient } from '$lib/prismicio';

export const prerender = true;

export async function load({ fetch, request, params }) {
	const client = createClient({ fetch, request });

	let squad = params.squadId

	const page = await client.getByUID('squad', squad);

    console.log('INFO',page);

	return page.data;
    // console.log(page.data.slices);
}