<section>
    <h2>Code <span>Vragen</span></h2>
    <div class="filter-buttons">
        <button>HTML</button>
        <button>JavaScript</button>
        <button>CSS</button>
        <button>Feedback</button>
        <button>Git</button>
        <button>NodeJs</button>
        <button>SvelteKit</button>
    </div>
    <div class="channel-question-wrapper">
        <div class="channel-question">
            <div class="question-top">
                <h3>Semantiek SvelteKit</h3>
                <p>11 reacties</p>
            </div>
            <div class="question-bottom">
                <p>6d geleden</p>
                <img src="/icons/react.svg" alt="">
            </div>
        </div>

        <div class="channel-question">
            <div class="question-top">
                <h3>Problemen met code pushen</h3>
                <p>9 reacties</p>
            </div>
            <div class="question-bottom">
                <p>8d geleden</p>
                <img src="/icons/react.svg" alt="">
            </div>
        </div>

        <div class="channel-question">
            <div class="question-top">
                <h3>Semantiek SvelteKit</h3>
                <p>11 reacties</p>
            </div>
            <div class="question-bottom">
                <p>9d geleden</p>
                <img src="/icons/react.svg" alt="">
            </div>
        </div>

        <div class="channel-question">
            <div class="question-top">
                <h3>Semantiek SvelteKit</h3>
                <p>11 reacties</p>
            </div>
            <div class="question-bottom">
                <p>9d geleden</p>
                <img src="/icons/react.svg" alt="">
            </div>
        </div>

    </div>
</section>

<style>
    section{
        width: 100%;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
        margin-bottom: 5rem;
    }

    h2{
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
    }

    h2 span{
        font-family: 'Courgette', cursive;
        letter-spacing: -6%;
        color: var(--light-secondary);
    }

    .filter-buttons{
        display: flex;
        column-gap: 0.5rem;
        margin-bottom: 1rem;
        margin-top: 0.8rem;
        position: sticky;
        top: 4rem;
        overflow-x: scroll;
        background: var(--light-bg);
        padding: 1rem 0;
    }

    .filter-buttons::-webkit-scrollbar {
        display: none;
    }

    button{
        padding: 0.5rem 0.8rem;
        border-radius: var(--radius);
        border: solid 1px var(--light-secondary);
        background: var(--light-primary);
        color: var(--light-secondary);
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
    }

    .channel-question-wrapper{
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        /* overflow-y: scroll;
        max-height: 20rem; */
    }

    .channel-question{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: var(--light-primary);
        padding: 1rem;
        border-radius: var(--radius);
    }

    .question-top{
        display: flex;
        flex-direction: column;
        row-gap: 0.8rem;
        max-width: 65%;
    }

    h3{
        font-size: 1rem;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .question-top p{
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--light-subheading-color);
    }

    .question-bottom{
        display: flex;
        flex-direction: column;
        row-gap: 0.8rem;
        align-items: flex-end;
    }

    .question-bottom p{
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--light-subheading-color);
    }
</style>