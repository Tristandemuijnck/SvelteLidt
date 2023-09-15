<script>
	/** @type {import("@prismicio/client").Content.MemberInfoSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h1>{slice.primary.name}</h1>
</section>
