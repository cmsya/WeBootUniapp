<template>
	<view class="ai">
		<view class="content">
			<!-- 
			<view class="pageTitle">
				<h1>用户中心</h1>
				<text>放大你的朋友圈价值</text>
			</view>
			 -->
			 
			<view class="search">
					<input class="uni-input" confirm-type="search" placeholder="输入广告ID查询发送记录" />
					<text></text>
			</view>
			 
			 
			 <!-- 列表 -->
			 <view class="list">
				 <view class="item" v-for="(item , index ) in aiList " :key="index">
					<view class="imgBox"><image :src="item.icon" mode="aspectFit"></image></view>
					<view class="textContent">
						<view class="title"><text></text>{{item.title}}</text></view>
						<view class="desA">发送时间：{{item.time}}</view>
						<view class="desB">
							发送状态：<text v-if="item.state != 0">发送成功</text><text v-else class="red">发送失败</text>
						</view>
					</view>
					<!-- 
					<view class="more" @tap="popupsShow($event,index)">
						...
					</view>
					 -->
				 </view>
				 <chunLei-popups v-model="popups.value" :popData="popups.data" @tapPopup="tapPopup" :x="popups.popupsPosition.x" :y="popups.popupsPosition.y" :placement="popups.placement" maskBg="rgba(0,0,0,0.5)"></chunLei-popups>
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
						time:'2020-04-20 20:20:20',
						state:1,
						path: "../login/login",
					},{
						title:'推送记录',
						icon:'../../static/img/robot/robot_push@2x.png',
						time:'2020-04-20 20:20:20',
						state:0,
						path: "../login/login",
					},{
						title:'粉丝交流',
						icon:'../../static/img/robot/robot_fans@2x.png',
						time:'2020-04-20 20:20:20',
						state:1,
						path: "../login/login",
					},{
						title:'自动发布',
						icon:'../../static/img/robot/robot_release@2x.png',
						time:'2020-04-20 20:20:20',
						state:1,
						path: "../login/login",
					}
				],
				
				popups:{
					value:false,
					placement:'top-end',
					popupsPosition:{x: 0 , y: 0},
					data:[{
						title:'定位'
					},{
						title:'解绑'
					},{
						title:'退出'
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
				
				if(this.aiList.length - i == 1){
					// console.log(this.aiList.length , i);
					this.popups.placement = 'bottom-end';
				}else{
					this.popups.placement = 'top-end';
				}
				
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
			goNavigator (e,i){
				// console.log(e,i);
				if (e == 'setUserInfo' && i == undefined){
					uni.navigateTo({
						url: '../user/modifyUserInfo',
					});
				}else if(this.userMenuList[i].path == '' ){
					uni.showToast({
						icon: 'none',
						title:'【' + e + '】未完善！'
					});
				}else{
					uni.navigateTo({
						url: this.userMenuList[i].path,
					});
				}
				
			},
		}
	}
</script>

<style>


</style>
