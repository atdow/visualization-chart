/*
 * @Author: atdow
 * @Date: 2022-04-13 23:01:04
 * @LastEditors: null
 * @LastEditTime: 2022-05-10 20:30:42
 * @Description: file description
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style/global.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
