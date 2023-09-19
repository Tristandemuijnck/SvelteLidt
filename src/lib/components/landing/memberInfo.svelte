<script>
	/** @type {import("@prismicio/client").Content.SquadSlice} */

	import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'

	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation} class="friends-overview">
    <SliceZone slices={slice.slices} {components}/>
</section>


<pre>
    {JSON.stringify(slice, null, 2)}
</pre>

