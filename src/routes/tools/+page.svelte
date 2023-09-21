<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
	import Tool from "$lib/components/Tool.svelte";

    export let data

    // console.log(data)
</script>
  
<header>
    <section>
        <h1>FDND <span>Tools & Resources</span></h1>
        <p>Waar werken we vandaag aan?</p>
    </section>
</header>

<section >
    <SliceZone slices={data.slices} {components}/>
</section>

<!-- <Tool /> -->

<style>
    :root {
        --color-default: #03061D;
        box-sizing: border-box;
    }
    span{
        color: var(--light-secondary);
    }


    header section {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 4rem;
        gap: 1rem;
        padding: 1rem;
    }
      
    /* h2 {
        font-size: 1rem;
        font-family: 'Inter SemiBold';
        margin-left: 5%;
    } */





</style>
