import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//将顶部通知栏的⾼度挂载全局,⽅便其他⻚⾯调⽤
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;

//引⼊icon组件
import icon from "./components/icon/index.vue"
//全局注册icon组件
Vue.component("my-icon",icon)

const app = new Vue({
    ...App
})
app.$mount()
