<script>
    import DesktopNav from "$lib/components/landing/desktop/DesktopNav.svelte";
    import MobileNav from "$lib/components/landing/mobile/MobileNav.svelte";
	import Tool from "$lib/components/Tool.svelte";
	
    
</script>

<header>
    <section>
        <h1>FDND <span>Tools & Resources</span></h1>
        <p>Wat schrijf je vandaag op?</p>
    </section>
</header>

<DesktopNav />

<Tool />

<MobileNav />

<style>
    :root {
        --color-default: #03061D;
        box-sizing: border-box;
    }
    span{
        color: var(--light-secondary);
    }

    /* h2 {
        font-size: 1rem;
        font-family: 'Inter SemiBold';
        margin-left: 5%;
    } */


   
</style>
