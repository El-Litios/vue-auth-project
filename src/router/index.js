import Vue from 'vue'
import VueRouter from 'vue-router'
import {auth} from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/taskedition/:id',
    name: 'TaskEdition',
    component: () => import(/* webpackChunkName: "taskedition" */ '../views/TaskEdition.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/taskadd',
    name: 'TaskAdd',
    component: () => import(/* webpackChunkName: "taskadd" */ '../views/TaskAdd.vue'),
    meta: { requiresAuth: true }
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    
    const user = auth.currentUser
    
    if(!user){
      next({ path: '/'} )
    }else{
      next()
    }

  }else{
    next()
  }
})

export default router
