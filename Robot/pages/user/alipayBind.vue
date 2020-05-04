<template>
	<view class="user">
		<!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
	<view class="content bankBind">
		<!-- 
		<view class="pageTitle">
			<h1>用户中心</h1>
			<text>放大你的朋友圈价值</text>
		</view>
		 -->
		
			<view class="card">
				<view class="card-header">
					输入支付宝帐号
				</view>
				<view class="card-body">
					<view class="uni-common-mt">
                        <view class="uni-form-item uni-column">
							<view class="title">支付宝</view>
                            <input class="uni-input" focus placeholder="输入支付宝帐号" />
                        </view>
					</view>
				</view>
			</view>
			

			
			<view class="btn-row">
				<button type="primary" class="primary">确定</button>
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
.bankBind{
	padding: 0px;
}
.card{
	padding: 15px;
}
.card .card-body{
	background-color: #ffffff;
}
.card .card-body .uni-column .title {
	width: 18%;
}

.card .card-body .uni-column .title , .card .card-body .uni-column .uni-input{
	display:inline-block;
	line-height: 50px;
	height: 50px;
	float: left;
}
</style>
