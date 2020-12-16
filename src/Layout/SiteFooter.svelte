<script>
  export let company;

  import Container from '../Elements/Container.svelte';
  import SingleColorSocialLinks from '../Elements/SingleColorSocialLinks.svelte';

  const year = new Date().getFullYear();
</script>

<footer class="darken">
  <Container>
    <div class = "row">
      <p>© {year} {company.siteOwner}</p>

      <SingleColorSocialLinks/>
    </div>
  </Container>
</footer>

<style>
  .row {
    padding: 12px 18px;
    height: 5em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  a {
    font-size: 1em;
  }

</style>
