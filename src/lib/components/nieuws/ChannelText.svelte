<script>
    export let generalChannelMsg
    export let inspoChannelMsg

    let general
    let inspo
    let generalChannel
    let inspoChannel

    function changeChannel(){
        general.classList.toggle('active')
        inspo.classList.toggle('active')
        generalChannel.classList.toggle('hidden-channel')
        inspoChannel.classList.toggle('hidden-channel')
    }
</script>

<section>
    <div class="filter-buttons">
        <button class="active" bind:this={general} on:click={changeChannel}>Algemeen</button>
        <button bind:this={inspo} on:click={changeChannel}>Inspiratie</button>
    </div>
    <div class="channel-text-wrapper" bind:this={generalChannel}>
        <!-- Loop through all messages -->
        {#each generalChannelMsg as msg}
            <div class="chat-msg">
                <div class="msg-info">
                    {#if msg.name === null}
                        <p><span>{msg.author}</span> • {msg.time}</p>
                    {:else}
                        <p><span>{msg.name}</span> • {msg.time}</p>
                    {/if}
                </div>
                <div class="msg-text">
                    <p>{msg.content}</p>
                </div>
            </div>
        {/each}
    </div>

    <div class="channel-text-wrapper hidden-channel" bind:this={inspoChannel}>
        <!-- Loop through all messages -->
        {#each inspoChannelMsg as msg}
            <div class="chat-msg">
                <div class="msg-info">
                    {#if msg.name === null}
                        <p><span>{msg.author}</span> • {msg.time}</p>
                    {:else}
                        <p><span>{msg.name}</span> • {msg.time}</p>
                    {/if}
                </div>
                <div class="msg-text">
                    <p>{msg.content}</p>
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
        flex-direction: column-reverse;
        row-gap: 1rem;
        background: var(--light-primary);
        padding: 1rem;
        border-radius: var(--radius);
        max-height: 25rem;
        overflow-y: scroll;
        border: solid 4px var(--light-primary);
        box-shadow: var(--box-shadow);
    }

    .channel-text-wrapper::-webkit-scrollbar {
        width: 1px;
    }

    .channel-text-wrapper::-webkit-scrollbar-thumb {
        background: var(--light-secondary);
        border-radius: var(--radius);
    }

    .hidden-channel{
        display: none;
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
        color: var(--light-subheading-color);
        line-height: 1.4;
    }

    @media (min-width: 1024px){
        section{
            width: 60%;
        }

        .channel-text-wrapper{
            max-height: 40rem;
        }
    }

    @media (min-width: 1440px){
        section{
            width: 50%;
        }
    }
</style>