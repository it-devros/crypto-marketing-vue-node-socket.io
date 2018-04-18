import Vue from 'vue';
import Router from 'vue-router';

import { routes as Dashboard } from '@/modules/Dashboard';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
  ],
});

router.addRoutes([
  Dashboard,
]);

export default router;
