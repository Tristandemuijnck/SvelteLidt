<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
	import Tool from "$lib/components/Tool.svelte";

    export let data
</script>

<header>
    <section>
        <h1>FDND <span>Tools & Resources</span></h1>
        <p>Wat schrijf je vandaag op?</p>
    </section>
</header>

<section>
    <SliceZone slices={data.slices} {components}/>
</section>

<Tool />

<pre>
    {JSON.stringify(data.slices, null, 2)}
</pre>

<style>
    :root {
        --color-default: #03061D;
        box-sizing: border-box;
    }
    span{
        color: var(--light-secondary);
    }

    /* h2 {
        font-size: 1rem;
        font-family: 'Inter SemiBold';
        margin-left: 5%;
    } */





</style>
