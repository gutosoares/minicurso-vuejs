import Vue from 'vue'
import Router from 'vue-router'
import Events from '@/components/Events'
import Details from '@/components/Details'
import Add from '@/components/Add'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Events
    },
    {
      path: '/events',
      component: Events
    },
    {
      path: '/details/:id',
      component: Details
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})