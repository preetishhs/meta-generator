import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/skins',
    name: 'skins',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Skins.vue'),
  },
  {
    path: '/cases',
    name: 'cases',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Cases.vue'),
  },
  {
    path: '/templates',
    name: 'templates',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Templates.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
