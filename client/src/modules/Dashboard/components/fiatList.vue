<template>
	<div class="vv-fiatlist-page">
		<div>
			<h3>Fiat Currency Exchange</h3>
		</div>
		<div class="vv-fiats" v-show="stateFiats.length > 0">
			<div class="vv-fiat" v-for="(fiat, index) in stateFiats" :key="index">
				<div>
					<label>{{ fiat.pair.split('/')[0] }} - {{ fiat.pair.split('/')[1] }}</label>
				</div>
				<div>
					<label>{{ fiat.rate }}</label>
				</div>
			</div>
		</div>
		<div class="full-width" v-show="stateFiats.length == 0">
			<label>No Fiats Currencies detected.</label>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'VvFiatList',
		data() {
			return {
			};
		},
		computed: {
			...mapGetters('dashboard', {
				stateFiats: 'getFiats',
			}),
		},
		methods: {

		},
	};
</script>

<style lang="scss" scoped>
	.vv-fiatlist-page {
		width: 100%;
		margin-top: 15px;
		.active {
			color: white;
			background-color: #ffc107;
		}
		.vv-fiats {
			.vv-fiat {
				width: 100px;
				margin: 5px 15px 5px 0px;
				border-left: 2px solid #4caf50;
    		padding-left: 5px;
    		display: inline-block;
			}
		}
		.full-width {
			width: 100%;
		}
	}
</style>