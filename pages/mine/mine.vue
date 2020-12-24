<template>
	<view class="">
		<view :style="{height:statusBarHeight+'rpx'}"></view>
		<!-- 用户头部模块 -->
		<my-user-info></my-user-info>
		<!-- 用户功能模块 -->
		<my-user-list :userList="userList"></my-user-list>
	</view>
</template>

<script>
	import myUserInfo from '../../components/mine/userinfo.vue'
	import myUserList from '../../components/mine/userlist.vue'
	export default {
		data() {
			return {
				statusBarHeight: this.$statusBarHeight,
				userList: [{
						id: 1,
						title: "签到",
						url: ""
					},
					{
						id: 2,
						title: "设置",
						url: ""
					},
					{
						id: 3,
						title: "意见反馈",
						url: ""
					},
					{
						id: 4,
						title: "切换账号",
						url: ""
					}
				]
			}
		},
		components: {
			myUserInfo,
			myUserList
		}
	}
</script>

<style>
</style>
