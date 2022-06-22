import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PlaneGame from '@/components/plane-game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/plane-game',
      name: 'PlaneGame',
      component: PlaneGame
    },
  ]
})
