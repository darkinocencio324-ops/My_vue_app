import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/admissions',
      name: 'admissions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Admission.vue'),
    },
    {
      path: '/sample',
      name: 'sample',
      component: ()=> import('../views/SampleData.vue'),
    },
    {
      path: '/sample2',
      name: 'sample2',
      component: ()=> import('../views/SampleMethods.vue'),
    },
    {
      path: '/sample3',
      name: 'sample3',
      component: ()=> import('../views/SampleVmodel.vue'),
    },
  ],
})

export default router
