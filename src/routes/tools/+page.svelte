<script>
    import Heading from "$lib/components/landing/Heading.svelte";
    import DesktopNav from "$lib/components/landing/desktop/DesktopNav.svelte";
    import MobileNav from "$lib/components/landing/mobile/MobileNav.svelte";
	import Tool from "$lib/components/Tool.svelte";
    
</script>

<Heading />

<DesktopNav />

<Tool />

<MobileNav />

<style>
    :root {
        --color-default: #03061D;
        box-sizing: border-box;
    }

    /* h2 {
        font-size: 1rem;
        font-family: 'Inter SemiBold';
        margin-left: 5%;
    } */


   
</style>
