<template>
	<view class="content">
		<!-- 解决标题栏被覆盖问题 -->
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<!-- 搜索布局 -->
		<search></search>
		<!-- 轮播图模块 -->
		<my-swiper :imgArr="swiperImages"></my-swiper>
	</view>
</template>

<script>
	import search from '../../components/search/index.vue'
	import mySwiper from '../../components/swiper/index.vue'
	export default {
		components: {
			search,
			mySwiper
		},
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				swiperImages: [{
						src: "/static/swiperImages/swipertab1.png"
					},
					{
						src: "/static/swiperImages/swipertab2.png"
					},
					{
						src: "/static/swiperImages/swipertab3.png"
					},
					{
						src: "/static/swiperImages/swipertab4.png"
					},
					{
						src: "/static/swiperImages/swipertab5.png"
					}
				]
			}
		},
		onLoad() {},
		methods: {}
	}
</script>

<style>

</style>
