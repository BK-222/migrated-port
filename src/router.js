import { createRouter, createWebHistory } from 'vue-router'

import Main from './pages/main.vue'

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    { path: '/', redirect: 'main' }, 
    { path: '/main', component: Main }
  ]
})

export default router;
