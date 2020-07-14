<script>
  import project from '../static-content.js';
</script>

<a href="/index.html?page=contact" class="center-vh center">
  <h2>Let's Talk</h2>
</a>

<style>
  h2 {
    font-size: 1.4em;
  }

  a {
    background-color: var(--secondary-color);
    border-radius: 16px;
    padding: 0.6em 1.2em;
    transition-duration: 500ms;
    color: var(--primary-color);
    display: flex;
    width: 400px;
    max-width: 90vw;

    box-shadow: 0px 0px 30px 5px var(--secondary-color-press);
  }

  a:hover {
    background-color: var(--secondary-color-hover);
    color: var(--primary-color);

    box-shadow: 0px 0px 40px 20px var(--secondary-color-hover);
  }

  a:active {
    background-color: var(--seconary-color-press);
    color: var(--primary-color);

    box-shadow: 0px 0px 40px 0px var(--secondary-color);
  }
</style>