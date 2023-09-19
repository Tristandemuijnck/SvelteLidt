<script>
    export let threads
</script>

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
        {#each threads as thread}
            <div class="channel-question">
                <div class="question-top">
                    <h3>{thread.title}</h3>
                    <p>{thread.responses} reacties</p>
                </div>
                <div class="question-bottom">
                    <p>{thread.time}</p>
                    <img src="/icons/react.svg" alt="">
                </div>
            </div>
        {/each}
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
        /* margin-bottom: 0.5rem; */
        /* margin-top: 0.4rem; */
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
        overflow-y: scroll;
        max-height: 20rem;
    }

    .channel-question-wrapper::-webkit-scrollbar {
        width: 1px;
    }

    .channel-question-wrapper::-webkit-scrollbar-thumb {
        background: var(--light-secondary);
        border-radius: var(--radius);
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
        max-width: 61%;
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
        font-size: 0.7rem;
        font-weight: 500;
        color: var(--light-subheading-color);
    }

    @media (min-width: 425px){
        .question-top{
            max-width: 70%;
        }
    }

    @media (min-width: 1024px){
        section{
            width: 40%;
            margin-top: 0;
            margin-bottom: 3rem;
        }

        .channel-question-wrapper{
            max-height: 35rem;
        }
    }

    @media (min-width: 1440px){
        section{
            width: 50%;
        }

        .question-top{
            max-width: 83%;
        }
    }
</style>