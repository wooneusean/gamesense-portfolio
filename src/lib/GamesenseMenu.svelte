<script lang="ts">
  import { onMount } from 'svelte';
  import NodeGarden from './NodeGarden.svelte';
  import AboutMe from './pages/AboutMe.svelte';
  import MyEducation from './pages/MyEducation.svelte';
  import MyExperiences from './pages/MyExperiences.svelte';
  import MySkills from './pages/MySkills.svelte';
  import MyHobbies from './pages/MyHobbies.svelte';

  let activeTabKey = '👤';
  let menu: HTMLDivElement;
  let d = { w: 900, h: 800 };
  let m = {
    x: window.innerWidth - window.innerWidth / 2 - d.w / 2,
    y: window.innerHeight - window.innerHeight / 2 - d.h / 2,
  };

  let moving = false;
  let isOpen = false;

  function onMouseDown(e) {
    moving = true;
  }

  function onMouseMove(e) {
    if (moving) {
      m.x += e.movementX;
      m.y += e.movementY;
    }
  }

  function onMouseUp() {
    moving = false;
  }

  onMount(() => {
    if (d.h > window.innerHeight) {
      d.h = window.innerHeight;
      m.y = window.innerHeight - window.innerHeight / 2 - d.h / 2;
    }
    if (d.w > window.innerWidth) {
      d.w = window.innerWidth;
      m.x = window.innerWidth - window.innerWidth / 2 - d.w / 2;
    }

    const observer = new ResizeObserver(() => {
      moving = false;
    });
    observer.observe(menu);

    setTimeout(() => {
      isOpen = true;
    }, 0);

    return () => {
      observer.unobserve(menu);
    };
  });

  function onKeyPress(ev: KeyboardEvent) {
    if (ev.key === 'Insert') {
      isOpen = !isOpen;
    }
  }

  let tabs = { '👤': AboutMe, '🎓': MyEducation, '💼': MyExperiences, '🧰': MySkills, '🏂': MyHobbies };

  const handleTabChange = (newTabKey) => {
    activeTabKey = newTabKey;
  };
</script>

<div class="background" />
{#if isOpen}
  <div class="backdrop" />
  <NodeGarden />
{/if}
<div
  style="top: {m.y}px;
  left: {m.x}px;
  width: {d.w}px;
  height: {d.h}px;
  opacity: {isOpen ? 1 : 0};
  pointer-events: {isOpen ? 'unset' : 'none'};"
  class="menu"
  bind:this={menu}
  on:mousedown={onMouseDown}
>
  <div class="menu-border">
    <div class="color-bar" />
    <div class="layout">
      <div class="tabs">
        {#each Object.keys(tabs) as tab}
          <button
            class="tab"
            class:active={activeTabKey == tab}
            on:click={() => handleTabChange(tab)}
            on:mousedown|stopPropagation={() => {}}
          >
            {tab}
          </button>
        {/each}
      </div>
      <div class="page text-white">
        <svelte:component this={tabs[activeTabKey]} />
      </div>
    </div>
  </div>
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} on:keydown={onKeyPress} />

<style lang="scss">
  .tabs {
    background-color: #0c0c0c;
    display: flex;
    flex-direction: column;
    user-select: none;

    .tab {
      width: calc(100% + 1px);
      border-right: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      flex: 0 1 120px;

      &.active {
        @extend .menu-bg;
        z-index: 10;
      }
      // &.active:not(:first-child):not(:last-child) {
      &.active:not(:first-child) {
        border-block: solid 1px #212121;
      }
      &.active:first-child {
        border-top: solid 1px transparent;
        border-bottom: solid 1px #212121;
      }
      // &.active:last-child {
      //   border-top: solid 1px #3a3a3a;
      // }
    }
  }

  .page {
    @extend .menu-bg;
    border-left: solid 1px #212121;
    position: relative;
  }

  .layout {
    height: 100%;
    display: grid;
    grid-template-columns: 120px 1fr;

    // Makes whole thing scrollable
    overflow-y: auto;
  }

  @media (max-width: 1200px) {
  } /* for desktops */
  @media (max-width: 991px) {
  } /* for laptops */
  @media (min-width: 768px) and (max-width: 990px) {
  } /* for large tablets */
  @media (max-width: 768px) {
  } /* for smaller tablets */
  @media (max-width: 500px) {
    .tabs {
      .tab {
        flex: 0 1 70px;
        font-size: 1.75rem;
      }
    }
    .layout {
      grid-template-columns: 70px 1fr;
    }
  } /* for cellphones */

  $lightness: 30%;
  .color-bar {
    height: 1px;
    background: linear-gradient(
        to right,
        hsl(0, 100%, $lightness) 0%,
        hsl(36, 100%, $lightness) 10%,
        hsl(64, 74%, $lightness) 20%,
        hsl(118, 68%, $lightness) 30%,
        hsl(179, 68%, $lightness) 40%,
        hsl(188, 76%, $lightness) 50%,
        hsl(212, 86%, $lightness) 60%,
        hsl(260, 89%, $lightness) 70%,
        hsl(284, 94%, $lightness) 80%,
        hsl(308, 97%, $lightness) 90%,
        hsl(0, 100%, $lightness) 100%
      )
      0 0/200% 100%;
    animation: scroll 2s linear infinite;
  }

  @keyframes scroll {
    to {
      background-position: -200% 0;
    }
  }

  .menu-bg {
    background: radial-gradient(#0d0d0d 15%, transparent 16%) 0 0, radial-gradient(#0d0d0d 15%, transparent 16%) 4px 4px,
      radial-gradient(#131313 15%, transparent 20%) 0 1px, radial-gradient(#131313 15%, transparent 20%) 4px 5px;
    background-color: #131313;
    background-size: 8px 8px;
  }

  .menu-border {
    display: grid;
    grid-template-rows: 1px 1fr;
    position: absolute;
    top: 6px;
    left: 6px;
    bottom: 6px;
    right: 6px;

    box-shadow: 0 0 0 1px #3a3a3a, 0 0 0 4px #282828, 0 0 0 5px #3a3a3a;
  }

  .menu {
    position: relative;
    background-color: #0a0a0a;
    resize: both;
    overflow: auto;
    min-height: calc(125px * 5);
    transition: opacity 150ms ease-in-out;
    z-index: 20;
  }

  .backdrop {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75));
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .background {
    background-image: url('https://i.redd.it/v0jwlbtkyhv21.png');
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
