<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
    // import Heading from "../lib/components/landing/Heading.svelte";
    import DesktopNav from "../../lib/components/landing/desktop/DesktopNav.svelte";
    import MobileNav from "../../lib/components/landing/mobile/MobileNav.svelte";
	import MemberInfo from '../../lib/components/landing/memberInfo.svelte';

    export let data;
</script>

<DesktopNav />

<MobileNav />

<MemberInfo />

<section>
    <SliceZone slices={data.slices} {components}/>
</section>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>