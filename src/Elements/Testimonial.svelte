<script>
  export let name;
  export let company;
  export let avatarSrc;
  export let text;
</script>

<div class="testimonial">
  <p>{@html text}</p>
  <div class="row">
    <div class="avatar-box center-vh"><img src={avatarSrc} alt={name}/></div>
    <div class="ml2">
      <h3>{name}</h3>
      <h4>{company}</h4>
    </div>
  </div>
</div>

<style>
  .testimonial {
    margin: 16px;
    padding: 16px;
    border-radius: 12px;
    background-color: #fff;
    min-width: 300px;
    max-width: 320px;
  }

  img {
    border-radius: 24px;
    width: 48px;
  }

  p {
    margin-top: 0.5em;
    font-size: 1em;
  }

  h3 {
    margin-bottom: 0.25em;
  }

  h4 {
    font-weight: 400;
    margin-top: 0;
  }

  .row {
    display: flex;
  }

</style>