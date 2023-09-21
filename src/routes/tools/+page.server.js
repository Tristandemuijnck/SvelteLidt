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

    const page = await client.getByUID('tools', 'tools', {'fetchLinks': ['tool.name', 'tool.link', 'tool.visual', 'tool.description']});
    // console.log(page)

    return page.data
}