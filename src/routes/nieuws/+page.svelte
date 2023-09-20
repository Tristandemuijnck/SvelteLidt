<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
    import ChannelText from '../../lib/components/nieuws/ChannelText.svelte';
    import ChannelQuestion from '../../lib/components/nieuws/ChannelQuestion.svelte';

    export let data
</script>

<main>
    <section>
        <SliceZone slices={data.page.data.slices} {components}/>
    </section>

    <section class="content">
        <ChannelText generalChannelMsg={data.allMessages} inspoChannelMsg={data.allInspo} />

        <ChannelQuestion threads={data.allThreads}/>
    </section>
</main>

<!-- <pre>
    {JSON.stringify(data.slices, null, 2)}
</pre> -->

<style>
    @media (min-width: 768px){
        main{
            margin-left: 3rem;
        }
    }

    @media (min-width: 1024px){
        main{
            display: flex;
            flex-direction: column;
        }

        .content{
            display: flex;
            max-height: 100vh;
        }
    }
</style>