<template>
  <div id="app">
    <h1>Vue Vuex Seed Application</h1>
    <v-app>
      <router-view />
      <notifications group="main" position="bottom right" :speed="500" />
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style lang="scss">

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
