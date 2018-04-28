import Vue from 'vue';
import Router from 'vue-router';

import { routes as Auth } from '@/modules/Auth';
import { routes as Dashboard } from '@/modules/Dashboard';
import { routes as Books } from '@/modules/Books';
import { routes as Parameters } from '@/modules/Parameters';
import { routes as Functions } from '@/modules/Functions';
import { routes as Orders } from '@/modules/Orders';


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
	Auth,
  Dashboard,
  Books,
  Parameters,
  Functions,
  Orders,
]);

export default router;
