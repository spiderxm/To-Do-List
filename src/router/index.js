import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Addtodo from '@/components/Addtodo'
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
    }
  ]
})
