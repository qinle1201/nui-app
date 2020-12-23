<template>
	<view class="content">
		<!-- 解决标题栏被覆盖问题 -->
		<view :style="{height : `${statusBarHeight}px`}"></view>
		<!-- 搜索布局 -->
		<search></search>
	</view>
</template>

<script>
	// import myIcon from '../../components/icon/index.vue'
	import search from '../../components/search/index.vue'
	export default {
		components: {
			// myIcon
			search
		},
		data() {
			return {
				statusBarHeight: this.$statusBarHeight
			}
		},
		onLoad() {},
		methods: {}
	}
</script>

<style>

</style>
