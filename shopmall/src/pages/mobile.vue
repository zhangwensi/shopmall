<template>
	<div class="mobilelayout">
		<div class="leftside">
		    <el-menu
		        default-active="2"
		        class="el-menu-vertical-demo"
		        @open="handleOpen"
		        @close="handleClose"
		        background-color="#545c64"
      		    text-color="#fff"
                active-text-color="#ffd04b"
                v-for='(md ,index) in Mdlist' :key='index'>
		        <el-submenu index="1">
		            <template slot="title">
		                <i class="el-icon-phone"></i>
		                <span>{{md.title}}</span>
		            </template>
		            <el-menu-item-group >
		                <template slot="title">{{md.title}}</template>
		                <el-menu-item v-for= '(item ,index) in md.list' :key='index'>{{item.model}}</el-menu-item>
		            </el-menu-item-group><!-- 
		            <el-menu-item-group title="分组2">
		                <el-menu-item index="1-3">选项3</el-menu-item>
		            </el-menu-item-group>
		                <el-submenu index="1-4">
		            <template slot="title">选项4</template>
		            <el-menu-item index="1-4-1">选项1</el-menu-item> -->
		        </el-submenu>
		      </el-submenu>
		    </el-menu>
		</div>
		<div class="rightside"></div>
	</div>
</template>

<script>
export default {
	name: 'mobile',
	data () {
		return {
			Mdlist: {
				iphone: {
					title: '苹果',
					list:[
						{ model:'iphoneX'},
						{ model:'iphoneXR'}
					]
				},
				xiaomi: {
					title: '小米',
					list:[
						{ model:'小米plus'}
					]
				},
				huawei: {
					title: '华为',
					list:[
						{ model:'华为MATEXR'}
					]
				}
			}
		}
	},
	methods: {
	    handleOpen(key, keyPath) {
	      console.log(key, keyPath);
	    },
	    handleClose(key, keyPath) {
	      console.log(key, keyPath);
	    }
	}
}
</script>

<style>
.mobilelayout {
	margin-top: 5px;
}
.leftside {
	width: 30%;
	position: relative;
	top: 20px;
	left: 0px;
	padding:15px;
	height: 250px;
	margin-bottom: 25px;
}
</style>