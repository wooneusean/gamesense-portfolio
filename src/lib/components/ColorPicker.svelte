<script lang="ts">
  export let color = '#ffffff';
  export let onColorChanged = (color) => {};

  $: onColorChanged(color);
</script>

<div class="control-container">
  <div class="color-picker-container">
    <input type="color" bind:value={color} class="color-picker" />
  </div>
</div>

<style lang="scss">
  .control-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: right;
    align-items: center;
  }

  .color-picker-container {
    position: relative;
    width: 30px;
    height: 16px;

    &::after {
      position: absolute;
      content: '';
      inset: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
      z-index: 1;
      pointer-events: none;
    }
  }

  .color-picker {
    width: 100%;
    height: 100%;
  }

  ::-moz-color-swatch {
    border: none;
    border-color: transparent;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.55);
  }
</style>
