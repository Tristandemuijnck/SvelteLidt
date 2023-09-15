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
    </section>
</main>

<style> 

main {
    margin: 0 4em;
    border-radius: 0.8em;
} 

.article-wrapper {
    width: 100%;
    margin: 2rem auto;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}    

.artoocle {
    width: 20rem;
    height: 25rem;
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
    margin-left: 5%
    
}
</style>