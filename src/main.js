// ie polyfill
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'

// mock
import './mock'

import bootstrap from './core/bootstrap'
import './core/use'
import './permission' // permission control
import './utils/filter' // global filter

// 国际化
import i18n from './lang/index.js'
// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

// mount axios Vue.$http and this.$http
Vue.use(VueAxios)


new Vue({
  router,
  store,
  i18n,
  created () {
    bootstrap()
  },
  render: h => h(App)
}).$mount('#app')
