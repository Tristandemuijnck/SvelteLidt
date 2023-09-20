<script>
	/** @type {import("@prismicio/client").Content.ToolInfoSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	Placeholder component for {slice.slice_type} (variation: {slice.variation}) Slices

	{console.log(slice)}
</section>
