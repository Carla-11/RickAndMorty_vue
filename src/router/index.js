import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/opiniones/',
    name: 'Opiniones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Opiniones.vue')
  },
  {
    path: '/favoritos/',
    name: 'Favoritos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Favoritos.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Administracion.vue')
  },
  {
    path: '/editaropinion/:id',
    name: 'EditarOpinion',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarOpinion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
