import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import echarts from 'echarts'
import './icons'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
import { HappyScroll } from 'vue-happy-scroll'
//自定义组件名
Vue.component('happy-scroll', HappyScroll)
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'
new Vue({
  el: '#app',
  render: h => h(App)
})