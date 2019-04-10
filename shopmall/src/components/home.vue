<template>
  <div class="layout">
  	<div class="header">
  		<img class="headerimg" src="" alt="logo">
  		<div class="headersign">
  			<div>登陆者  </div>
  			<div>等级  </div>
  			<div>等级  </div>
  		</div>
  	</div>
  	<div class="context">dsdas
  		<router-view/>	
  	</div>
  	<div class="footer">
  		<p>南京小米科技有限公司@LGT.LOG</p>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '主页面'
    }
  }
}
</script>


<style scoped>
.layout {
	height: 100%;
}
.header {
	background: #909399;
	width: 100%;
	height:50px;
	color: #fff;
}
.footer {
	background: #909399;
	width: 100%;
	height:50px;
	bottom: 0px;
	position: fixed;
	text-align: center;
}
.headerimg {
	line-height: 50px;
	width:50px;
	height: 50px;
	border-radius: 25px;
	background: green;
	margin-left: 150px;
}
.headersign {
	line-height: 50px;
	height: 50px;
	float: right;
	color: #fff;
	margin-right: 150px;
}
.headersign > div {
	float: left;
	margin: 0 10px;
}
.context {
	margin: 0 150px auto;
}
</style>
