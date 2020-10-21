import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path:'/',
  name:'Navigation',
  component:resolve =>(require(["@/components/navigation"],resolve)),children:[
    { path: 'operation', name: 'operation Page', component: resolve => (require(["@/components/operation"], resolve)) },
    { path: 'login', name: 'Login', component: resolve => (require(["@/components/login"], resolve)) },
    { path: 'register', name: 'Register', component: resolve => (require(["@/components/register"], resolve)) },
    { path: 'mapping', name: 'mapping', component: resolve => (require(["@/components/mapping"], resolve)) },
  ]
}]


export default new Router({
  routes,
  mode: 'history',
})
