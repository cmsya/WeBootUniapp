<template>
	<view class="aiList">
		<view class="content">
			<!-- 
			<view class="pageTitle">
				<h1>用户中心</h1>
				<text>放大你的朋友圈价值</text>
			</view>
			 -->
			 
			 <!-- 列表 -->
			 <view class="list">
				 <view class="item" v-for="(item , index ) in aiList " :key="index">
					<view class="imgBox"><image :src="item.icon" mode="aspectFit"></image></view>
					<view class="textContent">
						<view class="title"><text></text>{{item.title}}</text><text v-if="index == 0" class="but" @tap="goNavigator('登录','../robot/start')">登录</text></view>
						<view class="level">系统评定：{{item.level}}</view>
						<view class="type">类型：{{item.type}}</view>
					</view>
					<view class="more" @tap="popupsShow($event,index)">
						...
					</view>
				 </view>
				 <chunLei-popups v-model="popups.value" :popData="popups.data" @tapPopup="tapPopup" :x="popups.popupsPosition.x" :y="popups.popupsPosition.y" placement="top-end" maskBg="rgba(0,0,0,0.5)"></chunLei-popups>
			</view>
			
			
			
			 <!-- 
			<view class="btn-row">
				<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
				<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
			</view>
			 -->

		</view>
	</view>
</template>

<script>
	var utils = require('../../utils/util.js');
	import chunLeiPopups from "@/components/chunLei-popups/chunLei-popups.vue";
	
	import {
		mapState
	} from 'vuex'

	export default {
		components:{
			chunLeiPopups,
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data() {
			return {
				aiList:[
					{
						title:'机器人坐席',
						icon:'../../static/img/robot/robot_table@2x.png',
						level:'钻石级别',
						type:'AI机器人',
						path: "../login/login",
					},{
						title:'推送记录',
						icon:'../../static/img/robot/robot_push@2x.png',
						level:'钻石级别',
						type:'AI机器人',
						path: "../login/login",
					},{
						title:'粉丝交流',
						icon:'../../static/img/robot/robot_fans@2x.png',
						level:'钻石级别',
						type:'AI机器人',
						path: "../login/login",
					},{
						title:'自动发布',
						icon:'../../static/img/robot/robot_release@2x.png',
						level:'钻石级别',
						type:'AI机器人',
						path: "../login/login",
					}
				],
				
				popups:{
					value:false,
					popupsPosition:{x: 0 , y: 0},
					data:[{
						title:'解绑'
					},{
						title:'退出'
					},{
						title:'更新'
					},{
						title:'设置'
					}],
				}
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
			utils.navStyle();  // 顶部导航设置
		},
		methods: {
			popupsShow(e,i){
				console.log(e,i);
				// console.log(e.detail);
				this.popups.popupsPosition.x = e.detail.x - 35;
				this.popups.popupsPosition.y = e.detail.y;
				this.popups.value = true;
			},
			tapPopup(e){
				console.log(e.title);
					// this.value = true;
					
			},
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

	
.aiList{
	/* 
	background-image: url(../../static/img/robot/background@2x.png);
	background-repeat: no-repeat;
	background-position: top left;
	background-size: 100% auto;
	 */
}
.aiList .item{
	border-radius: 10px;
	overflow: hidden;
	margin-bottom: 10px;
	padding: 5% 2%;
	background-color: #ffffff;
}

.item .imgBox{width: 22%;}
.item .textContent{width: 70%;}
.item .more{width: 8%;}
.item .imgBox , .item .textContent , .item .more{float: left;}


.aiList .imgBox uni-image{
	width: 65px;
	height: 65px;
	border-radius: 50%;
	overflow: hidden;
	margin: 0 auto;
	display: block;
}
.textContent{
}
.title{}
.textContent .title .but{
	font-size: 90%;
	background-color: #1ACFC1;
	color: #ffffff;
	border-radius: 20px;
	padding: 2px 17px;
	margin-left: 10px;
}
.textContent .level{
	font-size: 90%;
	color: #666666;
}
.textContent .type{
	font-size: 70%;
	color: #9B9B9B;
}
.item .more{
	color: #BDBDBD;
	font-size: 200%;
}



</style>
