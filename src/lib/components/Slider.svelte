<script lang="ts">
  import { onMount } from 'svelte';

  export let minValue = 0;
  export let currentValue = 0;
  export let maxValue = 100;
  export let useProgress = true;
  export let onProgressChanged = (progress) => {};
  export let onValueChanged = (value) => {};

  let progress = 0;
  let isClicking = false;

  $: onProgressChanged(progress);
  $: onValueChanged(currentValue);
  $: {
    progress = ((currentValue - minValue) / (maxValue - minValue)) * 100;
  }

  const updateProgress = (
    e: MouseEvent & {
      currentTarget: EventTarget & HTMLDivElement;
    }
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const layerX = e.clientX - rect.x;

    let clickPercentage = Math.round((layerX / rect.width) * 100);
    currentValue = Math.round((clickPercentage / 100) * (maxValue - minValue) + minValue);
  };
</script>

<div class="control-layout" style="margin-top: 0.25rem; margin-bottom: 0.5rem">
  <div class="spacer" />
  <div
    class="slider"
    on:mousedown={updateProgress}
    on:mousemove={(e) => {
      if (isClicking) updateProgress(e);
    }}
    on:mousedown={() => (isClicking = true)}
    on:mouseup={() => (isClicking = false)}
    on:mouseleave={() => (isClicking = false)}
  >
    <div class="slider-bar" style={`width: ${progress}%;`} />
    <div class="slider-label">{useProgress ? `${progress.toFixed(0)}%` : currentValue}</div>
  </div>
  <div class="spacer" />
</div>

<style lang="scss">
  .slider {
    position: relative;
    height: 8px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
    background: var(--secondary);

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
    }

    .slider-bar {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background-color: var(--primary);

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
      }
    }

    .slider-label {
      position: absolute;
      inset: 0;
      text-align: center;
      font-weight: bold;
      user-select: none;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
      cursor: pointer;
    }
  }
</style>
