<script>
  export let isChecked = true;
  export let onChecked = (isChecked) => {};

  $: onChecked(isChecked);
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<button class="check-box" class:active={isChecked} on:click={() => (isChecked = !isChecked)} />

<style lang="scss">
  .check-box {
    margin-top: 2px;
    position: relative;
    height: 10px;
    width: 10px;
    background: var(--secondary);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
    &.active {
      background: var(--primary);
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    }
  }
</style>
