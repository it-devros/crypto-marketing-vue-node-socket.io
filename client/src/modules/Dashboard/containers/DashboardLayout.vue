<template>
  <div class="dashboard-page-wrap">
    <h2>Dashboard Layout</h2>
    <div class="content-wrapper">
      <router-view />
    </div>
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
  .dashboard-page-wrap {
  }
</style>
