<template>
	<div class="vv-currency-page">
		<v-layout row wrap v-show="currencyData != {}" v-for="(item, key) in currencyData" :key="key">
      <v-flex sm12>
      	<div class="my-pt-30">
      		<v-checkbox :label="key" v-model="checkbox1" hide-details></v-checkbox>
      	</div>
      </v-flex>
			<v-flex sm12>
      	<div class="full-width">
					<vv-currency-list :childList="item" :currencyName="key"></vv-currency-list>
				</div>
      </v-flex>
    </v-layout>
		<div class="full-width" v-show="currencyData == {}">
			<label>No Main Crypto Currencies detected.</label>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import VvCurrencyList from '../components/currencyList';

	export default {
		name: 'VvCurrencyPage',
		components: {
			VvCurrencyList,
		},
		data() {
			return {
				currencyData: {},
				checkbox1: false,
			};
		},
		computed: {
			...mapGetters('dashboard', {
				stateCurrencies: 'getCurrencies',
			}),
		},
		watch: {
			stateCurrencies(newVal) {
				let results = {};
				newVal.forEach((item) => {
					if (!results.hasOwnProperty(item.currencyName)) {
						results[item.currencyName] = {};
					}
					if (!results[item.currencyName].hasOwnProperty(item.pairName)) {
						results[item.currencyName][item.pairName] = [];
					}
					results[item.currencyName][item.pairName].push(item);
				});
				this.currencyData = Object.assign({}, results);
			},
		},
		methods: {
		},
	};
</script>

<style lang="scss" scoped>
	.vv-currency-page {
		.full-width {
			width: 100%;
		}
		.my-pt-10 {
			padding-top: 10px;
		}
		.my-pt-30 {
			padding-top: 30px;
		}
	}
</style>