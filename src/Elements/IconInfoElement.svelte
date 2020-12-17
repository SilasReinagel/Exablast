<script>
  export let header = 'Header';
  export let text = 'Item text goes here';
  export let iconSrc = '/images/info.svg';
  export let iconAlt = 'icon';
</script>

<div class="item">
  <div class="icon-container center-vh">
    <div class="icon">
      <img src={iconSrc} alt={iconAlt}/>
    </div>
  </div>
  <div>
    <h3>{header}</h3>
    <p>{text}</p>
  </div>
</div>

<style>
  .item {
    max-width: 100vw;
    width: 400px;
    min-width: 300px;
    padding: 12px;
    display: flex;
    margin: 1em;
  }

  .icon-container {
    border-radius: 24px;
    background-color: var(--alternate-color);
    margin-right: 1em;
    max-height: 80px;
    min-width: 80px;
  }

  .icon {
    max-width: 36px;
  }

  p {
    font-size: 0.8em;
    margin-bottom: 0;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin-top: 0;
  }
</style>