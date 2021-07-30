<template>
  <div class="fixed-overlay">
    <div class="modal">
      <div class="sprite-pokemon">
        <!-- <img
          class="sprite"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
        /> -->
      </div>
      <!-- <h1>{{ pokemon.name }}</h1> -->
      <div class="abilities-container">
        <h1>Abilities</h1>
        <ul class="abilities-list">
          <!-- <li
            class="abilities-item"
            v-for="ability in pokemon.abilities"
            :key="ability.ability.name"
          >
            {{ ability.ability.name }}
          </li> -->
        </ul>
      </div>
      <button @click="onModale">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  methods: {
  },
};
</script>

<style>
.fixed-overlay {
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.089);
}

.modal {
  min-width: 400px;
  min-height: 375px;
  background-color: #ede0fa;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -75px;
  border-radius: 20px;
}

.sprite-pokemon {
  position: absolute;
  top: -75px;
  left: 115px;
  background-color: #e8cff9;
  border-radius: 50%;
}

.sprite {
  width: 180px;
  height: 180px;
}
</style>
