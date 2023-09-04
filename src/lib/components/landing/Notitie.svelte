<section>
    <h2>Nieuwe notitie</h2>
    <textarea name="" id="" cols="30" rows="6" maxlength="350"></textarea>
    <div class="action-btns">
        <button class="sec-btn"><img src="icons/tag.svg" alt="">Tags</button>
        <button class="pri-btn"><img src="icons/add.svg" alt="">Opslaan</button>
    </div>
</section>

<style>
    section{
        width: 90%;
        margin: 2rem auto;
        background: var(--light-primary);
        border-radius: var(--radius);
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    h2{
        font-size: 1rem;
        font-family: 'Inter SemiBold';
        margin-bottom: 0.9rem;
    }

    textarea{
        background: var(--light-bg);
        border: none;
        border-radius: 8px;
        resize: none;
        margin-bottom: 0.9rem;
        padding: 0.5rem;
    }

    .action-btns{
        display: flex;
        justify-content: space-between;
    }

    button{
        font-family: 'Inter SemiBold';
        font-size: 0.75rem;
        padding: 0.4rem 0.6rem;
        border-radius: 5px;
        border: none;
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }

    .sec-btn{
        background: var(--light-primary);
        color: var(--light-secondary);
        border: solid 1px var(--light-secondary);
    }

    .pri-btn{
        background: var(--light-secondary);
        color: var(--light-primary);
    }

</style>