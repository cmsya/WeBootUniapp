<template>
	<view class="main">
		<view class="content">
			<!-- 
			<view class="pageTitle">
				<h1>用户中心</h1>
				<text>放大你的朋友圈价值</text>
			</view>
			 -->
			 
			 <!-- 在线总数 -->
			 <view class="onLineTotal">
				 <view class="title">目前在线微信数</view>
				 <view class="number textColor">42524073</view>
			 </view>
			 
			 <!-- 栏目 -->
			 <view class="rColumn">
				 <view  v-for="(item,index) in columnList" :key="index" class="item" @tap="goNavigator(item.title,item.path)">
					 <image :src="item.icon" mode="aspectFit"></image>
					 <view class="title">{{item.title}}</view>
				 </view>
			 </view>
			 
			 <!-- 挂更多机器人 -->
			 <view class="rMore" @tap="goNavigator('123','../robot/buy')">
				 <image src="../../static/img/robot/robot_entrance@2x.png" mode="aspectFit"></image>
			 </view>
			 
			 <!-- 状态 -->
			 <view class="rState">
				<view class="robot_gary"></view>
				<view class="robot_blue">
					<view>已开通</view>
				</view>
				
				<view class="maintenance"></view>
				<view class="freeze"></view>
				<view class="rStateText">暂未绑定微信</view>
				

				<!-- 头像 -->
				<view class="avatarList">
					<view   v-for="(item,index) in avatarList" :key="index" class="item" v-if="index < 6">
						<image :src="item.icon" mode="aspectFit"></image>
					</view>
					<view class="avatarMore"  v-if="avatarList.length > 6">...</view>
				</view>
					
				<view class="btn-row">
					<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录微信</button>
					<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
				</view>
			 </view>
			 

			 
			 <!-- 
			<view class="btn-row">
				<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
				<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
			</view>
			 -->
			 <!-- 
			<view v-if="hasLogin" class="hello">
				<view class="title">
					您好 {{userName}}，您已成功登录。
				</view>
				<view class="ul">
					<h1>您好 游客。</h1>
					<view>【机器人】页欢迎您！</view>
				</view>
			</view>
			<view v-if="!hasLogin" class="hello">
				<view class="title">
					<h1>您好 游客。</h1>
					<view>【机器人】页欢迎您！</view>
				</view>
			</view>
			 -->
		</view>
	</view>
</template>

<script>
	// var utils = require('../../utils/util.js');
	// import { goNavigator } from '../../utils/util.js';
	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data() {
			return {	
				columnList:[
					{
						title:'机器人坐席',
						icon:'../../static/img/robot/robot_table@2x.png',
						rightText:'机器人坐席',
						path: "../robot/aiList",
					},{
						title:'推送记录',
						icon:'../../static/img/robot/robot_push@2x.png',
						rightText:'推送记录',
						path: "",
					},{
						title:'粉丝交流',
						icon:'../../static/img/robot/robot_fans@2x.png',
						rightText:'粉丝交流',
						path: "",
					},{
						title:'自动发布',
						icon:'../../static/img/robot/robot_release@2x.png',
						rightText:'自动发布',
						path: "../robot/autoPublish",
					}
				],
				avatarList:[
					{
						title:'机器人坐席',
						icon:'https://img-blog.csdnimg.cn/20190927151124774.png',
						rightText:'机器人坐席',
						path: "../login/login",
					},{
						title:'推送记录',
						icon:'https://img-blog.csdnimg.cn/20190927151124774.png',
						rightText:'推送记录',
						path: "../login/login",
					},{
						title:'粉丝交流',
						icon:'https://img-blog.csdnimg.cn/20190927151124774.png',
						rightText:'粉丝交流',
						path: "../login/login",
					},{
						title:'自动发布',
						icon:'https://img-blog.csdnimg.cn/20190927151124774.png',
						rightText:'自动发布',
						path: "../login/login",
					},{
						title:'机器人坐席',
						icon:'https://img-blog.csdnimg.cn/20190927151124774.png',
						rightText:'机器人坐席',
						path: "../login/login",
					},{
						title:'推送记录',
						icon:'https://img-blog.csdnimg.cn/20190927151124774.png',
						rightText:'推送记录',
						path: "../login/login",
					},{
						title:'粉丝交流',
						icon:'https://img-blog.csdnimg.cn/20190927151124774.png',
						rightText:'粉丝交流',
						path: "../login/login",
					},{
						title:'自动发布',
						icon:'https://img-blog.csdnimg.cn/20190927151124774.png',
						rightText:'自动发布',
						path: "../login/login",
					}
				]
			}
		},
		onLoad() {
			/*
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					// 如果需要强制登录，不显示取消按钮
					showCancel: !this.forcedLogin,
					success: (res) => {
						console.log('点击的确定！');
					}
				});
			}
			*/
		},
		onShow(option) {
			// console.log(utils.goNavigator(123,3));
		},
		methods: {
			goNavigator (title,url,type){
				console.log(title,url,type);
				if(url == undefined || url == ''){
					uni.showToast({
						icon: 'none',
						title:'【' + title + '】未完善！'
					});
				}else{
					uni.navigateTo({
						url: url,
					});
				}
			},
		}
	}
</script>

<style>

	
.main{
	background-image: url(../../static/img/robot/background@2x.png);
	background-repeat: no-repeat;
	background-position: top left;
	background-size: 100% auto;
}

/* 在线总数 */
.onLineTotal{
	text-align: center;
	margin: 8% auto;
}
.onLineTotal .title{
	color: #ffffff;
}
.onLineTotal .number{
	font-size: 200%;
}

			 
/* 栏目 */
.rColumn{
	background-color: #ffffff;
	border-radius: 10px;
	overflow: hidden;
	padding: 10px;
	
	display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.rColumn .item{
	text-align: center;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
.rColumn .item image{
	width: 80%;
	height: 100px;
}
.rColumn .item .title{

	color: #444444;
}
/* 挂更多机器人	 */
.rMore{
	width: 100%;
}
.rMore image{
	width: 100%;
	height: 80px;
}

/* 状态 */
.rState{
	/* width: 100%; */
	min-height: 200px;
	/* border: 1px solid #007AFF; */
	background-color: #ffffff;
	border-radius: 15px;
	overflow: hidden;
	padding: 10px;
}
.rState .robot_gary{
	margin: 30px auto;
}
.rState .robot_blue{
	margin: 30px auto;
}
.rState .maintenance{
	margin: 30px auto;
}
.rState .freeze{
	margin: 30px auto;
}
.rState .rStateText{
	text-align: center;
	font-size: 120%;
	color: #9B9B9B;
	margin-bottom: 20px;
}
.rState  .btn-row{
    width: 50%;
    margin: 0px auto;
}


.avatarList{
	text-align: center;
}


.avatarList .item , .avatarMore{
	margin-left: -15px;
	display: inline-block;
	
}


.avatarList .item image , .avatarMore{
	width: 55px;
	height: 55px;
	
	border-radius: 50%;
	overflow: hidden;
	border: 2px solid #ffffff;
	display: inline-block;
}
.avatarMore{
	line-height: 60%;
	font-size: 300%;
	position: relative;
	z-index: 10;
	color: #BDBDBD;
	background-color: #EFEFEF;
}
</style>
