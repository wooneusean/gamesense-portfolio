<script>
  import CheckBox from '../components/CheckBox.svelte';
  import PageColumn from '../components/PageColumn.svelte';
  import PageContent from '../components/PageContent.svelte';
  import Slider from '../components/Slider.svelte';
</script>

<PageContent>
  <PageColumn columnTitle={'Software Development'}>
    <div class="control-container">
      <Slider progress={85}>Java</Slider>
      <Slider progress={85}>C#</Slider>
      <Slider progress={70}>C++</Slider>
      <Slider progress={70}>Visual Basic</Slider>
    </div>
  </PageColumn>
  <PageColumn columnTitle="Web Development">
    <Slider progress={90}>JavaScript</Slider>
    <Slider progress={90}>HTML</Slider>
    <Slider progress={90}>CSS</Slider>
    <Slider progress={85}>React.js</Slider>
    <Slider progress={85}>Next.js</Slider>
    <Slider progress={75}>Svelte</Slider>
    <Slider progress={70}>Angular</Slider>
    <Slider progress={70}>PHP</Slider>
    <Slider progress={65}>Vue</Slider>
  </PageColumn>
  <PageColumn columnTitle={'Database'} />
  <PageColumn columnTitle={'3D Modelling'} />
  <PageColumn columnTitle={'Mobile App Development'} />
  <PageColumn columnTitle={'Languages'} />
</PageContent>

<style>
  .control-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
</style>
