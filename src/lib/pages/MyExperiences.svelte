<script>
<<<<<<< HEAD
  import MenuControl from '../components/MenuControl.svelte';
=======
  import Checkbox from '../components/Checkbox.svelte';
>>>>>>> b25a82dba52c04d8c30f4693211afd3b443f4ff7
  import PageColumn from '../components/PageColumn.svelte';
  import PageContent from '../components/PageContent.svelte';
</script>

<PageContent displayType="row">
  <PageColumn columnTitle={"Touch 'n Go Sdn. Bhd."}>
    <table>
      <tr>
<<<<<<< HEAD
        <td><MenuControl hasCheckbox>Position Title</MenuControl></td>
        <td>Application Development Intern</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Position Level</MenuControl></td>
        <td>Intern</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Duration</MenuControl></td>
        <td>July 2022 - November 2022</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Work Description</MenuControl></td>
=======
        <td><Checkbox>Position Title</Checkbox></td>
        <td>Application Development Intern</td>
      </tr>
      <tr>
        <td><Checkbox>Position Level</Checkbox></td>
        <td>Intern</td>
      </tr>
      <tr>
        <td><Checkbox>Duration</Checkbox></td>
        <td>July 2022 - November 2022</td>
      </tr>
      <tr>
        <td><Checkbox>Work Description</Checkbox></td>
>>>>>>> b25a82dba52c04d8c30f4693211afd3b443f4ff7
        <td>
          Worked in an AGILE team to develop front end and back end application development with Java 8. Used Spring
          Framework, Spring Boot, CUBA Platform, Java Persistence API with Hibernate, and Apache Kafka for real-time
          microservice development. Worked with MySQL as database. Utilized Jenkins to build and Alibaba Cloud to deploy
          microservices. Also used GitLab for version control.
        </td>
      </tr>
    </table>
  </PageColumn>
  <PageColumn columnTitle={'Infinitilab Sdn. Bhd.'}>
    <table>
      <tr>
<<<<<<< HEAD
        <td><MenuControl hasCheckbox>Position Title</MenuControl></td>
        <td>Software Engineer Intern</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Position Level</MenuControl></td>
        <td>Intern</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Duration</MenuControl></td>
        <td>April 2021 - August 2021</td>
      </tr>
      <tr>
        <td><MenuControl hasCheckbox>Work Description</MenuControl></td>
=======
        <td><Checkbox>Position Title</Checkbox></td>
        <td>Software Engineer Intern</td>
      </tr>
      <tr>
        <td><Checkbox>Position Level</Checkbox></td>
        <td>Intern</td>
      </tr>
      <tr>
        <td><Checkbox>Duration</Checkbox></td>
        <td>April 2021 - August 2021</td>
      </tr>
      <tr>
        <td><Checkbox>Work Description</Checkbox></td>
>>>>>>> b25a82dba52c04d8c30f4693211afd3b443f4ff7
        <td>
          Worked in an AGILE team to create visually pleasing and stunning frontend with HTML, CSS and JavaScript with
          Angular and connecting it with the backend made using ASP.Net using ABPZero framework.
        </td>
      </tr>
    </table>
  </PageColumn>
</PageContent>

<style lang="scss">
  table {
    width: 100%;
    td:first-child {
      font-weight: bold;
      min-width: 10rem;
    }

    td {
      vertical-align: top;
      text-align: left;
    }
  }
</style>
