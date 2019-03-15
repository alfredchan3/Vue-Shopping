import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import Api from './Api'
Vue.prototype.Api = Api
import './vant'                   // 有赞组件库
import FastClick from 'fastclick' // 解决移动端 300ms 点击延时
FastClick.attach(document.body)

import 'vant/lib/index.css'
import 'css/reset.css'
import 'swiper/dist/css/swiper.css'
import 'css/border.css'
import 'css/index.css'
import 'css/icon.styl'
import 'css/cropper.css'

Vue.config.productionTip = false

Vue.filter('toFixed', function (val) {
  val = Number(val)
  return val.toFixed(2)
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

