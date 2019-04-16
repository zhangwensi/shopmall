import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/Login'
import centext from '@/pages/centext'
import mobile from '@/pages/mobile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
            { path: '/centext', component: centext, name: 'centext' },
            { path: '/mobile', component: mobile, name: 'mobile' }
        ]
    }
  ]
})
