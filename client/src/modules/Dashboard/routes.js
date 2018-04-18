import store from '@/shared/store';
import MainLayout from '@/layouts/MainLayout';

import storeModule from './store';

import DashboardLayout from './containers/DashboardLayout';
import DashboardPage from './containers/DashboardPage';

export default {
  path: '/dashboard',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (store.getters['global/auth/isAuthenticated']) {
      if (!store.state.dashboard) {
        store.registerModule('dashboard', storeModule);
      }
      return next();
    }
    return next('/auth/login');
  },
  children: [
    {
      path: '',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardPage,
        },
      ],
    },
  ],
};
