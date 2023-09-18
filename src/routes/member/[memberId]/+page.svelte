<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
    import Heading from "../lib/components/landing/Heading.svelte";
    import Notitie from "../lib/components/landing/Notitie.svelte";
    import Progress from "../lib/components/landing/Progress.svelte";
    import Recent from "../lib/components/landing/Recent.svelte";
    import DesktopNav from "../lib/components/landing/desktop/DesktopNav.svelte";
    import MobileNav from "../lib/components/landing/mobile/MobileNav.svelte";
    import SquadInfo from "../lib/components/landing/SquadInfo.svelte";

    export let data;
</script>

<Heading />

<DesktopNav />

<section>
    <SliceZone slices={data.slices} {components}/>
</section>

