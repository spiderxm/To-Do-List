import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Addtodo from '@/components/Addtodo'
import EditTodo from '@/components/edittodo'
import login from '@/components/Login'
import Signup from '@/components/Signup'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-todo',
      name: 'Addtodo',
      component: Addtodo
    },
    {
      path: '/edit-todo/:urlparam',
      name: 'Edit-todo',
      component: EditTodo
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
