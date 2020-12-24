<template>
	<view class="p-2 flex justify-between align-center" style="height: 200rpx;">
		<view class=" flex align-center">
			<image src="/static/user/user.jpg" mode="aspectFill" class="rounded-circle" style="width: 130rpx; height: 130rpx;"></image>
			<text class="mx-2 font-lg">{{userName}}</text>
		</view>
		<view class="bg-danger p-1" style="border-radius: 40rpx; background: rgb(236, 240, 243);">
			<my-icon iconName="icon-erji" iconSize="30"></my-icon>
			<text class="mx-1">我的客服</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			userName: {
				type: String,
				default: '张三'
			}

		},
		data() {
			return {

			}
		}
	}
</script>

<style>
</style>
