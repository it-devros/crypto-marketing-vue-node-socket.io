<template>
  <div class="vv-functions-layout">
    <v-container fluid>
      <v-layout row wrap>
        <router-view></router-view>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'FunctionsLayout',
    components: {
    },
  };
</script>

<style lang="scss" scoped>
  .vv-functions-layout {
  }
</style>
