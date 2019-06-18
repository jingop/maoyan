<template>
	<div id="Shows">
		<div class="Shows-head">
			<div class="Shows-head-fixeds">
				<!-- 固定导航栏 -->
				<div class="Shows-head-fixeds-meimei">
					<!-- 固定导航栏左 -->
					<div class="Shows-head-fixeds-meimei-left">
						<div class="Shows-head-fixeds-meimei-left-lolg">
							<img src="https://p1.meituan.net/myvideodistribute/01404ee5fecc88fe006f9783732f058b18104.png">
						</div>
						<div class="Shows-head-fixeds-meimei-left-Location">
							<div class="Shows-meimei-left-Loca">
								<div class="Shows-meimei-left-Loca">
									上海
								</div>
							</div>
						</div>
					</div>
					<!-- 固定导航栏右 -->
					<div class="Shows-head-fixeds-meimei-right">
						<!-- 搜索框 -->
						<div class="Shows-head-fixeds-meimei-right-SearchBox">
							<div class="Shows-head-fixeds-meimei-right-Search">
								<input type="text" placeholder="请输入演出信息" class="Shows-head-fixeds-meimei-right-Search-input"/>
								<i class="Shows-head-fixeds-meimei-right-Search-i"></i>
							</div>
						</div>
						<!-- 二维码 -->
						<div class="Shows-head-fixeds-meimei-right-erweima" 
						 @mouseenter="enter()" @mouseleave="leave()"
						>
							<span>微信扫码购票</span>
							<div class="Shows-head-fixeds-meimei-right-ma" v-show="seen">
								<img src="data:image/png;base64,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">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 二级路由 -->
		<div class="Shows-head-SmallRouting"> 
			<div class="Shows-head-SmallRouting-yi">
				<router-link v-for="(item,index) in siYuan" :key="index+'a'" :to="item.lu" >{{item.name}}</router-link> 
			</div>
		</div>
		<router-view/>	
	</div>
</template>
<script>
	export default {
		data() {
			return {
				seen:false,
				siYuan:[
					{name:'全部',lu:'/shows'},
					{name:'演唱会',lu:'/shows2'},
					{name:'话剧歌剧',lu:'/shows3'},
					{name:'休闲展览',lu:'/shows4'},
					{name:'音乐会',lu:'/shows5'},
					{name:'戏曲艺术',lu:'/shows6'},
					{name:'音乐节',lu:'/shows7'},
					{name:'亲子演出',lu:'/shows8'},
					{name:'舞蹈芭蕾',lu:'/shows9'},
					{name:'体育赛事',lu:'/shows10'},
					{name:'其他',lu:'/shows11'}
				],
				
				
			}
		},
		methods:{
		  enter(){
			this.seen = true;
		  },
		  leave(){
			this.seen = false;  
		  }
		}
	}
</script>

<style lang="scss" scoped>
	body{
		    background-color: #F4F4F4;
	}
	#Shows{
		.Shows-head{
			height: 60px;
			.Shows-head-fixeds{
				position: fixed;
				top: 0;
				left: 0;
				z-index: 100;
				background-color: #ef4238;
				width: 100%;
				height: 60px;
				padding: 12.5px 0;
				.Shows-head-fixeds-meimei{  //固定导航栏
					max-width:1180px;
					margin: auto;
					.Shows-head-fixeds-meimei-left{ //固定导航栏左
						float: left;
						.Shows-head-fixeds-meimei-left-lolg{
							display: inline-block;
							height: 35px;
							line-height: 35px;
							margin-right: 40px;
							float: left;
							cursor: pointer;
							img{
								height: 35px;
							}
						}
						.Shows-head-fixeds-meimei-left-Location{
							height: 35px;
							padding-left: 16px;
							position: relative;
							float: left;
							cursor: pointer;
							display: inline-block;
							float: left;
							line-height: 35px;
							font-size: 14px;
							color: #fff;
							.Shows-meimei-left-Loca{
								z-index: 100;
								position: relative;
							}
						}
					}
					.Shows-head-fixeds-meimei-right{ // 固定导航栏右
						float: right;
						.Shows-head-fixeds-meimei-right-SearchBox{ //搜索框
							display: inline-block;
							.Shows-head-fixeds-meimei-right-Search{
								width: 192px;
								position: relative;
								display: inline-block;
								.Shows-head-fixeds-meimei-right-Search-input{
									width: 192px;
									height: 35px;
									border-radius: 76px;
									border: none;
									outline: none;
									background: #f6534d;
									padding-left: 18px;
									padding-right: 35px;
									font-size: 14px;
									color: #fff !important;
								}
								.Shows-head-fixeds-meimei-right-Search-i{
									color: #fff;
									opacity: 0.7;
									content: '';
									position: absolute;
									top: 50%;
									-webkit-transform: translate(0,-50%);
									-ms-transform: translate(0,-50%);
									transform: translate(0,-50%);
									background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAk1BMVEUAAAD/zbX/zbX/zrf/07n/28z/zbX/0Lr/zbX/zbX/17z/3ML/zbX/zbX/zbT/zbX/zbX/zbb/zLX/zbX/zbX/zbX/zbX/zbX/zbX/zrX/zbb/zrb/zrb/0bf/zbX/zbX/zrb/zrj/zbX/z7X/zrf/zrb/zbX/zbT/zLX/zbX/zbX/zbb/z7f/0Lb/zbT/zbX/zLToQ9E8AAAAMHRSTlMA8Po3EQX2GeLQDQjrva2HdGfo3NTMtoJ6Ylk9Jx7GjFMu5k9NM9jDoZRuSCsjmp9rHBnFAAABqElEQVQ4y42U6XaDIBCFAaMR9y1uMWbfm/a+/9N1ojY1Vjm9P0AOH9yZcZT1VQVebYpIpr7GpmQHCX4VXeejVGECkH540O5F7grAyKw/0MwFnGD1WlulBOLtgKpiiOHhMgbfv1McO629VRoictda85wCZd8xhuwC/kCrpLlnDaOXsosdUR23XR03nxHgzmh16e0U7Zm+9JsDc0vzGZefepnI2B+tauwo8YdAl24Oxxqrdo1Ef4aXtusTAjammYmcRgNNdBWwYqPawKA0PISt54JNaIEbVbl19eBPYSFccgVvj4RTmP5Z0Mhh02hiz5Q64UGjgKbGzg0Q4aDGEnx0sSnFm8KlyJSUBaHTlOGsxPaon9MRYqbCvrq6migUlO1g2Tz4iPVpLIDsOoErcqXN4nXAmU9hFyT6j73Ewp6yFMffhnbg6eMdh3VvuRRwR6qSA9iwPufgtBxAcw8k/tYYjwTwqv478g1yPPABZ2UcWOTHp7ddhakAJAFLg7h3kysHyTCbCXVJWY1xTL9fZQRAmN7t9c+6i44bsPPBx314cWptBGL2D5Xc/wZUYCvqhOx/MQAAAABJRU5ErkJggg==) no-repeat;
									background-size: contain;
									width: 19px;
									height: 19px;
									right: 11px;
								}
							}
						}
						.Shows-head-fixeds-meimei-right-erweima{ //微信扫码
							position: relative;
							z-index: 100;
							margin-left: 20px;
							display: inline-block;
							font-size: 14px;
							height: 35px;
							line-height: 35px;
							color: #fff;
							float: right;
							.Shows-head-fixeds-meimei-right-ma{
								// display: none;
								width: 120px;
								height: 115px;
								position: absolute;
								left: 50px;
								padding: 15px;
								background-color: #fff;
								transform: translate(-50%,0);
								box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
								img{
									width: 82px;
									height: 80px;
								}
							}
						}
					}
				}
			}
		}
		// 二级路由
		.Shows-head-SmallRouting{
			background-color: #fff;
			.Shows-head-SmallRouting-yi{
				max-width: 1180px;
				margin: 0 auto;
				display: -webkit-box;
				display: -webkit-flex;
				display: -ms-flexbox;
				display: flex;
				-webkit-align-items: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				-webkit-box-pack: center;
				-webkit-justify-content: center;
				-ms-flex-pack: center;
				justify-content: center;
				height: 60px;
				font-size: 16px;
				color: #222;
				a{
					color: #333;
					text-align: center;
					position: relative;
					width: 94px;
					padding:15px 10px 20px  10px;
					cursor: pointer;
				}
			}
		}
	}
	input::-webkit-input-placeholder { /* WebKit browsers */ 
		color: #fccbc9; 
	}
	 // .Shows-head-fixeds-meimei-right-erweima :hover .Shows-head-fixeds-meimei-right-ma{
		//  display: block;
	 // }
	 .red{
		 color: #f6534d !important;
	 }
</style>
<style>
	.router-link-exact-active{
		color: red !important;
		
	}
	.router-link-active{
		color: red !important;
		border-bottom:4px solid  #F03D37;
	}
</style>