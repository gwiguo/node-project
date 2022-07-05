import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PlaneGame from '@/components/plane-game'
import Banner1 from '@/components/Banner1'
import Canvas from '@/components/Canvas'
import YysHome from '@/components/yys/home';
import YysIndex from '@/components/yys/index';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/plane-game',
			name: 'planeGame',
			component: PlaneGame
		},
		{
			path: '/banner1',
			name: 'banner1',
			component: Banner1
		},
		{
			path: '/canvas',
			name: 'canvas',
			component: Canvas
		},
		{
			path: '/yys-home',
			name: 'yys-home',
			component: YysHome
		},
		{
			path: '/yys-index',
			name: 'yys-index',
			component: YysIndex
		},
	]
})
