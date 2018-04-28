<template>
	<div class="vv-mainlist-page">
		<div class="vv-mains" v-show="mains.length > 0">
			<div class="vv-main" v-for="(main, index) in mains" :key="index" v-bind:class="{ 'active': flagMains[index] }">
				<div>
					<label>{{ main.currencyName }} - {{ main.pairName }}</label>
				</div>
				<div>
					<label>{{ main.buy }}</label>
				</div>
			</div>
		</div>
		<div class="full-width" v-show="mains.length == 0">
			<label>No Main Crypto Currencies detected.</label>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name: 'VvMainList',
		data() {
			return {
				flagMains: [],
				mains: [],
			};
		},
		computed: {
			...mapGetters('dashboard', {
				stateMains: 'getMains',
			}),
		},
		watch: {
			stateMains(newVal) {
				newVal.forEach((item, index) => {
					this.flagMains[index] = false;
					if (this.mains[index]) {
						if (this.mains[index].buy != item.buy) {
							this.flagMains[index] = true;
						} else {
							this.flagMains[index] = false;
						}
					} else {
						this.flagMains[index] = true;
					}
				});
				this.mains = Object.assign([], newVal);
			},
		},
		methods: {
		},
	};
</script>

<style lang="scss" scoped>
	.vv-mainlist-page {
		width: 100%;
		margin-top: 15px;
		.active {
			color: white;
			background-color: #9c27b0;
		}
		.vv-mains {
			.vv-main {
				width: 100px;
				margin: 5px 15px 5px 0px;
				border-left: 2px solid #2196f3;
    		padding-left: 5px;
    		display: inline-block;
			}
		}
		.full-width {
			width: 100%;
		}
	}
</style>