<script>
  import Container from '../Elements/Container.svelte';
  import IconInfoElement from '../Elements/IconInfoElement.svelte';
</script>

<Container>
  <h2 class="center">Everything you need for a perfect website</h2>
  <div class="services mt4 center-vh">
    <IconInfoElement header="Business Strategy" text="We discuss what you are trying to achieve, and set goals on your website planning how to achieve that."/>
    <IconInfoElement header="User Experience Design" text="We design your website to be as easy to use as possible while guiding users towards the end goal."/>
    <IconInfoElement header="Tailored Development" text="We build with your goals in mind, whether you want a simple flexible website, a custom storefront or a SaaS product."/>
    <IconInfoElement header="Rigorous Testing" text="We ensure your website is of excellent quality by thoroughly testing using multiple approaches."/>
    <IconInfoElement header="Search Engine Optimization" text="We provide on-page optimization techniques to improve your organic discovery and search rankings."/>
    <IconInfoElement header="Ongoing Support" text="Your website is always growing. Whether you’re adding new features or making improvements we're here to help."/>
  </div>
  <div class="mt2">
    <a href="/index.html?page=services">Find out more about our services -></a>
  </div>
</Container>

<style>
  .services {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  h2 {
    text-align: center;
    font-size: 2.6em;
    font-weight: 500;
    letter-spacing: 0em;
    max-width: 92vw;
  }

  a {
    font-size: 1.4em;
    text-align: center;
  }
</style>
