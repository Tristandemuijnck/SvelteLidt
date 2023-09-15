<script>
    import MobileNav from "$lib/components/landing/mobile/MobileNav.svelte";
    import DesktopNav from "../lib/components/landing/desktop/DesktopNav.svelte";
    import Heading from "../lib/components/landing/mobile/Heading.svelte";
</script>

<!-- Mobile heading -->
<Heading />

<!-- Desktop navigation -->
<DesktopNav />

<slot />

<!-- Mobile navigation -->
<MobileNav />