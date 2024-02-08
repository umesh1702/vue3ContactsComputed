import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contactDetails from "@/views/contactDetails.vue"
import editing from "@/views/editDetails.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contactDetails',
      name: 'contactDetails',
      component: contactDetails
     
    },
    {
      path:"/edit",
      name: "editing",
      component: editing
    }
    


  ]
})


export default router
