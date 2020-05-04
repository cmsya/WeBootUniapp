<template>
	<view class="login">
	<view class="content reg">
		<view class="pageTitle">
			<h1>账号注册</h1>
			<!-- <text>放大你的朋友圈价值</text> -->
		</view>
		<view class="input-group">
			<view class="input-row border">
				<text class="title">手机号码</text>
				<m-input class="m-input" type="number" clearable focus v-model="phoneNumber" placeholder="请输入手机号码"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">验证码</text>
				<m-input class="m-input codeInput " type="number"  v-model="code" placeholder="请输入验证码"></m-input>
				<!-- <text class="codeText">获取验证码</text> -->
				<text v-if="showText==true" class="codeText on" @click="sendVerification">获取验证码</text>
				<text v-else class="codeText off">{{second}}s重新发送</text>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="goRegister">下一步</button>
		</view>
		
		<view class="action-row agreement loginBottom">
			<!-- <navigator url="../login/reg">注册账号</navigator> -->
			<label @tap="agreementChange"><checkbox value="cb" :checked="agreementValue" />登录即表示您已阅读，理解并同意</label>
			<!-- <text>|</text> -->
			<view>
				<navigator url="#">《流光共享网络服务协议》</navigator>
			<!-- <navigator url="#">《菜鸟网络服务协议》</navigator> <navigator url="#">《流光会员用户使用协议》</navigator> -->
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	
// import Request from '@/utils/luch-request/index.js' // 下载的插件
// const http = new Request();


import { getVerification , getRegister } from '@/utils/api';

// import { http } from '@/utils/service.js' // 全局挂载引入，配置相关在该index.js文件里修改

	
	// import service from '../../service.js';
	import mInput from '../../components/m-input.vue';

	export default {
		components: {
			mInput
		},
		data() {
			return {
				email: '',
				
				phoneNumber: '',
				code: '',
				
				second:60,
				showText:true,
				
				agreementValue:true,
			}
		},
		
		onShow(option) {
			// this.sendVerification();
			// console.log(Request);
			// console.log(http);
			
			
		},
		methods: {
			countDown(){//倒计时
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
			sendVerification(){ // 获取验证码
				getVerification({ account: this.phoneNumber}).then(res => {
					// console.log(res.data);
					uni.showToast({
						title: res.data.message,
						icon: 'success',
						mask: true,
						duration: 2000
					});
					this.countDown();
				});
				
				/*
				this.$http
					.post(
						'/dataApi/webootApi/index/auth',
						{ id: '111' },
						{params: { password : '111111',username : 'admin',token: '1111'},}
					)
					.then(res => {
						console.log(res);
					})
					.catch(err => {
						console.log(err);
					});
				*/
			},
			agreementChange(){
				this.agreementValue = !this.agreementValue;
				console.log(this.agreementValue);
			},
			goRegister() {
				let t = this;
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 */
				if (this.phoneNumber.length < 11) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 11 个字符'
					});
					return;
				}
				if (this.code.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '验证码为 6 个字符'
					});
					return;
				}
				
				if (this.agreementValue == false ) {
					uni.showToast({
						icon: 'none',
						title: '没有同意协议'
					});
					return;
				}
				/*
				if (this.email.length < 3 || !~this.email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: '邮箱地址不合法'
					});
					return;
				}
*/
				const data = {
					account: this.phoneNumber,
					phoneCode: this.code,
					password:'',
					email: this.email
				}
				
				// console.log(data)

				// service.addUser(data);
				
				setTimeout(function(){ 
					console.log('正常输出！准备跳转页面！');
					uni.navigateTo({
						url: '../login/reg-define?account='+t.phoneNumber +'&phoneCode='+t.code,
					});
				}, 1000);
				
				/*
				uni.showToast({
					title: '注册成功'
				});
				
				uni.navigateBack({
					delta: 1
				});
				*/
			},

		}
	}
</script>

<style>

</style>
