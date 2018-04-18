<template>
  <div class="login-page-wrap">
    <h2>Login Layout</h2>
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>

  export default {
    name: 'LoginLayout',
    components: {
    },
  };
</script>

<style lang="scss" scoped>
  .login-page-wrap {
  }
</style>
