const listitem = {
  template: `<li>hi</li>`
}

const listitems = {

  components: {
    listitem
  },
  template: `<ul>
      <listitem san-for='item in items' />
  </ul>`

}

const List = {

  components: {
    listitem
  },

  template: `<div><ul>
      <li san-for='item in items'>hi</li>
  </ul></div>`

}

export default List
