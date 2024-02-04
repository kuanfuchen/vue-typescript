import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/HomeView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SIgnUp.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=> import('../views/Login.vue')
    },{
      path:'/roomstyle',
      name:'roomstyle',
      component:()=>import('../views/RoomStyle.vue')
    }
  ]
})

export default router
