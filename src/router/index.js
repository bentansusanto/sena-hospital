import { createRouter, createWebHistory } from 'vue-router'

import homeView from '../components/homeView'


const routes = [
        {
            path :'/',
            name : 'Homepage',
            component : homeView
        }
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