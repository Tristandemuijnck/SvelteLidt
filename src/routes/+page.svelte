<script>
    import Heading from "../lib/components/landing/Heading.svelte";
    import DesktopNav from "../lib/components/landing/desktop/DesktopNav.svelte";
    import MobileNav from "../lib/components/landing/mobile/MobileNav.svelte";
</script>

<Heading />

<DesktopNav />

<h2>Recente notities</h2>

<MobileNav />

<style>
    :root {
        --color-default: #03061D;
    }

    h2{
        font-size: 1rem;
        font-family: 'Inter SemiBold';
        margin-left: 5%;
    }
</style>
