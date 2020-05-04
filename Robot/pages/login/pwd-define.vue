<template>
	<view class="login">
	<view class="content">
		<view class="pageTitle">
			<h1>忘记密码</h1>
			<!-- <text>放大你的朋友圈价值</text> -->
		</view>
		<view class="input-group">
			<view class="input-row border">
				<text class="title">设置新密码：</text>
				<m-input type="password" displayable v-model="password1" placeholder="请输入新密码(不小于8位数)"></m-input>
			</view>
			<view class="input-row">
				<text class="title">确认新密码：</text>
				<m-input type="password" displayable v-model="password2" placeholder="请确认新密码"></m-input>
			</view>
		</view>

		<view class="btn-row">
			<button type="primary" class="primary" @tap="definePassword">提交</button>
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
				password1: '',
				password2: '',
			}
		},
		methods: {
			definePassword() {
				console.log(this.password1.length);
				if (this.password1.length < 8  ) {
					uni.showToast({
						icon: 'none',
						title: '密码小于八个字符',
					});
					return;
				} 
				if(this.password1 != this.password2){
					uni.showToast({
						icon: 'none',
						title: '两个密码不一样',
					});
					return;
				} else {
					uni.showToast({
						icon: 'none',
						title: '修改密码成功。准备跳转其它页面！',
						duration: 3000
					});

					setTimeout(function(){ 
					    console.log('正常输出！准备跳转页面！');
						uni.switchTab({
							url: '../index/main',
						});
					}, 1000);
					
				}


			}
		}
	}
</script>

<style>
	.input-row .codeInput{
		width: 60%;
	}
	.input-row .codeText{
		width: 40%;
	}
</style>
