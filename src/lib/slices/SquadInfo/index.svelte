<script>
	export let slice;

	// Sorteer de items op alfabetische volgorde op basis van de voornaam
	const sortedItems = slice.items.slice().sort((a, b) => {
		const nameA = a.member.data.firstname.toLowerCase();
		const nameB = b.member.data.firstname.toLowerCase();
		return nameA.localeCompare(nameB);
	});
</script>

<section
	class="section-members"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	{#each sortedItems as item, i}
		<article class="revealing-member">
			<img
				src={item.member.data.image.url}
				alt="Foto van {item.member.data.firstname}"
				width="320"
				height="320"
			/>
			<h2>{item.member.data.firstname} {item.member.data.lastname}</h2>
			<a href="{item.member.data.link ? item.member.data.link.url : "/"}">Bezoek mijn visitekaartje</a>
		</article>
	{/each}
</section>

<!-- <pre style="margin-left: 18rem;">
	{JSON.stringify(slice, null, 2)}
</pre> -->

<style>
	section {
		margin: 5rem auto 5rem;
		display: flex;
		gap: var(--unit-default);
		padding: var(--unit-default);
		flex-wrap: wrap;
	}

	.section-members .to-the-left {
		margin: auto;
		margin-top: 0;
	}

	article {
		width: 20rem;
		background-color: var(--light-primary);
		padding: var(--unit-default);
		padding-bottom: 3rem;
		border-radius: var(--unit-default);
		margin: auto;
		position: relative;
		box-shadow: var(--box-shadow);
	}

	img {
		background-color: var(--light-accent);
		width: 100%;
		aspect-ratio: 2/3;
		object-fit: cover;
		object-position: top;
		border-radius: var(--unit-small);
		margin-bottom: var(--unit-default);
	}

	a {
		color: var(--light-secondary);
		transition: var(--animation-default) ease-in-out;
		transform: rotateZ(0deg);
		position: absolute;
	}

	a:is(:hover, :focus) {
		color: var(--light-accent);
		transform: rotateZ(-8deg);
	}

	@media (min-width: 48rem) {
		.section-members {
			width: 72vw;
			margin-top: 0rem;
			margin: 0 0 10rem 18rem;
		}

		article {
			margin: 0;
		}
	}

	@media (min-width: 97.25rem) {
		.section-members {
			width: 64rem;
			margin: 0 auto 10rem;
		}
	}

	/* Typografie */

	h2 {
		margin-bottom: var(--unit-medium);
	}

	/* Keyframe Reveal effect */
		.revealing-member {
			/* Create View Timeline */
			view-timeline-name: --revealing-image;
			view-timeline-axis: block;

			/* Attach animation, linked to the  View Timeline */
			animation: linear reveal both;
			animation-timeline: --revealing-image;

			/* Tweak range when effect should run*/
			animation-range: entry 10% cover 40%;
		}

		@keyframes reveal {
			from {
				opacity: 0;
				clip-path: inset(45% 20% 45% 20%);
			}
			to {
				opacity: 1;
				clip-path: inset(0% 0% 0% 0%);
			}
		}
</style>
