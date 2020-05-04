<template>
	<view class="robot">
		<view class="content wordsLink">
			<!-- <h1>wordsLink</h1> -->

			<view class="uni-common-mt">
				
				<view class="uni-form-item uni-column">
					<view class="title">文字内容</view>
					<textarea placeholder="输入文字内容"/>
				</view>
				
				<view class="uni-form-item uni-column">
					<view class="title">链接地址</view>
					<input class="uni-input" focus placeholder="复制链接地址" />
				</view>
				
				<view class="uni-form-item uni-column easyUpload">
					<view class="title">添加照片<text class="des">(可上传9张)</text></view>
					
					<easy-upload
					:dataList="imageList" uploadUrl="http://localhost:3000/upload" :types="category"
					deleteUrl='http://localhost:3000/upload' :uploadCount="6"
					@successImage="successImage" @successVideo="successvideo"
					></easy-upload>
					
				</view>

				<view class="uni-form-item uni-column">
					<view class="title">跟随评论</view>
					<textarea placeholder="输入评论内容"/>
				</view>
				
				<uni-list>
					<uni-list-item title="选择分组" rightText="每日推送"></uni-list-item>
				</uni-list>
				
				<uni-list>
					<uni-list-item title="发送天数"  rightText="" :showArrow="false">
						<template v-slot:right="right">
							<input class="uni-input" placeholder="填写天数" />
							<text>天</text>
						</template>
					</uni-list-item>
				</uni-list>
				
				<uni-list>
					<uni-list-item title="发送间隔"  rightText="" :showArrow="false">
						<template v-slot:right="right">
							<input class="uni-input" placeholder="填写发送间隔天数" />
							<text>天</text>
						</template>
					</uni-list-item>
				</uni-list>
				
				<uni-list>
					<uni-list-item title="开始日期" rightText=""></uni-list-item>
				</uni-list>
				
				<uni-list>
					<uni-list-item title="每日时间" rightText="选择时间"></uni-list-item>
				</uni-list>
				
			</view>

		</view>
	</view>
</template>

<script>
	import utils from '@/utils/util';
	
    import easyUpload from '@/components/easy-upload/easy-upload.vue'
	
	import {
		mapState
	} from 'vuex'

	export default {
		
		components:{
			easyUpload
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad(option) {
			console.log(option);
			
				if(option != undefined){
					// console.log('option' , option == undefined);
					if(option.link == 'show'){
						this.show.link = true;
						this.show.picture = false;
						this.show.words = false;
						console.log('link');
					} else if(option.picture  == 'show'){
						this.show.link = false;
						this.show.picture = true;
						this.show.words = false;
						console.log('picture');
					} else {
						this.show.link = false;
						this.show.picture = false;
						this.show.words = true;
						console.log('words');
					}
				}
			
		},
		onShow(option) {
			console.log(option);
			console.log(utils);
			utils.navStyle();  // 顶部导航设置


				if(option != undefined){
					// console.log('option' , option == undefined);
					if(option.link == 'show'){
						this.show.link = true;
						this.show.picture = false;
						this.show.words = false;
						console.log('link');
					} else if(option.picture  == 'show'){
						this.show.link = false;
						this.show.picture = true;
						this.show.words = false;
						console.log('picture');
					} else {
						this.show.link = false;
						this.show.picture = false;
						this.show.words = true;
						console.log('words');
					}
				}

			this.pageInit();

			
		},
		data() {
			return {
				account: '',
				password: '',
				show:{
					link:false,
					picture:false,
					words:true
				},
				// imageList:[],
				// category:''
			}
		},
		methods: {
			
			initProvider() {
				
			},
			
			pageInit(){
				let pageHeadTitle = document.getElementsByClassName('uni-page-head__title')[0];
				

				
				
				if(this.show.link){
					// console.log('pageInit');
					// console.log(pageHeadTitle);
					pageHeadTitle.innerHTML = '添加链接朋友圈';
				} else if(this.show.picture){
					pageHeadTitle.innerHTML = '添加图片朋友圈';
				} else {
					pageHeadTitle.innerHTML = '添加文字朋友圈';
				}
				console.log(this.show);
			}
		}
	}
</script>

<style>


</style>
