<template>
  <div class="vv-parameters-layout">
    <v-container fluid>
      <v-layout row wrap>
        <router-view></router-view>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'ParametersLayout',
    components: {
    },
  };
</script>

<style lang="scss" scoped>
  .vv-parameters-layout {
  }
</style>
