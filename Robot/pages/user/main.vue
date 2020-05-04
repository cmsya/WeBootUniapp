<template>
	<view class="user">
	<view class="content userMain">
		<!-- 
		<view class="pageTitle">
			<h1>用户中心</h1>
			<text>放大你的朋友圈价值</text>
		</view>
		 -->
		<view class="user_info" @tap="goNavigator('setUserInfo')">
			<view class="avatar"><image src="https://img-blog.csdnimg.cn/20190927151124774.png" mode="aspectFit"></image></view>
			<view class="personal">
				<view class="uname">陈汝平</view>
				<text class="uid">QQ:42524073</text>
			</view>
			<view class="my_white_arrow">
				<uni-icons type="arrowright" size="30"></uni-icons>
			</view>
		</view>
		
		<view>
			<uni-list>
				<uni-list-item v-for="(item,index) in userMenuList" :key="index" :title="item.title" :thumb="item.icon" :rightText="item.rightText" @tap="goNavigator(item.title,index)"></uni-list-item>
			</uni-list>
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
		data() {
			return {	
				userMenuList:[
					{
						title:'签到',
						icon:'../../static/img/icon/user/my_sign.png',
						rightText:'签到抽大奖',
						path: "../login/login",
					},
					{
						title:'我的钱包',
						icon:'../../static/img/icon/user/my_wallet.png',
						rightText:'',
						path: "",
					},
					{
						title:'绑定银行卡',
						icon:'../../static/img/icon/user/my_card.png',
						rightText:'绑定微信/支付宝/银行卡',
						path: "./bankList",
					},
					{
						title:'订单中心',
						icon:'../../static/img/icon/user/my_order.png',
						rightText:'',
						path: "",
					},
					{
						title:'区域合伙人',
						icon:'../../static/img/icon/user/my_area.png',
						rightText:'',
						path: "",
					},
					{
						title:'GPS位置更新',
						icon:'../../static/img/icon/user/my_location.png',
						rightText:'',
						path: "",
					},
					{
						title:'实人通行证',
						icon:'../../static/img/icon/user/my_pass.png',
						rightText:'',
						path: "./passCheck"
					},
					{
						title:'服务中心',
						icon:'../../static/img/icon/user/my_wallet.png',
						rightText:'',
						path: "",
					},
					{
						title:'设置',
						icon:'../../static/img/icon/user/my_set.png',
						rightText:'',
						path: "./modifySet",
					}
				],
			}
		},
		methods: {
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
				/*   
				let n = 1;
				switch(n)		
				{
					case 1:
						// 执行代码块 1
						break;
					case 2:
						// 执行代码块 2
						break;
					default:
						uni.showToast({
							icon: 'none',
							title:'【' + e + '】未完善！'
						});	
				}
				*/

				
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
	
 .userMain .user_info{
	width: 100%;
	/* height: 150px; */
	background-color: #1ACFC1;
	

 }
 /* 
.userMain .user_info{
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
}
.user_info .avatar ,  .user_info .personal {
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	flex: 1;
 }
 */
 .user_info .avatar , .user_info .personal , .user_info .my_white_arrow{
	 float: left;
 }
 .user_info .avatar {
	 width: 28%;
 }

 .user_info .avatar uni-image{
 	 width: 80px;
 	 height: 80px;
	 border-radius: 50%;
	 overflow: hidden;
	 margin: 20px 10px;
 }
 .user_info .avatar uni-image img{
 	 width: 80px;
 	 height: 80px;
}
 .user_info .personal{
	 width: 60%;
 }
 .user_info .personal .uname{
	 font-size: 140%;
	 color: #fff;
	 margin: 25px 0px 10px 0px;
 }
 .user_info .personal .uid{
	color: #CFFDF9;
 }
.my_white_arrow{
	width: 2%;
    line-height: 125px;
    height: 125px;
    text-align: center;
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
