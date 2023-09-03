const myRouteList = [
    {
      path: '/myAboutMe',
      name: 'MyAboutMe',
      meta: {
        title: '关于我们'
      },
      component: () => import(/* webpackChunkName: "my" */ '@/views/my/AboutMe.vue')
    },
    {
      path: '/myCollection',
      name: 'MyCollection',
      meta: {
        title: '我的收藏'
      },
      component: () => import(/* webpackChunkName: "my" */ '@/views/my/MyCollection.vue')
    },
    {
      path: '/mySetting',
      name: 'MySetting',
      meta: {
        title: '设置'
      },
      component: () => import(/* webpackChunkName: "my" */ '@/views/my/Setting.vue')
    }
  ]
  
  export default myRouteList
  