<template>
	<view class="user">
		<!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
	<view class="content userMain">
		<!-- 
		<view class="pageTitle">
			<h1>用户中心</h1>
			<text>放大你的朋友圈价值</text>
		</view>
		 -->
		<view class="user_avatar">
			<uni-list>
				<uni-list-item  title="头像"  @tap="goNavigator('头像')">
					<template v-slot:right="">
						<image style="width: 40px;height: 40px;" src="https://img-blog.csdnimg.cn/20190927151124774.png" mode="widthFix"></image>
					</template>
				</uni-list-item>
			</uni-list>
		</view>
		
		<view class="">
			<uni-list>
				<uni-list-item v-for="(item,index) in userMenuList" :key="index" :title="item.title":rightText="item.rightText" @tap="goNavigator(item.title,index)"></uni-list-item>
			</uni-list>
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
				pageTitle:'个人资料',
				userMenuList:[
					{
						title:'呢称',
						icon:'../../static/img/icon/user/my_sign.png',
						rightText:'陈汝平',
						path: "./modifyNikeName",
						
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
						path: "./modifyGender",
					},
					{
						title:'手机号码',
						icon:'../../static/img/icon/user/my_order.png',
						rightText:'13411173567',
						path: "./modifyPhone",
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
.userMain{
	padding: 0px;
}
.user_avatar{
	border-bottom: 1px solid #EAEAEA;
}
	
.user_avatar uni-image{

	border-radius: 50%;
	overflow: hidden;
}

.my_white_arrow .uni-icons{
	color: #E3FFFD!important;
}

.uni-list .uni-list-item{
	border-bottom: 1px solid #EAEAEA;
}
.uni-list .uni-list-item:last-of-type{
	border-bottom: none;
}
</style>
