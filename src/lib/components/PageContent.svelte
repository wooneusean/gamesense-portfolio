<script lang="ts">
  export let columnTitles = [];
</script>

<div class="page-content">
  <div class="page-column" title="Presets" />
  <div class="page-column" title="Lua" />
</div>

<style lang="scss">
  .page-column {
    position: relative;
    border: solid 1px #212121;
    background-color: #171717;

    &::before {
      content: attr(title);
      font-size: medium;
      font-weight: bold;
      color: #c9c9c9;
      position: absolute;
      top: -16px;
      left: 10px;
    }
  }

  .page-content {
    position: absolute;
    inset: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 1fr);
    gap: 20px;
  }
</style>
