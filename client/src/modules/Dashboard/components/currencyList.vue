<template>
	<div class="vv-currencylist-page">
		<v-layout row wrap>
			<v-flex sm3 pr-3 pb-3 v-for="(items, pairName) in childList" :key="pairName">
				<v-card>
					<v-card-title>
						<v-layout row wrap>
							<v-flex sm6>
								<h4 class="">{{ currencyName }} - {{ pairName }}</h4>
							</v-flex>
							<v-flex sm3>
								<div class="my-info my-b">&nbsp;135.234</div>
								<div class="my-blue my-b">&nbsp;9203</div>
							</v-flex>
							<v-flex sm3>
								<div class="my-info my-b">&nbsp;16.23%</div>
								<div class="my-red my-b">&nbsp;9203</div>
							</v-flex>
						</v-layout>
					</v-card-title>
					<v-divider></v-divider>
					<v-card-text dense>
						<v-layout row wrap v-for="item in items" :key="item._id">
							<v-flex sm6>
								<v-checkbox :label="item.exchangeName" v-model="checkbox1" hide-details></v-checkbox>
							</v-flex>
							<v-flex sm3 class="my-pt-5 my-b" v-bind:class="{ 'active': buyflags[pairName][item.exchangeName] }">
								&nbsp;{{ item.buy }}
							</v-flex>
							<v-flex sm3 class="my-pt-5 my-b" v-bind:class="{ 'active': sellflags[pairName][item.exchangeName] }">
								&nbsp;{{ item.sell }}
							</v-flex>
						</v-layout>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>

	</div>
</template>

<script>

	export default {
		name: 'VvCurrencyList',
		props: {
			childList: Object,
			currencyName: String,
		},
		data() {
			return {
				oldChildList: {},
				checkbox1: false,
				buyflags: {},
				sellflags: {},
			};
		},
		created() {
			for (let pair in this.childList) {
				this.buyflags[pair] = {};
				this.sellflags[pair] = {};
				for (let exchange in this.childList[pair]) {
					this.buyflags[pair][exchange] = false;
					this.sellflags[pair][exchange] = false;
				}
			}
			this.oldChildList = Object.assign({}, this.childList);
		},
		watch: {
			childList(newVal) {
				for(let pair in newVal) {
					this.buyflags[pair] = {};
					this.sellflags[pair] = {};
					newVal[pair].forEach((val, index) => {
						this.buyflags[pair][val.exchangeName] = false;
						this.sellflags[pair][val.exchangeName] = false;
						if (this.oldChildList[pair][index]) {
							if (val.buy != this.oldChildList[pair][index].buy) {
								this.buyflags[pair][val.exchangeName] = true;
							} else {
								this.buyflags[pair][val.exchangeName] = false;
							}
							if (val.sell != this.oldChildList[pair][index].sell) {
								this.sellflags[pair][val.exchangeName] = true;
							} else {
								this.sellflags[pair][val.exchangeName] = false;
							}
						}
					});
				}
				this.oldChildList = Object.assign({}, newVal);
			},
		},
		methods: {
		},
	};
</script>

<style lang="scss" scoped>
	.vv-currencylist-page {
		width: 100%;
		margin-top: 15px;
		.my-info {
			padding-left: 2px;
		}
		.my-blue {
			background-color: #4caf50;
			color: white;
			padding-left: 2px;
			width: 100%;
		}
		.my-red {
			background-color: #ff5252;
			color: white;
			padding-left: 2px;
			width: 100%
		}
		.my-pt-5 {
			padding-top: 5px;
		}
		.active {
			color: white;
			background-color: #9c27b0;
		}
		.my-b {
			border: 2px solid white;
		}
	}
</style>