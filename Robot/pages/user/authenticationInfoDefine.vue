<template>
	<view class="user">
		<!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
		<view class="content authenticationInfoDefine">
			<!-- 
			<view class="pageTitle">
				<h1>用户中心</h1>
				<text>放大你的朋友圈价值</text>
			</view>
			 -->

			
			<view class="waitImg">
				<image  src="../../static/img/user/my_review@2x.png" mode="widthFix"></image>
			</view>
			
			<view class="btn-row">
				<button type="primary" class="primary"  @tap="goUser">正在审核，请耐心等待</button>
			</view>
		</view>
	</view>
</template>

<script>
	var utils = require('../../utils/util.js');
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue";
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	import uniList from "@/components/uni-list/uni-list.vue";
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue";
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		components: {
			uniNavBar,
			uniIcons,
			uniList,
			uniListItem
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin'])
		},
		onLoad(option){
			// console.log(option);
			let count = utils.count;
			console.log(count(4));
			
			// console.log(getCurrentPages());
		},
		onShow(option) {
			// console.log('page onShow');
			// console.log(option);
			utils.navStyle();  // 顶部导航设置
		},
		data() {
			return {
				pageTitle:'绑定银行卡',
				bankList:[
					{
						title:'银行卡',
						icon:'../../static/img/icon/user/my_sign.png',
						rightText:'未绑定',
						path: "./about",
						showSwitch:false
						
					},
					{
						title:'支付宝',
						icon:'../../static/img/icon/user/my_wallet.png',
						rightText:'多年以后',
						path: "",
						showSwitch:true
					},
					{
						title:'微信',
						icon:'../../static/img/icon/user/my_card.png',
						rightText:'这里说明',
						path: "",
						showSwitch:true
					}
				],
			}
		},
		methods: {
			goUser(){
				uni.switchTab({
					url: '../user/main',
				});
			},
			/*
			titleNViewWebview() {
				uni.setNavigationBarColor({
					frontColor: '#ffffff',
					backgroundColor: '#ff0000',
					animation: {
						duration: 400,
						timingFunc: 'easeIn'
					}
				})
			},
			*/
			onNavigationBarButtonTap(e) {   // 导航栏 右边按钮
				console.log(e);  
				uni.showToast({
					icon: 'success',
					title:'保存成功！'
				});
			} ,
			goNavigator (e,i){
				console.log(e,i);
				if (e == '头像' && i == undefined){
					uni.navigateTo({
						url: '../user/modifyUserInfo',
					});
				}else if(this.bankList[i].path == '' ){
					uni.showToast({
						icon: 'none',
						title:'【' + e + '】未完善！'
					});
				}else{
					uni.navigateTo({
						url: this.bankList[i].path,
					});
				}
			},
			...mapMutations(['logout']),
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			bindLogout() {
				this.logout();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			}
		}
	}
</script>

<style>
.authenticationInfoDefine{
	padding: 0px;
}
.waitImg{
	text-align: center;
	margin: 0 auto;
}
.waitImg image{
	text-align: center;
	margin: 0 auto;
}

</style>
