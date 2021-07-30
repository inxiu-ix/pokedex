<template>
  <div class="fixed-overlay">
    <div class="modal">
      <div class="sprite-pokemon">
        <img
          class="sprite"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
        />
      </div>
      <h1 class="modal-title title-name">{{ pokemon.name }}</h1>
      <div class="abilities-container">
        <h1 class="modal-title">Abilities:</h1>
        <ul class="abilities-list list">
          <li
            class="abilities-item list-item"
            v-for="ability in pokemon.abilities"
            :key="ability.ability.name"
          >
            {{ ability.ability.name }}
          </li>
        </ul>
        <h1 class="modal-title">Types:</h1>
        <ul class="types-list list">
          <li
            class="list-item"
            v-for="type in pokemon.types"
            :key="type.type.name"
          >
            {{ type.type.name }}
          </li>
        </ul>
      </div>
      <button class="close-btn" @click="$emit('close-modal')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: ['pokemon'],
  methods: {},
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
  background-color: rgba(0, 0, 0, 0.3);
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 5px;
}

.modal {
  padding: 20px 10px;
  text-align: center;
  min-width: 350px;
  min-height: 375px;
  background-color: #ede0fa;
  position: absolute;
  left: 30%;
  top: 30%;
  margin-left: -100px;
  margin-top: -75px;
  border-radius: 20px;
}

.modal-title {
  margin: 0;
  margin-top: 10px;
  font-size: 25px;
}

.title-name {
  margin-top: 90px;
  text-transform: uppercase;
}

.sprite-pokemon {
  position: absolute;
  top: -75px;
  left: 85px;
  background-color: #e8cff9;
  border-radius: 50%;
}

.sprite {
  width: 180px;
  height: 180px;
}

.close-btn {
  border: none;
  margin-top: 15px;
  padding: 5px 15px;
  background-color: #e8cff9;
  border: 1px solid #a284da;
  border-radius: 10px;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  transition: all 0.5s ease-out;
}

.close-btn:hover {
  background-color: rgba(100, 46, 201, 0.5);
  cursor: pointer;
}

@media (min-width: 768px) {
  .modal {
    left: 40%;
    top: 30%;
  }
}

@media (min-width: 1200px) {
  .modal {
    left: 45%;
    top: 25%;
  }
}
</style>
