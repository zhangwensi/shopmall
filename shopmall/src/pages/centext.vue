<template>
	<div class="centext">
		<div class="leftside">
			<div class="leftsidetop">
				<div v-for='product in Pdlist'>
					<p class="pdsize">{{product.title}}</p>
					<ul>
						<li v-for='item in product.list'>
							<router-link :to="item.url">{{item.name}}</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="leftsidebutton">
				<p>消息大全</p>
				<ul>
					<li v-for='item in MessageList'>
						<a href="#">
							{{item.mt}}
							<el-button type="danger" size="mini" :loading="true" v-show='item.hot'>hot</el-button>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="rightside">
			<div class="imgloop">
				<solider :imglist='imglist'></solider>
			</div>
			<div>
				<div class="rightpd" v-for='item in Plist'>
					<img src="item.img" alt="产品图片">
					<ul>
						<li>
							<a href="#">{{item.title}}</a>
						</li>
						<li>
							<p>{{item.interduce}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Solider from '../components/solider'
export default {
	name:"centext",
	components :{
		Solider
	},
	data () {
		return {
			Pdlist: {
					pc: {
						title: '电子产品',
						list: [
							{
								name: '手机',
								url: 'mobile'
							},
							{
								name: '其他电器',
								url: ''
							}
						]
					},
					app: {
						title: '移动产品',
						list: [
							{
								name: '手机',
								url: ''
							}
						]
					}
			},
			MessageList: [
				{
					mt: '好好啊',
					hot: 'hot',
					url: 'dsadasdsadas'
				},
				{
					mt: '好好啊',
					hot: '',
					url: 'dsadasdsadas'
				},
				{
					mt: '好好啊',
					hot: '',
					url: 'dsadasdsadas'
				}
			],
			Plist: [
				{
					title: '儿童玩具',
					img: '#',
					url: 'dsdsdsd',
					interduce: '儿童玩具儿童玩具儿童玩具儿童玩具儿童玩具'
				},
				{
					title: '生活日用品',
					img: '#',
					url: 'dsdsdsd',
					interduce: '生活日用品生活日用品生活日用品生活日用品生活日用品'
				},
				{
					title: '户外用品',
					img: '#',
					url: 'dsdsdsd',
					interduce: '户外用品户外用品户外用品户外用品户外用品'
				},
				{
					title: '床上用品',
					img: '#',
					url: 'dsdsdsd',
					interduce: '床上用品床上用品床上用品床上用品床上用品床上用品'
				}
			],
			imglist: [
				{
				title: '名称一',
				src: require('../assets/login.jpg')
				},
				{
				title: '名称二',
				src: require('../assets/1.jpg')
				},
				{
				title: '名称三',
				src: require('../assets/2.jpg')
				}
			] 
		}
	}
}
</script>

<style>
p {
	margin: 0px;
}
.centext {
	height: 100%;
	margin-top:65px;
	z-index: 11;
}
.leftside {
	float: left;
	width: 25%;
	position: absolute;
}
.leftsidetop , .leftsidebutton {
	margin:auto;
	padding:15px;
	border: 1px solid red;
	height: 250px;
	box-shadow: 10px 10px 5px green;
	margin-bottom: 25px;
}
ul {
	list-style: none;
	padding-left: 15px;
}
.rightside {
	width: 70%;
	position: relative;
	overflow: hidden;
	float: right;
	left: 25px;
}
.imgloop {
	margin: 0px 15px auto;
}
.rightpd {
	float: left;
	margin-left: 25px;
	margin-top: 50px;
	margin-bottom: 10px;
	height: 150px;
	width: 350px;
	border: 1px solid #999999;
	box-shadow: 10px 10px 5px #A1A1A1;
}
.rightpd>img {
	float: left;
	background: green;
	height: 140px;
	width: 140px;
	margin: 5px;
}
.rightpd ul {
	list-style: none;
}
.rightpd li {
	margin-top: 10px;
	margin-bottom: 10px;
}
.pdsize {
	background: #98FB98;
}
</style>