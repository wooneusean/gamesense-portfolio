<script lang="ts">
  import { onMount } from 'svelte';
  import NodeGardenCanvasAnimation from '../classes/node-garden/node-garden-canvas-animation';

  let canvas: HTMLCanvasElement;
  let nodeGarden: NodeGardenCanvasAnimation;

  onMount(() => {
    nodeGarden = new NodeGardenCanvasAnimation(canvas);

    nodeGarden.ctx.canvas.width = window.innerWidth;
    nodeGarden.ctx.canvas.height = window.innerHeight;

    nodeGarden.start();

    return () => {
      nodeGarden.stop();
    };
  });

  const handleMouseMove = (ev: MouseEvent) => {
    if (nodeGarden != null) {
      nodeGarden.updateMousePosition(ev);
    }
  };
</script>

<canvas bind:this={canvas} />

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
