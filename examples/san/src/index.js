import {defineComponent} from 'san'
import List from './List'
import Benchmark from '../../../helpers/benchmark'


function stringRender(items, done) {
  let html = '<div><ul>';
  for (let i = 0; i < items.length; i++) {
    html += '<li>hi</li>'
  }
  html += '</ul></div>'

  let root = document.querySelector('#root');

  root.innerHTML = html;

  done();

}

function sanRender(items, done) {

  let App = defineComponent({

    components: {
      list: List
    },

    template: `
      <div id='app'>
        <list items='{{items}}' />
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

}

var fn = location.search.indexOf('string') > -1 ? stringRender : sanRender;

/* eslint-disable no-new */
new Benchmark(fn);

