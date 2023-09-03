const loginRouteList = [
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录'
      },
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue')
    },
    {
      path: '/registry',
      name: 'Registry',
      meta: {
        title: '注册'
      },
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/Registry.vue')
    },
    {
      path: '/forgetPwd',
      name: 'ForgetPwd',
      meta: {
        title: '忘记密码'
      },
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/ForgetPwd.vue')
    }
  ]
  
  export default loginRouteList
  