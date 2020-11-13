import Vue from 'vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

Vue.use(Router)

const routes = [{
  path:'/',
  name:'Navigation',
  component:resolve =>(require(["@/components/navigation"],resolve)), children:[
    { path: 'template', name: 'template Page', component: resolve => (require(["@/components/template"], resolve)) },
    { path: 'login', name: 'Login', component: resolve => (require(["@/components/login"], resolve)) },
    { path: 'register', name: 'Register', component: resolve => (require(["@/components/register"], resolve)) },
    { path: 'mapping', name: 'mapping', component: resolve => (require(["@/components/mapping"], resolve)) },
    { path: 'home', name: 'home', component: resolve => (require(["@/components/home"], resolve)) },
    { path: 'operation', name: 'operation', component: resolve => (require(["@/components/operation"], resolve)) },
    { path: 'service', name: 'service', component: resolve => (require(["@/components/service"], resolve)) },
    { path: 'project', name: 'project', component: resolve => (require(["@/components/project"], resolve)) },
    { path: 'operationService', name: 'operationService', component: resolve => (require(["@/components/operationService"], resolve)), children:[
      // { path: 'mapping', name: 'mapping', component: resolve => (require(["@/components/mapping"], resolve))},
      // { path: 'homePage', name: 'homePage', component: resolve => (require(["@/components/service/homePage"], resolve))},
      { path: 'mapServiceItem', name: 'mapServiceItem', component: resolve => (require(["@/components/service/mapServiceItem"], resolve))},
      { path: 'createMapService', name: 'createMapService', component: resolve => (require(["@/components/service/createMapService"], resolve))},
      { path: 'refactorServiceItem', name: 'refactorServiceItem', component: resolve => (require(["@/components/service/refactorServiceItem"], resolve))},
      { path: 'createRefactorService', name: 'createRefactorService', component: resolve => (require(["@/components/service/createRefactorService"], resolve))},
      { path: 'visualServiceItem', name: 'visualServiceItem', component: resolve => (require(["@/components/service/visualServiceItem"], resolve))},
      { path: 'homePage', name: 'homePage', component: resolve => (require(["@/components/service/homePage"], resolve))},
    ] },
    { path: 'operationCoding', name: 'operationCoding', component: resolve => (require(["@/components/operationCoding"], resolve)) },
  ],
  redirect: '/home'
}]


export default new Router({
  routes,
  mode: 'history',
})
