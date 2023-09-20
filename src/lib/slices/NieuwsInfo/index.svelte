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
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.2rem;
    }

    h1 span{
        font-family: 'Courgette', cursive;
        letter-spacing: -6%;
        color: var(--light-secondary);
    }

    p{
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--light-subheading-color);
    }
</style>
