import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//将顶部通知栏的⾼度挂载全局,⽅便其他⻚⾯调⽤
Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight;

const app = new Vue({
    ...App
})
app.$mount()
