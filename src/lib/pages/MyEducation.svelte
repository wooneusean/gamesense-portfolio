<script>
  import MenuControl from '../components/MenuControl.svelte';
  import PageColumn from '../components/PageColumn.svelte';
  import PageContent from '../components/PageContent.svelte';
</script>

<PageContent displayType="row">
  <PageColumn style="height: min-content;" columnTitle={"Bachelor's Degree"}>
    <table>
      <tr>
        <td><MenuControl hasCheckbox>Field of Study</MenuControl></td>
        <td>Information and Communications Technology</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Major</MenuControl></td>
        <td>Computer Science</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Institute</MenuControl></td>
        <td>Asia Pacific University of Technology & Innovation</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Grade</MenuControl></td>
        <td>3.78 (as of 4/4/2023)</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Graduation Date</MenuControl></td>
        <td>August 2023 (Expected)</td>
      </tr>
    </table>
  </PageColumn>
  <PageColumn style="height: min-content;" columnTitle={'Diploma'}>
    <table>
      <tr>
        <td><MenuControl hasCheckbox>Field of Study</MenuControl></td>
        <td>Information and Communications Technology</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Major</MenuControl></td>
        <td>Software Engineering</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Institute</MenuControl></td>
        <td>Asia Pacific University of Technology & Innovation</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Grade</MenuControl></td>
        <td>3.90</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Graduation Date</MenuControl></td>
        <td>April 2021</td>
      </tr>
    </table>
  </PageColumn>
</PageContent>

<style lang="scss">
  table {
    width: 100%;
    td:first-child {
      font-weight: bold;
    }
    td {
      vertical-align: top;
      text-align: left;
    }
  }
</style>
