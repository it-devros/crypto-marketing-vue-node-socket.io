<template>
  <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn color="white" flat v-for="link in links" :key="link">
        {{ link }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>IT-ASSASSIN</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  },
  data() {
    return {
       links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
    }
  },
}
</script>

<style lang="scss" scoped>
</style>

