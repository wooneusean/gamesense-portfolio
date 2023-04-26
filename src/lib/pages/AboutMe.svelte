<script>
  import Checkbox from '../components/Checkbox.svelte';
  import PageColumn from '../components/PageColumn.svelte';
  import PageContent from '../components/PageContent.svelte';
</script>

<PageContent>
  <PageColumn columnTitle={'About Me'}>
    <div>
      <p>
        Hi there! I am <strong>Woon Eusean</strong>, the developer of this
        <span style="font-family: monospace; color: var(--primary);">1337</span> site which is kinda like my portfolio/CV.
      </p>
      <br />
      <p>I am based in Malaysia and am currently studying for a Bachelors Degree in Computer Science.</p>
      <br />
      <p>
        I frequently tinker in many technologies, be it desktop, web, mobile, and anything else as long as its
        programming related.
      </p>
    </div>
    <br />
  </PageColumn>
  <PageColumn columnTitle={'Links'}>
    <Checkbox>
      <a href="https://github.com/wooneusean" target="_blank" rel="noreferrer">My GitHub</a>
    </Checkbox>
    <Checkbox>
      <a href="https://www.linkedin.com/in/wooneusean/" target="_blank" rel="noreferrer">My LinkedIn</a>
    </Checkbox>
    <Checkbox>
      <a href="https://myanimelist.net/animelist/whoon" target="_blank" rel="noreferrer">My Anime List</a>
    </Checkbox>
  </PageColumn>
</PageContent>

<style lang="scss">
</style>
