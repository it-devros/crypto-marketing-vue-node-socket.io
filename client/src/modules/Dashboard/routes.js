import store from '@/shared/store';
import MainLayout from '@/layouts/MainLayout';
import navigationGuard from '@/shared/utils/navigationGuard';

import storeModule from './store';

import DashboardLayout from './containers/DashboardLayout';
import DashboardPage from './containers/DashboardPage';

export default {
  path: '/dashboard',
  component: MainLayout,
  beforeEnter(to, from, next) {
    if (!store.state.dashboard) {
      store.registerModule('dashboard', storeModule);
    }
    // eslint-disable-next-line
    console.log('Navigation Guard', from, to);
    navigationGuard(store, next);
  },
  children: [
    {
      path: '/dashboard',
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
