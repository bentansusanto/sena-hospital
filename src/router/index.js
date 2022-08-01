import { createRouter, createWebHistory } from 'vue-router'

import homeView from '../components/homeView'
import aboutView from '../components/aboutView'
import serviceView from '../components/serviceView'


const routes = [
        {
            path :'/',
            name : 'Homepage',
            component : homeView
        },
        {
            path :'/about',
            name : 'About Us',
            component : aboutView
        },
        {
            path :'/service',
            name : 'Service',
            component : serviceView
        },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = `${to.name} - ${process.env.VUE_APP_TITLE}`
    next()
 })

export default router