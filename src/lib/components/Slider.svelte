<script lang="ts">
  export let progress = 0;
  let isClicking = false;

  const updateProgress = (
    e: MouseEvent & {
      currentTarget: EventTarget & HTMLDivElement;
    }
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const layerX = e.clientX - rect.x;

    progress = Math.round((layerX / rect.width) * 100);
  };
</script>

<label class="slider-container">
  <div class="control-layout">
    <div class="spacer" />
    <slot />
    <div class="spacer" />
  </div>
  <div class="control-layout">
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
      <div class="slider-label">{progress}%</div>
    </div>
    <div class="spacer" />
  </div>
</label>

<style lang="scss">
  .slider-container {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  .slider {
    position: relative;
    height: 8px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
    background: linear-gradient(to top, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));

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
    }
  }
</style>
