<script>
	/** @type {import("@prismicio/client").Content.SquadInfoSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	
</section>

<pre>
	{JSON.stringify(slice, null, 2)}
</pre>