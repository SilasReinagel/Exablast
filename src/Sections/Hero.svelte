<script>
  import company from '../static-content.js';
  import CallToAction from '../Sections/CallToAction.svelte';
</script>

 <div class="hero-image">
  <div class="hero-text center-vh center">
    <h1 class="sans-font">{company.heroHeader}</h1>
    <p class="mb2">{company.heroSubheader}</p>
    <CallToAction/>
  </div>
</div>

<style>
  .hero-image {
    min-height: 100vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .hero-text {
    display: flex;
    max-width: 40em;
    flex-direction: column;
    text-align: center;
    color: var(--primary-color);
    padding: 2em;
    background-color: rgba(0, 0, 0, 0.0);
    background-image: none;
    border-radius: 2em;
  }

  h1 {
    font-size: 2em;
  }

  p {
    color: var(--primary-color);
    line-height: 1.2em;
    font-size: 1.2em;
  }
</style>
