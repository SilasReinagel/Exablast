<script>
  import project from '../static-content.js';
</script>

<a href="/index.html?page=contact" class="center-vh center">
  <h2>Let's Talk</h2>
</a>

<style>
  h2 {
    font-size: 1.4em;
    color: var(--secondary-color-text);
  }

  a {
    background-color: var(--secondary-color);
    border-radius: 16px;
    padding: 0.2em 3em;
    transition-duration: 500ms;
    display: flex;
    max-width: 90vw;

    box-shadow: 0px 0px 0px 0px var(--secondary-color-press);
  }

  a:hover {
    background-color: var(--secondary-color-hover);

    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.2);
  }

  a:active {
    background-color: var(--seconary-color-press);

    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.2);
  }
</style>