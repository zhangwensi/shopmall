<template>
	<div class="centext">
		<div class="leftside">
			<div class="leftsidetop">
				<div v-for='product in Pdlist'>
					<p>{{product.title}}</p>
					<ul>
						<li v-for='item in product.list'>
							<a href="#">{{item.name}}</a>
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
			<div class="imgloop"></div>
			<div class="rightsideli">
				<ul>
					<li></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"centext",
	data () {
		return {
			Pdlist: {
					pc: {
						title: '电子产品',
						list: [
							{
								name: '手机',
								url: 'dsdsdsd'
							},
							{
								name: 'g手机',
								url: 'dsdsdsd'
							}
						]
					},
					app: {
						title: '移动产品',
						list: [
							{
								name: '手机',
								url: 'dsdsdsd'
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
	margin: auto;
	height: 250px;
	width: 500px;
	border: 1px solid black;
}
.rightsideli {
}
.rightsideli>ul {
	list-style: none;

}
</style>