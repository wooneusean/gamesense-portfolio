<script lang="ts">
  import CheckBox from './CheckBox.svelte';
  import ColorPicker from './ColorPicker.svelte';
  import Slider from './Slider.svelte';

  export let hasCheckbox = false;
  export let hasColorPicker = false;
  export let hasSlider = false;

  export let currentValue = 0;
  export let minValue = 0;
  export let maxValue = 100;
  export let useProgress = true;

  export let isChecked = true;
  export let color = '#ffffff';

  export let onProgressChanged = (progress) => {};
  export let onValueChanged = (value) => {};
  export let onColorChanged = (color) => {};
  export let onChecked = (isChecked) => {};
</script>

<div class="control-layout">
  {#if hasCheckbox}
    <CheckBox {isChecked} {onChecked} />
  {:else}
    <div class="spacer" />
  {/if}
  <slot {...$$restProps} />
  {#if hasColorPicker}
    <ColorPicker {color} {onColorChanged} />
  {:else}
    <div class="spacer" />
  {/if}
</div>
{#if hasSlider}
  <Slider {useProgress} {currentValue} {minValue} {maxValue} {onProgressChanged} {onValueChanged} />
{/if}
