
import Home from '@pages/layout/Home.vue'

export default [
  {
    path: '/',
    redirect: '/index/homepage' // 重定向到默认首页
  },
  {
    path: '/index',
    component: Home,
    redirect: 'noredirect',
    name: 'index',
    meta: {
      keepAlive: false // 此组件不需要被缓存
    },
    children: [
      {
        path: 'homepage',
        component: () => import(/* webpackChunkName: "homepage-view" */ '@pages/homepage.vue'),
        name: 'HomePage',
        meta: {
          keepAlive: false // 此组件不需要被缓存
        }
      }
    ]
  },
  {
    path: '/student',
    component: Home,
    redirect: 'noredirect',
    name: 'student',
    children: [
      {
        path: 'list',
        component: () => import(/* webpackChunkName: "student-list" */ '@pages/student/list.vue'),
        name: 'student-list',
        meta: {
          keepAlive: false // 此组件不需要被缓存
        }
      },
      {
        path: 'detail',
        component: () => import(/* webpackChunkName: "student-detail" */ '@pages/student/detail.vue'),
        name: 'student-detail',
        meta: {
          keepAlive: false // 此组件不需要被缓存
        }
      }
    ]
  }
]
