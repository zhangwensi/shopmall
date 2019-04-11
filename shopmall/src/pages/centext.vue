<template>
	<div class="centext">
		<div class="leftside">
			<div class="leftsidetop">
				<p>title</p>
				<ul>
					<li>title1</li>
					<li>title2</li>
				</ul>
			</div>
			<div class="leftsidetop">
				<p>title</p>
				<ul>
					<li>title1</li>
					<li>title2</li>
				</ul>
			</div>
			<div class="leftsidetop">
				<p>title</p>
				<ul>
					<li>title1</li>
					<li>title2</li>
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
			message:'dasdsad'
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
.leftsidetop {
	margin:auto;
	padding:15px;
	border: 1px solid red;
	height: 250px;
	box-shadow: 10px 10px 5px green;
	margin-bottom: 25px;
}
.leftsidetop>ul {
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