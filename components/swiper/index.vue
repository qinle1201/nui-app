<template>
	<view class="m-2" style="background-color: red;">
		<swiper indicator-dots autoplay circular :interval="5000" indicator-active-color="#fff" :duration="2000">
			<swiper-item v-for="(item,index) in imgArr" :key="index">
				<image :src="item.src" mode="widthFix" class="w-100"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			imgArr:{
				type:Array,
				default:()=>[]
			}
		}
	}
</script>

<style>
</style>
