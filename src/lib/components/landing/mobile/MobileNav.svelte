<section>
    <nav>
        <ul>
            <li>
                <a href="/">
                    <figure>
                        <img src="icons/home.svg" alt="">
                        <figcaption>Overzicht</figcaption>
                    </figure>
                </a>
            </li>
            <li>
                <a href="/tools">
                    <figure>
                        <img src="icons/criteria.svg" alt="">
                        <figcaption>Tools</figcaption>
                    </figure>
                </a>
            </li>
            <li>
                <a href="/nieuws">
                    <figure>
                        <img src="icons/nieuws.svg" alt="">
                        <figcaption>Nieuws</figcaption>
                    </figure>
                </a>
            </li>
        </ul>
    </nav>
</section>

<style>
    section{
        width: 100%;
        background: var(--light-primary);
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
    }

    nav{
        width: 90%;
        margin: 0 auto;
        padding: 0.6rem 0;
    }

    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    li {
        list-style-type: none;
    }

    figure{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 0.2rem;
    }

    img{
        height: 22px;
    }

    figcaption{
        font-family: 'Inter SemiBold';
        font-size: 0.70rem;
        color: var(--light-subheading-color);
    }

    @media (min-width: 768px){
        section{
            display: none;
        }
    }
</style>