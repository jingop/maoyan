<template>
	<div>
		<Gy></Gy>
		<div v-for="(list,index) in siYuan" class="aa" :class="{ red:changeRed == index}" @click="change(index)">{{list.a}}</div>

		<!--  -->
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<p>hh</p>
		<button v-if="local" class="showIcon" id="test">返回</button>
	</div>
</template>

<script>
	import Gy from './RoutingManagement'
	export default {
		data() {
			return {
				siYuan: [{
						"a": "田"
					},
					{
						"a": "心"
					},
					{
						"a": "水"
					},
					{
						"a": "原"
					}
				],
				changeRed: [],
				local: false

			}
		},
		methods: {
			change(index) {
				this.changeRed = index;

			},
			showIcon() {
				if (!!document.documentElement.scrollTop && document.documentElement.scrollTop > 200) {
					this.local = true
					// 页面高度大于200执行操作
				} else {
					this.local = false
					// 页面高度小于200执行操作
				}
			},
		},
		components: {
			Gy
		},
		mounted() {
			window.addEventListener('scroll', this.showIcon);
		},
		destroyed() { //离开这个界面之后，删除，不然会有问题
			window.removeEventListener('scroll', this.showIcon)
		}
	}
</script>

<style>
	.aa {
		cursor: pointer;
	}

	.red {
		color: red;
	}
	p{
		margin-left: 50px;
	}
	.showIcon{
		position: fixed;
		top: 80px;
		left: 0px;
	}
</style>
