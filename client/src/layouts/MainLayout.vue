<template>
	<div class="vv-main-layout">
		<vv-header></vv-header>
	  <v-content>
	    <router-view></router-view>
	  </v-content>
	  <vv-footer></vv-footer>
	</div>
</template>

<script>
import VvFooter from './components/footer';
import VvHeader from './components/header';

export default {
  name: 'MainLayout',
  components: {
  	VvFooter,
  	VvHeader,
  },
};
</script>

<style lang="scss" scoped>
	.vv-main-layout {
		
	}
</style>

