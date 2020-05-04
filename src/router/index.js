import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Meremig from '../views/Meremig.vue'
import Erfaringer from '../views/Erfaringer.vue'
import Projekter from '../views/Projekter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Meremig',
    name: 'Meremig',
    component: Meremig
  },
  {
    path: '/Erfaringer',
    name: 'Erfaringer',
    component: Erfaringer
  },
  {
    path: '/Projekter',
    name: 'Projekter',
    component: Projekter
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
