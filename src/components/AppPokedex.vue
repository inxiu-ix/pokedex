<template>
  <div class="pokedex-container">
    <div class="pokedex"></div>
    <ul class="pokedex__list pokemons-list">
      <button class="pokemon-list__btn prev-btn" @click="prevPag">prev</button>
      <li
        class="pokemons-list__item"
        v-for="pokemon in repPokemons"
        :key="pokemon.name"
      >
        <img
          class="pokemons-list__item-img"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`"
        />
        <p class="pokemons-list__item-title">{{ pokemon.name }}</p>
      </li>
      <button class="pokemon-list__btn next-btn" @click="nextPag">next</button>
    </ul>
  </div>
</template>

<script>
// import instance from '@/api/instance'
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'pokedex',
  data() {
    return {
      paginatorStep: +localStorage.getItem('step'),
    };
  },
  computed: {
    ...mapGetters(['repPokemons']),
  },
  methods: {
    ...mapActions(['getPokemons']),
    nextPag() {
      if (this.paginatorStep < 1118) {
        localStorage.setItem('step', (this.paginatorStep += 10));
        this.getPokemons(this.paginatorStep);
        const pokedex = document.querySelector('.pokedex-container');
        pokedex.scrollLeft = 0;
      } else return;
    },
    prevPag() {
      if (this.paginatorStep !== 0) {
        localStorage.setItem('step', (this.paginatorStep -= 10));
        this.getPokemons(this.paginatorStep);
      } else return;
    },
  },
  mounted() {
    this.getPokemons(this.paginatorStep);
    // const res = await instance.get('pokemon/11/');
    // console.log('respok >>>', res.data)
  },
};
</script>

<style>
.pokedex-container {
  display: flex;
  white-space: nowrap;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  z-index: 1;
  transition: all 1s;
}

.pokedex {
  overflow-y: hidden;
  height: 100%;
  flex-grow: 1;
}

.pokemons-list {
  margin: 0;
  display: flex;
  list-style: none;
  padding: 113px 10px;
  text-align: center;
  overflow-y: hidden;
}

.pokemons-list__item {
  margin: 0 10px;
  border-radius: 25px;
  background-color: #f5e9fd;
  padding: 10px 5px;
  border: 1px solid #a284da;
}

.pokemons-list__item-img {
  margin: 0 25px;
  width: 250px;
  height: 250px;
}

.pokemon-list__btn {
  border: none;
  padding: 20px;
  font-size: 0;
  background-color: transparent;
  position: relative;
}

.prev-btn::before {
  border-top-left-radius: 5px;
  content: '';
  display: block;
  background-color: #a284da;
  width: 5px;
  height: 151px;
  position: absolute;
  top: 14px;
  left: 17px;
  transform: rotate(12deg);
}

.prev-btn::after {
  border-bottom-left-radius: 5px;
  content: '';
  display: block;
  background-color: #a284da;
  width: 5px;
  height: 151px;
  position: absolute;
  top: 161px;
  left: 17px;
  transform: rotate(-12deg);
}

.next-btn::before {
  border-top-right-radius: 5px;
  content: '';
  display: block;
  background-color: #a284da;
  width: 5px;
  height: 151px;
  position: absolute;
  top: 14px;
  left: 17px;
  transform: rotate(-12deg);
}

.next-btn::after {
  border-bottom-right-radius: 5px;
  content: '';
  display: block;
  background-color: #a284da;
  width: 5px;
  height: 151px;
  position: absolute;
  top: 161px;
  left: 17px;
  transform: rotate(12deg);
}

.pokemons-list__item-title {
  font-size: 15px;
  color: #090217;
}
</style>
