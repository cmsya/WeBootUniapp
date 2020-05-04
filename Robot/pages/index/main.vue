<template>
	<view class="main">
		

		
	<view class="content">
		
		<view class="pageTitle">
			<h1>流光共享</h1>
			<!-- <text class="iconS">iconS</text> -->
			<!-- <text>放大你的朋友圈价值</text> -->
			<image class="iSearch" src="../../static/img/icon/page_search@3x.png" mode="aspectFill"
			@error="imageError"></image>
		</view>
		
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
	  
	  <view class="quickNav">
		<view class="item" v-for="(item,index) in quickNav" :key="index">
			<image :src="item.icon" mode="aspectFit"></image>
			<text>{{item.title}}</text>
		</view>
	  </view> <!-- quickNav end -->
	  
	  <view class="headlines">
		  <view class="img"></view>
		  <view class="list">
			  <view><text class="tag tag-fabulous">超赞</text>流光头条AAAA</view>
			  <view><text class="tag tag-essence">精选</text>流光头条BBBB</view>
		  </view>
	  </view> <!-- headlines end -->

		<view class="indexTabs">
			<news-item :listData="newslist"></news-item>
		</view>

		<view class="brandAdv card">
			<view class="card-header">
				品牌广告
			</view>
			<view class="card-body">
				<view class="item"  v-for="(item,index) in brandAdv" :key="index">
					<image :src="item.img" mode="aspectFit"></image>
					<text class="title">{{item.title}}</text>
					<text class="des">{{item.des}}</text>
				</view>
			</view>
		</view>
		
		<view class="marketing card">
			<view class="card-header">
				<text class="">营销案例</text>
				<navigator url="" class="more">更多</navigator>
			</view>
			<view class="card-body">
				<view class="item"  v-for="(item,index) in marketing" :key="index">
					<text class="tag tag-fabulous">超赞</text>
					<text class="title">{{item.title}}</text>
				</view>
			</view>
		</view>
		
	</view>
	</view>
</template>

<script>
	// import uniSwiperDot from "@/components/swiper/uni-swiper-dot.vue";
	import newsItem from '@/components/news-item.vue';
	// import mediaItem from '@/components/list2detail-list/pages/list2detail-list/list2detail-list.vue';
	import {
		mapState
	} from 'vuex'

	export default {
		components: {
			newsItem
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data() {
			return {	
				banner:{
					info: [{
						title: '【迁移】用神经风格迁移生产美图，你也是梵高1',
						img: 'https://img.alicdn.com/tfs/TB1d_AUDoY1gK0jSZFMXXaWcVXa-440-261.png'
					}, {
						title: '【互联网】如何理解“互联网商业模式”？',
						img: 'https://img.alicdn.com/tfs/TB1RmsWDi_1gK0jSZFqXXcpaXXa-440-260.png'
					}],				
					background: ['color1', 'color2', 'color3'],
					indicatorDots: true,
					autoplay: true,
					interval: 2000,
					duration: 500
				},
				newslist:[
					{
						"datetime": "40分钟前",
						"article_type": 0,
						"title": "AAA行业峰会频频亮相，开发者反响热烈!",
						"source": "DCloud",
						"comment_count": 639,
						'img': 'https://n1-q.mafengwo.net/s10/M00/61/B7/wKgBZ1ksOZOAEqcNAAHWu58ym3o39.jpeg'
					},
					{
						"datetime": "40分钟前",
						"article_type": 0,
						"title": "BBB行业峰会频频亮相，开发者反响热烈!",
						"source": "DCloud",
						"comment_count": 639,
						'img': 'https://n1-q.mafengwo.net/s10/M00/61/B7/wKgBZ1ksOZOAEqcNAAHWu58ym3o39.jpeg'
					}
				],
				quickNav:[
					{
						title:'新手教程',
						icon:'../../static/img/icon/quickNavA.png'
					},{
						title:'常见问题',
						icon:'../../static/img/icon/quickNavB.png'
					},{
						title:'游戏大作战',
						icon:'../../static/img/icon/quickNavC.png'
					},{
						title:'我要推广',
						icon:'../../static/img/icon/quickNavD.png'
					},{
						title:'合作咨询',
						icon:'../../static/img/icon/quickNavE.png'
					}
				],
			brandAdv:[
					{
						title:'ThinkPad',
						des:'数码电脑产品',
						img:'https://img12.360buyimg.com/popshop/jfs/t1/39319/25/14135/4558/5d53c0a2Ecd997022/0bd617ba98192ae2.jpg'
					},{
						title:'ASUS',
						des:'数码电脑产品',
						img:'https://img14.360buyimg.com/popshop/jfs/t16144/164/7107303/3935/b968dfb9/5a25249dN279cc35d.jpg'
					},{
						title:'intel',
						des:'数码电脑产品',
						img:'https://img10.360buyimg.com/popshop/jfs/t469/350/1461994516/18420/5e27206f/54f16dbcNb63a268e.jpg'
					},{
						title:'AMD',
						des:'数码电脑产品',
						img:'https://img11.360buyimg.com/popshop/jfs/t3253/8/429150825/4801/ec653242/57b6d90bN4b6bffa1.png'
					}
				],
				marketing:[
						{
							title:'成都某自助火锅抢购活动刷屏朋友圈',
							des:'成都某自助火锅抢购活动刷屏朋友圈',
							tag:1
						},{
							title:'全新上品品牌3天引爆30W+好友转',
							des:'全新上市化妆品品牌3天引爆30W+好友转',
							tag:2
						},{
							title:'市化妆品品牌3天引爆30W+好友转',
							des:'全新上市化妆品品牌3天引爆30W+好友转',
							tag:3
						},{
							title:'品品牌3天引爆30W+好友转',
							des:'全新上市化妆品品牌3天引爆30W+好友转',
							tag:4
						},{
							title:'新上市化妆品品牌3天引爆30W+好友转',
							des:'全新上市化妆品品牌3天引爆30W+好友转',
							tag:5
						}
					]
					
			}
		},
		onLoad() {
			/*
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					showCancel: !this.forcedLogin,
					success: (res) => {
						console.log('点击的确定！');
					}
				});
			}
			*/
		},
		methods: {
			// banner 轮播
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
			// banner 轮播
		}
	}
</script>

<style>
.content{
	/* width: 100%; */
	padding: 0px;
}
.pageTitle , .banner , .quickNav{
	padding: 0px 10px 0px 10px;
}

.headlines , .indexTabs , .brandAdv , .marketing{
	background-color: #ffffff;
	margin-bottom: 10px;
}
.card{
	padding: 10px;
}

.pageTitle{
	/* background-color: #05C6D7; */
	
}
.pageTitle h1{
	/* background-color: #05C6D7; */
	/* width: 100%; */
	float: left;
	
}
.pageTitle .iSearch{
	width: 19px;
	height: 17px;
	float: right;
	margin-top: 10px;
}
.banner{
	/* padding: 10px; */
	
}
.banner uni-swiper-item{
	border-radius: 10px;
	overflow: hidden;
}
.banner uni-image{
	width: 100%;
}
.banner uni-swiper{
	height: 200px;
}

.quickNav{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.quickNav .item{
	text-align: center;
	margin: 3px;
	-webkit-box-flex: 1;
	-webkit-flex: 1;
	flex: 1;
}
.quickNav uni-image{
	height: 90px;
}
.quickNav uni-image , .quickNav uni-image img{
	width: 100%;
}
.quickNav .item uni-text{
	display: none;
}

.headlines{

}
.headlines .img{
	width: 80px;
	height: 80px;
	background-image: url(../../static/img/headlines.png);
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100%;
	float: left;
}
.headlines .list{
	padding: 10px;
	line-height: 180%;
	float: left;
}
.brandAdv .card-body{
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
}
.brandAdv .card-body .item {
	text-align: center;
	width: 25%;
    margin: 3px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
.brandAdv .card-body .item .title {
	display: block;
	font-weight: bold;
}
.brandAdv .card-body .item .des {
	font-size: 80%;
	color: #777777;
}
.brandAdv .card-body .item uni-image{
	width: 100%;
	height: 40px;
}
.brandAdv .card-body .item img{
	width: 100%;
}

.marketing .item{
	/* height: 30px; */
	line-height: 220%;
	border-bottom: 1px solid #EAEAEA;
}
.marketing .item .title{
	color: #01C4B5;
}
</style>
