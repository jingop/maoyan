<template>
	<div class="Cinema">
		<Gy></Gy>
		<!-- 筛选块 -->
		<div class="L-Cinema">
				<ul>
					<li class="L-Cinema-screen" v-for="(item,i) in listData" :key="i+'a'">
						<div class="L-Cinema-screen-biaoto">{{item.title}}</div>
						<ul class="L-Cinema-screen-ul">
							<li class="L-Cinema-screen-ul-li"
							 v-for="(item,$index) in item.list"
							 @click="selectStyle (item, $index)" 
							 :class="{'active':item.active,'unactive':!item.active}">
								<a href="#" class="L-Cinema-screen-ul-li-a" 
								:class="{'active':item.active,'unactive':!item.active}">
								{{item.name}}</a>
							</li>
						</ul>
					</li>
				</ul>
		</div>
		<!-- 内容 -->
		<div class="Cinema-content">
			<h2>影院列表</h2>
			<div class="Cinema-content-FilmDetails" v-for="(item,index) in cinemaList" :key="index+'b'">
				<div class="Cinema-content-FilmDetails-diz">
					<a href="#" class="Cinema-content-FilmDetails-diz-a">{{item.cinema}}</a>
					<p class="Cinema-content-FilmDetails-diz-p">{{item.address}}</p>
				</div>
				<div class="Cinema-content-FilmDetails-Seat">
					<a href="#" class="Cinema-content-FilmDetails-Seat-Purchase">选座购票</a>
				</div>
				<div class="Cinema-content-FilmDetails-Price">
					<span class="Cinema-content-FilmDetails-Price-fuhao">￥</span>
					<span class="Cinema-content-FilmDetails-Price-money">{{item.money}}</span>
					<span class="Cinema-content-FilmDetails-Price-rise">起</span>
				</div>
			</div>
		</div>
		<!-- 分页器 -->
		<div class="" style="text-align: center; margin-top: 30px;">
		<el-pagination
		background
		layout="prev, pager, next"
		:total="1000">
		</el-pagination>
		</div>
	</div>
</template>

<script>
	import Gy from './RoutingManagement'
	import Vue from 'vue'
	export default {
	  name: 'Cinema',
		data() {
			return {
				active: false,
				listData : [
					{
						title:'品牌:',
						list:[
							{"name":"全部"},{"name":"大地影院"},{"name":"耀莱成龙国际影城"},
							{"name":"万达影城"},{"name":"保利国际影城"},{"name":"博纳国际影城"},
							{"name":"CGV影城"},{"name":"金逸影城"},{"name":"橙天嘉禾影城"}, 
							{"name":"中影国际影城"},{"name":"新华国际影城"}, {"name":"星美国际影城"},
							{"name":"百老汇影城"}, {"name":"国际影城"}, {"name":"UME"}, 
							{"name":"幸福蓝海国际影城"}, {"name":"首都电影院"},{"name":"华谊兄弟影院"},
							{"name":"卢米埃影城"},{"name":"沃美影城"},	{"name":"美嘉欢乐影城"},
							{"name":"嘉华国际影城"},{"name":"17.5影城"},{"name":"太平洋电影城"},
							{"name":"上影影城"},{"name":"SFC"}, {"name":"嘉美国际影城"}, 
							{"name":"东都影城"}, {"name":"鲁信影城"},{"name":"华影国际影城"},
							{"name":"搜秀影城"},{"name":"横店电影城"},	{"name":"其他"}
						]
					},
					{
						title:'行政区:',
						list:[
							{name:'全部'},{name:'地铁附近'},{name:'朝阳区'},{name:'海淀区'},
							{name:'丰台区'},{name:'大兴区'},{name:'东城区'},{name:'房山区'},
							{name:'西城区'},{name:'昌平区'},{name:'通州区'},{name:'顺义区'},
							{name:'怀柔区'},{name:'门头沟区'},{name:'石景山区'},{name:'平谷区'},
							{name:'密云区'},{name:'延庆区'}
						]
					},
					{
						title:'特殊厅:',
						list:[
							{name:'全部'}, {name:'IMAX厅'}, {name:'CGS中国巨幕厅'}, 
							{name:'杜比全景声厅'},{name:'Dolby Cinema厅'}, {name:'RealD厅'}, 
							{name:'RealD 6FL厅'},{name:'LUXE巨幕厅'},{name:'4DX厅'},
							{name:'DTS:X 临境音厅'}, {name:'儿童厅'}, {name:'4K厅'},{name:' 4D厅'},
							{name:'巨幕厅'}
						]
					}
				],
				cinemaList:[
				{cinema:'青春光线电影院',address:'地址：东城区滨河路乙1号雍和航星园74-76号楼',money:'38'},
				{cinema:'万达影城（京港城店）',address:'地址：丰台区光彩路京港城生活广场6楼（京深海鲜市场对面）',money:'31.9'},
				{cinema:'百誉朗克影城',address:'地址：朝阳区林萃西里16号楼华创生活广场F1层',money:'33'},
				{cinema:'门头沟影剧院',address:'地址：门头沟区新桥大街12号',money:'33'},
				{cinema:'大观楼电影院',address:'地址：西城区前门大街大栅栏街36号',money:'34'},
				{cinema:'SFC上影影城（北京房山店）',address:'地址：房山区黄辛庄路口绿地缤纷城3层',money:'29'},
				{cinema:'良乡影剧院',address:'地址：房山区良乡拱辰大街31号',money:'23'},
				{cinema:'枫花园汽车电影院（朝阳公园店）',address:'地址：朝阳区亮马桥路21号（朝阳公园北门对面）',money:'46'},
				{cinema:'百老汇电影中心（万国城店）',address:'地址：东城区香河园路1号当代MOMA北区T4座（近东直门公交枢纽）',money:'39'},
				{cinema:'百尚影城',address:'地址：通州区马驹桥镇百尚生活广场3楼',money:'38'},
				{cinema:'百丽宫影城（国贸店）',address:'地址：朝阳区建国门外大街1号国贸商城北区B1层B120',money:'49'},
				{cinema:'卢米埃影城（芳草地店）',address:'地址：朝阳区东大桥路9号侨福芳草地购物中心LG2-26（尚都SOHO对面）',money:'69'}
				]
			}
		},
		methods:{
			selectStyle (item, index) {
	　　　　		this.$nextTick(function() {
	　　　　　　　　	this.listData.forEach(function(item) {
	　　　　　　　　　　	Vue.set(item,'active',false);
	　　　　　　　　	});
	　　　　　　　　	Vue.set(item,'active',true);
	　　　　　　	});
	　　　　	}
		},
		components: {
			Gy
		}
	}
	
</script>

<style lang="scss" scoped>
	.Cinema{
		width: 1200px;
		height: 300px;
		margin: 0 auto;
		// background: red;
		.L-Cinema{ //筛选
			padding: 0 20px;
			margin: 40px 0;
			border: 1px solid  #e5e5e5;
			position: relative;
			.L-Cinema-screen{ //第一个li
				padding:10px 0;
				.L-Cinema-screen-biaoto{
					height: 24px;
					line-height: 30px;
					font-size: 14px;
					float: left;
					color: #999;
				}
				.L-Cinema-screen-ul{
					margin-left: 40px;
					
					.L-Cinema-screen-ul-li{
						border-radius: 14px;
						padding:  3px 9px;
						display: inline-block;
						margin-left: 12px;
						.L-Cinema-screen-ul-li-a{
							color: #333;
							font-size: 14px;
						}
						.L-Cinema-screen-ul-li-a:hover{
							color: red;
						}
					}
				}
			}	
		}
		.L-Cinema-screen:nth-of-type(2){
			border-top: 1px dashed #e5e5e5;
		}
		.L-Cinema-screen:nth-of-type(3){
			border-top: 1px dashed #e5e5e5;
		}
		// 内容
		.Cinema-content{
			h2{
				font-size: 18px;
				color: #333;
				border-left: 4px solid #f03d37;
				padding-left: 6px;
				line-height: 18px;
				margin: 0;
			}
			.Cinema-content-FilmDetails{
				display: block;
				padding: 20px 0;
				border-bottom: 1px dashed #e5e5e5;
				.Cinema-content-FilmDetails-diz{
					max-width:80%;
					display: inline-block;
					.Cinema-content-FilmDetails-diz-a{
						display: inline-block;
						font-size: 16px;
						line-height: 18px;
						color: #333;
						margin-bottom: 10px;
					}
					.Cinema-content-FilmDetails-diz-a:hover{
						color: #f03d37;
					}
					.Cinema-content-FilmDetails-diz-p{
						font-size: 14px;
						line-height: 14px;
						color: #999;
					}
				}
				.Cinema-content-FilmDetails-Seat{
					float: right;
					width: 80px;
					height: 45px;
					line-height: 45px;
					margin-left: 36px;
					.Cinema-content-FilmDetails-Seat-Purchase{
						display: inline-block;
						width: 100%;
						height: 30px;
						color: #fff;
						background-color: #f03d37;
						font-size: 14px;
						line-height: 30px;
						border-radius: 100px;
						text-align: center;
						box-shadow: 0 2px 10px -2px #f03d37;
					}
					.Cinema-content-FilmDetails-Seat-Purchase:hover{
						background-color: #ff5e59;
					}
				}
				.Cinema-content-FilmDetails-Price{
					float: right;
					font-size: 12px;
					color: #999;
					height: 45px;
					line-height: 45px;
					.Cinema-content-FilmDetails-Price-fuhao{
						color: #f03d37;
						margin-right: -4px;
					}
					.Cinema-content-FilmDetails-Price-money{
						font-size: 16px; 
						font-weight: 700;
						color: #f03d37;
					}
				}
			}
		}
	}
	.active{
		background-color: #f34d41;
		color: #fff !important;
	}
	.bai{
		color: #fff;
		
	}
</style>
