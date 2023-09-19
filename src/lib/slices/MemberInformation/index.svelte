<script>
	/** @type {import("@prismicio/client").Content.SquadSlice} */

	import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'

	export let slice;
</script>


<article data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<img src={slice.primary.image.url} alt="Foto van {slice.primary.firstname} {slice.primary.lastname}" />
	<a href="/member/{slice.primary.firstname}">
		<h2>{slice.primary.firstname}</h2>
		<h3>{slice.primary.lastname}</h3>
	</a>
</article>