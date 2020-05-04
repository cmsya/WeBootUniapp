<template>
	<view class="aiList">
		<view class="content">
			<!-- 
			<view class="pageTitle">
				<h1>用户中心</h1>
				<text>放大你的朋友圈价值</text>
			</view>
			 -->
			 
			 <!-- 列表 -->
			 <view class="list">
				 <view class="item" v-for="(item , index ) in aiList " :key="index">
					<view class="imgBox"><image :src="item.icon" mode="aspectFit"></image></view>
					<view class="textContent">
						<view class="title"><text></text>{{item.title}}</text></view>
						<view class="desA">创建时间：{{item.date}}</view>
						<view class="desB">组内信息：{{item.info}}条</view>
					</view>
					<view class="more" @tap="popupsShow($event,index)">
						...
					</view>
				 </view>
				 <chunLei-popups v-model="popups.value" :popData="popups.data" @tapPopup="tapPopup" :x="popups.popupsPosition.x" :y="popups.popupsPosition.y" placement="top-end" maskBg="rgba(0,0,0,0.5)"></chunLei-popups>
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
	import { getMaterialList } from '@/utils/api';
	// var utils = require('../../utils/util.js');
	import utils from '../../utils/util';
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
						title:'每日推送',
						icon:'../../static/img/robot/robot_link_2@3x.png',
						date:'2020-02-02',
						info:96,
						path: "../login/login",
					},{
						title:'每日推送',
						icon:'../../static/img/robot/robot_link_2@3x.png',
						date:'2020-02-02',
						info:96,
						path: "../login/login",
					},{
						title:'每日推送',
						icon:'../../static/img/robot/robot_link_2@3x.png',
						date:'2020-02-02',
						info:96,
						path: "../login/login",
					},{
						title:'每日推送',
						icon:'../../static/img/robot/robot_link_2@3x.png',
						date:'2020-02-02',
						info:96,
						path: "../login/login",
					}
				],
				
				popups:{
					value:false,
					popupsPosition:{x: 0 , y: 0},
					data:[{
						title:'编辑'
					},{
						title:'添加分组'
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
			
			this.getMaterialListApi(); //获取素材分组列表
		},
		methods: {
			
			
			
			
			
			popupsShow(e,i){
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
			
			getMaterialListApi(){
				let lsToken = utils.getLocalStorage('token');
				console.log(lsToken);
				const data = {
					token: lsToken
				};
				getMaterialList(data).then(res => {
					console.log(res)
				})
			}
			
		}
	}
</script>

<style>

	
.aiList{
	/* 
	background-image: url(../../static/img/robot/background@2x.png);
	background-repeat: no-repeat;
	background-position: top left;
	background-size: 100% auto;
	 */
}
.aiList .item{
	border-radius: 10px;
	overflow: hidden;
	margin-bottom: 10px;
	padding: 5% 2%;
	background-color: #ffffff;
}

.item .imgBox{width: 22%;}
.item .textContent{width: 70%;}
.item .more{width: 8%;}
.item .imgBox , .item .textContent , .item .more{float: left;}


.aiList .imgBox uni-image{
	width: 65px;
	height: 65px;
	border-radius: 50%;
	overflow: hidden;
	margin: 0 auto;
	display: block;
}
.textContent{
}
.title{}
.textContent .title .but{
	font-size: 90%;
	background-color: #1ACFC1;
	color: #ffffff;
	border-radius: 20px;
	padding: 2px 17px;
	margin-left: 10px;
}
.textContent .level{
	font-size: 90%;
	color: #666666;
}
.textContent .type{
	font-size: 70%;
	color: #9B9B9B;
}
.item .more{
	color: #BDBDBD;
	font-size: 200%;
}



</style>
