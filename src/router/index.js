import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Addtodo from '@/components/Addtodo'
import EditTodo from '@/components/edittodo'
import login from '@/components/Login'
import Signup from '@/components/Signup'
import firebase from 'firebase'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/add-todo',
      name: 'Addtodo',
      component: Addtodo,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/edit-todo/:urlparam',
      name: 'Edit-todo',
      component: EditTodo,
      meta:{
        requiresAuth:true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
    path: '/signup',
    name: 'signup',
    component: Signup
    
  }
]
})



router.beforeEach((to,from,next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //check auth state 
    let user = firebase.auth().currentUser
    if(user){
     next()
    }
    else{
      next({ name:'login' });
    }
 
  }
  else{
    next();
  }
 })
 
 export default router;