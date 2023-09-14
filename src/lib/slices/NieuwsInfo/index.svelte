<script>
	/** @type {import("@prismicio/client").Content.NieuwsInfoSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    <h1>{slice.primary.titlebefore} <span>{slice.primary.titleafter}</span></h1>
    <p>{slice.primary.subtitle}</p>
</section>

<style>
    section{
        margin-top: 4rem;
        width: 100%;
        padding: 2rem 1rem;
    }

    h1{
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    h1 span{
        font-family: 'Courgette', cursive;
        letter-spacing: -6%;
    }
</style>
