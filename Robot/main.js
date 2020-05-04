import Vue from 'vue'
import App from './App'

import store from './store'

// import { http } from '@/utils/service.js' // 全局挂载引入，配置相关在该index.js文件里修改
// Vue.prototype.$http = http


Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
