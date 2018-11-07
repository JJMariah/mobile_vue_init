import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'home',
      alias: '/home',
      component:_import('home/index')
    },
    {
      path:'/center',
      name:'center',
      component:_import('center/index')
    },
    {
      path:'/login',
      name:'login',
      component:_import('login/index')
    },
  ]
})
