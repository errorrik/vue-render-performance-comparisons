import {defineComponent} from 'san'
import List from './List'
import Benchmark from '../../../helpers/benchmark'





/* eslint-disable no-new */
new Benchmark((items, done) => {

  let App = defineComponent({

    components: {
      list: List
    },

    template: `
      <div id='app'>
        <div><ul>
            <li san-for='item in items'>hi</li>
        </ul></div>
      </div>
    `,

    attached: done

  });

  new App({

    data: {
      items
    }

  })
  .attach(document.querySelector('#root'));

  // let html = '<div><ul>';
  // for (let i = 0; i < 10000; i++) {
  //   html+= '<li>hi</li>'
  // }
  // html += '</ul></div>'

  // document.querySelector('#root').innerHTML = html;
  // done();


})



