<template>
  <div class="vv-books-layout">
    <v-container fluid>
      <v-layout row wrap>
        <router-view></router-view>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'BooksLayout',
    components: {
    },
  };
</script>

<style lang="scss" scoped>
  .vv-books-layout {
  }
</style>
