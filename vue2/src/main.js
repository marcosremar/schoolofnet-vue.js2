import Vue from 'vue'
import {Time} from './time';
import _ from 'lodash';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');
new Vue({
  el: '#app',
  data: {
  	times: [
  		new Time("America Mineiro", require('./assets/america_mg_60x60.png')),
  		new Time("Atletico Paranaense", require('./assets/atletico-pr_60x60.png')),
  		new Time("Atletico Mineiro", require('./assets/atletico_mg_60x60.png'))
  		],
	alfabeto : {
		a: 'A',
		b: 'B',
		c: 'C',
		d: 'D',
		e: 'E'
	}

  }
})
