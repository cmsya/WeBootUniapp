<template>
	<view class="content">
		<view class="hello">
			<image src="../../static/img/robot/robot_code@3x.png" mode="aspectFit"></image>
		</view>
		<view class="qrCode">二维码位置，点击进行下一步</view>
		<view class="text">请扫描二维码，启动机器人</view>
	</view>
</template>

<script>
	var utils = require('../../utils/util.js');
	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {

		},
		onShow(option) {
			utils.navStyle();  // 顶部导航设置
		},
	}
</script>

<style>
	.content{
		background-color: #ffffff;
	}
	.hello {
		text-align: center;
	}
	.hello image{
		margin-top: 30%;
		width: 100px;
		height: 120px;
	}

	.qrCode{
		color: #6AD2FF;
		width: 150px;
		height: 150px;
		padding: 10px;
		text-align: center;
		border-radius: 10px;
		border: 3px solid #6AD2FF;
		margin: 10px auto;
	}

	.text {
		text-align: center;
	}
</style>
