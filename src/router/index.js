import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstTaskPage from '../pages/FirstTaskPage'
import SecondTaskPage from '../pages/SecondTaskPage'
import ThirdTaskPage from '../pages/ThirdTaskPage'

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
  },
  {
    path: '/third-task',
    name: 'ThirdTask',
    component: ThirdTaskPage,
    meta: { layout: 'personal-area', icon: 'first-number', title: 'Задача №3' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
