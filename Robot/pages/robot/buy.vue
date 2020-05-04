<template>
	<view class="ai buyAi">

		<view class="hello">
			<image src="../../static/img/robot/robot_blue@2x.png" mode="aspectFit"></image>
		</view>
		<view class="content">

			<view class="illustration" v-for="(item , index) in illustration" :key="index">
				<view class="title">{{item.title}}</view>
				<view class="des">{{item.desA}}</view>
				<view class="des" v-if="item.desB != '' ">{{item.desB}}</view>
			</view>
			
			<view class="payMode">
				<view class="title">支付方式</view>
				<radio-group @change="radioChange">
					<label v-for="(item, index) in payMode" :key="item.value">
						<image :src="item.icon" mode="aspectFit"></image>
						<view>{{item.name}}</view>
						<radio :value="item.value" :checked="index === current" />
					</label>
				</radio-group>
			</view>
			
		</view>
		
			<view class="payNav">
				<view class="left">
					<text>¥</text>
					<text>3</text>
					<text>/个</text>
				</view>
				<view class="right" @tap="pay()">购买</view>
			</view>
		
	</view>
</template>

<script>
	var utils = require('../../utils/util.js');
	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data() {
			return {
				illustration:[
					{
						title:"购买说明",
						desA:"AI机器人属于虚拟商品，一次性购买，不予退换",
						desB:"回收时长：15天"
					},{
						title:"回收说明",
						desA:"若AI机器人15天内未启动，系统将自动回收释放该机器人，因此选成的损失，将由用户自行承担，平台不予退款，望用户悉知",
						desB:""
					}
				],
				payMode: [{
						value: 'WeChat',
						name: '微信支付',
						icon: '../../static/img/WeChat.png'
					},
					{
						value: 'balance',
						name: '余额支付',
						icon: '../../static/img/robot/robot_blue@2x.png'
					},
				],
				current: 0
			}
		},
		onLoad() {

		},
		onShow(option) {
			utils.navStyle();  // 顶部导航设置
		},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.payMode.length; i++) {
					if (this.payMode[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
				console.log(this.current);
			},
			pay(){
				console.log('buy');
				
				uni.showModal({
					title: '提示',
					content: this.payMode[this.current].name+'支付成功！',
					showCancel:false,
					success: function (res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.switchTab({
								url: './main'
							});
							/*
							uni.navigateTo({
								url: './main'
							});
							*/
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
			}
			
		}
	}
</script>

<style>
	
.hello , .content , .payNav{
	
}
	
.buyAi{
    background-color: #ffffff!important;
}
.hello {
	text-align: center;
	background-color: #dddddd;
}
.hello image{
	margin-top: 5%;
	width: 100px;
	height: 120px;
}
.content{
	background-color: #ffffff;
	/* min-height: 500px; */
}

.illustration {
	text-align: center;
	border-bottom: 1px solid #E2E2E2;
	padding: 2%;
}

.illustration .title , .payMode .title{
	font-size: 120%;
	font-weight: bold;
	line-height: 300%;
}
.illustration .des{
	font-size: 100%;
	line-height: 200%;
}
.illustration .des:nth-of-type(3){
	font-size: 100%;
	color: #9B9B9B;
	/* color: #f00; */
}

.payMode{
	
}
.payMode .title{
	text-align: center;
}
.payMode label{
	display: block;
	width: 300px;
	margin: 0px auto;
	padding: 5px;
	line-height: 200%;
	margin-bottom: 10px;
	border-bottom: 1px solid #dddddd;
	
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
	
}
.payMode label image{
	width: 30px;
	height: 30px;
	margin: 0px;
}
/* 
.payMode view , .payMode radio{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
 */
.payMode label > view{
	width: 250px;
	padding-left: 20px;
}
.payMode label > radio{
	width: 20px;
}



.payNav{
	height: 50px;
	line-height: 50px;
	border-top: 1px solid #DADADA;
}
.payNav .left{
	width: 60%;
	float: left;
	padding-left: 10%;
}

.payNav .left text:nth-child(1),.payNav .left text:nth-child(2){
	color: #F04845;
}
.payNav .left text:nth-child(2){
	font-size: 150%;
	font-weight: bold;
	line-height: 130%;
}
.payNav .right{
	width: 30%;
	text-align: center;
	float: left;
	color: #ffffff;
	background-color: #1ACFC1;
}
</style>
