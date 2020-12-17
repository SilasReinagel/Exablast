<script>
  import company from '../static-content.js';
  import CallToAction from '../Sections/CallToAction.svelte';
</script>

 <div class="hero-image mt4">
  <div class="hero-text center-vh center">
    <p class="">{company.heroSubheader}</p>
    <h1 class="sans-font">{company.heroHeader}</h1>
    <CallToAction/>
  </div>
</div>

<style>
  .hero-image {
    min-height: 46vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }

  .hero-text {
    display: flex;
    max-width: 60em;
    flex-direction: column;
    text-align: center;
    color: var(--primary-color);
    padding: 2em;
    background-color: rgba(0, 0, 0, 0.0);
    background-image: none;
    border-radius: 2em;
  }

  h1 {
    font-size: 3.4em;
    margin-bottom: 1em;
    margin-top: 0;
  }

  p {
    color: var(--primary-color);
    line-height: 1.2em;
    font-size: 1.4em;
    font-weight: 600;
  }

  
@media screen and (max-width: 600px) {
  h1 {
    font-size: 2em;
  }

  .mt4 {
    margin-top: 0;
  }
}
</style>
