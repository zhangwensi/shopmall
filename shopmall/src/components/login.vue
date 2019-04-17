<template>
	<div class="login">
		<div class="loginbox">
			<h2>登录</h2>
			<div class="logininput">
				<el-input placeholder="请输入账号" v-model="username"></el-input>	
			</div>
			<div class="logininput">
				<el-input placeholder="请输入密码" v-model="password" show-password></el-input>	
			</div>
			<div class="loginbutton">
				<el-button type="primary" size="small" @click='sginin'>登录</el-button>
				<el-button type="primary" size="small" @click='sginin'>注册</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'login',
	data () {
		return{
			username: '',
			password: ''
		}
	},
	methods:{
		sginin () {
			this.$router.push({path:'/centext'})
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
		background: rgba(150,150,200,0.5);
		position: absolute;
		border-radius: 15px;
	}
	.login h2 {
		text-align: center;
	}
	.logininput {
		width: 300px;
		margin: auto;
		padding-bottom: 20px;
	}
	.loginbutton {
		text-align: center; 
	}
</style>