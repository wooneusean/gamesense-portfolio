<script lang="ts">
  import { onMount } from 'svelte';
  import NodeGardenCanvasAnimation from '../classes/node-garden/node-garden-canvas-animation';
  import { GlobalVars } from './util/globalVars';

  let canvas: HTMLCanvasElement;

  const resizeWindow = () => {
    GlobalVars.nodeGarden.ctx.canvas.width = window.innerWidth;
    GlobalVars.nodeGarden.ctx.canvas.height = window.innerHeight;
  };

  onMount(() => {
    GlobalVars.nodeGarden = new NodeGardenCanvasAnimation(canvas);

    resizeWindow();

    GlobalVars.nodeGarden.start();

    return () => {
      GlobalVars.nodeGarden.stop();
    };
  });

  const handleMouseMove = (ev: MouseEvent) => {
    if (GlobalVars.nodeGarden != null) {
      GlobalVars.nodeGarden.updateMousePosition(ev);
    }
  };

  const onWindowResize = (
    e: UIEvent & {
      currentTarget: EventTarget & Window;
    }
  ) => {
    resizeWindow();
  };
</script>

<canvas bind:this={canvas} />

<svelte:window on:resize={onWindowResize} />

<!-- on:mousemove={handleMouseMove} -->
<style>
  canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
