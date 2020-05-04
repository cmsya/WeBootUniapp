<template>
	<view class="user">
		<view class="content pass-check">
			<!-- 
			<view class="pageTitle">
				<h1>用户中心</h1>
				<text>放大你的朋友圈价值</text>
			</view>
			 -->
			<view class="pass-header">
				<view class="pass-header-h">
					<image src="../../static/img/icon/user/pass_check/my_certificate@3x.png" mode="aspectFit"></image>
					<view class="title">未认证</view>
				</view>
				<view class="certificate">
					<view class="title">实人通行证</view>
					<image src="../../static/img/icon/user/pass_check/my_certificate@3x.png" mode="aspectFit"></image>
				</view>
				<view class="pass-header-des">实人通行证是流光会员用户必须进行的真人认证</view>
				<view class="pass-header-but">
					<view class="authentication" @tap="goAuthenticationInfo()">去认证</view>
				</view>
				
			</view>
			<view class="pass-body">

				<view class="card-header">
					通行证特权
				</view>
				<view class="card-body">
					<view class="passCheckList" v-for="(item , index ) in passCheckList " :key="index">
						
						<image :src="item.icon" mode="aspectFit"></image>
						<view>
							<view class="title">{{item.title}}</view>
							<view class="des">{{item.des}}</view>
						</view>
					</view>
				</view>
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
				pageTitle:'流光实人通行证',
				passCheckList:[
					{
						title:'提现次数',
						icon:'../../static/img/icon/user/pass_check/my_withdrawal@3x.png',
						des:'每天2次',
						path: "",
					},{
						title:'机器人数量',
						icon:'../../static/img/icon/user/pass_check/my_robot@3x.png',
						des:'免费5个机器人',
						path: "",
					},{
						title:'免手续费',
						icon:'../../static/img/icon/user/pass_check/my_poundage@3x.png',
						des:'免费提现/月/次',
						path: "",
					},{
						title:'错误保障',
						icon:'../../static/img/icon/user/pass_check/my_security@3x.png',
						des:'错评估快速处理',
						path: "",
					},{
						title:'高级社群',
						icon:'../../static/img/icon/user/pass_check/my_community@3x.png',
						des:'免费加入社群',
						path: "",
					},{
						title:'物联卡',
						icon:'../../static/img/icon/user/pass_check/my_content@3x.png',
						des:'免费领取流量卡',
						path: "",
					}
				],
				current:0
			}
		},
		methods: {
        radioChange (evt) {
            for (let i = 0; i < this.gender.length; i++) {
                if (this.gender[i].value === evt.target.value) {
                    this.current = i;
                    break;
                }
            }
        },
			onNavigationBarButtonTap(e) {   // 导航栏 右边按钮
				console.log(e);  
				uni.showToast({
					icon: 'success',
					title:'保存成功！'
				});
			} ,
			goAuthenticationInfo(){
				uni.navigateTo({
					url: '../../pages/user/authenticationInfo'
				});
			},
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
.pass-header{
	width: 90%;
	padding: 5%;
	min-height: 180px;
	margin-bottom: 20px;
	color: rgba(255,255,255,0)!important;
	background-image: url(../../static/img/icon/user/pass_background.jpg);
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
}
.pass-header .pass-header-h{
	width: 100%;
}
.pass-header .pass-header-h image{
	width: 50px;
	height: 50px;
	border-radius: 50%;
	overflow: hidden;
	background-color: #ffffff;
	float: left;
}
.pass-header .pass-header-h .title{
	height: 60px;
	font-size: 100%;
	line-height: 60px;
	margin-left: 10px;
	color: #ffffff;
	float: left;
}
.pass-header .certificate{
	margin-top: 10px;
	margin-bottom: 10px;
}
.pass-header .certificate .title{
	font-size: 110%;
	color: #ffffff;
	float: left;
	margin-right: 10px;
}
.pass-header .certificate  image{
	width: 25px;
	height: 20px;
	/* margin-top: 5px; */
	overflow: hidden;
	background-color: #ffffff;
	float: left;
	border-radius: 5px;
	overflow: hidden;
}
.pass-header-des{
	font-size: 80%;
	color: #ffffff;
	margin-bottom: 10px;
}
.pass-header-but{
	
}
.pass-header-but > view{
	text-align: center;
	color: #11ACED;
	margin: 0px auto;
	width:80px;
	height:26px;
	background:linear-gradient(134deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0.31) 100%);
	box-shadow:0px 7px 12px 0px rgba(82,217,255,0.25);
	border-radius:13px;
}
.authentication{}
.pass-body .card-header{
	margin-bottom: 10px;
}
.passCheckList{
	
}
.passCheckList{
	width: 48%;
	float: left;
	margin: 1%;
	border-radius: 10px;
	overflow: hidden;
	background-color: #ffffff;
}
.passCheckList uni-image{
	width: 40%;
	height: 80px;
	float: left;
}
.passCheckList uni-image img{
	width: 100%;
}
.passCheckList > view{
	width: 60%;
	float: left;
}
.passCheckList > view .title{
	font-size: 120%;
	margin-top: 8px;
	margin-bottom: 5px;
	
}
.passCheckList > view .des{
	font-size: 90%;
	color: #9B9B9B;
	
}
.uni-list .uni-list-item:last-of-type{
	border-bottom: none;
}
</style>
