<script>
    import Heading from "../lib/components/landing/Heading.svelte";
    import Notitie from "../lib/components/landing/Notitie.svelte";
    import Progress from "../lib/components/landing/Progress.svelte";
    import Recent from "../lib/components/landing/Recent.svelte";
    import DesktopNav from "../lib/components/landing/desktop/DesktopNav.svelte";
    import MobileNav from "../lib/components/landing/mobile/MobileNav.svelte";
    import SquadInfo from "../lib/components/landing/SquadInfo.svelte";
</script>

<Heading />

<DesktopNav />

<Notitie />

<Progress />

<h2>Recente notities</h2>

<Recent />

<MobileNav />

<SquadInfo />

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
