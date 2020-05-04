<template>
	<view class="user">
	<view class="content gender">
		<!-- 
		<view class="pageTitle">
			<h1>用户中心</h1>
			<text>放大你的朋友圈价值</text>
		</view>
		 -->
		<view class="">

            <radio-group @change="radioChange">
                <label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in gender" :key="item.value">
        
                        <radio :value="item.value" :checked="index === current" />
                 
                    <view>{{item.name}}</view>
                </label>
            </radio-group>
			
			
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
				pageTitle:'个人资料',
				gender:[
					{
                        value: 'man',
                        name: '先生'
					},
					{
                        value: 'woman',
                        name: '女士'
					},
					{
                        value: 'secrecy',
                        name: '保密'
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
.gender{
	/* font-size: 300%; */
}
.gender .uni-list .uni-list-item{
	/* display: none; */
}

.gender .uni-list-cell{
	background-color: #ffffff;
	padding: 2%;
	width: 96%;
	display: inline-block;
	margin-bottom: 10px;
}
.gender .uni-list-cell uni-view{
	
}
.uni-list .uni-list-item:last-of-type{
	border-bottom: none;
}
</style>
