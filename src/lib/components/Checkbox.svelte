<script>
  export let isChecked = true;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="control-layout">
  <button class="check-box" class:active={isChecked} on:click={() => (isChecked = !isChecked)} />
  <slot />
  <div class="spacer" />
</label>

<style lang="scss">
  .check-box {
    position: relative;
    height: 10px;
    width: 10px;
    background: #474747;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
    &.active {
      background: #abcf33;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    }
  }
</style>
