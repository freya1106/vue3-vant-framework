import { createRouter, createWebHashHistory } from 'vue-router'
import Cookie from 'js-cookie'
import loginRouteList from './modules/login.js'
import myRouteList from './modules/my.js'

const routeList = [
  ...loginRouteList,
  ...myRouteList,
  {
    path: '/',
    component: () => import('../views/tabbar/Index.vue'),
    redirect: 'tabbarHome',
    children: [
      {
        path: 'tabbarHome',
        name: 'TabbarHome',
        component: () => import('../views/tabbar/Home.vue')
      },
      {
        path: 'tabbarLife',
        name: 'TabbarLife',
        component: () => import('../views/tabbar/Life.vue')
      },
      {
        path: 'tabbarWork',
        name: 'TabbarWork',
        component: () => import('../views/tabbar/Work.vue')
      },
      { path: 'tabbarMy', name: 'TabbarMy', component: () => import('../views/tabbar/My.vue') }
    ]
  }
]

const routeInstance = createRouter({
  history: createWebHashHistory(),
  routes: routeList
})

routeInstance.beforeEach((to, from, next) => {
  const isLogin = Cookie.get('token') || true // 暂时demo使用默认登录状态

  if (isLogin) {
    next()
  } else {
    next('/login')
  }
})

export default routeInstance
