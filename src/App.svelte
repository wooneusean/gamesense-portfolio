<script lang="ts">
  import GamesenseMenu from './lib/GamesenseMenu.svelte';
  import * as styleManager from './lib/util/styleManager';
  import { onMount } from 'svelte';

  onMount(() => {
    styleManager.set('primary', '#a7c841');
    styleManager.set('secondary', '#2d2d2d');
    styleManager.set('secondary-dark', '#1f1f1f');
    styleManager.set('bg', '#171717');
    styleManager.set('bg-dark', '#121212');
  });
</script>

<GamesenseMenu />
