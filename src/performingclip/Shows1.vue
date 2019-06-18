<template>
	<div class="Shows0">
		<div id="ShowsBoy">
			<!-- 1~~8屏 -->
			<section id="Shows1" v-for="(item,index) in Zuo" :key="index+'a'">
				<!-- 左模块 -->
				<div class="Shows1-left">
					<div class="Shows1-left-left">
						<span class="Shows1-left-left-span1">
							<i class="Shows1-left-left-span1-i"></i>
							<em>{{item.items}}</em>
						</span>
						<span class="Shows1-left-right">
							<router-link :to="item.tos" class="Shows1-left-right-a">全部 ></router-link>
						</span>
					</div>
					<ul class="Shows1-left-neiro">
						<li class="Shows1-left-neiro1" v-for="(item,index) in item.Neiro" :key="index+'b'">
							<div class="Shows1-left-neiro-tupian">
								<img :src="item.imgs" alt="">
							</div>
							<!-- 阴影 -->
							<div class="Shows1-left-shadow">
								<p class="Shows1-left-shadow-p1">
									<i class="left-shadow-p1-i1">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAMAAACEqFxyAAAAV1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////+ORg7oAAAAHHRSTlMAAhjChk3y1572ZlIhmpWP6uDb0riwioJ/Ew0LfRpiwAAAAKZJREFUKM9tkUcSxCAMBAdsgnHOif+/c1mEywH6gugaJChA7GZWUqrZ7Lg5N2kDcjsvW432wVgF29kXnfeHsh/UASC3ETnACyozwbnIqC44TAgwOFg4ajBR1lnvKT9h8KtAQPjtAGrNL82pOWRKS6hUEwWdGqlRpi5YgvXxc3oGF48o4dBfW9OYj9cMRB1liea2DZDwLV60kSWWv10QkfvPilnXu/4Bu60hOVhfPj0AAAAASUVORK5CYII=">
									</i>
									<em>{{item.yem}}</em>
								</p>
								<p class="Shows1-left-shadow-p2">
									<i class="left-shadow-p2-i2">
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAAGHNqTJAAAABGdBTUEAALGPC/xhBQAAATFJREFUOBGtk8FKQkEUhk0DW/gCraOIkDZCC0HqXYJ6GrdB7+DadVLZwkX3GRRauEtcCEXT99lcmbx0L0gHPs+Zf2b+OTNcazUihHBirlME8rV5Dyaq+/BiofJgkYaie36F4toxVwtb68zofhGZFH3wWGlO3P2kzW8+XmnThHG0sZMnMGut3vR+Rhs6MIOzmB2rBxcNLEpiYJOHWHYj92TjFjxqnB+lyXvitKl9zBH8Gd5I+wZcwkHEWq3rggV43hc8R6zVFvaQgVdcwnnEWi0rPjXb0vCI8sCmD2lcMXhLhaRWdz6Nvm3clB9TPVt5l2oLVsS+hulitDlkW5ovO9/Shu7/l07yl3/lhGM4gjYsYQqnoGZ2rO68muvdt/6ffpD91naNT6/j99aD1g4udvb4DbR+Wf0YzaQzAAAAAElFTkSuQmCC">
									</i>
									<em>{{item.ysj}}</em>
								</p>
							</div>
							<div class="Shows1-left-neiro1-zi">
								<p>{{item.dp}}</p>
							</div>
						</li>
					</ul>
				</div>
				<!-- 右模块 -->
				<div class="Shows1-right">
					<h2>最新开售</h2>
					<ul class="Shows1-right-ul">
						<li class="Shows1-right-ul-li" v-for="(item,index) in item.xx" :key="index+'d'">
							<div class="Shows1-right-ul-li-div">
								<div class="Shows1-right-img">
									<div class="Shows1-right-img-tp">
										<img :src="item.imgi">
									</div>
								</div>
								<!-- v-on:mouseover="changeActive($event)" v-on:mouseout="removeActive($event)" -->
								<div class="Shows1-right-neiro">
									<p class="Shows1-right-neiro-p1">{{item.noep}}</p>
									<p class="Shows1-right-neiro-p2">{{item.twop}}</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
		<!-- 左固定栏 -->
		<nav class="scrollToTop" id="topbar" v-if="local">
			<ul id="side-nav">
				<li class="yellow">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAgVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9d3yJTAAAAK3RSTlMAzAeZHrdpV8ULyTYxGgKFPRXAr411taFaTyq7pZZgSSWpnn9jRSEOcBBvGFf9CAAAAbVJREFUWMPt1OtOwlAQBOAzBUtpKb1zvwoI+v4PaCSGoCk7c1ATfzD/+yXdPTvukX+aftILm+Ztkhc/UdL9ApdUzexOZlPH+Jpxfs8/7dCSZdcbekZroqkv1H1Ce5pfk3a6MQhM6aQ63bJjS2vNGS4AW4pSCZoATKoV51iCSwMBWgFcWgoTGkGRUr56QJH2FDpBksbajXEpDtiIImgSK6cC0KQDazOI0oQuTZRWBJqBSCr0AlGasqqGKOWOZCRKKRt2BEmasxGVgCRl5DmOAE062JNeAJo0D8w7WwKiFDorO0CUyqPlhIAq9SxnCqiSubI8hiaRzCJCiFI6J4AoHSuoqbqGEzzLTta3HmKtMtvEWWnU8eRD05mYH4/P64y32bRwdg6WE36ccpEag2FNdk5snQJvsksi0stik2E+UwTeZBWpd/Xix68eTnK7g+rAwwnRuyU1Qw9nDdySVs4nT7ghxWsvpw+0S2Xi/FK1S6ON88wgapO2hfNO0iItjfs0pPi7lJG1kya6SKG7Lx1cSUZr0NS4lkhr0Bld5pS6+zPI6vXn7iq+Lv4KSGvI2WSdfeAe+Yu8A8AEF4gnFMdPAAAAAElFTkSuQmCC">
					演唱会
				</li>
				<li>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALXRSTlMAzMnCvbaoowTGsW8IFK14TUICl46Jg1k3LyUaEAxgAZtzZVJIH2qgk3w9MywOtuWMAAACQ0lEQVRYw+3W2dKiMBAF4NNh30QQERDcd33/55sZxSImIEP0Zqb+71bqlJ0cWvHj35atdPd0iOb4O/F+nFpucoXoyuhBt6beLMqLwEcLPyiy8SJMTIfuWAZBQhJHN1zTOh6t38w/XJ2RaAKBTmo0CDRS40DgfPiNvh/EvhVEinQI2LeCNNWgb/XIgMAgNSYELqmZQGCSmikEK1ITQpCSmgMEHqmZQTAjNWMIdi/lMPTuBr6utwyCK9W0c+4DqLKDXK3R4eYD8C9nh2pzCObPXjSf2LvXKHe3bB4/1Ts7Rvs7ki7Bqfi7PNvgTR/fEZLJ43T24C1DetrgRWDWfZSs67PMX5Om7Q0u6qkXkIzpgXk+P1ydT17Jx2+15tJERXPB68IGgLiYJc0qZ5Pt/crg54sRPZWQ2PxqY+5xZDgkYiPTHDG+D2iRqL6y8iENF6FFoBBUoo1FQ63QaqO6Q+QCDBWg3UptMllEw+zQITZoCMNGlwUNsUCn0hmQo1XoFnLvFWtf2ROqrfFGoDUdsW+z1CWOY04PWRzXj7A5aj2lnNgAUO3zaLuYbXdRto9fnvDwlt2smjRGi1s9seHjvZy93RH+c9gLGr0V8CBJmxXeZ3nikuKOfwhagH4l1++kAsdeS7/4/cdUc7mzmB+FCvXaEifJcRd4Dt8MWf/6HqWbTcitT6sCFJIkZgl8I8kKMEikUauTj4H2JrUIbQxmh/IKisBRH281h6LgzHXT2OED++Q5lVfhM1frHlPiY8tieynx4z/0C+wjIp16uGgzAAAAAElFTkSuQmCC">
					话剧歌剧
				</li>
				<li>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAgVBMVEX///8AAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////stq9MAAAAK3RSTlPMAGtzxwbJw8CELbyqmyCvX0YoC7izoZR/VDckD4t3ZVkWTTMTnnpvOxsSzltyNwAAAehJREFUWMPt2NtyokAQgOFunOEsICcBUfAQNXn/B9zt2hFKZWGkc5FU8l94o37MwFBDAfhJfUto43jCbxI2tBJAhXsmFJBDvTGhAm5VPCjrIIMH2R204EF5B7UcKN71Iyri2VC1hLuW11lQsAbKS+nTtP5R8cuQbGgBCeeI6EZGecKjIwhcyNeg95z+db5bzvsFUaH7CnS1aS1vBmcrWn0oot9HONCBjuBITegMAFk8Muf8pAPJLV2eGv+T3NFhgmlIrvvBD1eaAF48DinngqNdLQDbHYBOq6gxVCHNy5io+CuJwqCaaFXfoMoCVtZRQUtgtlSQzYVsBQG7X+jnQPlqX7uFyYYWaocRTGiNqpIJuXgrZUECuxwW5PXQjje1pIPWPOiAqg+hDdkr2Qp4KP3oTpEulNJG63rwkB8QkxSgC3kBUpsnydxG7dkDXciKiSHJZt1rZoW3XIsDldhXifnQ7v7hfza0lI+POSq7DQx9qF8rj7eD/07jM3Uh4eJTW/oir5E66EIlPiffAHxyqEYPcnCo2k/3/fh0oDDBwU4xdiX+NCQ2qFFgTUIlanWYgraomTMOZYkulISj0BG1c80RKFu8UPZl9v5fiAMJriMUFHKhUEEXLnRRkDR8y5ytWL4hv+s7Nr3+AFWJHB/PCbOWAAAAAElFTkSuQmCC">
					休闲展览
				</li>
				<li>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAhFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8g2+bRAAAALHRSTlMAzMhHTK96bwKLahPBYl2pVDQmCb2chgcEubOhlpA+Lx8XEMS2f3RFGwtxOI8uFdsAAAH4SURBVFjD7dZZcqMwEIDhbrHvYBZjMIvxMnZy//tNKqkxcoKkBs3LVM1/gK+E2pIM/1ssixzjoc8EHX7UZLrOycLP2C99529IeYLP2KAB+chl7bdDFvJpbDhDvng7dEA+Y7NzQz523+rY+JIP1PZBDnPu9dU51iRkjMoQEVliG19aXX1zBMN3c+DaeTgX2uOH4706nshJQm4GKcOX2C3ouLW01lE4sMcZmTFv6o842QZpJj6lHmXdAKhSIHMcALrUiB0fYIWUCJ0IYI100FrPLE0o6girpBiFqa7XbOSlQgxZMsVNLbSCWZKWiZ3hc0bNAF8FiRSqhE70PIV9APnghCjt7ApuHA9Xtlt06g7Xli5CFcqi/yZTlEU//OMZqclvo3mj9T5th1tKha+U/vgPW5yLxpepblpjixNOP6EYpdGvWmeD44Eu1PqmGZVtrgnNW6x70JghgXqqYqVy6USFejDlUkNzLi4oJJsGVQAKKaNOTCW5FxL0BkopJkEdzJLgxX4UFOicz1Lhih5HSjH8kQoPlqstChTen7sKot6RUnICZW8kqVFDdUuBrqDudCG9HIR2IeFeJDUUqqkFQOtuySETqE2l/LGnt68U/z7oGYX8fNALbLbAHN5hfeP1O8WcB2xqikt+Nf4dtjf10bUry7aKMxf+zX4D7IkbxcT3854AAAAASUVORK5CYII=">
					音乐会
				</li>
				<li>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALXRSTlMAzCcvxwcDFg27VXbDm3FAqYhOSTQbv7ikEbCNgyCznpVdOSQKrZF5Yyx+a2g29+baAAACiklEQVRYw+2WaZOiMBCG33CEU0BFQBHH+5r9/79vJUxtT0y4dL/s1jxfUlrwpDvp7gI//PDPYJv+ZbLKLANGUUbzBV7C8cuQNRgwxZrf9xwjSacWE5BI4EUORhAnjCCRwLpXGMhtwggSkSpyB51wwAgSSXhz9GKuWLuIWPcF5VusS0RsDuiAXxjrFhHhvuN4tqxfRPho4ThhPaJhJps8PaI+UzBWZKXagID1OJEVi7ee8Lc2eDlKNAcOKwcyhsWmnI5piMgHFh774PKFnRhj98daDBZdAWfzWCMQ4nSa/5bJMJF49sRqUhCptEuvSI7+ZNOFnaS8+0Xyef76I7rKN5H1iuQbtio0OKFcG2bYI/o4yjVXouHyXK17q1OUuM9dYDQBya+FBhB3ieoa/MUkztoW8ypg1i7KF8COPWEqAdGjikjdhphKV0bBL4FPvSi81YkrWA5Aw14+zosi0l0F1VLKdHzY4GtFJIrjFjINSdsM2nLw82PNtsHOd7FYJxaVq0rgYkq/lCaYfhqc+ihe1w2U6+I3RMMWetMdCvqW9mb4Yr5hKtaOQ2U51WVFUe+UxJMKAvN6TrxsNYli+2vXUJMV4UbynU7ENsfdt9rIAqdRe7qsiMX3oM9i+1n+lG0k/q4yyqrnsyg51kGWTOFkiJgsykpPfGoCduoIN0xDGItQKasWuF8fQP3wIWd65nhQUlZtuJ9hWdcLeZ6w9nUVGOjHWQJ2wVoJKwwnYB0UNoaSsi4mDoZy2LZr8jnGsE8UA31ij4LPcl1WB4zHvobqvHiN5UWZF69SnaV58Q5pQVm9DM3Pi4u/gH3e4y1oTGU+x1vQtC9ueAuaA8H7IYm+izjex9z5C/zwX/IbSyYlrxeIREkAAAAASUVORK5CYII=">
					戏曲艺术
				</li>
				<li>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALXRSTlMAzMQJyMBhq0gVn5iTgEEaD7u2cm5nVjivo3lcMzAsJQ0Ei009IIUDkGwpB16wv5/JAAACd0lEQVRYw+2X2ZaiMBRFMzHIJMiMIBTgVPr/39e1GsoKQ5Kry6fu2o8xaxOSnHsR/fIvsL3mGts5CUVfUO96yQLGtMyJvAah1M0IyU69WnML8Uhgnj2HYQ7mWHgkr1UeG/8QYDHaQS6KMJQdlXl8hsHsZSITw7Floj2GY8hEHYZjyUSbd+0RKuCn1khF1AJ6SIXkUBfkYTVSUoNUG6TmEyI6AEQlRFQCRDWeEdjtqc2nN6MGiOjMczoPdUrjBykCkE9FyThscGM5gqBPRZdh9MiP6SCRT6Ymb3FViY9eWRILD0fTgC6I58NSBP8D3El20rxuFcee7nWPjju7k3iO47q/5pv+8nV0MjShsTJZwvcaY+b9fRa5z0Xu7NqcB/Ecop+H3xM8Ek49/c/c/nujCrLQFN+p9/jbweNwsx/J9hObSxizk0dVPBBR8eaDpFXcCVRJ5LatGyUVF6+S8MuciKZNvkNSkslsTRbU00bSatpZFqU9VtsLCkUTz48gnR//jCBeucB1uDjJcD4nxgvyuGy4fS+vY3IV+e01vEJmu2EcR4Vj4BWCdDWqOX4SS3AmN/c5TyguJx2Da4gp7Y47qMc4Kgq2DfOclA3pHMK+jtRsAB6GQC0bwPZdHxGfAFH6rs+aCiI6AkQ9RFSpLLSD3SN28YT5GBsHmCD2RR6d4afQOsXXOpw76K/Rq5uevSKyFcmA48vfDE75LlEKTcbz6aVEcFkM23FsIxD8unK/w2UOrDh9NBy/1J3ls6K1rj47f6drFqs2WzbtAHQ1aZzJ0AW9z98b3CzBJBoNXZu40rp1KMZpERVXkV6/3tObsth4cRGZDfpP+AN8SyR9BqOf+gAAAABJRU5ErkJggg==">
					亲子演出
				</li>
				<li>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALXRSTlMAzMlLBRtZxKDBjie2mGwTCXJeTzappbOcezohrmJWRDIYDoeBSBW+opMtU0Azh3++AAACEklEQVRYw+XX6ZKiMBSGYd4AIoiobO773jP3f30ztmI3W2sO/Jp5/iVFfRVPclLR+A8Npkmcm4jH3kkStAUzN2HCQBJkwTI3sQRDBKa58VQYNIRxbmIMQ0lQD+iVxgIrIPg2DoCVJKgPqPlzaCugL8ixuUmyDR8k3Nj6QSM+jY/W7Sgcx/fhSH9BDg/uxbu42cCxdfsjpVqqebgX1FnoBZ2p4+oFTagzEexZgWjfYurEmneIW1ciy9Czp9re0HSk2lE3aKeoonaC5i+RtX9IlVByQZbIrkjLocyxJDdkfYmad8lIEtShrCMJWlP2WxI0ayvIpGwtCQopc7zVVjMm9qjRN98/TMNV0o/Maapy/ToJ4t3s4IAfvRkVXZaDe+AmCoOp5x2C0NwMH9dCuIDFO8WaT/Y/v/DsPZBuXv2qQAHd5bymAzdBwie1/DHnlPLgHyK7EPIRXl2+XHf1OT2f73wvWPe2Q2swjzvTrkOB/1F7mF20qJqaRwpNala5HoU2Z1NRHwcBt1SngY/IubC3wxSBiudJgFiY6wuFmDPPP6zkutYzJ6KRzrPSZxrxsyWtaMh8PoYbSrIHY2P3nvMQqHgUbBXNne5739yvv0EHWnC9/+ltzrGMLa3oGSa0U6QRrRgZHq3wjJRWJIYPdE3bss0uXwqTr7/xDReV3ScdRaYw+fob11CYFc+9wuTrb5Tx7/oDookdxrdcIuAAAAAASUVORK5CYII=">
					舞蹈芭蕾
				</li>
				<li>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALnRSTlMAzIsnxMGTyFQiDK0FtHx0eF5cQj0UCL66toFGOaCGTwIapTBqmW8PnWRJLBIy0uabRAAAAuVJREFUWMPk0ttym0AQBNBu7nckwCAE4iLJthIn//97qVQ5iGEXS+Y153lrartn8N8yvdQJa9u169BJPROblI1RUaqMpsQ3+YlNHTvxvxXJ4Drj6YjBjsIhvdw4twvwjOLAGevYDkDpyNEFHst45zo/P9uNOgp7PBAdOTlnvzAZFnmPEb7ycuKn+OpDulI4vXw1J/6X6QLVnkK8Pik6TeVAp6dwWk0360f/JndlTxC0Xw+g1VpP7K7gzFr+i825AqpA3OEIvffZq9DhIYBC3okPPYN3yWhxhyWTgonHe+uRaR4aFC7QGUXXHxjONCD5lFpoDLflznKlhIRSAY0fFEJgiJlgrrQpNVCZLpUiM9olZhou9FCUIRfegMBiI6te8KBIuRQD6GTdFRdevY8SQkvVb8BjJY5IJ+z27ft00jVVCeCLU/K4qnau+XgPL1URcKCnxF9lv3bUyoGOKSYON+qANzqYhNzICrBniEnNrXr0rDGxuJWDghYmLnPvxi3cvKU7/1ELjNmZm9jzjnL8Nf5pxwx6EwSCKNyBhVUJFhYrsbGUYD1o7f//ew0pOvtwtnR68GD8Th4kIbvsvO/tISc9G3/X3vn0qsn87+jjnJE1qUn9Lzvin2qe/bOW8czVgSMn9hLxjbTEMI+OnDhKapyQzSVxDQXI492xLNLMEBDhzDYLdhKZ+hI8p8/KFamRcmKd8LjfERJyryF4kvUo17qJoVKNU5fH7ShpK/YkAXclXQHdiPiVTpYYjjDZTSPBRmaQckATFJxY8KPkhd0N2QtKmVNPIRpb2g7raAnoFsLfqWcwNmR1Pn7x5g9C/QXSgrifZdomBCSwL5CpLuzZq6eZnXAuFqrXX8zfXB+QVJT3Dsw/1EWQSHhga2Hpgu0IadqxTDqL7Sjc15Al7rzLua+FKSfG8rww3EIUnRbPWlvtudNqWjZz6K2tzLll/7v3u/nScO+/wU2E/m5Ef1tjrBluax7cF9/A7yfMuUraAwAAAABJRU5ErkJggg==">
					体育赛事
				</li>
				<div class="pp3">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAilBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2N2iNAAAALnRSTlMAzQOUnQvIwRCkcRWydrZnIwi9NsWJgFdQQjoooHttL61fSbqqp5iNWx8ahGSDljSFWAAAAqRJREFUWMPtldly6jAMQC2H7Pu+kABhL23///cudRyCaOIY5r50hvNmG45lyVbImzd/BrX6ymon0rTIM1O/NF6zXL5qDTB7a/mshW4XMMo+D5/RFA5MErWqrGd9ACFeKReOCzecJo8vBqWqvS4sc5g/SeTdWNzS0V4eirhVbjsEc56gz069Hi3lN1/WK7Gn0vmOk2lYHrkqF3kKYGhnKtqMB70S/KS7gbulXBrPk1EnbN20ZwubAaOc2GjHVtPwbmrbKOZO2x2UrED6tkvBeO3S7orQm6Wt4R7z6851ZlOHsVxu2dKij0f1E3gkWQ0X0Z1KuMEK7/W/zCMYQ2/7GGh3DX7XxWLzMQ8nhSmU/snaOhs+emx2EJcwPvYwjROgXPAHgI8cqZ0nAhF6b2K1OGKPqg03zHBAjMertx6yhN/GjlWMLmAOk5eWNQMLiRZDLS2YpyGMkm1PhxsfVGz5whKkgQRB90cPrhRBp1KbhAfMhieQQenPxkga9Wo9AGfBEyhFNYj4W/EBiTJJUYpF4BMTiaguKUpCLDKJhkQxyFJikUYAiVxpUYZF8CA6SotqsWgjLfLEIl1apFGRSAV5bJEo/F8iEsmL1AeRg0R7Wc1xi5PtkAyJlJGs6lcAsVl9EIJFn6yHD6LVo+az6xG02vRlT/mnEomSCyFr5060BIw7NGPTPLnn2OBDLPLY1yeMW/+H4mfg4WOFZBR1+8kCLawf/FIlmF+P7TAioctW0VioQnCnjdBa+BHnTZ0MvRYhDqkcFrII9bVZDB2FFPcHQvXUbTJPDoi6sa584yKcZy1ybftEpUR0Mf+hlcMQt7eNTWRRTwKPopIn8Cc9LiVPEZujmv2aPE25+Z2dnJIXoFXjwYCexuR1lvkqU8xj6uYBefPmD/EPpzQl20sIkuQAAAAASUVORK5CYII=">
					客服
					<div class="yincang">
						客服电话: 4006780950
					</div>
				</div>
				<BackTop>
					<div class="backtothetop el-icon-arrow-up"></div>
				</BackTop>
			</ul>

		</nav>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				Zuo: [{
						items: '热门演出会',
						tos: '/shows2',
						xx: [{
								imgi: 'https://p0.meituan.net/myvideodistribute/79db4c045138bea87c1f371987add7e1494132.jpg@120w_80h_1c_1e',
								noep: 'MY FIRST STORY TOUR 2019 SHANGHAI',
								twop: '2019.7.27 19:30 周六'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/3172353873133b733bd11a3f7248d88e53097.jpg@120w_80h_1c_1e',
								noep: '夏日巡演',
								twop: '201945678'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/1b4672608e222f929e8f35211e0fa0381513422.jpg@120w_80h_1c_1e',
								noep: '张承&二番目乐队2019『云游记』新专辑巡演 - 上海站',
								twop: '2019.6.28 20:30 周五'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/a6275256d38962fafa36a09dbc05c6aa1248288.jpg@120w_80h_1c_1e',
								noep: '6.16复古流行原创乐队ZaZaZsu《怦然心动》夏日巡演',
								twop: '2019.6.16 20:00 周日'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/c70ed657297305d494f27c907223d69d252668.jpg@120w_80h_1c_1e',
								noep: '6/14、15 德国电子爵士乐队S L A T E C',
								twop: '2019.6.14 / 6.15'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/d89e63e580446ac9c7b24231ba5e988b608705.png@120w_80h_1c_1e',
								noep: '王心凌 - CYNDILOVES2SING 「爱.心凌 」2019巡回演唱会-上海站',
								twop: '2019.7.20 19:30 周六'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/59ea2858f7700263e2db2698d98c9564620799.png@120w_80h_1c_1e',
								noep: '英国Indie Pop乐队The Candle Thieves新专辑2019中国巡演 上海站',
								twop: '2019.10.24 20:30 周四'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/be9ae6d04bc4bdb2a26873eb8476b050887079.jpg@120w_80h_1c_1e',
								noep: '『向男孩地带说再见』BOYZONE男孩地带中国告别演唱会巡演 上海站',
								twop: '2019.6.18 20:00 周二'
							}

						],
						Neiro: [{
								imgs: 'https://p0.meituan.net/myvideodistribute/8c2bf9ff7c4c57da3b5cb7defcddc744108390.jpg',
								yem: '东方体育中心',
								ysj: '2019.10.26 19:30 周六',
								dp: '2019费玉清告别巡演内地最终场-上海站'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/e3e8ff0dd93eb01cc47f5cbaca7d442d246139.jpg@194w_210h_1c_1e',
								yem: '上海世博会议中心-红厅',
								ysj: '2019.7.13 19:30 周六',
								dp: 'AIMYON2019上海公演'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/da875bde41b61cd9c93ec0b9f05d870a291475.jpg@194w_210h_1c_1e',
								yem: '梅赛德斯-奔驰文化中心',
								ysj: '2019.7.13 19:30 周六',
								dp: '黄子韬2019  IS BLUE演唱会'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/c159f82838889d45b21f266d9fc374ee207159.jpg@194w_210h_1c_1e',
								yem: '东方体育中心',
								ysj: '2019.6.29 19:00 周六',
								dp: 'AIMYON2019上海公演'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/77877bc062865ce0903a32812d0e130c5107712.jpg@194w_210h_1c_1e',
								yem: 'VasLive瓦肆现场',
								ysj: '2019.7.11 20:00 周四',
								dp: 'LENKA 2019 中国巡演'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/b2e3df5a63dbbe95464a35a2e0eeba86182169.jpg@194w_210h_1c_1e',
								yem: '万代南梦宫上海文化中心',
								ysj: '2019.7.14 20:00 周日',
								dp: '【万有音乐系】《尺八一声一世 火的意志巡回演奏会》--上海站'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/21bba227d825290fc7574b0e70ce3276115111.jpg@194w_210h_1c_1e',
								yem: '梅赛德斯-奔驰文化中心',
								ysj: '2019.8.9 20:00 周五',
								dp: '蔡琴2019上海演唱会'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/9b5ed49185e9f6680c0fe5336b5d731c723505.png@194w_210h_1c_1e',
								yem: '上海商城剧院',
								ysj: '2019.8.9 20:00 周五',
								dp: '2019咪咕音乐现场丁当“爱到不要命”巡回演唱会 上海站'
							}
						],
					},
					{
						items: '热门话剧/歌剧',
						tos: '/shows3',
						xx: [{
								imgi: 'https://p0.meituan.net/myvideodistribute/30cf9df280bbbca0b7dce0ec08cc92bf512105.jpg@120w_80h_1c_1e',
								noep: '香港艺术月流行歌剧《当莫扎特遇上达·庞蒂》',
								twop: '2019.11.30 / 12.1'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/cd1c24906860cec5a92b7ac89a266b04270206.png@120w_80h_1c_1e',
								noep: '【上海】诗情话剧《漫长的告白》',
								twop: '2019.8.8 - 2019.8.17'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/7530afd591c93741dc4eb7043ad9953e178076.jpg@120w_80h_1c_1e',
								noep: '巴西仓库剧院《哈姆雷特》',
								twop: '2019.9.21 / 9.22'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/fe2b2294a2b63ad3b4ce7b00fd99bd40180548.png@120w_80h_1c_1e',
								noep: '话剧《再见徽因》上海站',
								twop: '2020.3.5 - 2020.3.8'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/3f01a929811855d9bfa60a72129edb351875257.png@120w_80h_1c_1e',
								noep: '东野圭吾《信》音乐剧中文版',
								twop: '2019.8.22 - 2019.8.25'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/d550d0921c1dffe7108aa8cc2a3e57102954292.jpg@120w_80h_1c_1e',
								noep: '东野圭吾成名小说改编舞台剧《放学后》',
								twop: '2019.9.6 - 2019.9.8'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/1703613435390da5ed8a00b5ba07916038966.jpg@120w_80h_1c_1e',
								noep: '中国创世神话主题音乐会民族交响史诗《英雄》庆祝中华人民共和国成立70周年音乐会',
								twop: '2019.9.28 / 9.29'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/3c71958467e9f071ac98377de18c110081920.jpg@120w_80h_1c_1e',
								noep: '原创话剧《长脚雨》',
								twop: '2019.9.26 - 2019.9.28'
							}
						],
						Neiro: [{
								imgs: 'https://p0.meituan.net/moviesh/9f93a168ce2ff0f5967349da2761063369101.jpg@194w_210h_1c_1e',
								yem: 'The McKinnon Hotel Shan',
								ysj: '2019.6.12 - 2019.7.31',
								dp: '浸入式戏剧《不眠之夜Sleep No More》'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/526ef6598a0f6cb56bed0af2b7a2f0d7154492.jpg@194w_210h_1c_1e',
								yem: '梅赛德斯-奔驰文化中心',
								ysj: '2019.7.12 - 2019.7.14',
								dp: '" 冰上迪士尼·冰雪奇缘" 2019巡演上海站'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/beb4e1c282b57036a56209ead8a2f163158841.jpg@194w_210h_1c_1e',
								yem: '兰馨.悦立方',
								ysj: '2019.6.18 - 2019.8.25',
								dp: '重喜剧《你若安好，那还得了》北纬零度出品'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/2768e03257b525b01a6def7f6b77813a73211.jpg@194w_210h_1c_1e',
								yem: '悦荟广场',
								ysj: '2019.5.29 - 2019.6.30',
								dp: '「限时特惠双人票」《惊魂密境》—沉浸式剧情体验'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/b0491e0f6dd37b9caa67fb798edd8a11110577.jpg@194w_210h_1c_1e',
								yem: '上汽·上海文化广场',
								ysj: '2019.6.13 14:00 周四',
								dp: '【第二轮】世界原版经典音乐剧《猫》Cats-上海站'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/7aad64862d8ac009e630fd3f35135ab8302120.png@194w_210h_1c_1e',
								yem: '上汽·上海文化广场',
								ysj: '2019.7.27 - 2019.8.8',
								dp: '【选座】法语原版音乐剧《巴黎圣母院》'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/ff45b63dfa2f56a0560e94999573bbc9354513.jpg@194w_210h_1c_1e',
								yem: '美琪大戏院',
								ysj: '2019.6.27 - 2019.6.30',
								dp: '舞台剧《繁花》第一季'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/ea1726c7e2387c4c017ae826ce993a1752809.jpg@194w_210h_1c_1e',
								yem: '上海话剧艺术中心',
								ysj: '2019.6.13 - 2019.6.23',
								dp: '田纳西·威廉斯经典话剧 《欲望号街车》A Streetcar Named Desire'
							}
						],
					},
					{
						items: '热门休闲展览',
						tos: '/shows4',
						Neiro: [{
								imgs: 'https://p0.meituan.net/myvideodistribute/8a66c49918d4851902a550fe9e07c040779487.gif@194w_210h_1c_1e',
								yem: '中海环宇荟',
								ysj: '2019.6.6 - 2019.8.31',
								dp: '正经疯人院：一个疯了的艺术展'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/24656cf4de57b7b1aebac9363983454b388511.jpg@194w_210h_1c_1e',
								yem: '上海证大喜玛拉雅美术馆',
								ysj: '2019.6.1 - 2019.9.1',
								dp: '《尾田荣一郎监修 Hello, ONE PIECE　路飞来了！》航海王巡展上海站'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/9104600b3dff9a306e33fa57587c76e5775646.jpg@194w_210h_1c_1e',
								yem: '明珠美术馆',
								ysj: '2019.3.30 - 2019.7.21',
								dp: '捷克国宝级艺术大师《慕夏》mucha 国内最大规模作品展'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/dc1bf1f6814ec9da4fc31d05bd26f5343197028.jpg@194w_210h_1c_1e',
								yem: '静安雕塑公园',
								ysj: '2019.3.30 - 2019.6.30',
								dp: '【火爆开展】印象莫奈时光映迹艺术展（上海站）'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/acff109c752f32d50532534e07d8b6ac1125275.jpg@194w_210h_1c_1e',
								yem: '上海油罐艺术中心',
								ysj: '2019.3.23 - 2019.8.24',
								dp: 'teamLab：油罐中的水粒子世界 '
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/17310bb7b1d7db04e2ce8e2ccb2a28a21202693.jpg@194w_210h_1c_1e',
								yem: 'M50创意园',
								ysj: '2019.6.7 - 2019.6.30',
								dp: '海兽之子艺术展—天空与海的味道'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/ebaa369ebafa56d34106b519904d22f5263087.jpg@194w_210h_1c_1e',
								yem: '上海当代艺术博物馆',
								ysj: '2019.4.28 - 2019.7.28',
								dp: '「火爆开展」“挑战的灵魂：伊夫·克莱因、李禹焕、丁乙”上海当代艺术博物馆年度特展https://p1.meituan.net/myvideodistribute/3ceddfccb8d7dcd2a0d49dacd7a84803486211.jpg@194w_210h_1c_1e'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/3ceddfccb8d7dcd2a0d49dacd7a84803486211.jpg@194w_210h_1c_1e',
								yem: '环球港',
								ysj: '2019.4.27 - 2019.7.21',
								dp: '国家地理经典影像盛宴2.0，上海环球港站'
							}
						],
						xx: [{
								imgi: 'https://p1.meituan.net/myvideodistribute/e3e1e08262361cd796a41be057694d391829856.gif@120w_80h_1c_1e',
								noep: 'blue声色－情绪调频所',
								twop: '2019.7.6 - 2019.9.15'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/a94930532bb1d446d858b42cb0ed648e548955.jpg@120w_80h_1c_1e',
								noep: '《双重奏：谭平回顾展》-上海余德耀美术馆',
								twop: '2019.6.15 - 2019.9.22'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/56511f59f3210315b8b5dc36967199e5267138.jpg@120w_80h_1c_1e',
								noep: '2019青上海展览 时间⾥',
								twop: '2019.6.15 - 2019.8.31'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/073a02f863a5ebb1e6fd603a9a91f5f594861.jpg@120w_80h_1c_1e',
								noep: '「早鸟抢购」《生在宇宙》——中国航天艺术科技大展',
								twop: '2019.7.15 - 2020.1.15'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/c7f4ee023b159e113297c65e98a110091800372.jpg@120w_80h_1c_1e',
								noep: 'Showroom名媛下午茶',
								twop: '2019.6.6 - 2019.6.16'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/3d40d2463340e09d9653a64a705723bc369802.jpg@120w_80h_1c_1e',
								noep: '梵高和他的朋友们',
								twop: '2019.6.6 - 2019.7.25'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/3ac7580123a5b33a287ffd83477b9de4442616.jpg@120w_80h_1c_1e',
								noep: '「早鸟限量」火星冰工厂 - 魔都暑期档火星主题冰淇淋概念展',
								twop: '2019.6.24 - 2019.8.25'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/f616eba70639b006c155b7a4559e364936609.jpg@120w_80h_1c_1e',
								noep: '上海飞鸟手帐集市2.0',
								twop: '2019.7.7 10:00 周日'
							}
						]
					},
					{
						items: '热门音乐会',
						tos: '/shows5',
						Neiro: [{
								imgs: 'https://p0.meituan.net/myvideodistribute/1073bba866af0b30d260785cad9fe87039664.jpg@194w_210h_1c_1e',
								yem: '上汽·上海文化广场',
								ysj: '2019.9.21 / 9.22',
								dp: '西尔维斯特·里维和他的朋友们：德语音乐剧明星音乐会'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/c338520ad461e7779da8c556389300d4110225.jpg@194w_210h_1c_1e',
								yem: '上海东方艺术中心',
								ysj: '2019.6.16 19:30 周日',
								dp: '《天空之城》久石让·宫崎骏动漫经典音乐作品演奏会'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/d3c16639c26eb63488a8b494a401544540233.jpg@194w_210h_1c_1e',
								yem: '上海东方艺术中心',
								ysj: '2019.6.22 19:30 周六',
								dp: '一生必听的电影音乐——《卡农》《海上钢琴师》《教父》《汉尼拔》钢琴小提琴大提琴浪漫邂逅音乐会'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/8853cecec63abe0bd58a1aa891f642b92864807.jpg@194w_210h_1c_1e',
								yem: '林肯爵士乐上海中心 Jazz at Lincoln Center Shanghai',
								ysj: '2019.6.13 - 2019.6.16',
								dp: '林肯爵士乐上海中心 Jazz at Lincoln Center Shanghai Trio Da '
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/88426fdeb44bb72989d4a2748f097073587949.png@194w_210h_1c_1e',
								yem: '上海交响乐团音乐厅',
								ysj: '2019.6.15 19:30 周六',
								dp: '海顿逝世210周年交响专场音乐会'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/b997f3827073204a502efab02b44d2c9424170.jpg@194w_210h_1c_1e',
								yem: '上海交响乐团音乐厅',
								ysj: '2019.6.23 19:30 周日',
								dp: '《卡农Canon In D》永恒经典名曲精选音乐会——爱乐汇轻音乐团 现场呈现'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/5f209a36fc00b0cda195d59983683c4d10738.jpg@194w_210h_1c_1e',
								yem: '上海大剧院',
								ysj: '2019.6.28 14:30 周五',
								dp: '我和我的祖国—“迎七一”中外经典名曲音乐会'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/a9e7438593ad42d87994e83fae4f1cdc75769.jpg@194w_210h_1c_1e',
								yem: '上海东方艺术中心',
								ysj: '2019.6.29 19:30 周六',
								dp: '仲夏夜之梦·世界经典名曲大赏 交响与合唱大荧幕视听音乐会'
							}
						],
						xx: [{
								imgi: 'https://p1.meituan.net/myvideodistribute/fe5695b29bdf68c7eb32832edd725b1d18115.jpg@120w_80h_1c_1e',
								noep: '《卡农Canon In D》永恒经典名曲精选音乐会',
								twop: '2019.10.2 19:30 周三'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/6a9e1fa9d9bfe64c3b2f12e07176ad3b2560021.png@120w_80h_1c_1e',
								noep: '华艺星空·2019日本动画片主题曲视听音乐会《奥特曼》',
								twop: '2019.8.25 10:30 周日'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/3faf6ca68fc6fe976bcf1c239fd2a80190465.jpg@120w_80h_1c_1e',
								noep: '陆家嘴信托荣誉呈现 “俄罗斯大师”钢琴三重奏音乐会',
								twop: '2019.9.28 19:30 周六'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/1700c75118b7732c4460c727eb83a6e677024.jpg@120w_80h_1c_1e',
								noep: '我的我的祖国——庆祝新中国成立七十周年献礼音乐会',
								twop: '2019.10.7 19:30 周一'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/455b3d14498f08ca9e30620fc8c3cdce1602585.jpg@120w_80h_1c_1e',
								noep: '纪念费利克斯·门德尔松诞辰210周年  大荧幕&弦乐交响系列音乐会（叁）',
								twop: '2019.7.6 19:30 周六'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/9b191e27fe4094e9a07fd4d89bae4c52108591.jpg@120w_80h_1c_1e',
								noep: '“走进大剧院——汉唐文化国际音乐年”  遐想与沉思——以色列国际竖琴大赛金奖得主莲卡·彼得罗维奇独奏会',
								twop: '2019.8.22 19:15 周四'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/fa9cb262b3d0b6f59ccfd0626c20938a18642.jpg@120w_80h_1c_1e',
								noep: '自由·真我——李坚演绎贝多芬32首钢琴奏鸣曲（叁）',
								twop: '2019.9.20 19:30 周五'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/8fda3f70409dbd1d1518f98b3bb9598b19948.jpg@120w_80h_1c_1e',
								noep: '文森佐·巴勒扎尼钢琴独奏音乐会',
								twop: '2019.7.5 19:45 周五'
							}
						]
					},
					{
						items: '热门戏曲艺术',
						tos: '/shows6',
						Neiro: [{
								imgs: 'https://p0.meituan.net/moviesh/5b35376bb7766ff6117be65cbe7d1cda341994.png@194w_210h_1c_1e',
								yem: '笑乐汇 相声剧场',
								ysj: '2019.6.14 - 2019.7.28',
								dp: '[上海]南方德云社 郭德纲弟子笑乐汇相声'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/e796acd5fb0c844e4dbd4fe15fde2e44799324.jpg@194w_210h_1c_1e',
								yem: '白玉兰剧场',
								ysj: '2019.6.16 13:30 周日',
								dp: '星期戏曲广播会  上海戏剧学院戏曲学院京剧专场'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/6ae98a01049c864092f0ef4fca80efc0208301.jpg@194w_210h_1c_1e',
								yem: '上海保利大剧院',
								ysj: '2019.8.3 19:30 周六',
								dp: '2019嘻哈包袱铺“金霏曦比”专场'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/43461cfb88f65b576767d36c13744e0562920.jpg@194w_210h_1c_1e',
								yem: '生活实验室小剧场',
								ysj: '2019.6.13 - 2019.7.25',
								dp: '[上海]南方德云社（威宁路周四晚场） 郭德纲弟子笑乐汇相声'
							},
							{
								imgs: 'https://p1.meituan.net/moviesh/1f98b11d31e35243b976713052eafb422170841.jpg@194w_210h_1c_1e',
								yem: '九乐堂相声',
								ysj: '2019.6.15 - 2019.8.24',
								dp: '上海的相声上海的腔调——九樂堂周末相声专场雅庐书场店'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/15547b07f535d442fad96aa0edac4a40617013.jpg@194w_210h_1c_1e',
								yem: '长江剧场',
								ysj: '2019.6.29 / 7.6',
								dp: '笑傲长江 金岩领衔主演 品欢相声会馆周末欢乐纯享专场（黑匣子）'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/ad7316fc94ece4d3f882e60c049501d4528932.jpg@194w_210h_1c_1e',
								yem: '豫·上海剧院',
								ysj: '2019.6.22 / 6.29',
								dp: '老城隍庙的笑声金岩领衔主演 品欢相声会馆经典作品专场'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/e796acd5fb0c844e4dbd4fe15fde2e44799324.jpg@194w_210h_1c_1e',
								yem: '白玉兰剧场',
								ysj: '2019.6.23 13:30 周日',
								dp: '星期戏曲广播会  上海戏剧学院附属戏曲学校青年教师京剧传统剧目传承专场'
							}
						],
						xx: [{
								imgi: 'https://p0.meituan.net/moviesh/892b13092e75cc692cfdbed38f2a9f3b42987.jpg@120w_80h_1c_1e',
								noep: 'SNH48 GROUP × 咪咕音乐 《燃烧吧! 团魂》 大型团队现场综艺秀-上海站',
								twop: '2019.6.29 19:00 周六'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/b63e0d1b06361aa4e69688adfdc4cc834624384.jpg@120w_80h_1c_1e',
								noep: '笑乐汇四周年庆典',
								twop: '2019.7.6 19:30 周六'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/87b33a05e000ff53cb7421a91396d18b50234.jpg@120w_80h_1c_1e',
								noep: '京剧《金玉奴》',
								twop: '2019.7.29 19:30 周一'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/00ee1ccf4001361ee1db5314404e0b4b259525.png@120w_80h_1c_1e',
								noep: '京剧《大保国 探皇陵 二进宫》',
								twop: '2019.7.27 13:30 周六'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/954a7d3f0c382ed792002f3f381796f0163859.png@120w_80h_1c_1e',
								noep: '京剧《林冲夜奔》《小上坟》《将相和》',
								twop: '2019.7.21 13:30 周日'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/03e7421f4a55b112d117f97ba5deed77190731.png@120w_80h_1c_1e',
								noep: '京剧《秦香莲》',
								twop: '2019.7.20 13:30 周六'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/1001827b4d89878d44590c8a595c20a67512.jpg@120w_80h_1c_1e',
								noep: '京剧《桃花村》《望江亭》《麒麟阁》',
								twop: '2019.7.7 13:30 周日'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/ddb4642be813fa2ecca13dbcf65032e79243.jpg@120w_80h_1c_1e',
								noep: '京剧《挡马》《赤桑镇》《萧何月下追韩信》',
								twop: '2019.7.6 13:30 周六'
							}
						]
					},
					{
						items: '热门亲子演出',
						tos: '/shows8',
						Neiro: [{
								imgs: 'https://p0.meituan.net/myvideodistribute/b7b5ffb453325e4e3aa20799ea466c6b405052.png@194w_210h_1c_1e',
								yem: '上海马戏城',
								ysj: '2019.6.15 - 2019.6.30',
								dp: '「6月选座专场」上海杂技团《欢乐马戏》'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/c8020d3de762bbb6b9029cf4979a1f6b669813.png@194w_210h_1c_1e',
								yem: '长风大悦城',
								ysj: '2019.5.31 - 2019.6.30',
								dp: '“妙妙喵奇遇记” 《垃圾不见了》沉浸式绘本展'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/6ca5d3e7141322ef65ef3a758e12ab3f666829.jpg@194w_210h_1c_1e',
								yem: '维璟广场',
								ysj: '2019.5.31 - 2019.7.31',
								dp: '「火爆开幕」培乐多彩泥森林乐园-维璟广场'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/61112fa26dd345b386a68442eb227055459396.jpg@194w_210h_1c_1e',
								yem: '彩色熊猫剧场',
								ysj: '2019.6.13 - 2019.6.30',
								dp: '全球首部真正的祼眼5D 全息儿童剧 《白雪公主》'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/f97b16e5a2f7132721a751b3a97d0aba49429.gif@194w_210h_1c_1e',
								yem: '上海大剧院',
								ysj: '2019.6.16 10:30 周日',
								dp: '亲子钢琴音乐会《大师与宝贝》'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/41cc2a81481ee86013accc3cdc7fd397511671.jpg@194w_210h_1c_1e',
								yem: '湖滨道购物中心',
								ysj: '2019.5.23 - 2019.6.22',
								dp: '巧虎大飞船历险记超凡智学营-上海湖滨道'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/487cee4ba3c78b029a524c9074506820284060.png@194w_210h_1c_1e',
								yem: '中国大戏院',
								ysj: '2019.6.18 - 2019.7.9',
								dp: '独脚戏《石库门的笑声》 毛猛达 沈荣海 全新作品倾情呈现'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/1e52000588d1484613352be397640e54230300.jpg@194w_210h_1c_1e',
								yem: '大宁郁金香公园',
								ysj: '2019.6.29 / 6.30',
								dp: '2019彩虹泡泡跑—上海站'
							}
						],
						xx: [{
								imgi: 'https://p1.meituan.net/moviesh/0971cf3d353801df73a2ba7b1ea6f67d34539.jpg@120w_80h_1c_1e',
								noep: '华艺星空·李伯男监制浙话大型创意脑洞儿童剧《花木兰》-上海站',
								twop: '2019.7.13 15:30 周六'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/ef9c33f35fff4259e3d2cacf6cc49e04471227.png@120w_80h_1c_1e',
								noep: '上海虹桥天地汪汪队立大功冰纷夏日大救援主题展',
								twop: '2019.6.28 - 2020.9.1'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/0ee4d6c315c9e171e0b7122bc33a577a101844.jpg@120w_80h_1c_1e',
								noep: '超级飞侠迷你世界定向大闯关',
								twop: '2019.7.6 / 7.7'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/9d0c432a95fdc1c6057a8237825b0e5239304.jpg@120w_80h_1c_1e',
								noep: '古典音乐奇幻之旅系列——猫和老鼠的钢琴游戏',
								twop: '2019.8.24 19:30 周六'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/e368e450506be55826f59a8e67c1580438651.jpg@120w_80h_1c_1e',
								noep: '《四月是你的谎言》——动漫古典幻音系列の落樱入梦',
								twop: '2019.8.18 19:30 周日'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/a7ef1f3a479dc372298e0c4b9b390b0748708.jpg@120w_80h_1c_1e',
								noep: '原创儿童剧《侏罗纪公园 · 我不是霸王龙》',
								twop: '2019.8.17 10:30 周六'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/7e27e896ed165d27df770031c2782c2a98571.jpg@120w_80h_1c_1e',
								noep: '“音乐彩虹糖”——2019“重拾童梦”主题经典名曲动画视听音乐会',
								twop: '2019.8.3 19:30 周六'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/601160b4ed29afb57c9000ed173955e382278.jpg@120w_80h_1c_1e',
								noep: '强势推荐 | 父爱如山•原创儿童音乐剧《狮子王》中文版',
								twop: '2019.7.21 10:30 周日'
							}
						]
					},
					{
						items: '热门芭蕾舞蹈',
						tos: '/shows9',
						Neiro: [{
								imgs: 'https://p0.meituan.net/myvideodistribute/3097fc36bab586ac89ae088acfd4298d214210.jpg@194w_210h_1c_1e',
								yem: '上海国际舞蹈中心',
								ysj: '2019.6.13 - 2019.6.16',
								dp: '舞剧《朱鹮》'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/07faa487ae3785b3884c0dd0fc294fc825774.jpg@194w_210h_1c_1e',
								yem: '上海大剧院',
								ysj: '2019.7.6 / 7.7',
								dp: '俄罗斯莫斯科芭蕾舞剧院冰舞芭蕾—《天鹅湖》'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/fefbddf90f6064ce0a93653f65448d01274742.jpg@194w_210h_1c_1e',
								yem: '上海国际舞蹈中心',
								ysj: '2019.9.11 - 2019.9.15',
								dp: '舞剧《永不消逝的电波》'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/62241f38bc860c46fa44f5a87289a3cf34587.jpg@194w_210h_1c_1e',
								yem: '上海国际舞蹈中心',
								ysj: '2019.7.19 - 2019.7.21',
								dp: '英国达人秀总冠军 匈牙利attraction魅影舞团《幻梦奇缘》'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/a293d40c6d29b2e07fe8a863a399b0cf137268.jpg@194w_210h_1c_1e',
								yem: '上海国际舞蹈中心',
								ysj: '上海国际舞蹈中心',
								dp: '原创现代蒙古舞剧《蓝·印》'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/b653b9c9b2d8d08b729ba59a9285450f153862.jpg@194w_210h_1c_1e',
								yem: '上汽·上海文化广场',
								ysj: '2019.8.15 - 2019.8.22',
								dp: '马修·伯恩《天鹅湖》'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/e699df5d14dc788d36e8c397a82a582786788.jpg@194w_210h_1c_1e',
								yem: '上海东方艺术中心',
								ysj: '2019.7.13 19:15 周六',
								dp: '俄罗斯远东少儿芭蕾舞团 经典芭蕾舞剧《灰姑娘》'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/1f5a9ae1139d4ce6858adaaf10e5855330205.jpg@194w_210h_1c_1e',
								yem: '上海城市剧院',
								ysj: '2019.8.30 / 8.31',
								dp: '舞剧《永不消逝的电波》'
							}
						],
						xx: [{
								imgi: 'https://p1.meituan.net/myvideodistribute/1ebd3d2da2ed0ef58398fa5637f3862d530976.jpg@120w_80h_1c_1e',
								noep: '优人神鼓《墨具五色》',
								twop: '2019.9.27 / 9.28'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/fefbddf90f6064ce0a93653f65448d01274742.jpg@120w_80h_1c_1e',
								noep: '舞剧《永不消逝的电波》',
								twop: '2019.9.11 - 2019.9.15'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/91bae40c9c78da2dfae1d1e6f3096e5075583.jpg@120w_80h_1c_1e',
								noep: '俄罗斯皇家芭蕾舞剧院《天鹅湖》',
								twop: '2019.12.21 / 12.22'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/884ae558f33c9d855a854a94f1c3007d63754.jpg@120w_80h_1c_1e',
								noep: '俄罗斯柴可夫斯基芭蕾舞团《天鹅湖》',
								twop: '2019.12.29 19:15 周日'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/e3a142275e7e56decad420fbea8c47a051572.jpg@120w_80h_1c_1e',
								noep: '莫斯科国立拉夫洛夫斯基舞蹈学校少儿芭蕾舞团《GALA》',
								twop: '2019.7.26 19:30 周五'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/d48282640a3bdb99028b8c2141ec433256352.jpg@120w_80h_1c_1e',
								noep: '北京当代芭蕾舞团《风声鹤唳》',
								twop: '2019.8.23 19:30 周五'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/e4450b0fd9060802dd3284fc9386c7c7867813.jpg@120w_80h_1c_1e',
								noep: '摩洛哥街头的神秘主义  嘻哈现代舞《人》',
								twop: '2019.8.2 - 2019.8.3'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/1f5a9ae1139d4ce6858adaaf10e5855330205.jpg@120w_80h_1c_1e',
								noep: '舞剧《永不消逝的电波》',
								twop: '2019.8.30 / 8.31'
							}
						]
					},
					{
						items: '热门体育赛事',
						tos: '/shows10',
						Neiro: [{
								imgs: 'https://p0.meituan.net/myvideodistribute/7746a663d85b8c3d26e3c9e814eb28131457093.jpg@194w_210h_1c_1e',
								yem: '上海国际上汽赛车场',
								ysj: '2019.6.29 / 6.30',
								dp: '2019中国跑车超级锦标赛上海站CHINAGT'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/bab1496d79a9b19833446bc5cfa1417c59386.jpg@194w_210h_1c_1e',
								yem: '梅赛德斯-奔驰文化中心',
								ysj: '2019.9.21 19:00 周六',
								dp: '「早鸟特惠」WWE经典美式摔跤娱乐秀'
							},
							{
								imgs: 'https://p1.meituan.net/myvideodistribute/9aebd892df80de013fadf0da76642f6a451414.jpg@194w_210h_1c_1e',
								yem: '一号运动中心',
								ysj: '2019.6.15 / 6.22',
								dp: '拳盟中华精英赛，邹市明邀您体验职业拳击的魅力'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/35303127443a35f32bb9578466e37d0c52327.jpg@194w_210h_1c_1e',
								yem: '上海富豪环球东亚酒店-斯诺克2号馆',
								ysj: '2019.9.9 - 2019.9.12',
								dp: '2019世界斯诺克上海大师赛（2号馆）'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/35303127443a35f32bb9578466e37d0c52327.jpg@194w_210h_1c_1e',
								yem: '上海富豪环球东亚酒店-斯诺克1号馆',
								ysj: '2019.9.9 - 2019.9.12',
								dp: '2019世界斯诺克上海大师赛（1号馆）'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/2d20391a8ebb73fe64f25524df720e1c2140684.png@194w_210h_1c_1e',
								yem: '江苏武进曲棍球基地',
								ysj: '2019.6.15 16:00 周六',
								dp: '2019世界女子曲棍球超级联赛'
							},
							{
								imgs: 'https://p0.meituan.net/myvideodistribute/ea444561db51502c945ec9e435f780f4292928.jpg@194w_210h_1c_1e',
								yem: '宁波奥体中心',
								ysj: '2019.8.26 - 2019.8.28',
								dp: '2019国际男篮热身赛（宁波）'
							}
						],
						xx: [{
								imgi: 'https://p0.meituan.net/myvideodistribute/35303127443a35f32bb9578466e37d0c52327.jpg@120w_80h_1c_1e',
								noep: '2019世界斯诺克上海大师赛（2号馆）',
								twop: '2019.9.9 - 2019.9.12'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/35303127443a35f32bb9578466e37d0c52327.jpg@120w_80h_1c_1e',
								noep: '2019世界斯诺克上海大师赛（1号馆）',
								twop: '2019.9.9 - 2019.9.12'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/9aebd892df80de013fadf0da76642f6a451414.jpg@120w_80h_1c_1e',
								noep: '拳盟中华精英赛，邹市明邀您体验职业拳击的魅力',
								twop: '2019.6.15 / 6.22'
							},
							{
								imgi: 'https://p1.meituan.net/myvideodistribute/bab1496d79a9b19833446bc5cfa1417c59386.jpg@120w_80h_1c_1e',
								noep: '「早鸟特惠」WWE经典美式摔跤娱乐秀',
								twop: '2019.9.21 19:00 周六'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/7746a663d85b8c3d26e3c9e814eb28131457093.jpg@120w_80h_1c_1e',
								noep: '2019中国跑车超级锦标赛上海站CHINAGT',
								twop: '2019.6.29 / 6.30'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/2d20391a8ebb73fe64f25524df720e1c2140684.png@120w_80h_1c_1e',
								noep: '2019世界女子曲棍球超级联赛',
								twop: '2019.6.15 16:00 周六'
							},
							{
								imgi: 'https://p0.meituan.net/myvideodistribute/ea444561db51502c945ec9e435f780f4292928.jpg@120w_80h_1c_1e',
								noep: '2019国际男篮热身赛（宁波）',
								twop: '2019.8.26 - 2019.8.28'
							}
						]
					},
					// {
					// 	items: '其他',
					// 	tos: '/shows11',
					// 	Neiro: [{
					// 			imgs: 'https://p1.meituan.net/myvideodistribute/c32b86f06e6184aab7db3562de4dcaa9733919.jpg@194w_210h_1c_1e',
					// 			yem: '日日煮美食生活体验馆',
					// 			ysj: '2019.1.1 - 2019.6.30',
					// 			dp: '日日煮线下体验课-上海站'
					// 		},
					// 		{
					// 			imgs: 'https://p1.meituan.net/myvideodistribute/7d75e6f2f0ed528c8f233187389932ec276077.jpg@194w_210h_1c_1e',
					// 			yem: '怪谈屋真人互动鬼屋密室',
					// 			ysj: '2019.5.7 - 2020.12.31',
					// 			dp: '密室鬼屋剧本杀-侦探们的镇魂曲'
					// 		},
					// 		{
					// 			imgs: 'https://p1.meituan.net/myvideodistribute/5b9ce9488b1c5887b157b8d957670921211882.png@194w_210h_1c_1e',
					// 			yem: 'A&F水弹枪俱乐部',
					// 			ysj: '2019.5.7 - 2020.12.31',
					// 			dp: '真人水弹CS射击-菜鸟训练营'
					// 		},
					// 		{
					// 			imgs: 'https://p1.meituan.net/myvideodistribute/d4aff071dcc1b8fd2c6719a8b1546060459672.png@194w_210h_1c_1e',
					// 			yem: '梅派大舞台',
					// 			ysj: '2019.6.22 10:30 周六',
					// 			dp: '华艺星空·亲子互动魔术秀《糖果星球的魔法师-MAGIC J》'
					// 		},
					// 		{
					// 			imgs: 'https://p1.meituan.net/moviesh/55c2ac34e7de0bddee8a0424042a9a18189391.jpg@194w_210h_1c_1e',
					// 			yem: 'JOYPOLIS 世嘉都市乐园',
					// 			ysj: '2018.10.1 - 2019.10.1',
					// 			dp: '「8.6折抢购」JOYPOLIS上海世嘉都市乐园'
					// 		},
					// 		{
					// 			imgs: 'https://p0.meituan.net/moviesh/cff6b473e3178c308e5411248c623fdf68957.jpg@194w_210h_1c_1e',
					// 			yem: '大鸭烘焙蛋糕&大鸭软陶DIY',
					// 			ysj: '2018.12.1 - 2019.12.31',
					// 			dp: '大鸭软陶-不限量软陶畅玩DIY'
					// 		},
					// 		{
					// 			imgs: 'https://p1.meituan.net/myvideodistribute/8c47782f345976b3396ea80d76c197221703095.jpg@194w_210h_1c_1e',
					// 			yem: '大鸭烘焙蛋糕&大鸭软陶DIY',
					// 			ysj: '2019.4.17 - 2019.12.31',
					// 			dp: '大鸭烘焙-雪崩泥石流蛋糕DIY'
					// 		},
					// 		{
					// 			imgs: 'https://p0.meituan.net/myvideodistribute/3a5cfeaaba6e86322b62bbfc74488838127136.jpg@194w_210h_1c_1e',
					// 			yem: '户外巡游剧场',
					// 			ysj: '2019.6.13 - 2019.6.30',
					// 			dp: '《遥感城市》上海篇REMOTE CITY in Shanghai'
					// 		}
					// 	],
					// 	xx: [{
					// 			imgi: 'https://p0.meituan.net/myvideodistribute/3a5cfeaaba6e86322b62bbfc74488838127136.jpg@120w_80h_1c_1e',
					// 			noep: '《遥感城市》上海篇REMOTE CITY in Shanghai',
					// 			twop: '2019.6.13 - 2019.6.30'
					// 		},
					// 		{
					// 			imgi: 'https://p1.meituan.net/myvideodistribute/7d75e6f2f0ed528c8f233187389932ec276077.jpg@120w_80h_1c_1e',
					// 			noep: '密室鬼屋剧本杀-侦探们的镇魂曲',
					// 			twop: '2019.5.7 - 2020.12.31'
					// 		},
					// 		{
					// 			imgi: 'https://p1.meituan.net/myvideodistribute/5b9ce9488b1c5887b157b8d957670921211882.png@120w_80h_1c_1e',
					// 			noep: '真人水弹CS射击-菜鸟训练营',
					// 			twop: '2019.5.7 - 2020.12.31'
					// 		},
					// 		{
					// 			imgi: 'https://p1.meituan.net/myvideodistribute/e7e36e93b3994c4586db5c4f3f74e109758325.gif@120w_80h_1c_1e',
					// 			noep: 'The Pearl’s Got Talent 珍珠天赋才艺达人秀',
					// 			twop: '2019.6.27 20:00 周四'
					// 		},
					// 		{
					// 			imgi: 'https://p1.meituan.net/myvideodistribute/d4aff071dcc1b8fd2c6719a8b1546060459672.png@120w_80h_1c_1e',
					// 			noep: '华艺星空·亲子互动魔术秀《糖果星球的魔法师-MAGIC J》',
					// 			twop: '2019.6.22 10:30 周六'
					// 		},
					// 		{
					// 			imgi: 'https://p1.meituan.net/myvideodistribute/8c47782f345976b3396ea80d76c197221703095.jpg@120w_80h_1c_1e',
					// 			noep: '大鸭烘焙-雪崩泥石流蛋糕DIY',
					// 			twop: '2019.4.17 - 2019.12.31'
					// 		},
					// 		{
					// 			imgi: 'https://p1.meituan.net/myvideodistribute/c32b86f06e6184aab7db3562de4dcaa9733919.jpg@120w_80h_1c_1e',
					// 			noep: '日日煮线下体验课-上海站',
					// 			twop: '2019.1.1 - 2019.6.30'
					// 		},
					// 		{
					// 			imgi: 'https://p1.meituan.net/moviesh/55c2ac34e7de0bddee8a0424042a9a18189391.jpg@120w_80h_1c_1e',
					// 			noep: '「8.6折抢购」JOYPOLIS上海世嘉都市乐园',
					// 			twop: '2018.10.1 - 2019.10.1'
					// 		}
					// 	]
					// }
				],
				local: false
			}
		},
		mounted() {
			this.Shows0()
		},
		methods: {
			Shows0() {
				window.onload = function() {
					/*
					    
					    需求：楼层跳跃
					    
					        *　把楼层的高度设置成屏幕的高度
					        * 点击按钮可以跳转到对应楼层
					        * 滚动滑轮，到达临界点的时候，按钮跟着高亮显示
					*/

					var box = document.getElementById('ShowsBoy');
					var lous = box.getElementsByTagName('section'); //楼层
					var sideNav = document.getElementById('side-nav');
					var btns = sideNav.getElementsByTagName('li'); //按钮
					
					// var node = document.getElementById('topbar');
					// var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
					// window.onscroll = function() {
						// setInterval(function(){
						// console.log(window.pageYOffset)
						// },100)
						// if (top > 100) { //500就是滚动条滚动到的位置，大于500(500指500px)才显示
						// 	node.style.display = 'block';
						// } else {
						// 	node.style.display = 'none';
						// }
					// }

					//1.把楼层的高度设置成屏幕的高度
					for (var i = 0; i < lous.length; i++) {
						lous[i].style.height = window.innerHeight + 'px';
					}

					//2.点击按钮可以跳转到对应楼层
					for (var i = 0; i < btns.length; i++) {
						//绑定索引
						btns[i].index = i;
						btns[i].onclick = function() {
							console.log(this.index);
							//排他
							for (var j = 0; j < btns.length; j++) {
								btns[j].className = '';
							}
							this.className = 'yellow';
							var ih = lous[this.index].offsetTop;
							window.scrollTo(0, ih);
						}
					}

					//3.滚动滑轮，到达临界点的时候，按钮跟着高亮显示
					window.onscroll = function() {
						var scrollTop = window.scrollY; //滚动距离
						for (var i = 0; i < lous.length; i++) {
							if (scrollTop >= lous[i].offsetTop) {
								// console.log(i);
								//排他 设置高亮
								for (var j = 0; j < btns.length; j++) {
									btns[j].className = '';
								}
								btns[i].className = 'yellow';
							}
						}
					}
				}
			},
			scrollToTop() {
				let that = this
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				that.scrollTop = scrollTop
				if (that.scrollTop > 60) {
					that.local = true
				} else {
					that.local = false
				}
			}

		},
		mounted() {
			window.addEventListener('scroll', this.scrollToTop);
		},
		destroyed() { //离开这个界面之后，删除，不然会有问题
			window.removeEventListener('scroll', this.scrollToTop)
		}
		// methods:{
		//    changeActive($event){
		//        $event.currentTarget.className="Shows1-right-neiro-p1 how1";
		//    },
		//    removeActive($event){
		//        $event.currentTarget.className="Shows1-right-neiro-p1";
		//    }
		// },
	}
</script>

<style>
	#ShowsBoy {
		width: 100%;
		min-height: 442px;
	}

	/* 左固定框 */
	#side-nav {
		position: fixed;
		left: 20px;
		top: 80px;
	}

	#side-nav li {
		position: relative;
		width: 50px;
		height: 46px;
		line-height: 12px;
		text-align: center;
		background-color: #acacac;
		color: #fff;
		border-radius: 4px;
		/* box-shadow: 2px 1px 3px 0 rgb(26, 25, 25); */
		cursor: pointer;
		font-size: 10px;
		margin-bottom: 4px;
		padding-top: 28px;
	}

	#side-nav>li>img {
		position: absolute;
		top: 5px;
		left: 15px;
		width: 20px;
		;
	}

	.pp3 {
		position: relative;
		width: 50px;
		height: 46px;
		line-height: 12px;
		text-align: center;
		background-color: #acacac;
		color: #fff;
		border-radius: 4px;
		cursor: pointer;
		font-size: 10px;
		margin-bottom: 4px;
		padding-top: 28px;
		margin-top: 20px;
	}

	.pp3>img {
		position: absolute;
		top: 5px;
		left: 15px;
		width: 20px;
		;
	}

	.yincang {
		display: none;
		width: 188px;
		height: 50px;
		background-color: #fff;
		margin: -40px 0 0 60px;
		border-radius: 4px;
		color: #222;
		font-size: 14px;
		line-height: 50px;
	}

	.pp3:hover .yincang {
		display: block;
	}

	.yellow {
		background-color: red !important;
	}

	.backtothetop {
		width: 50px;
		height: 28px;
		background-color: #acacac;
		text-align: center;
		color: #fff;
		border-radius: 4px;
		margin-top: 4px;
		font-size: 25px;
		line-height: 28px;
	}
</style>

<style lang="scss" scoped>
	.Shows0 {
		width: 100%;
		display: inline-block;
		overflow: hidden;

		#Shows1 {
			width: 1180px;
			margin: 0 auto;
			padding-top: 38px;
			display: table;

			.Shows1-left {
				//左
				width: 810px;
				float: left;

				.Shows1-left-left {
					overflow: hidden;
					width: 810px;
					float: left;
					padding-bottom: 12px;

					.Shows1-left-left-span1 {
						font-size: 20px;
						padding-left: 8px;

						.Shows1-left-left-span1-i {
							width: 4px;
							height: 20px;
							background-color: #ff5200;
							float: left;
							margin-top: 4px;
						}
					}

					.Shows1-left-right {
						float: right;
						// font-size: 12px;
						margin-top: 3px;

						.Shows1-left-right-a {
							color: #666;
							font-size: 12px;
						}
					}
				}

				.Shows1-left-neiro {
					overflow: hidden;
					width: 810px;
					float: left;

					.Shows1-left-neiro1 {
						width: 194px;
						height: 270px;
						margin: 0 7px 18px 0;
						float: left;
						position: relative;

						.Shows1-left-neiro-tupian {
							width: 194px;
							height: 210px;
							overflow: hidden;
							border-radius: 4px;
							position: relative;

							img {
								width: 100%;
								// margin-top: -20px;
							}
						}

						// 阴影
						.Shows1-left-shadow {
							display: none;
							position: absolute;
							bottom: 60px;
							background: rgba(0, 0, 0, 0.6);
							opacity: 0.9;
							padding: 5px 10px;
							width: 194px;
							color: #fff;
							font-size: 10px;

							.Shows1-left-shadow-p1 {
								height: 20px;
								line-height: 20px;
								overflow: hidden;
								color: #fff;
								font-size: 10px;

								.left-shadow-p1-i1 {
									display: inline-block;
									width: 12px;
									height: 14px;

									img {
										width: 11px;
										height: 12px;
									}
								}

								em {
									padding-bottom: 5px;
									padding-left: 5px;
									// display: inline-block;
									overflow: hidden;
								}
							}

							.Shows1-left-shadow-p2 {
								position: relative;
								line-height: 20px;
								height: 20px;
								overflow: hidden;

								.left-shadow-p2-i2 {
									width: 12px;
									height: 14px;

									img {
										width: 11px;
										height: 12px;
									}
								}

								em {
									padding-left: 5px;
								}
							}
						}

						.Shows1-left-neiro1-zi {
							width: 194px;
							height: 60px;
							border-bottom-left-radius: 4px;
							border-bottom-right-radius: 4px;
							background-color: #fff;
							padding: 13px 14px;

							p {
								overflow: hidden;
								font-size: 14px;
								color: #3c3c3c;
								white-space: nowrap;
								text-overflow: ellipsis;
								white-space: normal;
								display: -webkit-box;
								-webkit-line-clamp: 2;
								-webkit-box-orient: vertical;
							}
						}
					}

					.Shows1-left-neiro1:hover .Shows1-left-shadow {
						display: block;
					}

					.Shows1-left-neiro1:hover {
						box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
					}
				}
			}

			// 右
			.Shows1-right {
				width: 310px;
				margin-left: 60px;
				float: left;

				h2 {
					padding-bottom: 12px;
					font-size: 20px;
				}

				.Shows1-right-ul {
					width: 100%;
					background-color: #fff;
					border-radius: 4px;
					box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);

					.Shows1-right-ul-li {
						width: 100%;
						padding: 0 12px;

						.Shows1-right-ul-li-div {
							padding: 8px 0;
							border-bottom: 1px dashed #e8e8e8;
							display: flex;

							.Shows1-right-img {
								display: none;
								margin-right: 10px;

								.Shows1-right-img-tp {
									width: 120px;
									height: 80px;
									border-radius: 4px;

									img {
										border-radius: 4px;
										width: 120px;
										height: 80px;
									}
								}
							}

							.Shows1-right-neiro {
								width: 100%;
								display: flex;
								flex-direction: column;
								-webkit-box-pack: justify;
								justify-content: space-between;

								.Shows1-right-neiro-p1 {
									color: #3c3c3c;
									font-size: 14px;
									overflow: hidden;
									white-space: nowrap;
									text-overflow: ellipsis;
								}

								.Shows1-right-neiro-p2 {
									font-size: 12px;
									color: #999;
								}
							}
						}
					}

					.Shows1-right-ul-li:hover .Shows1-right-img {
						display: block;
					}

					.Shows1-right-ul-li:hover .Shows1-right-neiro-p1 {
						color: #3c3c3c;
						font-size: 14px;
						white-space: normal !important;
						display: -webkit-box !important;
						-webkit-line-clamp: 2 !important;
						-webkit-box-orient: vertical !important;
					}

					.Shows1-right-ul-li:hover {
						background: #f8f8f8;
					}

					.divs1 {
						display: none;
						margin-right: 10px;

						.divs-img {
							width: 120px;
							height: 80px;
							border-radius: 4px;

							img {
								border-radius: 4px;
							}
						}
					}

					.Sh {
						width: 100%;
						display: flex;
						flex-direction: column;
						-webkit-box-pack: justify;
						justify-content: space-between;

						.ljg {
							color: #3c3c3c;
							font-size: 14px;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
							// white-space: nowrap;
							// text-overflow: ellipsis;
							white-space: normal;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							// white-space: nowrap;
						}

						.S-p2 {
							font-size: 12px;
							color: #999;
						}
					}
				}
			}
		}
	}
</style>
