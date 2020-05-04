<template>
	<view class="autoPublish">
		<view class="content ">
			<!-- 
			<view class="pageTitle">
				<h1>用户中心</h1>
				<text>放大你的朋友圈价值</text>
			</view>
			 -->
			<view class="topBanner">

      <!-- banner 轮播 -->
        <view class="uni-padding-wrap banner">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="banner.indicatorDots" :autoplay="banner.autoplay" :interval="banner.interval" :duration="banner.duration">
                        <swiper-item v-for="(item,index) in banner.info"  :key="index">
                            <view class="swiper-item uni-bg-red"><image :src="item.img" mode="aspectFill"
                        @error="imageError"></image></view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
      <!-- banner 轮播 end -->


			</view>
			
			<!-- 
			<view class="card-header">
				通行证特权
			</view>
			 -->
			<view class="card-body">
				<view class="list" v-for="(item , index ) in autoPublishList " :key="index"  @tap="goNavigator(item.title,index)">
					<view class="imgBox"><image :src="item.icon" mode="aspectFit"></image></view>
					<view>
						<view class="title">{{item.title}}</view>
						<!-- <view class="des">{{item.des}}</view> -->
					</view>
				</view>
			</view>
			<view class="footer">客服电话：400-199-999</view>
		</view>
	</view>
</template>

<script>
	// var utils = require('../../utils/util.js');
	import utils from '../../utils/util';
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

		},
		onShow(option) {
			// console.log('page onShow');
			// console.log(option);
			console.log(utils);
			utils.navStyle();  // 顶部导航设置
		},
		data() {
			return {
				pageTitle:'自动发布',
				
				banner:{
					info: [{
						title: '【AI】让AI赋能数据，金融业准备好了吗？',
						img: 'https://img.alicdn.com/tfs/TB10v7UDhn1gK0jSZKPXXXvUXXa-440-260.png'
					}, {
						title: '【大数据】未来十年，如何有效利用数据？',
						img: 'https://img.alicdn.com/tfs/TB19_ATDhz1gK0jSZSgXXavwpXa-440-260.png'
					}],				
					background: ['color1', 'color2', 'color3'],
					indicatorDots: true,
					autoplay: true,
					interval: 2000,
					duration: 500
				},
				
				autoPublishList:[
					{
						title:'素材分组',
						icon:'../../static/img/robot/icon/robot_material@3x.png',
						des:'素材分组',
						path: "./material",
					},{
						title:'任务管理',
						icon:'../../static/img/robot/icon/robot_task@3x.png',
						des:'任务管理',
						path: "./task",
					},{
						title:'文字朋友圈',
						icon:'../../static/img/robot/icon/robot_text@3x.png',
						des:'文字朋友圈',
						path: "./addWordsPictureLink?words=show",
					},{
						title:'图片朋友圈',
						icon:'../../static/img/robot/icon/robot_picture@3x.png',
						des:'图片朋友圈',
						path: "./addWordsPictureLink?picture=show",
					},{
						title:'链接朋友圈',
						icon:'../../static/img/robot/icon/robot_link@3x.png',
						des:'链接朋友圈',
						path: "./addWordsPictureLink?link=show",
					},{
						title:'朋友圈列表',
						icon:'../../static/img/robot/icon/robot_friend@3x.png',
						des:'朋友圈列表',
						path: "./friendList",
					},{
						title:'视频教程',
						icon:'../../static/img/robot/icon/robot_video@3x.png',
						des:'视频教程',
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
				}else if(this.autoPublishList[i].path == '' ){
					uni.showToast({
						icon: 'none',
						title:'【' + e + '】未完善！'
					});
				}else{
					uni.navigateTo({
						url: this.autoPublishList[i].path,
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
.autoPublish{
	
}
.topBanner{
	width: 100%;
	/* padding: 5%; */
	min-height: 180px;
	margin-bottom: 20px;
	color: rgba(255,255,255,0)!important;
	border-radius: 10px;
	background-image: url(../../static/img/icon/user/pass_background.jpg);
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
}

.banner{
	border-radius: 10px;
	overflow: hidden;
}
.banner uni-image{
	width: 100%;
}
.banner uni-swiper{
	height: 200px;
}

.authentication{}


.list{
	width: 48%;
	float: left;
	margin: 1%;
	border-radius: 10px;
	overflow: hidden;
	background-color: #ffffff;
}
.list .imgBox{
	width: 40%;
	height: 80px;
	float: left;
}
.list  .imgBox uni-image{
	width: 50%;
	height: 80px;
	margin: 0 auto;
	display: block;
}

.list  .imgBox uni-image img{
	width: 100%;
}


.list > view{
	width: 60%;
	float: left;
}
.list > view .title{
	font-size: 110%;
	line-height: 80px;
	/* 
	margin-top: 8px;
	margin-bottom: 5px;
	 */
}
.list > view .des{
	font-size: 90%;
	color: #9B9B9B;
	
}
.uni-list .uni-list-item:last-of-type{
	border-bottom: none;
}


.footer{
	margin-top: 5%;
	font-size: 100%;
	text-align: center;
	color: #9B9B9B;
}
</style>
