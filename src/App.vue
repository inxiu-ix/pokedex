<template>
  <div id="app">
    <AppPokedex/>
  </div>
</template>

<script>
import AppPokedex from '@/components/AppPokedex'
export default {
  name: "App",
  components: {
    AppPokedex,
  },
};
</script>

<style>
#app {
  position: relative;
  z-index: 1;
  color: #2c3e50;
  height: 100%;
  padding: 9px 0px;
  background-color: #ddc6fa;
  /* overflow-y: hidden; */
}
</style>
