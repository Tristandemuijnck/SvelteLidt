<section>
    <img src="img/logo.svg" alt="" width=120 height="70">
</section>

<style>
    section{
        width: 100%;
        background: var(--light-primary);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        padding: 0.6rem 0;
    }

    @media (min-width: 768px){
        section{
            display: none;
        }
    }
</style>