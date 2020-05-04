<template>
	<view class="robot">
		<view class="content">
			<view class="wordsLink">
				<h1>wordsLink</h1>
			</view>

		</view>
	</view>
</template>

<script>
	import utils from '@/utils/util';
	import {
		mapState
	} from 'vuex'

	export default {
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {

		},
		onShow(option) {
			utils.navStyle();  // 顶部导航设置
		},
		data() {
			return {
				account: '',
				password: ''
			}
		},
		methods: {
			
			initProvider() {
				
			}
		}
	}
</script>

<style>


</style>
