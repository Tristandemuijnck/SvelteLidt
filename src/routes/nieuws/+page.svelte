<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
    import ChannelText from '../../lib/components/nieuws/ChannelText.svelte';

    export let data;
</script>

<section>
    <SliceZone slices={data.slices} {components}/>
</section>

<ChannelText />

<!-- <pre>
    {JSON.stringify(data.slices, null, 2)}
</pre> -->

<style>

</style>