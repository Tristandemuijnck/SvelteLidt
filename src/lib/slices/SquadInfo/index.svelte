<script>
	/** @type {import("@prismicio/client").Content.SquadInfoSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	{#each slice.items as item, i}
		<p>{item.member.data.link.url}</p>
	{/each}
</section>


<pre style="margin-left: 5rem;">
	{JSON.stringify(slice, null, 2)}
</pre>