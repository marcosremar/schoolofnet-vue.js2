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
      novoJogo: {
        casa: {
          time: null,
          gols: 0
        },
        fora: {
          time: null,
          gols:0
        }
      },
    	alfabeto : {
    		a: 'A',
    		b: 'B',
    		c: 'C',
    		d: 'D',
    		e: 'E'
    	}
  },
  created(){
    let indexCasa = Math.floor(Math.random() * 3); 
    let indexFora = Math.floor(Math.random() * 3);

    this.novoJogo.casa.time = this.times[indexCasa];
    this.novoJogo.casa.gols = 0;
    this.novoJogo.fora.time = this.times[indexFora];
    this.novoJogo.fora.gols = 0;
  }
})
