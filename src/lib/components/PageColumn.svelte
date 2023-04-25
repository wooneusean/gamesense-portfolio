<script lang="ts">
  export let columnTitle: string;
</script>

<div {...$$restProps} class="page-column" data-column-title={columnTitle} on:mousedown|stopPropagation={() => {}}>
  <slot />
</div>

<style lang="scss">
  .page-column {
    padding: 20px;
    border: solid 1px #212121;
    background-color: #171717;
    position: relative;
    font-size: small;
    color: #c3c3c3;

    &::after {
      content: attr(data-column-title);
      font-size: 20;
      font-weight: bold;
      color: #c9c9c9;
      position: absolute;
      top: -12px;
      left: 12px;
    }
  }
</style>
