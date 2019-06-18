import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import HelloWorld from './components/HelloWorld.vue'
import RoutingManagement from './views/RoutingManagement.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'RoutingManagement',
      component: RoutingManagement
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
		 {
		  path: '/cinema',
		  name: 'cinema',
		  component: () => import('./views/Cinema.vue')
		},
		{
		  path: '/shows',
		  name: 'shows',
		  component: () => import('./performingclip/Shows.vue'),
			children:[
				{
					path: '/shows',
					name: 'aa',
					component: () => import('./performingclip/Shows1.vue'),
				},
				{
					path: '/shows2',
					name: 'shows2',
					component: () => import('./performingclip/Shows2.vue'),
				},
				{
					path: '/shows3',
					name: 'shows3',
					component: () => import('./performingclip/Shows3.vue'),
				},
				{
					path: '/shows4',
					name: 'shows4',
					component: () => import('./performingclip/Shows4.vue'),
				},
				{
					path: '/shows5',
					name: 'shows5',
					component: () => import('./performingclip/Shows5.vue'),
				},
				{
					path: '/shows6',
					name: 'shows6',
					component: () => import('./performingclip/Shows6.vue'),
				},
				{
					path: '/shows7',
					name: 'shows7',
					component: () => import('./performingclip/Shows7.vue'),
				},
				{
					path: '/shows8',
					name: 'shows8',
					component: () => import('./performingclip/Shows8.vue'),
				},
				{
					path: '/shows9',
					name: 'shows9',
					component: () => import('./performingclip/Shows9.vue'),
				},
				{
					path: '/shows10',
					name: 'shows10',
					component: () => import('./performingclip/Shows10.vue'),
				},
				{
					path: '/shows11',
					name: 'shows11',
					component: () => import('./performingclip/Shows11.vue'),
				}
			]
		}
  ]
})
// router.push('/Shows1')