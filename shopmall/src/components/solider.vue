<template>
	<el-carousel :interval="4000" type="card" height="250px">
	  	<el-carousel-item v-for="(item ,index) in imgdata" :key="index">
	  		<img :src="item.src" style="width: 378px;height: 250px">
	    	<h3>{{ index+1 }}</h3>
	    </el-carousel-item>
	</el-carousel>
</template>

<script>
export default {
	name: 'solider',
	props:{
		imglist: {
			type: Array
		}
	},
	data () {
		return {
			imgdata: []
		}
	},
	mounted () {
		this.imgdata = this.imglist
		// console.log(this.imgdata)
	}
}	
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>