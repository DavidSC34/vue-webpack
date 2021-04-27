import Vue from 'vue'
import Router from 'vue-router'
import iniciarSesion from '@/components/iniciarSesion'
import registro from '@/components/registro'
import inicio from '@/components/inicio'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'iniciarSesion',
            component: iniciarSesion
        },
        {
            path: '/registro',
            name: 'registro',
            component: registro
        },
        {
            path: '/inicio',
            name: 'inicio',
            component: inicio
        }
    ]
})