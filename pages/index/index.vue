<template>
	<view class="content">
		<view class="bg-danger h5">hello world</view>
		<text class="iconfont icon-shoucang" style="font-size:200rpx"></text>
		<my-icon iconName="icon-bofangsanjiaoxing" iconSize="100rpx"></my-icon>
		<view style="width:500rpx; height: 500rpx; background-color: green;"
		class="animated" hover-class="flip"></view>
	</view>
</template>

<script>
	import myIcon from '../../components/icon/index.vue'
	export default {
		components:{
			myIcon
		},
		data() {
			return {
			}
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style>

</style>

