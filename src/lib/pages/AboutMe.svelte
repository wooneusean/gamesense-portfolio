<div class="page-content">
  <div class="page-column" title="Presets" on:mousedown|stopPropagation={() => {}}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum temporibus cupiditate, alias aspernatur ad eligendi
    ducimus, ab provident mollitia nisi excepturi quas rem laborum eveniet sit ipsam quod eum quo animi ipsum modi et
    nam deleniti consectetur. Saepe vitae asperiores enim, perferendis quae provident sint quasi fugiat aliquam earum
    consequatur incidunt, maxime eveniet, repellat dolor. Accusantium, cum dicta blanditiis eaque unde delectus facere
    earum tenetur, rerum in culpa! Illo nostrum qui in. Voluptates ratione veniam amet quaerat aliquam quasi architecto
    enim numquam sunt nihil? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam non, nobis maxime amet
    delectus explicabo harum necessitatibus vitae earum illum repellendus, cumque repudiandae aut doloribus, saepe
    voluptas vel quisquam. Excepturi consequatur porro voluptatibus culpa sed inventore. Optio quos dicta quasi quae
    unde deleniti laborum nobis commodi recusandae obcaecati eveniet odio impedit reprehenderit ex id, aut sapiente
    voluptatum accusamus repudiandae dolor eum, eaque consectetur non. Corporis, iure. Odit a neque consectetur
    distinctio illo adipisci tenetur accusantium earum itaque molestiae officiis, omnis beatae ullam voluptas nobis non,
    cupiditate soluta in quis corrupti impedit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam non,
    nobis maxime amet delectus explicabo harum necessitatibus vitae earum illum repellendus, cumque repudiandae aut
    doloribus, saepe voluptas vel quisquam. Excepturi consequatur porro voluptatibus culpa sed inventore. Optio quos
    dicta quasi quae unde deleniti laborum nobis commodi recusandae obcaecati eveniet odio impedit reprehenderit ex id,
    aut sapiente voluptatum accusamus repudiandae dolor eum, eaque consectetur non. Corporis, iure. Odit a neque
    consectetur distinctio illo adipisci tenetur accusantium earum itaque molestiae officiis, omnis beatae ullam
    voluptas nobis non, cupiditate soluta in quis corrupti impedit.
  </div>
  <div class="page-column" title="Lua" on:mousedown|stopPropagation={() => {}}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam non, nobis maxime amet delectus explicabo harum
    necessitatibus vitae earum illum repellendus, cumque repudiandae aut doloribus, saepe voluptas vel quisquam.
    Excepturi consequatur porro voluptatibus culpa sed inventore. Optio quos dicta quasi quae unde deleniti laborum
    nobis commodi recusandae obcaecati eveniet odio impedit reprehenderit ex id, aut sapiente voluptatum accusamus
    repudiandae dolor eum, eaque consectetur non. Corporis, iure. Odit a neque consectetur distinctio illo adipisci
    tenetur accusantium earum itaque molestiae officiis, omnis beatae ullam voluptas nobis non, cupiditate soluta in
    quis corrupti impedit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam non, nobis maxime amet
    delectus explicabo harum necessitatibus vitae earum illum repellendus, cumque repudiandae aut doloribus, saepe
    voluptas vel quisquam. Excepturi consequatur porro voluptatibus culpa sed inventore. Optio quos dicta quasi quae
    unde deleniti laborum nobis commodi recusandae obcaecati eveniet odio impedit reprehenderit ex id, aut sapiente
    voluptatum accusamus repudiandae dolor eum, eaque consectetur non. Corporis, iure. Odit a neque consectetur
    distinctio illo adipisci tenetur accusantium earum itaque molestiae officiis, omnis beatae ullam voluptas nobis non,
    cupiditate soluta in quis corrupti impedit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam non,
    nobis maxime amet delectus explicabo harum necessitatibus vitae earum illum repellendus, cumque repudiandae aut
    doloribus, saepe voluptas vel quisquam. Excepturi consequatur porro voluptatibus culpa sed inventore. Optio quos
    dicta quasi quae unde deleniti laborum nobis commodi recusandae obcaecati eveniet odio impedit reprehenderit ex id,
    aut sapiente voluptatum accusamus repudiandae dolor eum, eaque consectetur non. Corporis, iure. Odit a neque
    consectetur distinctio illo adipisci tenetur accusantium earum itaque molestiae officiis, omnis beatae ullam
    voluptas nobis non, cupiditate soluta in quis corrupti impedit.
  </div>
</div>

<style lang="scss">
  .page-column {
    padding: 20px;
    border: solid 1px #212121;
    background-color: #171717;
    position: relative;
    font-size: small;
    color: #c3c3c3;

    &::after {
      content: attr(title);
      font-size: medium;
      font-weight: bold;
      color: #c9c9c9;
      position: absolute;
      top: -15px;
      left: 12px;
    }
  }

  .page-content {
    height: 100%;
    width: 100%;
    padding: 20px;
    display: grid;
    gap: 20px;
    grid-template-rows: repeat(auto-fit, 1fr);
  }
</style>
