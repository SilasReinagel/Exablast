<script>
  import Container from '../Elements/Container.svelte';
</script>

<Container>
<div class="macbook">
  <img class="fixed foreground example1-desktop" src="./images/macbook-frame.png" alt="Macbook Frame"/>
</div>
</Container>

<style>
  .fixed {
    position: relative;
    top: 0px;
    left: 0px;
  }

  .foreground {
    z-index: 99;
  }

  .example1-desktop {
    background-image: url("/images/website-example-1-desktop.jpg");
    background-size: cover;
  }
</style>
