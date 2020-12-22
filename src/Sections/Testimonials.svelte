<script>
  export let testimonials;

  import Container from '../Elements/Container.svelte';
  import Testimonial from '../Elements/Testimonial.svelte';
</script>

<Container>
  <div class="row pt2">
    <div class="center half">
      <h3>Industry-Proven Site Designs</h3>
      <p>We help growing companies like yours convert more customers and make more sales by combining your goals with your user's needs.</p>
    </div>
    <div class="testimonials center row">
	    {#each testimonials as t}
        <Testimonial name={t.name} company={t.company} avatarSrc={t.avatarSrc} text={t.text}/>
      {/each}
    </div>
  </div>
</Container>

<style>
  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .half {
    width: 30em;
    max-width: 92vw;
  }

  .testimonials {
    display: flex;
  }

  h3 {
    font-size: 2em;
  }

  p {
    font-size: 1.25em;
    line-height: 1.25em;
  }
</style>