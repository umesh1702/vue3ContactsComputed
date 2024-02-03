import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import testTo from "@/views/testTo.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: 'testTo',
      component: testTo
     
    }

  ]
})


export default router
