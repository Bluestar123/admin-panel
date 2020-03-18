import Vue from 'vue'
import VueRouter from 'vue-router'
import baseLayout from '../views/components/baseLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: baseLayout,
    redirect: {
      name: 'home'
    },  
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          title: '首页1',
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      }
    ]
  },
  {
    path: '/about',
    name: '444',
    meta: {
      title: '关于',
    },
    component: baseLayout,
    children: [
      {
        path: '/about/about1',
        name: '555',
        meta: {
          title: '关于1'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
