<template>
  <div class='vv-dashboard-page'>
    <vv-fiat-list></vv-fiat-list>
    <vv-main-list></vv-main-list>
    <vv-currency-page></vv-currency-page>
  </div>
</template>

<script>
  import VvFiatList from '../components/fiatList';
  import VvMainList from '../components/mainList';
  import VvCurrencyPage from './currencyPage';

  export default {
    name: 'DashboardPage',
    components: {
      VvFiatList,
      VvMainList,
      VvCurrencyPage,
    },
    data() {
      return {
      };
    },
    computed: {
    },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  .vv-dashboard-page {
  }
</style>
