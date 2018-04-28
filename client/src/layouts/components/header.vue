<template>
	<v-tabs fixed-tabs>
    <v-avatar :tile="tile" :size="avatarSize" class="white lighten-4">
      <img src="/client/assets/logo.png" alt="logo">
    </v-avatar>
    <v-tab v-for="link in links" :key="link" @click="goTo(link)">
      {{ link }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  data() {
  	return {
      tile: false,
      avatarSize: '50px',
  		links: ['dashboard', 'books', 'parameters', 'functions', 'orders']
  	};
  },
  methods: {
    goTo(link) {
      this.$router.push({ name: link });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

