import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/userlist',
    name: 'UserList',
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/UserList.vue'),
  },
  {
    path: '/soldanalysis',
    name: 'SoldAnalysis',
    component: () => import('../views/SoldAnalysis.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  routes,
})

export default router
