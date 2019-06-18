<template>
	<div id="RoutingManagement">
		<div>
				<router-link to="/" exact>Home</router-link> |
				<router-link to="/about" exact>About</router-link> |
				<router-link to="/cinema" exact>影院</router-link> |
				<router-link to="/Shows" exact>演出</router-link>
			</div>
		  <!-- <router-view/> -->
		  <!-- <Gy></Gy> -->
	</div>
</template>

<script>
	import Gy from './RoutingManagement'
	export default {
		name: 'RoutingManagement',
		data() {
			return {
				
			}
		},
		components: {
			Gy
		},
	}
</script>

<style>
	body{
		    background-color: #F4F4F4;
	}
</style>
