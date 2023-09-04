<section>
    <h3>5 min geleden</h3>
    <textarea name="" id="" cols="30" rows="5" maxlength="350"></textarea>
    <div class="lower-btns">
        <p>Sprint 13</p>
        <button><img src="icons/edit.svg" alt="">Wijzigen</button>
    </div>
</section>

<style>
    section{
        width: 90%;
        margin: 1rem auto 5rem auto;
        background: var(--light-primary);
        border-radius: var(--radius);
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    h3{
        font-size: 0.75rem;
        font-family: 'Inter SemiBold';
        margin-bottom: 0.9rem;
        color: var(--light-subheading-color);
    }

    textarea{
        background: var(--light-bg);
        border: none;
        border-radius: 8px;
        resize: none;
        margin-bottom: 0.9rem;
        padding: 0.5rem;
    }

    .lower-btns{
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
        background: none;
    }

    p{
        font-family: 'Inter SemiBold';
        font-size: 0.75rem;
        padding: 0.4rem 0.6rem;
        background: var(--light-primary);
        color: var(--light-secondary);
        border: solid 1px var(--light-secondary);
        border-radius: 5px;
        display: flex;
        align-items: center;
    }
</style>