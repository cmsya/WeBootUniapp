<template>
	<view class="user">
	<view class="content nikename">
		<!-- 
		<view class="pageTitle">
			<h1>用户中心</h1>
			<text>放大你的朋友圈价值</text>
		</view>
		 -->
		<view class="">

            <form @submit="formSubmit" @reset="formReset">
                <view class="uni-form-item uni-column">
                    <input class="uni-input" focus placeholder="请填入新的昵称" />
                </view>
			</form>
			
		</view>

	</view>
	</view>
</template>

<script>
	var utils = require('../../utils/util.js');
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	import uniList from "@/components/uni-list/uni-list.vue";
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue";
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		components: {
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
				pageTitle:'个人资料',
				userMenuList:[
					{
						title:'呢称',
						icon:'../../static/img/icon/user/my_sign.png',
						rightText:'陈汝平',
						path: "",
						
					},
					{
						title:'年龄',
						icon:'../../static/img/icon/user/my_wallet.png',
						rightText:'80',
						path: "",
					},
					{
						title:'性别',
						icon:'../../static/img/icon/user/my_card.png',
						rightText:'先生',
						path: "",
					},
					{
						title:'手机号码',
						icon:'../../static/img/icon/user/my_order.png',
						rightText:'13411173567',
						path: "",
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
.nikename{
	/* font-size: 300%; */
}
.nikename .uni-list .uni-list-item{
	/* display: none; */
}

.nikename .uni-form-item{
	background-color: #ffffff;
	padding: 2%;
}
.uni-list .uni-list-item:last-of-type{
	border-bottom: none;
}
</style>
