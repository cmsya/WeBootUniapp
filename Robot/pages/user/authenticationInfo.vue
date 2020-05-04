<template>
	<view class="user">
		<!-- <uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="导航栏组件"></uni-nav-bar> -->
		<view class="content authenticationInfo">
			<!-- 
			<view class="pageTitle">
				<h1>用户中心</h1>
				<text>放大你的朋友圈价值</text>
			</view>
			 -->
			<view class="card">
				<view class="card-header">
					上传认证信息
				</view>
				<view class="card-body">
					<view class="uni-common-mt">
                        <view class="uni-form-item uni-column">
							<view class="title">姓名</view>
                            <input class="uni-input" focus placeholder="填写真实姓名" />
                        </view>
						<view class="uni-form-item uni-column">
							<view class="title">身份证</view>
							<input class="uni-input" type="idcard" placeholder="填写身份证号码" />
						</view>
					</view>
					<view class="upPhoto positive" @tap="chooseImg('positive')">
						<view class="title">上传身份证正面照</view>
						<view class="action"></view>
					</view>
					<view class="upPhoto reverse" @tap="chooseImg('reverse')">
						<view class="title">上传身份证反面照</view>
						<view class="action"></view>
					</view>
					<view class="upPhotoDes">上传身份证正反面不超过500kb</view>
				</view>
			</view>
			
		<view class="agreement">
			<!-- <navigator url="../login/reg">注册账号</navigator> -->
			<label><checkbox value="cb" checked="true" /><text>阅读并同意</text><navigator url="#">《快捷支付服务协议》</navigator></label>
		</view>
			
			
			<view class="btn-row">
				<button type="primary" class="primary"  @tap="goDefine">申请认证</button>
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
			goDefine() {
				uni.navigateTo({
					url: './authenticationInfoDefine',
				});
			},
			chooseImg(e){
				console.log(e);
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(JSON.stringify(res.tempFilePaths));

						// 预览图片
						uni.previewImage({
							urls: res.tempFilePaths,
							longPressActions: {
								itemList: ['发送给朋友', '保存图片', '收藏'],
								success: function(data) {
									console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
								},
								fail: function(err) {
									console.log(err.errMsg);
								}
							}
						});
						// 预览图片 end
		
					}
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
.authenticationInfo{
	padding: 0px;
}
.authenticationInfo .card{
	padding: 15px;
}
.card-body .uni-common-mt{
	margin-bottom: 20px;
}
.authenticationInfo .card-body .uni-column {
	border-bottom: 1px solid #cacaca;
}
.authenticationInfo .card-body .uni-column .title {
	width: 18%;
}
.authenticationInfo .card-body .uni-column .title , .authenticationInfo .card-body .uni-column .uni-input{
	display:inline-block;
	line-height: 50px;
	height: 50px;
	float: left;
}
.upPhoto{
	
}
.upPhoto .title{
	color: #5E5E5E;
	text-align: center;
	font-size: 100%;
}
.positive{
	
}
.positive .action , .reverse .action{
	width: 90%;
	margin: 5%;
	min-height: 180px;
	margin-bottom: 20px;
	color: rgba(255,255,255,0)!important;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
}
.positive .action{
	background-image: url(../../static/img/user/my_card_positive@2x.png);
}

.reverse .action{
	background-image: url(../../static/img/user/my_card_reverse@2x.png);
}
.upPhotoDes{
	color: #A0A0A0;
	text-align: center;
	font-size: 100%;
}
</style>
