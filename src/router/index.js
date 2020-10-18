import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    { 
      path: '/home', 
      name: 'Home Page', 
      component: Home 
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    }
  ]
})
