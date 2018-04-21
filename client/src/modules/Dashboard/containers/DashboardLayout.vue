<template>
  <div class="vv-dashboard-layout">
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'DashboardLayout',
    components: {
    },
  };
</script>

<style lang="scss" scoped>
  .vv-dashboard-layout {
  }
</style>
