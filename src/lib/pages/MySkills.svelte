<script>
  import MenuControl from '../components/MenuControl.svelte';
  import PageColumn from '../components/PageColumn.svelte';
  import PageContent from '../components/PageContent.svelte';
</script>

<PageContent>
  <PageColumn columnTitle={'Software Development'}>
    <div class="control-container">
      <MenuControl hasSlider currentValue={85}>Java</MenuControl>
      <MenuControl hasSlider currentValue={85}>C#</MenuControl>
      <MenuControl hasSlider currentValue={70}>C++</MenuControl>
      <MenuControl hasSlider currentValue={70}>Visual Basic</MenuControl>
    </div>
  </PageColumn>
  <PageColumn columnTitle="Web Development">
    <MenuControl hasSlider currentValue={90}>JavaScript</MenuControl>
    <MenuControl hasSlider currentValue={90}>HTML</MenuControl>
    <MenuControl hasSlider currentValue={90}>CSS</MenuControl>
    <MenuControl hasSlider currentValue={85}>React.js</MenuControl>
    <MenuControl hasSlider currentValue={85}>Next.js</MenuControl>
    <MenuControl hasSlider currentValue={75}>Svelte</MenuControl>
    <MenuControl hasSlider currentValue={70}>Angular</MenuControl>
    <MenuControl hasSlider currentValue={65}>Vue</MenuControl>
  </PageColumn>
  <PageColumn columnTitle="Database">
    <MenuControl hasSlider currentValue={75}>MySQL</MenuControl>
    <MenuControl hasSlider currentValue={75}>Firebase</MenuControl>
    <MenuControl hasSlider currentValue={65}>MongoDB</MenuControl>
  </PageColumn>
  <PageColumn columnTitle="3D Modelling">
    <MenuControl hasSlider currentValue={80}>Blender 3D</MenuControl>
  </PageColumn>
  <PageColumn columnTitle={'Mobile App Development'}>
    <MenuControl hasSlider currentValue={75}>Flutter</MenuControl>
  </PageColumn>
  <PageColumn columnTitle={'Languages'}>
    <MenuControl hasSlider currentValue={100}>English</MenuControl>
    <MenuControl hasSlider currentValue={75}>Bahasa Malaysia</MenuControl>
    <MenuControl hasSlider currentValue={20}>Chinese</MenuControl>
  </PageColumn>
</PageContent>

<style>
  .control-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
</style>
