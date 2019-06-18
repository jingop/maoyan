<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<div v-html="aa">{{aa}}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
	data() {
		return {
			aa:'失落的灵魂覅是的活佛啊'
		}
	},
  components: {
    HelloWorld
  }
}
</script>
