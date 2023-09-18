<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
	import DesktopNav from '../../../lib/components/landing/desktop/DesktopNav.svelte';
	import MobileNav from '../../../lib/components/landing/mobile/MobileNav.svelte';

    export let data;
</script>

<DesktopNav />

<MobileNav />

<header>
	<h1>Vrienden van <em>Stefan</em></h1>
</header>

<section>
    <SliceZone slices={data.slices} {components}/>
</section>

<!-- <pre>
    {JSON.stringify(data, null, 2)}
</pre> -->

<style>

    /* Layout */
    section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.25em;
        justify-content: center;
        margin: 0 auto;
        width: 90vw;
    }
    article {
        background-color: white;
        border-radius: 1rem;
        padding: 1rem;
        width: 14rem;
        height: 18rem;
        position: relative;
    }

    article a {
        color: inherit;
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        transform: rotate(0deg);
        transition: 0.3s ease-in-out;
    }

    article a h2, article a h3 {
        transition: 0.3s ease-in-out;
    }

    article a:is(:hover, :focus) {
        color: #5A00D8;
        transform: rotate(-8deg);
    }

    article a:is(:hover, :focus) h2 {
        transform: rotate(12deg);
    }
    article a:is(:hover, :focus) h3 {
    color: #b586f8;
    }

	img {
        aspect-ratio: 1/1;
        border-radius: 0.25rem;
        margin-bottom: 1rem;
        object-fit: cover;
        width: 100%;
    }

	/* Typography */
	h3 {
        font-size: 1rem;
    }

	em {
        color: #5a00d8;
        font-family: 'Courgette';
        font-style: normal;
        letter-spacing: -2.4px;
    }

	@media (min-width: 64rem) {
        header {
            margin-left: 18rem;
            padding: 1rem 0;
        }

        section {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: start;
            gap: 1.25em;
            margin: 0 0 1rem 18rem;
            width: 72vw;
        }

        article {
            background-color: white;
            border-radius: 1rem;
            padding: 1rem;
            width: 14rem;
        }

        img {
            aspect-ratio: 1/1;
            border-radius: 0.25rem;
            margin-bottom: 1rem;
            object-fit: cover;
            width: 100%;
            height: auto;
        }
    }
</style>

