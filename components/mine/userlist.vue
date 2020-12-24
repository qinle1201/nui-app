<template>
	<view class="">
		<view class="" v-for="(item,index) in userList" :key="item.id">
			<view style="height:110rpx;" class=" px-2  flex align-center justify-between">
				<text class="text-light-black font-lg">{{item.title}}</text>
				<my-icon iconName="icon-iconfonti" iconColor="text-dark" iconSize="44"></my-icon>
			</view>
			<view style="height:20rpx; background-color: rgb(248, 248, 248;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			userList: Array,
			default: []
		},
		data() {
			return {

			}
		}
	}
</script>

<style>
</style>
