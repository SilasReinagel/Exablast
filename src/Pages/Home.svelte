<script>
	import data from '../static-content.js';

	import Hero from '../Sections/Hero.svelte';
	import WhatWeDo from '../Sections/WhatWeDo.svelte';
	import ServicesSummary from '../Sections/ServicesSummary.svelte';
	import WorkExample from '../Sections/WorkExample.svelte';
	import AboutUsMinimal from '../Sections/AboutUsMinimal.svelte';
	import Clients from '../Sections/Clients.svelte';
	import ProjectContactPitch from '../Sections/ProjectContactPitch.svelte';
	import ProjectSlider from '../Sections/ProjectSlider.svelte';
	import Testimonials from '../Sections/Testimonials.svelte';
</script>

<Hero/>
<ProjectSlider/>
<ServicesSummary/>

<section class="alt-bg mt4">
	<Testimonials testimonials={data.testimonials}/>
</section>

<style>
  .darken-gradient {
    background-image: linear-gradient(rgba(23, 17, 26, 0.01) 0%, rgba(23, 17, 26, 0.6) 33%, rgba(23, 17, 26, 0.9) 100%);
    width: 100%;
	}

	section {
		min-height: 100vh;
	}

	.alt-bg {
		/* background-color: #fbf7f3; */
		background-color: var(--alternate-color);
		width: 100%;
	}
</style>