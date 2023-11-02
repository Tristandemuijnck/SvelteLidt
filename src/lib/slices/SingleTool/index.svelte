<script>
	/** @type {import("@prismicio/client").Content.SingleToolSlice} */
	export let slice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<section class="article-wrapper">
		{#each slice.items as item}
		<article class="section-item">
			<a href="{item.tool.data.link.url}" target="_blank">
				<div class="img-wrapper">
					{#if item.tool.data.visual}
						<img class="img-prismic" src="{item.tool.data.visual}" alt="{item.tool.data.alt}">
					{:else}
						<img class="img-fallback" src="/img/logo.svg" alt="{item.tool.data.alt}">
					{/if}
				</div>
				<h3 class="tool-title">{item.tool.data.name}</h3>
				<p class="tool-description"><em>{item.tool.data.description}</em></p>
			</a>
		</article>
		{/each}
	</section>
</section>

<style> 

	main {
		border-radius: 0.8em;
	} 

	.article-wrapper {
		width: 100%;
		padding: 1em;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.5em;
	} 

	.section-item {
		width: min(100% - 50px, 200px);
		max-width: 30em;
		min-width: 18em;
		border-radius: 1em;
		background-color: white;
		color: white;
		padding: .5em
	}

	.img-wrapper{
		display: flex;
		justify-content: center;
	}
	
	.section-item a img {
	   width: 100%;
	   height: 15rem; 
	   border-radius: 1rem;
	   padding: 0.5rem;
	}

	.section-item a .img-prismic {
	   width: 100%;
	   height: 15rem; 
	   border-radius: 1rem;
	   padding: 0.5rem;
	}

	.section-item a .img-fallback {
	   width: 100%;
	   height: 15rem; 
	   width: 50%;
	   border-radius: 1rem;
	   padding: 0.5rem;
	}
	
	.tool-description {
		padding: 0.5rem 1rem;
		
	}
	
	h2 {
		font-size: 1.2rem;
		font-family: 'Inter SemiBold';
		margin-left: 19rem;
		}
	
	.tool-title {
		font-size: 1.1rem;
		font-family: 'Inter SemiBold';
		padding: 1rem 0;
		margin-left: 5%;
		color: var(--color-default);	
	}

	.tool-description {
		color: var(--color-default);
	}
	
	@media (min-width: 20rem) {
		main {
			margin: auto;
		}
		
		/* .artoocle {
			max-width: 25rem;
		} */
	}
	
	@media (min-width: 64rem) {
			.article-wrapper {
				margin-left: 18rem;
				width: calc(100% - 18rem);
				justify-content: flex-start;
				flex-wrap: wrap;
			}
		}
	</style>

<!-- <pre>
	{JSON.stringify(slice.items, null, 2)}
</pre> -->
