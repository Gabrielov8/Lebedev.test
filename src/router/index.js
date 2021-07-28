import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstTaskPage from '../pages/FirstTaskPage'
import SecondTaskPage from '../pages/SecondTaskPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'FirstTask' }
  },
  {
    path: '/first-task',
    name: 'FirstTask',
    component: FirstTaskPage,
    meta: { layout: 'personal-area', icon: 'first-number', title: 'Задача №1' }
  },
  {
    path: '/second-task',
    name: 'SecondTask',
    component: SecondTaskPage,
    meta: { layout: 'personal-area', icon: 'first-number', title: 'Задача №2' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
