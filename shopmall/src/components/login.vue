<template>
	<div class="login">
		<div class="loginbox">
			<h2>登录</h2>
			<input type="" name="">
			<input type="" name="">
			<button @click='sginin'>sigin</button>
			<el-button type="primary">主要按钮</el-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'login',
	data () {
		return{
		}
	},
	methods:{
		sginin () {
			this.$router.push({path:'/home'})
		}
	}
}	
</script>

<style scoped>
	.login {
		padding: 0px;
		height: 100%;
		background: url('../assets/login.jpg');
		position: relative;
	}
	.loginbox {
		width: 400px;
		height: 240px;
		left: 35%;
		margin-top: 200px; 
		background: #ccc;
		position: absolute;
		border-radius: 15px;
	}
	.login h2 {
		text-align: center;
	}
</style>