<script>
    import Sinterklaas from '$lib/assets/images/Sinterklaas.jpg'
</script>

<h2>Tools & Fools</h2>

<main>
    
    <section class="article-wrapper">
       
        <article class="artoocle">
            <a href="/tools">
                <img src='/images/Sinterklaas.jpg' alt="ToolsSource">
                <h3 class="tool-title">Canva</h3>
                <p class="tool-description"><em>Design tool - Learn to design</em></p>
            </a>
        </article>
        <article class="artoocle">
            <a href="/tools">
                <img src='/images/Sinterklaas.jpg' alt="ToolsSource">
                <h3 class="tool-title">Source NAME</h3>
                <p class="tool-description"><em>Description</em></p>
            </a>
        </article>
        <article class="artoocle">
            <a href="/tools">
                <img src='/images/Sinterklaas.jpg' alt="ToolsSource">
                <h3 class="tool-title">Source NAME</h3>
                <p class="tool-description"><em>Description</em></p>
            </a>
        </article>
        <article class="artoocle">
            <a href="/tools">
                <img src='/images/Sinterklaas.jpg' alt="ToolsSource">
                <h3 class="tool-title">Canva</h3>
                <p class="tool-description"><em>Design tool - Learn to design</em></p>
            </a>
        </article>
        <article class="artoocle">
            <a href="/tools">
                <img src='/images/Sinterklaas.jpg' alt="ToolsSource">
                <h3 class="tool-title">Source NAME</h3>
                <p class="tool-description"><em>Description</em></p>
            </a>
        </article>
        <article class="artoocle">
            <a href="/tools">
                <img src='/images/Sinterklaas.jpg' alt="ToolsSource">
                <h3 class="tool-title">Source NAME</h3>
                <p class="tool-description"><em>Description</em></p>
            </a>
        </article>
    </section>
</main>

<style> 

main {
    /* margin: 0 18rem; */
    /* margin-left: 17rem; */
    border-radius: 0.8em;
} 

.article-wrapper {
    width: 100%;
    margin: 2rem;
    padding: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    /* gap: 2rem 0; */
}    

.artoocle {
    /* flex: 0 1 calc(25% - 1%); */
    /* min-width: 20rem; */
    /* width: 33.3%; */
    max-width: 30em;
    min-width: 20em;
    height: rem;
    border-radius: 1em;
    background-color: white;
    color: white;
    padding: .5em
}

.artoocle a img {
   width: 100%;
   height: 15em; 
   border-radius: 1em;
   padding: 0.5em;
}

.tool-description {
    padding: 0 0.5em;
}

h2 {
    font-size: 1rem;
    font-family: 'Inter SemiBold';
    margin-left: 5%;
    }

.tool-title {
    font-size: 1.1rem;
    font-family: 'Inter SemiBold';
    padding: 1em 0;
    margin-left: 5%;
    
}




@media (min-width: 20rem) {
    main {
        margin: auto;
    }
    
    /* .artoocle {
        max-width: 25rem;
    } */
}
</style>