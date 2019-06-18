<template>
  <div id="app">
	  <!-- <Gy></Gy> -->
    <router-view></router-view>
  </div>
</template>
<script>
	// import Gy from './views/RoutingManagement.vue'
	// export default {
	// 	components:{
	// 	  Gy
	// 	}
	// }
</script>

<style lang="scss">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
		text-align: center;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	body{
		font-family: Microsoft YaHei,Helvetica,Arial,sans-serif;
		background-color: #F4F4F4 !important ;
		-webkit-font-smoothing: subpixel-antialiased;
	}
	i{
		font-style: normal;
		font-weight: 400;
	}
	img{
		    border: none;
	}
	em{
		font-style: normal;
		font-weight: 400;
	}
</style>
