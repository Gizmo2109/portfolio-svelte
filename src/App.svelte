<script>
  import { onMount } from 'svelte';
  import { threeInit } from './lib/scene'

  let test;

  onMount(() => {
    threeInit(test);
  })
</script>

<main>
  <canvas bind:this={test}></canvas>
</main>

<style>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
