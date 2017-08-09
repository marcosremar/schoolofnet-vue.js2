import Vue from 'vue'
import {Time} from './time';
import _ from 'lodash';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');
let meuVue = new Vue({
  el: '#app',
  data: {
      order:{
        keys: ['pontos', 'gm', 'gs'],
          sort: ['desc', 'desc', 'asc']
      },
      filter: '',
    colunas: ['nome', 'pontos', 'gm', 'gs', 'saldo'],
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
      view: 'tabela'
  },
  methods: {
    fimJogo(){
      let timeAdversario = this.novoJogo.fora.time;
      let gols = +this.novoJogo.casa.gols;
      let golsAdversario = +this.novoJogo.fora.gols;
      this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversario);
      this.showView('tabela');
    },
      createNovoJogo(){
          let indexCasa = Math.floor(Math.random() * 3);
          let indexFora = Math.floor(Math.random() * 3);

          this.novoJogo.casa.time = this.times[indexCasa];
          this.novoJogo.casa.gols = 0;
          this.novoJogo.fora.time = this.times[indexFora];
          this.novoJogo.fora.gols = 0;
          this.showView('novojogo');
      },
      showView(view){
          this.view = view;
      },
      sortBy(coluna){
          this.order.keys = coluna;
          this.order.sort = this.order.sort == 'desc' ? 'asc' : 'desc';
      }
  },
    computed: {
        timesFiltered(){
            let colecao = _.orderBy(this.times, this.order.keys, this.order.sort);

            return _.filter(colecao, item => {
                return item.nome.indexOf(this.filter) >= 0;
            });
        }
    },
  filters: {
      saldo(time){
          return time.gm - time.gs;
      },
      ucwords(value){
          return value.charAt(0).toUpperCase() + value.slice(1);
      }
  }

});