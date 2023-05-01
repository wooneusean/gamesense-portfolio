<script lang="ts">
  import MenuControl from '../components/MenuControl.svelte';
  import PageColumn from '../components/PageColumn.svelte';
  import PageContent from '../components/PageContent.svelte';
  import * as styleManager from '../util/styleManager';
  import { GlobalVars } from '../util/globalVars';

  let primaryColor = styleManager.getCssMap().get('primary');
  let secondaryColor = styleManager.getCssMap().get('secondary');

  $: styleManager.set('primary', primaryColor);
  $: styleManager.set('secondary', secondaryColor);
</script>

<PageContent>
  <PageColumn columnTitle={'Menu Settings'}>
    <MenuControl bind:color={primaryColor} onColorChanged={(color) => (primaryColor = color)} hasColorPicker>
      Menu Primary Color
    </MenuControl>
    <MenuControl bind:color={secondaryColor} onColorChanged={(color) => (secondaryColor = color)} hasColorPicker>
      Menu Secondary Color
    </MenuControl>
  </PageColumn>
  <PageColumn columnTitle={'Node Garden Settings'}>
    <MenuControl
      onValueChanged={(val) => {
        if (val == GlobalVars.nodeGarden.nodeCount) return;

        GlobalVars.nodeGarden.nodeCount = val;
      }}
      useProgress={false}
      hasSlider
      minValue={0}
      currentValue={GlobalVars.nodeGarden.nodeCount}
      maxValue={1000}
    >
      Number of nodes
    </MenuControl>
    <MenuControl
      onValueChanged={(val) => {
        if (val == GlobalVars.nodeGarden.maxInteractionDistance) return;

        GlobalVars.nodeGarden.maxInteractionDistance = val;
      }}
      useProgress={false}
      hasSlider
      minValue={0}
      currentValue={GlobalVars.nodeGarden.maxInteractionDistance}
      maxValue={1000}
    >
      Max interaction distance
    </MenuControl>
    <MenuControl
      onValueChanged={(val) => {
        if (val == GlobalVars.nodeGarden.horizontalSpeed) return;

        GlobalVars.nodeGarden.horizontalSpeed = val;
      }}
      useProgress={false}
      hasSlider
      minValue={0}
      currentValue={GlobalVars.nodeGarden.horizontalSpeed}
      maxValue={1000}
    >
      Horizontal node speed
    </MenuControl>
    <MenuControl
      onValueChanged={(val) => {
        if (val == GlobalVars.nodeGarden.verticalSpeed) return;

        GlobalVars.nodeGarden.verticalSpeed = val;
      }}
      useProgress={false}
      hasSlider
      minValue={0}
      currentValue={GlobalVars.nodeGarden.verticalSpeed}
      maxValue={1000}
    >
      Vertical node speed
    </MenuControl>
  </PageColumn>
  <PageColumn columnTitle="Presets">
    <div class="form-layout">
      <select class="preset-list" size="6">
        <option value="first">work</option>
        <option value="second">in</option>
        <option value="third">progress</option>
        <option value="fourth">🙏</option>
      </select>
      <input type="text" />
      <div class="btn-container">
        <input type="button" value="Load" />
      </div>
      <div class="btn-container">
        <input type="button" value="Save" />
      </div>
      <div class="btn-container">
        <input type="button" value="Delete" />
      </div>
    </div>
  </PageColumn>
</PageContent>

<style lang="scss">
  .form-layout {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input[type='text'] {
    outline: none;
    padding-block: 0.25rem;
    padding-inline: 0.4rem;
    color: #c3c3c3;
    background: var(--bg);
    box-shadow: 0 0 0 1px var(--secondary);
  }

  .btn-container {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      inset: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.05), rgba(255, 255, 255, 0.05));
    }
  }

  input[type='button'] {
    width: 100%;
    height: 100%;
    position: relative;
    outline: none;
    padding-block: 0.4rem;
    padding-inline: 0.4rem;
    color: #c3c3c3;
    background: var(--secondary-dark);
    box-shadow: 0 0 0 1px var(--secondary);
  }

  .preset-list {
    font-size: 16px;
    overflow-y: auto;
    color: var(--primary);
    background: var(--secondary);
    box-shadow: 0 0 0 1px var(--bg-dark);
  }

  option:checked {
    color: var(--primary);
    -webkit-text-fill-color: var(--primary);
    background: linear-gradient(var(--secondary-dark), var(--secondary-dark));
    background-color: var(--secondary-dark) !important;
    font-weight: bold;
    outline: none;
  }
</style>
