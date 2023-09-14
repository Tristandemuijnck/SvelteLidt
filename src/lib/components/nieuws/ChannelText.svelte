<section>
    <div class="filter-buttons">
        <button class="active">Algemeen</button>
        <button>Inspiratie</button>
    </div>
    <div class="channel-text-wrapper">
        <div class="chat-msg">
            <div class="msg-info">
                <p><span>Siem</span> @ 11-09-2023 12:11</p>
            </div>
            <div class="msg-text">
                <p>Hoe maak ik een nieuwe slice aan?</p>
            </div>
        </div>

        <div class="chat-msg">
            <div class="msg-info">
                <p><span>Stefan</span> &gt; 11-09-2023 12:12</p>
            </div>
            <div class="msg-text">
                <p>Druk op "add slice".</p>
            </div>
        </div>

        <div class="chat-msg">
            <div class="msg-info">
                <p><span>Siem</span> - 11-09-2023 12:13</p>
            </div>
            <div class="msg-text">
                <p>Bedankt!</p>
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
    }

    .filter-buttons{
        display: flex;
        column-gap: 0.5rem;
        margin-bottom: 1rem;
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

    .active{
        background: var(--light-secondary);
        color: var(--light-primary);
    }

    .channel-text-wrapper{
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        background: var(--light-primary);
        padding: 1rem;
        border-radius: var(--radius);
    }

    .chat-msg{
        display: flex;
        flex-direction: column;
        row-gap: 0.5rem;
    }

    .msg-info p{
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--light-subheading-color);
    }

    .msg-info p span{
        font-weight: 700;
        color: var(--light-secondary);
    }

    .msg-text{
        background: var(--light-bg);
        padding: 0.8rem 1rem;
        border-radius: var(--radius);
    }

    .msg-text p{
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--light-font-color);
    }
</style>