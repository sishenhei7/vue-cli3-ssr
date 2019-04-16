import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* eslint-disable space-in-parens */
    component: () => import( /* webpackChunkName: "about" */ './views/About.vue'),
  },
];

export default function createRouter() {
  return new Router({
    routes,
    mode: 'history',
  });
}