import { createRouter, createWebHistory } from 'vue-router'

import Main from './pages/main.vue'
import About from './pages/about.vue'
import Projects from './pages/projects.vue'
import DevSkills from './pages/dev-skills.vue'
import Contact from './pages/contact.vue'
import error from './error.vue'

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    { path: '/', redirect: 'main' }, 
    { path: '/main', component: Main },
    { path: '/about', component: About }, 
    { path: '/projects', component: Projects }, 
    { path: '/dev-skills', component: DevSkills },
    { path: '/contact', component: Contact },
    { path: '/:notFound(.*)', component: error }
  ]
})

export default router;
