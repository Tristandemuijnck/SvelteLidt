<script>
	/** @type {import("@prismicio/client").Content.SingleToolSlice} */
	export let slice;
	console.log(slice.items)
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	Placeholder component for {slice.slice_type} (variation: {slice.variation}) Slices

	<!-- {#each slice.items as item, i}
		<p>{item.tool.data.name}</p>
	{/each} -->

</section>

<!-- <pre>
	{JSON.stringify(slice.items, null, 2)}
</pre> -->
