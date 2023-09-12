<section>
    <nav>
        <ul>
            <li>
                <a href="/">
                    <figure>
                        <img src="icons/home.svg" alt="">
                        <figcaption>Home</figcaption>
                    </figure>
                </a>
            </li>
            <li>
                <a href="/criteria">
                    <figure>
                        <img src="icons/criteria.svg" alt="">
                        <figcaption>Criteria</figcaption>
                    </figure>
                </a>
            </li>
            <li>
                <a href="/notities">
                    <figure>
                        <img src="icons/notities.svg" alt="">
                        <figcaption>Notities</figcaption>
                    </figure>
                </a>
            </li>
            <li>
                <a href="/profiel">
                    <figure>
                        <img src="icons/user.svg" alt="">
                        <figcaption>Profiel</figcaption>
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
        display: none;
    }

    nav{
        width: 90%;
        margin: 0 auto;
        padding: 0.6rem 0;
    }

    ul{
        display: flex;
        justify-content: space-between;
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
        height: 25px;
    }

    figcaption{
        font-family: 'Inter SemiBold';
        font-size: 0.75rem;
        color: var(--light-subheading-color);
    }
</style>