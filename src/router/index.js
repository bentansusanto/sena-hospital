import { createRouter, createWebHistory } from 'vue-router'

import userView from '../components/userView'
import homeView from '../components/homeView'
import aboutView from '../components/aboutView'
import serviceView from '../components/serviceView'
import doctorView from '../components/doctorView'
import contactView from '../components/contactView'

import AuthView from '../Auth/authView'
import loginView from '../Auth/loginView'
import regisView from '../Auth/regisView'

const routes = [
        {
            path : '/',
            component : userView,
            children : [
                {
                    path :' ',
                    name : 'Homepage',
                    component : homeView
                },
                {
                    path :'about',
                    name : 'About Us',
                    component : aboutView
                },
                {
                    path :'service',
                    name : 'Service',
                    component : serviceView
                },
                {
                    path :'our-doctor',
                    name : 'Our Doctor',
                    component : doctorView
                },
                {
                    path :'contact',
                    name : 'Contact Us',
                    component : contactView
                },
            ]
        },
        {
            path : '/',
            component : AuthView,
            children : [
                {
                    path : 'login',
                    name : 'Login',
                    component : loginView,
                },
                {
                    path : 'register',
                    name : 'Register',
                    component : regisView,
                },
            ]
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