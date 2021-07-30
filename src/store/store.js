import Vue from 'vue';
import Vuex from 'vuex';
import pokemons from './modules/pokemons'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pokemons,
  }
})