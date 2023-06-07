import { createRouter, createWebHistory } from 'vue-router'
import TopupView from '../views/TopupView.vue'

const routes = [
  {
    path: '/',
    name: 'Topup',
    component: TopupView
  },
  {
    path: '/pulsa',
    name: 'pulsa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PulsaView.vue')
  },
  {
    path: '/riwayat',
    name: 'riwayat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RiwayatView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
