<script lang="ts">
  export let isChecked = false;
</script>

<button class="check-box" class:active={isChecked} on:click={() => (isChecked = !isChecked)} />

<style lang="scss">
  .check-box {
    margin-top: 4px;
    height: 8px;
    width: 8px;
    background: linear-gradient(to top, #383838, #474747);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
    &.active {
      background: linear-gradient(to top, #80ae0a, #abcf33);
    }
  }
</style>
