import Vue from 'vue';
import Router from 'vue-router';

import { routes as Dashboard } from '@/modules/Dashboard';
import { routes as Auth } from '@/modules/Auth';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/auth/login',
    },

  ],
});

router.addRoutes([
  Dashboard,
  Auth,
]);

export default router;
