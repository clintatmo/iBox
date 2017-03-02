import Vue from 'vue'
import Router from 'vue-router'
import Navigation from '@/components/navigation/Navigation'
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import ContactUs from '@/components/pages/ContactUs'
import Schedule from '@/components/pages/Schedule'
import Staff from '@/components/pages/Staff'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Navigation,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'about',
          component: About
        },
        {
          path: 'contact-us',
          component: ContactUs
        },
        {
          path: 'schedule',
          component: Schedule
        },
        {
          path: 'staff',
          component: Staff
        }
      ]
    }

  ]

})
