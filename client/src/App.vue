<template>
  <v-app>
    <router-view></router-view>
    <notifications group="main" position="bottom right" :speed="500"></notifications>
  </v-app>
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
