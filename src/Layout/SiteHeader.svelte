<script>
  export let pageName;

  let sidebarOpen = false;

  import HamburgerIcon from '../Elements/HamburgerIcon.svelte';
  import SiteSidebar from './SiteSidebar.svelte';
  import Container from '../Elements/Container.svelte';

  import company from '../static-content';
  import { pages } from '../pages.js';
</script>

<Container>
  <header>
      <nav class="navbar-left">
        <a href="./"><h1>eXablast</h1></a>
      </nav>
      <SiteSidebar bind:open={sidebarOpen} {pageName}/>
      <nav class="navbar-right tablet-hidden">
        {#each pages.filter(p => !!p.showInMainNav && (!pageName || p.name !== pageName)) as page}
          <a class="navlink decor-font" href={page.href}>{page.name}</a>
        {/each}
      </nav>
      <HamburgerIcon bind:open={sidebarOpen}/>
  </header>
</Container>

<style>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    box-sizing: content-box;
    background-color: rgba(0, 0, 0, 0.0);
    height: 60px;
    z-index: 1;
  }

  nav {
    display: flex;
    flex-direction: row;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    height: 60px;
    color: var(--primary-color);
    padding: 0 0.8em;
  }

  a:hover {
    background-color: #355574;
  }

  a:active {
    background-color: #78b8f3;
  }

  a img {
    width: 38px;

    filter: invert(1);
  }

  a img:last-of-type {
    margin-right: 0.5em;
  }

  .home {
    display: flex;
    justify-content: center;
  }

  h1 {
    margin: 10px;
  }

  .navlink {
    color: var(--primary-color);
    padding: 0 1.2em;
    font-size: 1.2em;
    line-height: 22px;
    font-weight: 500;
    letter-spacing: 1.5px;
    transition: all 350ms;
    text-align: center;
  }
</style>
