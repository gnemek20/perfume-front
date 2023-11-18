import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/views/Landing.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/sign/In.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/sign/Up.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
