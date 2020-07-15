<script>
  import IntersectionObserver from '../Elements/IntersectionObserver.svelte';

  export let secondary = false;;
  export let header = "Header";
  export let subheader = "Subheader";
</script>


<IntersectionObserver let:intersecting top={-280} bottom={-50}>
  <div class="bg-gradient">
    <div class="divider no-bg-color {secondary ? "secondary" : ""}">
      <div class="flex-between">
        <h2 class="segment sans-font {intersecting ? "header-triggered" : ""}">{header}</h2>
        <p class="segment {intersecting ? "subheader-triggered" : ""}">{subheader}</p>
      </div>
      <div class="line {intersecting ? "triggered" : ""}"></div>
    </div>
  </div>
</IntersectionObserver>

<style>
  .bg-gradient {
    width: 100%;
  }

  .secondary h2 {
    color: #000;
  }

  p {
    padding: 2em;
    opacity: 0;
    transition-delay: 400ms;
    transition-duration: 800ms;
  }

  .secondary p {
    color: #454545;
  }

  h2 {
    white-space: nowrap;
    font-size: 2em;
    transform: translateX(140vw) rotateX(90deg) rotateZ(180deg);
    transition-duration: 800ms;
  }

  .divider {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    width: 100%;
    max-width: 80vw;
    margin: 0px auto;
  }

  .line {
    width: 0;
    border: 0;
    height: 4px;
    background: var(--secondary-color);
    background-image: linear-gradient(to right, var(--secondary-color-press) 0%, var(--secondary-color-hover) 50%, var(--secondary-color) 100%);
    transition-duration: 1.5s;
  }

  .triggered {
    width: 800px !important;
  }

  .header-triggered {
    transform: translateX(0) rotateX(0deg) rotateZ(0deg);
  }

  .subheader-triggered {
    opacity: 1;
  }

  .flex-between {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .segment {
    width: 400px;
    max-width: 80vw;
  }
</style>
