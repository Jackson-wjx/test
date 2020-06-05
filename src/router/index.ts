import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/Home.vue'
import Index from  '../views/index/Index'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/index',
        name: 'index',
        component: Index,
      },
      // {
      //   path: '/news',
      //   name: 'news',
      //   component: New,
      // },
    ],
    redirect: '/index',
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/index/about.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

//单应用页面：一个时间只展示一个界面，旧页面销毁后新页面显示。
//组件
//路由
//生命周期：表示Vue实例从挂载到销毁的过程
