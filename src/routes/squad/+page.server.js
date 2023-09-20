import { createClient } from '$lib/prismicio';

export const prerender = true

const prismicToken = import.meta.env.VITE_PRISMIC_TOKEN

export async function load({ fetch, request }) {
    // Prismic.io link
	const client = createClient('Wum',
    {
        fetch,
        request,
        accesToken: prismicToken
    })

    const page = await client.getByUID('squad', '2b');

    return page.data
}