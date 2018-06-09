<template>
  <div class="vv-dashboard-layout">
    <v-container fluid>
      <h3>Dashboard</h3>
      <v-layout row wrap>
        <v-flex sm2 mr-2>
          <v-select :items="option_markets" v-model="opt_market" label="Select Market" single-line auto hide-details></v-select>
        </v-flex>
        <v-flex sm2 mr-2>
          <v-select :items="option_exchanges" v-model="opt_exchange" label="Select Exchange" single-line auto hide-details></v-select>
        </v-flex>
        <v-flex sm2 pt-3>
          <v-btn small color="success" @click="onFilter">Filter Now</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <router-view></router-view>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'DashboardLayout',
    components: {
    },
    data() {
      return {
        option_exchanges: ['All', 'BTC ETH'],
        option_markets: ['All', 'Bitfinex', 'Gdax'],
        opt_market: '',
        opt_exchange: '',
      };
    },
    methods: {
      ...mapActions('dashboard', {
        connectSocket: 'connectSocket',
      }),
      onFilter() {
        
      },
    },
    created() {
      this.connectSocket().then((res) => {
        if (res) {
          this.notifySuccess('Web Socket API server connected');
        } else {
          this.notifyWarning('Web Socket API server connected already');
        }
      }).catch((err) => {
        this.notifyError('Web Socket API server connection error');
      });
    },
  };
</script>

<style lang="scss" scoped>
  .vv-dashboard-layout {
  }
</style>
