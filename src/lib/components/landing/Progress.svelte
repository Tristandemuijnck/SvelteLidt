<section>
    <ul>
        <li><button>Midterm 1</button></li>
        <li><button>Endterm 1</button></li>
        <li><button>Midterm 2</button></li>
        <li><button>Endterm 2</button></li>
    </ul>
    <div class="progress-cards">
        <div class="progress-card">
            <p>Methodisch handelen</p>
            <div class="progress-bar">
                <p>2/3</p>
                <div class="progress"></div>
            </div>
        </div>

        <div class="progress-card">
            <p>Samenwerken</p>
            <div class="progress-bar">
                <p>1/3</p>
                <div class="progress"></div>
            </div>
        </div>

        <div class="progress-card">
            <p>Communiceren</p>
            <div class="progress-bar">
                <p>2/3</p>
                <div class="progress"></div>
            </div>
        </div>

        <div class="progress-card">
            <p>Probleemoplossend vermogen</p>
            <div class="progress-bar">
                <p>0/3</p>
                <div class="progress"></div>
            </div>
        </div>

        <div class="progress-card">
            <p>Lerend vermogen</p>
            <div class="progress-bar">
                <p>3/3</p>
                <div class="progress"></div>
            </div>
        </div>
    </div>
</section>

<style>
    section{
        width: 100%;
        margin: 2rem auto 1rem auto;
        display: flex;
        flex-direction: column;
    }

    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 5%;
    }

    ul button{
        font-family: 'Inter SemiBold';
        font-size: 0.75rem;
        padding: 0.4rem 0.6rem;
        border-radius: 5px;
        border: none;
        background: var(--light-primary);
        color: var(--light-secondary);
        border: solid 1px var(--light-secondary);
    }

    .progress-cards{
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        padding-left: 5%;
        padding-right: 5%;
        column-gap: 1rem;
        margin: 1rem 0;
    }

    .progress-cards::-webkit-scrollbar {
        display: none;
    }

    .progress-card{
        background: var(--light-primary);
        border-radius: var(--radius);
        padding: 0.6rem;
    }

    .progress-card > p{
        font-family: 'Inter SemiBold';
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
        white-space: nowrap;
    }

    .progress-bar{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        width: 8rem;
    }

    .progress-bar > p{
        font-family: 'Inter SemiBold';
        font-size: 0.75rem;
    }

    .progress{
        background: var(--light-bg);
        height: 0.5rem;
        width: 100%;
        border-radius: 5px;
    }
</style>