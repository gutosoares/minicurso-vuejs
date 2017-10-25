import Vue from 'vue'
import Router from 'vue-router'

import Add from '@/components/Add'
import Edit from '@/components/Edit'
import Events from '@/components/Events'
import Details from '@/components/Details'
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
      path: '/edit/:id',
      component: Edit
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})