<script lang="ts">
  export let displayType: 'row' | 'column' = 'column';
</script>

<div
  {...$$restProps}
  class="page-content"
  class:row-display={displayType == 'row'}
  class:column-display={displayType == 'column'}
>
  <slot />
</div>

<style lang="scss">
  .page-content {
    height: 100%;
    width: 100%;
    padding: 20px;
    gap: 20px;
  }

  .row-display {
    display: flex;
    flex-direction: column;
  }

  .column-display {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: masonry;
  }
</style>
