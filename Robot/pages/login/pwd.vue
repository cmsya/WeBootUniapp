<template>
	<view class="login">
	<view class="content">
		<view class="pageTitle">
			<h1>忘记密码</h1>
			<!-- <text>放大你的朋友圈价值</text> -->
		</view>
		<view class="input-group">
			<view class="input-row border">
				<text class="title">手机号码：</text>
				<!-- <m-input type="text" focus clearable v-model="email" placeholder="请输入邮箱"></m-input> -->
				<m-input class="m-input" type="text" clearable focus v-model="phoneNumber" placeholder="请输入手机号码"></m-input>
			</view>
			<view class="input-row">
				<text class="title">验证码：</text>
				<m-input class="m-input codeInput " type="text"  v-model="code" placeholder="请输入验证码登录"></m-input>
				<!-- <text class="codeText">获取验证码</text> -->
				<text v-if="showText==true" class="codeText on" @click="getCode">获取验证码</text>
				<text v-else class="codeText off">{{second}}s重新发送</text>
				
			</view>
		</view>

		<view class="btn-row">
			<button type="primary" class="primary" @tap="findPassword">下一步</button>
		</view>
	</view>
	</view>
</template>

<script>
	// import service from '../../service.js';
	import mInput from '../../components/m-input.vue';

	export default {
		components: {
			mInput
		},
		data() {
			return {
				phoneNumber: '',
				code: '',
				second:60,
				showText:true,
			}
		},
		methods: {
			findPassword() {
				/**
				 * 仅做示例
				 */
				// if (this.phoneNumber.length < 11 || !~this.email.indexOf('@')) {
				if (this.phoneNumber.length < 11  ) {
					uni.showToast({
						icon: 'none',
						title: '电话号码不合法',
					});
					return;
				}
				this.goPwdDefine();
				/*
				uni.showToast({
					icon: 'none',
					title: '已发送重置邮件至注册邮箱，请注意查收。',
					duration: 3000
				});
				*/
			},
			goPwdDefine() {
				console.log('goPwdDefine');
				uni.navigateTo({
					url: '../login/pwd-define',
				});
				
				/**
				 * 仅做示例
				 */
				/*
				if (this.email.length < 3 || !~this.email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: '邮箱地址不合法',
					});
					return;
				}
				*/
				/*
				uni.showToast({
					icon: 'none',
					title: '已发送重置邮件至注册邮箱，请注意查收。',
					duration: 3000
				});
				*/
			},
			getCode(){//倒计时
				this.showText = false
				var interval = setInterval(() => {
					let times = --this.second
					this.second = times<10?'0'+times:times //小于10秒补 0
				}, 1000)
				setTimeout(() => {
					clearInterval(interval)
					this.second=60
					this.showText = true
				}, 60000)
			}, 
		}
	}
</script>

<style>

</style>
