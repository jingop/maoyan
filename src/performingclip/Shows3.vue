<template>
	<div class="Shows3">
		<div class="Shows2-1">
			<ul>
				<li class="Shows2-li" v-for="(item,index) in shu" :key="index+'a'">
					<div class="Shows2-li-yi">
						<div class="Shows2-li-yi-img">
							<img :src="item.imgs">
						</div>
					</div>
					<div class="Shows2-li-er">
						<p class="Shows2-li-er-p1">{{item.address}}</p>
						<p class="Shows2-li-er-p2">{{item.time}}</p>
						<p class="Shows2-li-er-p3">{{item.venue}}</p>
						<p class="Shows2-li-er-p4">{{item.money}}</p>
					</div>
					<div class="Shows2-li-san">购票</div>
				</li>
			</ul>
			<p class="jiazai">正在加载中...</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				shu: [{
						imgs: 'https://p0.meituan.net/moviesh/9f93a168ce2ff0f5967349da2761063369101.jpg@148w_207h_1c_1e',
						address: '浸入式戏剧《不眠之夜Sleep No More》',
						time: '时间：2019.6.19 - 2019.7.31',
						venue: '场馆：The McKinnon Hotel Shanghai',
						money: '520-850元'
					},
					{
						imgs: 'https://p0.meituan.net/myvideodistribute/526ef6598a0f6cb56bed0af2b7a2f0d7154492.jpg@148w_207h_1c_1e',
						address: '" 冰上迪士尼·冰雪奇缘" 2019巡演上海站',
						time: '时间：2019.7.12 - 2019.7.14',
						venue: '场馆：梅赛德斯-奔驰文化中心',
						money: '180-580元'
					},
					{
						imgs: 'https://p1.meituan.net/myvideodistribute/77877bc062865ce0903a32812d0e130c5107712.jpg@148w_207h_1c_1e',
						address: 'LENKA 2019 中国巡演',
						time: '时间：2019.7.11 20:00 周四',
						venue: '场馆：VasLive瓦肆现场',
						money: '280元'
					},
					{
						imgs: 'https://p0.meituan.net/myvideodistribute/79db4c045138bea87c1f371987add7e1494132.jpg@148w_207h_1c_1e',
						address: 'MY FIRST STORY TOUR 2019 SHANGHAI',
						time: '时间：2019.7.27 19:30 周六',
						venue: '场馆：静安体育中心',
						money: '380-1380元'
					},
					{
						imgs: 'https://p0.meituan.net/myvideodistribute/21bba227d825290fc7574b0e70ce3276115111.jpg@148w_207h_1c_1e',
						address: '蔡琴2019上海演唱会',
						time: '时间：2019.11.23 19:30 周六',
						venue: '场馆：梅赛德斯-奔驰文化中心',
						money: '280-1280元'
					},
					{
						imgs: 'https://p0.meituan.net/myvideodistribute/b2e3df5a63dbbe95464a35a2e0eeba86182169.jpg@148w_207h_1c_1e',
						address: '【万有音乐系】《尺八一声一世 火的意志巡回演奏会》--上海站',
						time: '时间：2019.7.14 20:00 周日',
						venue: '场馆：万代南梦宫上海文化中心',
						money: '488-688元'
					},
					{
						imgs: 'https://p1.meituan.net/myvideodistribute/3172353873133b733bd11a3f7248d88e53097.jpg@148w_207h_1c_1e',
						address: 'Tinashe 中国巡演上海站',
						time: '时间：2019.6.28 21:00 周五',
						venue: '场馆：VasLive瓦肆现场',
						money: '299元'
					},
					{
						imgs: 'https://p1.meituan.net/myvideodistribute/f3b15116783907430e3875cf9986cd32855102.jpg@148w_207h_1c_1e',
						address: 'KOKIA Layers～Lights and Shadows～森羅万象 2019上海演唱会',
						time: '时间：2019.7.13 / 7.14',
						venue: '场馆：证大喜玛拉雅中心大观舞台',
						money: '480-1080元'
					},
					{
						imgs: 'https://p1.meituan.net/myvideodistribute/edc740e8d049311b802a6e2cfc67ad0d242747.jpg@148w_207h_1c_1e',
						address: 'Snow Patrol 2019不插电上海演唱会',
						time: '时间：2019.8.23 / 8.24',
						venue: '场馆：万代南梦宫上海文化中心',
						money: '480元'
					},
					{
						imgs: 'https://p1.meituan.net/myvideodistribute/9b5ed49185e9f6680c0fe5336b5d731c723505.png@148w_207h_1c_1e',
						address: '2019咪咕音乐现场丁当“爱到不要命”巡回演唱会 上海站',
						time: '时间：2019.8.9 20:00 周五',
						venue: '场馆：上海商城剧院',
						money: '280-580元'
					}
				]
			}
		},
	}
</script>

<style lang="scss" scoped>
	.Shows3 {
		width: 100%;

		.Shows2-1 {
			width: 990px;
			margin: 20px auto;
			border: 1px solid #e8e8e8;
			padding: 30px 40px;
			background-color: #fff;

			.Shows2-li {
				display: flex;
				-webkit-box-align: center;
				align-items: center;
				-webkit-box-pack: center;
				justify-content: center;
				border-bottom: 1px solid #e8e8e8;
				padding: 30px 0;

				.Shows2-li-er {
					height: 200px;
					padding-left: 30px;
					flex: 1;

					.Shows2-li-er-p1 {
						font-size: 18px;
						color: #222;
						padding-bottom: 30px;
					}

					.Shows2-li-er-p2 {
						font-size: 14px;
						color: #666;
					}

					.Shows2-li-er-p3 {
						font-size: 14px;
						color: #666;
					}

					.Shows2-li-er-p4 {
						font-size: 20px;
						color: #ff5200;
						padding-top: 30px;
					}
				}

				.Shows2-li-san {
					background-color: red;
					color: #fff;
					border-radius: 4px;
					width: 140px;
					height: 50px;
					font-size: 18px;
					text-align: center;
					line-height: 50px;
				}
			}

			.jiazai {
				text-align: center;
			}

			.Shows2-li:nth-of-type(10) {
				border-bottom: none;
			}
		}

		.Shows2-1:nth-of-type(1) {
			padding-top: 0px;
		}
	}
</style>
