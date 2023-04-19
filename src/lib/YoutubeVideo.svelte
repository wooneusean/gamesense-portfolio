<script lang="ts">
  import { onMount } from 'svelte';

  let iframe: HTMLIFrameElement;
  onMount(() => {
    iframe.width = window.innerWidth.toString();
    iframe.height = window.innerHeight.toString();
  });
</script>

<div class="video-background">
  <div class="video-foreground">
    <iframe
      bind:this={iframe}
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      title="surf montage"
      src="https://www.youtube.com/embed/oMypcQh5ocg?&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&iv_load_policy=3&modestbranding=1&playsinline=1"
    />
  </div>
</div>

<style>
  .video-background {
    background: #000;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -75;
    overflow: hidden;
  }
  .video-foreground,
  .video-background iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  @media (min-aspect-ratio: 16/9) {
    .video-foreground {
      height: 300%;
      top: -100%;
    }
  }
  @media (max-aspect-ratio: 16/9) {
    .video-foreground {
      width: 300%;
      left: -100%;
    }
  }
</style>
