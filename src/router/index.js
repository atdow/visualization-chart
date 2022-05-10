import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    children: []
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  routes,
})

export default router
