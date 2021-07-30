import instance from '@/api/instance'

export default {
  state: {
    pokemons: []  
  },
  getters: {
    repPokemons(state) {
      return state.pokemons
    }
  },
  actions: {
    async getPokemons(ctx, paginatorStep = 0) {
      const res = await instance.get('pokemon/?limit=10&offset=' + paginatorStep)
      const pokemons = await res.data.results
      for await (let pokemon of pokemons) {
        const response = await instance.get(pokemon.url)
        console.log('res>>>', response.data)
        pokemon.types = response.data.types
        pokemon.abilities = response.data.abilities
        pokemon.id = response.data.id
      }
      console.log('pokemons >>>', pokemons)
      ctx.commit('updatePokemons', pokemons)
     }
  },
  mutations: {
    updatePokemons(state, pokemons) {
      state.pokemons = pokemons
    }
  },
}