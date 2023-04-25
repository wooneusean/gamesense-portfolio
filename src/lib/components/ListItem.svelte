<script>
  import Checkbox from './Checkbox.svelte';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="list-element">
  <Checkbox isChecked={true} />
  <slot />
</label>

<style lang="scss">
  .list-element {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }
</style>
