<template>
	<view class="ai">
		<view class="content">
			<!-- 
			<view class="pageTitle">
				<h1>用户中心</h1>
				<text>放大你的朋友圈价值</text>
			</view>
			 -->
			 
			 <!-- 列表 -->
			 <view class="list">
				 <view class="item" v-for="(item , index ) in managementList " :key="index">
					<view class="imgBox"><image :src="item.icon" mode="aspectFit"></image></view>
					<view class="textContent">
						<view class="title"><text></text>{{item.title}}</text></view>
						<view class="desA">发送机器人：{{item.robot}}</view>
						<view class="desB">发送分组：{{item.type}}</view>
					</view>
					<view class="more" @tap="popupsShow($event,index)">
						...
					</view>
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
	// var utils = require('../../utils/util.js');
	import utils from '@/utils/util';
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
				managementList:[
					{
						title:'程冉冉',
						icon:'../../static/img/robot/robot_table@2x.png',
						robot:'程冉冉',
						type:'每日推送',
						path: "../login/login",
					},{
						title:'陈菁菁',
						icon:'../../static/img/robot/robot_push@2x.png',
						robot:'陈菁菁',
						type:'每日推送',
						path: "../login/login",
					},{
						title:'曹点点',
						icon:'../../static/img/robot/robot_fans@2x.png',
						robot:'曹点点',
						type:'每日推送',
						path: "../login/login",
					},{
						title:'崔昂昂',
						icon:'../../static/img/robot/robot_release@2x.png',
						robot:'崔昂昂',
						type:'每日推送',
						path: "../login/login",
					}
				],
				
				popups:{
					value:false,
					placement:'top-end',
					popupsPosition:{x: 0 , y: 0},
					data:[{
						title:'修改'
					},{
						title:'删除'
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
				// console.log(this.aiList.length , i);
				if(this.managementList.length - i == 1){
					// console.log(this.aiList.length , i);
					this.popups.placement = 'bottom-end';
				}else{
					this.popups.placement = 'top-end';
				}
				
				// console.log(e,i);
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
