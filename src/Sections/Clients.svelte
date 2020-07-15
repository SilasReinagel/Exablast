<script>
  import Container from '../Elements/Container.svelte';
</script>

<Container>
  <div class="center center-vh column">
    <div class="flex-between">
      <h2 class="segment sans-font">Trusted by Leading Brands & Agencies</h2>
      <p class="segment">We believe brands are the cultural connection between companies and their customers.</p>
    </div>
    <div>
    </div>
  </div>

</Container>

<style>
  .column {
    display: flex;
    flex-direction: column;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .segment {
    max-width: 320px;
  }
</style>
