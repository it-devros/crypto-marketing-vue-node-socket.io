<template>
  <div class="vv-orders-layout">
    <v-container fluid>
      <v-layout row wrap>
        <router-view></router-view>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'OrdersLayout',
    components: {
    },
  };
</script>

<style lang="scss" scoped>
  .vv-orders-layout {
  }
</style>
