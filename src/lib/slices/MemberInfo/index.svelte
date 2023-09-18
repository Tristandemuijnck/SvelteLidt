<script>
	/** @type {import("@prismicio/client").Content.MemberInfoSlice} */
	export let slice;
</script>

<article data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
		<img src={slice.primary.image.url} alt="Foto van {slice.primary.firstname} {slice.primary.lastname}" />
		<a href="/member">
			<h2>{slice.primary.firstname}</h2>
			<h3>{slice.primary.lastname}</h3>
		</a>
</article>

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
        border-radius: var(--unit-default);
        padding: var(--unit-default);
        width: 14rem;
        height: 18rem;
        position: relative;
    }

    article a {
        color: inherit;
        position: absolute;
        bottom: var(--unit-default);
        left: var(--unit-default);
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
        border-radius: var(--unit-small);
        margin-bottom: 0rem;
        object-fit: cover;
        width: 100%;
    }

	/* Typography */
	h3 {
        font-size: var(--unit-default);
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
            padding: var(--unit-default) 0;
        }

        section {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: start;
            gap: 1.25em;
            margin: 0 0 var(--unit-default) 18rem;
            width: 72vw;
        }

        article {
            background-color: white;
            border-radius: var(--unit-default);
            padding: var(--unit-default);
            width: 14rem;
        }

        img {
            aspect-ratio: 1/1;
            border-radius: var(--unit-small);
            margin-bottom: var(--unit-default);
            object-fit: cover;
            width: 100%;
            height: auto;
        }
    }
</style>

