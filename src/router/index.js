import Vue from 'vue'
import Router from 'vue-router'
import inicarSesion from '@/components/inicarSesion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicarSesion',
      component: inicarSesion
    }
  ]
})
